'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Zap, X } from 'lucide-react';
import { useLearner } from '@/lib/use-profile';
import { usePack } from '@/lib/content';
import { langInfo } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import { getExtras, getVocab, recordBlitzRound, recordExercise, recordMistakes } from '@/lib/storage';
import { articleMistake } from '@/lib/mistakes';
import { ARTICLES, ROUND_SIZE, ArticleItem, articleCounts, articleItems, pickArticleRound } from '@/lib/articles';
import type { BlitzRecord } from '@/lib/types';
import SpeakButton from '@/components/SpeakButton';

// How long the answer stays on screen before the next noun appears.
const PAUSE_RIGHT = 450;
const PAUSE_WRONG = 1500;
// Beginners are asked the nouns from the front of the catalog (the common ones).
const BEGINNER_POOL = 800;

interface Answer {
  item: ArticleItem;
  picked: string;
}

export default function ArtikelPage() {
  const { profile, lang, beginner, ready } = useLearner();
  const t = useT();
  const info = langInfo(lang);
  const pack = usePack('vocab', lang);
  const articles = ARTICLES[lang];

  const [myWords, setMyWords] = useState<{ de: string; target: string }[] | null>(null);
  const [record, setRecord] = useState<BlitzRecord | undefined>();
  const [round, setRound] = useState<ArticleItem[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [finished, setFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const seen = useRef<Set<string>>(new Set());
  const startedAt = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  // The learner's own words first (they know the word, so the article is the only
  // question), then the rest of the catalog.
  useEffect(() => {
    let alive = true;
    getVocab()
      .then(rows => alive && setMyWords(rows.map(r => ({ de: r.translation, target: r.word }))))
      .catch(() => alive && setMyWords([]));
    getExtras().then(e => alive && setRecord(e.articles)).catch(() => {});
    return () => { alive = false; };
  }, [lang]);

  const pool = useMemo(() => {
    if (!pack || !myWords) return null;
    const catalog = beginner ? pack.catalog.slice(0, BEGINNER_POOL) : pack.catalog;
    return articleItems([...myWords, ...catalog.map(w => ({ de: w.de, target: w.target }))], lang);
  }, [pack, myWords, beginner, lang]);

  // Focus mode while playing: the tab bar steps aside (see globals.css).
  const playing = round !== null && !finished;
  useEffect(() => {
    if (!playing) return;
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, [playing]);

  const start = useCallback(() => {
    if (!pool || pool.length === 0) return;
    setRound(pickArticleRound(pool, Math.min(ROUND_SIZE, pool.length), seen.current));
    setIdx(0);
    setPicked(null);
    setAnswers([]);
    setFinished(false);
    setSeconds(0);
    startedAt.current = Date.now();
  }, [pool]);

  const current = round?.[idx];

  function pick(article: string) {
    if (!current || picked !== null) return;
    setPicked(article);
    const next = [...answers, { item: current, picked: article }];
    setAnswers(next);
    timer.current = setTimeout(() => {
      setPicked(null);
      if (idx + 1 < (round?.length ?? 0)) {
        setIdx(idx + 1);
      } else {
        finish(next);
      }
    }, article === current.article ? PAUSE_RIGHT : PAUSE_WRONG);
  }

  function finish(all: Answer[]) {
    const secs = (Date.now() - startedAt.current) / 1000;
    const correct = all.filter(a => a.picked === a.item.article).length;
    setSeconds(secs);
    setFinished(true);
    const wrong = all.filter(a => a.picked !== a.item.article);
    if (wrong.length > 0) {
      recordMistakes(
        wrong.map(a => articleMistake({
          key: a.item.key,
          noun: a.item.noun,
          article: a.item.article,
          options: articles,
          de: a.item.de,
          userAnswer: a.picked,
        })),
      );
    }
    recordExercise('article', correct, all.length).catch(() => {});
    recordBlitzRound('articles', correct, all.length, secs).then(e => setRecord(e.articles)).catch(() => {});
  }

  // Desktop: 1…6 pick an article.
  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => {
      const n = Number(e.key);
      if (n >= 1 && n <= articles.length) pick(articles[n - 1]);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!ready || !profile) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  const correctCount = answers.filter(a => a.picked === a.item.article).length;
  const cols = articles.length <= 4 ? 'grid-cols-2' : 'grid-cols-3';

  // ── Playing ──
  if (playing && current) {
    const done = picked !== null;
    const right = picked === current.article;
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
        <div className="max-w-xl mx-auto p-5 space-y-5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => { if (timer.current) clearTimeout(timer.current); setRound(null); }}
              aria-label={t('Stop', 'Beenden')}
              className="w-11 h-11 -ml-2 shrink-0 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-700 rounded-full transition-all"
                style={{ width: `${(idx / round!.length) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-500 tabular-nums shrink-0">
              {idx + 1}/{round!.length}
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <div className="text-center space-y-1">
              <p className="font-display text-4xl text-gray-900">
                <span className={done ? (right ? 'text-green-700' : 'text-red-700') : 'text-gray-300'}>
                  {done ? current.article : '＿'}
                </span>{' '}
                {current.noun}
              </p>
              <p className="text-sm text-gray-500">{current.de}</p>
            </div>

            <div className={`grid ${cols} gap-2`}>
              {articles.map(a => {
                const isAnswer = done && a === current.article;
                const isWrongPick = done && a === picked && a !== current.article;
                return (
                  <button
                    key={a}
                    onClick={() => pick(a)}
                    disabled={done}
                    className={`h-14 rounded-xl border-2 text-lg font-semibold transition-colors ${
                      isAnswer
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : isWrongPick
                        ? 'border-red-400 bg-red-50 text-red-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 disabled:hover:border-gray-200 disabled:hover:bg-white'
                    }`}
                  >
                    {a}
                  </button>
                );
              })}
            </div>

            <p className="text-center text-sm text-gray-400 tabular-nums">
              {correctCount}/{answers.length} {t('right', 'richtig')}
            </p>
          </div>
        </div>
      </main>
    );
  }

  // ── Result ──
  if (finished && round) {
    const wrong = answers.filter(a => a.picked !== a.item.article);
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
        <div className="max-w-xl mx-auto p-5 space-y-5">
          <h1 className="text-3xl text-gray-900">
            {correctCount === round.length ? t('All right!', 'Alles richtig!') : t('Round done', 'Runde geschafft')}
          </h1>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center justify-around text-center">
            <div>
              <p className="font-display text-3xl text-gray-900 tabular-nums">{correctCount}/{round.length}</p>
              <p className="text-xs text-gray-400 mt-0.5">{t('right', 'richtig')}</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gray-900 tabular-nums">{seconds.toFixed(0)}s</p>
              <p className="text-xs text-gray-400 mt-0.5">{t('time', 'Zeit')}</p>
            </div>
            {record && (
              <div>
                <p className="font-display text-3xl text-red-700 tabular-nums">{record.best}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t('best', 'Bestwert')}</p>
              </div>
            )}
          </div>

          {wrong.length > 0 && (
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-2">
              <h2 className="text-sm font-bold text-gray-800">
                {t('Learn these', 'Die hier lernen')} ({wrong.length})
              </h2>
              {wrong.map(a => (
                <p key={a.item.key} className="text-sm flex items-center gap-2 flex-wrap">
                  <SpeakButton text={a.item.full} lang={lang} />
                  <span className="font-semibold text-green-700">{a.item.full}</span>
                  <span className="text-gray-400 line-through">{a.picked}</span>
                  <span className="text-gray-500">{a.item.de}</span>
                </p>
              ))}
              <p className="text-xs text-gray-400 pt-1">
                {t('They are waiting for you in “My mistakes”.', 'Sie warten in „Meine Fehler“ auf dich.')}
              </p>
            </section>
          )}

          <div className="flex gap-2">
            <button
              onClick={start}
              className="flex-1 h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors"
            >
              {t('Next round', 'Nächste Runde')}
            </button>
            <button
              onClick={() => { setRound(null); setFinished(false); }}
              className="px-5 h-12 rounded-full border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:bg-white transition-colors"
            >
              {t('Done', 'Fertig')}
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ── Start screen ──
  const counts = pool ? articleCounts(pool, lang) : [];
  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-3xl text-gray-900">{t('Article blitz', 'Artikel-Blitz')}</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {t(
              `${ROUND_SIZE} nouns, tap the article — ${info.name} gender, fast.`,
              `${ROUND_SIZE} Nomen, Artikel antippen – Genus auf ${info.nameDe}, im Schnelldurchlauf.`,
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            {t(
              'The noun comes without its article — tap the one that belongs to it. Your own words come first, then the rest of the catalog. Wrong taps go to “My mistakes”.',
              'Das Nomen kommt ohne Artikel – tippe den passenden an. Zuerst deine eigenen Wörter, dann der restliche Katalog. Falsche Antworten landen in „Meine Fehler“.',
            )}
          </p>
          {pool === null ? (
            <p className="text-sm text-gray-400">{t('Loading…', 'Lädt …')}</p>
          ) : pool.length === 0 ? (
            <p className="text-sm text-gray-500">
              {t('No nouns with an article in this language yet.', 'In dieser Sprache gibt es noch keine Nomen mit Artikel.')}
            </p>
          ) : (
            <>
              <div className="flex flex-wrap gap-2">
                {counts.map(c => (
                  <span key={c.article} className="px-2.5 py-1 rounded-lg bg-gray-100 text-xs text-gray-600 tabular-nums">
                    <span className="font-semibold text-gray-900">{c.article}</span> {c.n}
                  </span>
                ))}
              </div>
              <button
                onClick={start}
                className="w-full h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" /> {t('Start the blitz', 'Blitz starten')}
              </button>
            </>
          )}
        </div>

        {record && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center justify-around text-center">
            <div>
              <p className="font-display text-2xl text-gray-900 tabular-nums">{record.rounds}</p>
              <p className="text-xs text-gray-400 mt-0.5">{t('rounds', 'Runden')}</p>
            </div>
            <div>
              <p className="font-display text-2xl text-red-700 tabular-nums">
                {record.best}{record.bestSeconds ? ` · ${record.bestSeconds}s` : ''}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{t('best round', 'beste Runde')}</p>
            </div>
            <div>
              <p className="font-display text-2xl text-gray-900 tabular-nums">{record.lastCorrect}/{record.lastTotal}</p>
              <p className="text-xs text-gray-400 mt-0.5">{t('last round', 'letzte Runde')}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
