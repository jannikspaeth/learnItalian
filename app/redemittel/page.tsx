'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { X, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useLearner } from '@/lib/use-profile';
import { usePack } from '@/lib/content';
import { langInfo } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import { getExtras, recordExercise, recordMistakes, updateExtras } from '@/lib/storage';
import { phraseMistake } from '@/lib/mistakes';
import { checkPhraseAnswer } from '@/lib/answer-check';
import {
  PHRASE_KNOWN_LEVEL,
  PHRASE_ROUND_SIZE,
  Phrase,
  advancePhrase,
  allPhrases,
  phraseIsKnown,
  pickPhraseRound,
  situationProgress,
} from '@/lib/phrases';
import type { PhraseRecord } from '@/lib/types';
import TypeCard from '@/components/practice/TypeCard';
import SpeakButton from '@/components/SpeakButton';
import Icon from '@/components/Icon';

type Tab = 'practise' | 'all';

export default function RedemittelPage() {
  const { profile, lang, ready } = useLearner();
  const t = useT();
  const info = langInfo(lang);
  const pack = usePack('phrases', lang);

  const [tab, setTab] = useState<Tab>('practise');
  const [records, setRecords] = useState<Record<string, PhraseRecord> | null>(null);
  const [round, setRound] = useState<Phrase[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [tally, setTally] = useState({ c: 0, t: 0 });
  const [missed, setMissed] = useState<Phrase[]>([]);
  const [finished, setFinished] = useState(false);
  const [open, setOpen] = useState<Set<string>>(new Set());

  useEffect(() => {
    let alive = true;
    getExtras()
      .then(e => alive && setRecords(e.phrases ?? {}))
      .catch(() => alive && setRecords({}));
    return () => { alive = false; };
  }, [lang]);

  const situations = useMemo(() => pack?.situations ?? [], [pack]);
  const phrases = useMemo(() => allPhrases(situations), [situations]);
  const known = records ? phrases.filter(p => phraseIsKnown(records[p.id])).length : 0;
  // Practised at least once. A phrase only counts as "safe" after four correct
  // answers spread over three weeks, so without this the overview would stay at
  // zero for days and look as if nothing had been saved.
  const started = records ? phrases.filter(p => records[p.id]).length : 0;

  const playing = round !== null && !finished;
  useEffect(() => {
    if (!playing) return;
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, [playing]);

  const start = useCallback((situationId?: string) => {
    if (!records || situations.length === 0) return;
    const chosen = pickPhraseRound(situations, records, PHRASE_ROUND_SIZE, situationId);
    if (chosen.length === 0) return;
    setRound(chosen);
    setIdx(0);
    setTally({ c: 0, t: 0 });
    setMissed([]);
    setFinished(false);
  }, [records, situations]);

  function handleResult(correct: boolean, userAnswer: string) {
    const phrase = round![idx];
    setRecords(r => ({ ...(r ?? {}), [phrase.id]: advancePhrase(r?.[phrase.id], correct) }));
    updateExtras(e => ({
      ...e,
      phrases: { ...(e.phrases ?? {}), [phrase.id]: advancePhrase(e.phrases?.[phrase.id], correct) },
    })).catch(() => {});
    if (!correct) {
      setMissed(m => [...m, phrase]);
      recordMistakes([phraseMistake({
        id: phrase.id,
        de: phrase.de,
        target: phrase.target,
        alternatives: phrase.alt,
        situation: t(phrase.situation[0], phrase.situation[1]),
        userAnswer,
      })]);
    }
    const next = { c: tally.c + (correct ? 1 : 0), t: tally.t + 1 };
    setTally(next);
    if (idx + 1 < round!.length) {
      setIdx(idx + 1);
      return;
    }
    setFinished(true);
    recordExercise('phrase', next.c, next.t).catch(() => {});
  }

  function toggle(id: string) {
    setOpen(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  if (!ready || !profile) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  // ── One question ──
  if (playing) {
    const phrase = round![idx];
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
        <div className="max-w-xl mx-auto p-5 space-y-5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setRound(null)}
              aria-label={t('Stop', 'Beenden')}
              className="w-11 h-11 -ml-2 shrink-0 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-700 rounded-full transition-all" style={{ width: `${(idx / round!.length) * 100}%` }} />
            </div>
            <span className="text-sm text-gray-500 tabular-nums shrink-0">{idx + 1}/{round!.length}</span>
          </div>
          <TypeCard
            key={`${phrase.id}-${idx}`}
            label={`${t('Say it', 'Sag es')} 🇩🇪 → ${info.flag}`}
            prompt={phrase.de}
            sub={t(phrase.situation[0], phrase.situation[1])}
            answer={phrase.target}
            check={v => ({ correct: checkPhraseAnswer(v, phrase.target, phrase.alt) })}
            speakText={phrase.target}
            lang={lang}
            placeholder={t(`${info.name}…`, `${info.nameDe} …`)}
            onResult={handleResult}
          />
        </div>
      </main>
    );
  }

  // ── Result ──
  if (finished && round) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
        <div className="max-w-xl mx-auto p-5 space-y-5">
          <h1 className="text-3xl text-gray-900">
            {tally.c === tally.t ? t('All right!', 'Alles richtig!') : t('Round done', 'Runde geschafft')}
          </h1>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center justify-around text-center">
            <div>
              <p className="font-display text-3xl text-gray-900 tabular-nums">{tally.c}/{tally.t}</p>
              <p className="text-xs text-gray-400 mt-0.5">{t('right', 'richtig')}</p>
            </div>
            <div>
              <p className="font-display text-3xl text-red-700 tabular-nums">{started}</p>
              <p className="text-xs text-gray-400 mt-0.5">{t('practised', 'geübt')}</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gray-900 tabular-nums">{phrases.length}</p>
              <p className="text-xs text-gray-400 mt-0.5">{t('phrases', 'Wendungen')}</p>
            </div>
          </div>

          {missed.length > 0 && (
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-2">
              <h2 className="text-sm font-bold text-gray-800">{t('Learn these', 'Die hier lernen')} ({missed.length})</h2>
              {missed.map(p => (
                <div key={p.id} className="text-sm">
                  <p className="flex items-center gap-2 flex-wrap">
                    <SpeakButton text={p.target} lang={lang} />
                    <span className="font-semibold text-green-700">{p.target}</span>
                  </p>
                  <p className="text-gray-500 pl-9">{p.de}</p>
                </div>
              ))}
            </section>
          )}

          <div className="flex gap-2">
            <button
              onClick={() => start()}
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

  // ── Overview ──
  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-3xl text-gray-900">{t('Phrases', 'Redemittel')}</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {records && phrases.length > 0
              ? t(
                  `${started} of ${phrases.length} practised · ${known} safe`,
                  `${started} von ${phrases.length} geübt · ${known} sicher`,
                )
              : t('Ready-made sentences for real situations', 'Fertige Sätze für echte Situationen')}
          </p>
        </div>

        <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
          {([
            ['practise', t('Practise', 'Üben')],
            ['all', t('All phrases', 'Alle Wendungen')],
          ] as [Tab, string][]).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                tab === id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {!pack || !records ? (
          <p className="text-sm text-gray-400">{t('Loading…', 'Lädt …')}</p>
        ) : tab === 'practise' ? (
          <>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                {t(
                  `The German sentence is shown, you write it in ${info.name} — ${PHRASE_ROUND_SIZE} per round, the ones due first. Several wordings are accepted.`,
                  `Der deutsche Satz steht da, du schreibst ihn auf ${info.nameDe} – ${PHRASE_ROUND_SIZE} pro Runde, Fälliges zuerst. Mehrere Formulierungen gelten.`,
                )}
              </p>
              <button
                onClick={() => start()}
                className="w-full h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors"
              >
                {t('Start a round', 'Runde starten')}
              </button>
            </div>

            <div className="space-y-2">
              {situations.map(s => {
                const p = situationProgress(s, records);
                return (
                  <div key={s.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
                    <Icon name={s.icon} className="w-5 h-5 shrink-0 text-red-700" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm">{t(s.label[0], s.label[1])}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden flex">
                          <div className="h-full bg-green-500" style={{ width: `${(p.known / p.total) * 100}%` }} />
                          <div className="h-full bg-amber-400" style={{ width: `${((p.started - p.known) / p.total) * 100}%` }} />
                        </div>
                        <span className="text-xs text-gray-400 tabular-nums shrink-0">
                          {p.started}/{p.total}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => start(s.id)}
                      className="shrink-0 text-sm font-medium px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
                    >
                      {t('Practise', 'Üben')}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="space-y-3">
            {situations.map(s => {
              const isOpen = open.has(s.id);
              const p = situationProgress(s, records);
              return (
                <section key={s.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggle(s.id)}
                    className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <Icon name={s.icon} className="w-5 h-5 shrink-0 text-red-700" />
                      <span className="min-w-0">
                        <span className="block font-bold text-gray-900 text-base">{t(s.label[0], s.label[1])}</span>
                        <span className="block text-xs text-gray-400 mt-0.5 tabular-nums">
                          {p.started}/{p.total} {t('practised', 'geübt')} · {p.known} {t('safe', 'sicher')}
                        </span>
                      </span>
                    </span>
                    {isOpen
                      ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                      : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 space-y-2.5 border-t border-gray-50 pt-3">
                      {s.phrases.map(ph => (
                        <div key={ph.id} className="flex items-start gap-2">
                          <SpeakButton text={ph.target} lang={lang} className="mt-0.5" />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-900 flex items-center gap-1.5 flex-wrap">
                              {ph.target}
                              {phraseIsKnown(records[ph.id])
                                ? <Check className="w-4 h-4 text-green-600 shrink-0" />
                                : records[ph.id] && (
                                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-100 rounded px-1 py-0.5 tabular-nums">
                                      {records[ph.id].level}/{PHRASE_KNOWN_LEVEL}
                                    </span>
                                  )}
                            </p>
                            <p className="text-sm text-gray-500">{ph.de}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
