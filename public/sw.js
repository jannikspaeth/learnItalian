/* Offline support (service worker).
 *
 * - Pages: network first, the last copy is served offline. All app pages and
 *   their scripts are fetched ahead of time ("warm", on install and on every
 *   online start — so a new deploy is picked up too).
 * - /_next/static (content-hashed): cache first.
 * - GET /api/data/*, /api/race*, /api/profiles: network first, the last answer
 *   per user (x-user-id) is kept and served offline.
 * - PUT/POST /api/data/* while offline: queued in IndexedDB, answered with
 *   { ok, queued } and applied to the cached reads, so read-modify-writes keep
 *   working offline. The queue is sent in order as soon as the network is back —
 *   and always before any fresh read, so a read can never overtake a pending write.
 */

const PAGES = 'pages-v1';
const STATIC = 'static-v1';
const DATA = 'data-v1';
const KEEP = [PAGES, STATIC, DATA];

const ROUTES = [
  '/heute', '/vokabeln', '/konjugation', '/grammar', '/saetze', '/lesen',
  '/race', '/erfolge', '/help', '/profile', '/sprache',
];
const FILES = ['/manifest.webmanifest', '/icon-192.png', '/icon-512.png', '/favicon.ico'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(warm());
});

self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) if (!KEEP.includes(key)) await caches.delete(key);
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('message', event => {
  const type = event.data && event.data.type;
  if (type === 'warm') event.waitUntil(warm());
  if (type === 'flush') event.waitUntil(flushQueue());
  if (type === 'count') event.waitUntil(notify());
});

// ─── Warm-up: every page + the scripts/styles it references ──────────────────────

let warming = null;
function warm() {
  if (!warming) warming = doWarm().finally(() => { warming = null; });
  return warming;
}

async function doWarm() {
  const pages = await caches.open(PAGES);
  const stat = await caches.open(STATIC);
  const assets = new Set(FILES);
  await Promise.all(
    ROUTES.map(async route => {
      try {
        const res = await fetch(route, { cache: 'no-store' });
        if (!res.ok) return;
        const html = await res.clone().text();
        await pages.put(route, res);
        for (const m of html.matchAll(/\/_next\/static\/[^"'\s)\\]+/g)) assets.add(m[0]);
      } catch {
        /* offline: keep what we have */
      }
    }),
  );
  await Promise.all(
    [...assets].map(async url => {
      try {
        if (url.startsWith('/_next/static/') && (await stat.match(url))) return; // immutable
        const res = await fetch(url);
        if (res.ok) await stat.put(url, res);
      } catch {
        /* ignore */
      }
    }),
  );
  // Old deploys' files pile up otherwise: drop what the pages no longer use and
  // hasn't been fetched for a long time (content packs are re-fetched on use).
  const cutoff = Date.now() - 45 * 86400000;
  for (const req of await stat.keys()) {
    const path = new URL(req.url).pathname;
    if (assets.has(path)) continue;
    const res = await stat.match(req);
    const date = res && Date.parse(res.headers.get('date') || '');
    if (date && date < cutoff) await stat.delete(req);
  }
}

// ─── Fetch routing ─────────────────────────────────────────────────────────────

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleApi(req, url));
    return;
  }
  if (req.method !== 'GET') return;
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(req));
    return;
  }
  // Client-side navigation data (RSC): if it fails offline, Next falls back to a
  // full page load, which the navigation handler below answers from the cache.
  if (req.headers.get('RSC') === '1' || url.searchParams.has('_rsc')) return;
  if (req.mode === 'navigate') {
    event.respondWith(navigate(req, url));
    return;
  }
  event.respondWith(staleWhileRevalidate(req));
});

async function cacheFirst(req) {
  const cache = await caches.open(STATIC);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) cache.put(req, res.clone());
  return res;
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(STATIC);
  const hit = await cache.match(req, { ignoreSearch: true });
  const fresh = fetch(req)
    .then(res => {
      if (res.ok && res.type === 'basic') cache.put(req, res.clone());
      return res;
    })
    .catch(() => null);
  return hit || (await fresh) || new Response('', { status: 504 });
}

async function navigate(req, url) {
  const pages = await caches.open(PAGES);
  const path = url.pathname === '/' ? '/heute' : url.pathname;
  try {
    const res = await fetch(req);
    if (res.ok && res.type === 'basic') pages.put(path, res.clone());
    return res;
  } catch {
    const hit = (await pages.match(path)) || (await pages.match('/heute'));
    return (
      hit ||
      new Response('<h1>Offline</h1><p>Open the app once while online so it can be used offline.</p>', {
        status: 503,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      })
    );
  }
}

