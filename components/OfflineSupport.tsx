'use client';

import { useEffect, useState } from 'react';
import { useProfile } from '@/lib/use-profile';
import { loadPack } from '@/lib/content';
import { loadExamples } from '@/lib/vocab-examples';
import {
  getVocab,
  getStats,
  getConjugationRecords,
  getSentenceProgress,
  getGrammarRecords,
  getExtras,
  getRace,
  getProfiles,
} from '@/lib/storage';
import type { Lang } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';

// Registers the service worker (public/sw.js), preloads everything the current
// language needs so the app works offline, and shows a small status pill while
// offline or while offline answers are still waiting to be sent.

const warmed = new Set<string>();

// Load (and thereby cache) the content chunks and this learner's data.
function warmLanguage(lang: Lang, profileId: string) {
  const key = `${profileId}:${lang}`;
  if (warmed.has(key) || !navigator.onLine) return;
  warmed.add(key);
  for (const kind of ['vocab', 'verbs', 'forms', 'reading'] as const) loadPack(kind, lang).catch(() => {});
  loadExamples(lang).catch(() => {});
  import('@/lib/conjugation-client').then(m => m.getConjugationExercise({ lang })).catch(() => {});
  // Fetching through the service worker stores the latest copy for offline use.
  Promise.allSettled([
    getVocab(), getStats(), getConjugationRecords(), getSentenceProgress(),
    getGrammarRecords(), getExtras(), getRace(), getProfiles(),
  ]);
}

export default function OfflineSupport() {
  const { profile, lang } = useProfile();
  const [online, setOnline] = useState(true);
  const [pending, setPending] = useState(0);
  const [ready, setReady] = useState(false);
  const t = useT();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;
    const sw = navigator.serviceWorker;
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === 'queue') setPending(e.data.count ?? 0);
    };
    const post = (type: string) => sw.controller?.postMessage({ type });
    const onOnline = () => { setOnline(true); post('flush'); };
    const onOffline = () => setOnline(false);

    sw.addEventListener('message', onMessage);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    const initial = setTimeout(() => setOnline(navigator.onLine), 0);

    sw.register('/sw.js').then(() => sw.ready).then(reg => {
      const worker = sw.controller ?? reg.active;
      worker?.postMessage({ type: 'count' });
      if (navigator.onLine) {
        worker?.postMessage({ type: 'flush' });
        worker?.postMessage({ type: 'warm' }); // refresh pages after a deploy
      }
      setReady(true);
    }).catch(() => {});

    return () => {
      clearTimeout(initial);
      sw.removeEventListener('message', onMessage);
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  useEffect(() => {
    if (ready && profile && lang) warmLanguage(lang, profile.id);
  }, [ready, profile, lang]);

  if (online && pending === 0) return null;
  return (
    <div className="fixed top-[calc(0.5rem+env(safe-area-inset-top))] left-1/2 -translate-x-1/2 md:ml-28 z-[60] pointer-events-none">
      <div
        className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-md whitespace-nowrap ${
          online ? 'bg-blue-600 text-white' : 'bg-gray-900 text-white'
        }`}
      >
        {online
          ? t(`⏳ Syncing ${pending} answer${pending === 1 ? '' : 's'}…`, `⏳ Übertrage ${pending} Antwort${pending === 1 ? '' : 'en'} …`)
          : pending > 0
            ? t(`📴 Offline · ${pending} answer${pending === 1 ? '' : 's'} to sync`, `📴 Offline · ${pending} Antwort${pending === 1 ? '' : 'en'} ausstehend`)
            : t('📴 Offline · progress syncs later', '📴 Offline · Fortschritt wird später übertragen')}
      </div>
    </div>
  );
}