// ─── API: cached reads, queued writes ─────────────────────────────────────────────

function isCachedRead(path) {
  return path.startsWith('/api/data/') || path.startsWith('/api/race') || path === '/api/profiles';
}

// Cache key for a read: path + query + the user it belongs to.
function dataKey(pathAndQuery, userId) {
  const sep = pathAndQuery.includes('?') ? '&' : '?';
  return `${self.location.origin}${pathAndQuery}${sep}__u=${encodeURIComponent(userId || '')}`;
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

async function handleApi(req, url) {
  const path = url.pathname;
  const userId = req.headers.get('x-user-id') || '';

  if (req.method === 'GET' && isCachedRead(path)) {
    await flushQueue(); // pending offline writes land before a fresh read
    const key = dataKey(path + url.search, userId);
    const cache = await caches.open(DATA);
    if ((await queueCount()) === 0) {
      try {
        const res = await fetch(req);
        if (res.ok) await cache.put(key, res.clone());
        return res;
      } catch {
        /* offline */
      }
    }
    return (await cache.match(key)) || json({ error: 'offline' }, 503);
  }

  if ((req.method === 'PUT' || req.method === 'POST') && path.startsWith('/api/data/')) {
    const body = await req.clone().text();
    await flushQueue();
    if ((await queueCount()) === 0) {
      try {
        const res = await fetch(req);
        if (res.ok) await applyToCache(path, userId, req.method, body);
        return res;
      } catch {
        /* offline — queue it */
      }
    }
    await enqueue({ url: path, method: req.method, userId, body, at: Date.now() });
    await applyToCache(path, userId, req.method, body);
    await notify();
    return json({ ok: true, queued: true });
  }

  return fetch(req); // profiles changes, exercise: online only
}

// Mirror a write into the cached read of the same resource.
async function applyToCache(path, userId, method, body) {
  const cache = await caches.open(DATA);
  const key = dataKey(path, userId);
  if (method === 'PUT') {
    await cache.put(key, new Response(body, { headers: { 'Content-Type': 'application/json' } }));
    return;
  }
  if (path === '/api/data/vocab') {
    // POST = upsert one word into the cached list.
    let list = [];
    const hit = await cache.match(key);
    if (hit) {
      try { list = await hit.json(); } catch { list = []; }
    }
    const entry = JSON.parse(body);
    const i = list.findIndex(e => e.id === entry.id || e.word === entry.word);
    if (i >= 0) list[i] = { ...list[i], ...entry, id: list[i].id };
    else list.unshift(entry);
    await cache.put(key, new Response(JSON.stringify(list), { headers: { 'Content-Type': 'application/json' } }));
  }
}

// ─── Write queue (IndexedDB) ──────────────────────────────────────────────────────

function openDb() {
  return new Promise((resolve, reject) => {
    const r = indexedDB.open('offline-queue', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('q', { keyPath: 'id', autoIncrement: true });
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
  });
}

async function store(mode, fn) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('q', mode);
    const result = fn(tx.objectStore('q'));
    tx.oncomplete = () => resolve(result && 'result' in result ? result.result : undefined);
    tx.onerror = () => reject(tx.error);
  });
}

const queueAll = () => store('readonly', s => s.getAll());
const queueCount = () => store('readonly', s => s.count());
const queueDelete = id => store('readwrite', s => s.delete(id));

async function enqueue(item) {
  // A PUT replaces the whole resource: older queued PUTs of it are obsolete.
  if (item.method === 'PUT') {
    for (const q of await queueAll()) {
      if (q.method === 'PUT' && q.url === item.url && q.userId === item.userId) await queueDelete(q.id);
    }
  }
  await store('readwrite', s => s.add(item));
}

let flushing = null;
function flushQueue() {
  if (!flushing) flushing = doFlush().finally(() => { flushing = null; });
  return flushing;
}

async function doFlush() {
  const items = await queueAll();
  if (items.length === 0) return;
  for (const q of items) {
    let res;
    try {
      res = await fetch(q.url, {
        method: q.method,
        headers: { 'Content-Type': 'application/json', 'x-user-id': q.userId },
        body: q.body,
      });
    } catch {
      break; // still offline — try again later
    }
    if (res.status >= 500) break; // server trouble — keep it and retry later
    await queueDelete(q.id); // sent (or rejected for good)
  }
  await notify();
}

async function notify() {
  const count = await queueCount();
  for (const c of await self.clients.matchAll({ includeUncontrolled: true })) {
    c.postMessage({ type: 'queue', count });
  }
}
