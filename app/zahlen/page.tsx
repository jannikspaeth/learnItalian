'use client';

import { useCallback, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useLearner } from '@/lib/use-profile';
import { langInfo } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import { getExtras, recordBlitzRound, recordExercise, recordMistakes } from '@/lib/storage';
import { numberMistake } from '@/lib/mistakes';
import { NUMBERS_BY_LANG, ROUND_SIZE, NumberItem, NumberKind, numberRound } from '@/lib/numbers';
import type { BlitzRecord } from '@/lib/types';
import NumberCard from '@/components/practice/NumberCard';
import SpeakButton from '@/components/SpeakButton';
import Icon from '@/components/Icon';
import type { IconName } from '@/lib/icon-names';

const KINDS: { id: NumberKind; label: [string, string]; icon: IconName }[] = [
  { id: 'number', label: ['Numbers', 'Zahlen'], icon: 'hash' },
  { id: 'time', label: ['Clock times', 'Uhrzeit'], icon: 'clock' },
  { id: 'date', label: ['Dates', 'Datum'], icon: 'calendar' },
];

export default function ZahlenPage() {
  const { profile, lang, beginner, ready } = useLearner();
  const t = useT();
  const info = langInfo(lang);
  const loc = NUMBERS_BY_LANG[lang];

  const [kind, setKind] = useState<NumberKind>('number');
  const [record, setRecord] = useState<BlitzRecord | undefined>();
  const [round, setRound] = useState<NumberItem[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [tally, setTally] = useState({ c: 0, t: 0 });
  const [missed, setMissed] = useState<NumberItem[]>([]);
  const [finished, setFinished] = useState(false);
  const [startedAt, setStartedAt] = useState(0);

  useEffect(() => {
    let alive = true;
    getExtras().then(e => alive && setRecord(e.numbers)).catch(() => {});
    return () => { alive = false; };
  }, [lang]);

  const playing = round !== null && !finished;
  useEffect(() => {
    if (!playing) return;
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, [playing]);

  const start = useCallback((k: NumberKind) => {
    setKind(k);
    setRound(numberRound(lang, k, beginner, ROUND_SIZE));
    setIdx(0);
    setTally({ c: 0, t: 0 });
    setMissed([]);
    setFinished(false);
    setStartedAt(Date.now());
  }, [lang, beginner]);

  function handleResult(correct: boolean, userAnswer: string) {
    const item = round![idx];
    if (!correct) {
      setMissed(m => [...m, item]);
      recordMistakes([numberMistake({
        key: item.key,
        prompt: item.words,
        answer: item.digits,
        hint: `${item.digits} = ${item.words}`,
        speak: item.words,
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
    const seconds = (Date.now() - startedAt) / 1000;
    recordExercise('numbers', next.c, next.t).catch(() => {});
    recordBlitzRound('numbers', next.c, next.t, seconds).then(e => setRecord(e.numbers)).catch(() => {});
  }

  if (!ready || !profile) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  // ── Playing ──
  if (playing) {
    const item = round![idx];
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
          <NumberCard key={`${item.key}-${idx}`} item={item} lang={lang} onResult={handleResult} />
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
            {record && (
              <div>
                <p className="font-display text-3xl text-red-700 tabular-nums">{record.best}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t('best', 'Bestwert')}</p>
              </div>
            )}
            <div>
              <p className="font-display text-3xl text-gray-900 tabular-nums">{record?.rounds ?? 1}</p>
              <p className="text-xs text-gray-400 mt-0.5">{t('rounds', 'Runden')}</p>
            </div>
          </div>

          {missed.length > 0 && (
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-2">
              <h2 className="text-sm font-bold text-gray-800">{t('Learn these', 'Die hier lernen')} ({missed.length})</h2>
              {missed.map((m, i) => (
                <p key={`${m.key}-${i}`} className="text-sm flex items-center gap-2 flex-wrap">
                  <SpeakButton text={m.words} lang={lang} />
                  <span className="font-semibold text-gray-900 tabular-nums">{m.digits}</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-green-700">{m.words}</span>
                </p>
              ))}
            </section>
          )}

          <div className="flex gap-2">
            <button
              onClick={() => start(kind)}
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

  // ── Start screen: one card per kind, with an example to listen to ──
  const examples: Record<NumberKind, { digits: string; words: string }> = {
    number: { digits: '342', words: loc.number(342) },
    time: { digits: '15:45', words: loc.time(15, 45) },
    date: { digits: '12.3.', words: loc.date(12, 3) },
  };

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-3xl text-gray-900">{t('Numbers & time', 'Zahlen & Uhrzeit')}</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {t(
              `Hear it and write the digits, or read the digits and pick the ${info.name} words.`,
              `Hören und in Zahlen schreiben – oder Zahlen lesen und die ${info.nameDe}-Wörter wählen.`,
            )}
          </p>
        </div>

        {KINDS.map(k => {
          const ex = examples[k.id];
          return (
            <section key={k.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-display text-lg text-gray-900 flex items-center gap-2">
                    <Icon name={k.icon} className="w-5 h-5 text-red-700" />
                    {t(k.label[0], k.label[1])}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5 flex items-center gap-1.5 flex-wrap">
                    <span className="tabular-nums font-medium text-gray-700">{ex.digits}</span>
                    <span className="text-gray-300">=</span>
                    <span>{ex.words}</span>
                    <SpeakButton text={ex.words} lang={lang} />
                  </p>
                </div>
                <button
                  onClick={() => start(k.id)}
                  className="shrink-0 text-sm font-semibold px-4 py-2 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
                >
                  {t('Start', 'Starten')}
                </button>
              </div>
            </section>
          );
        })}

        <p className="text-xs text-gray-400">
          {beginner
            ? t('A1: numbers up to 100, times on the quarter hour.', 'A1: Zahlen bis 100, Uhrzeiten zur Viertelstunde.')
            : t(`${ROUND_SIZE} questions per round, numbers up to 100,000, any five minutes, dates with a year.`, `${ROUND_SIZE} Fragen pro Runde, Zahlen bis 100.000, alle fünf Minuten, Datum mit Jahr.`)}
        </p>

        {record && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center justify-around text-center">
            <div>
              <p className="font-display text-2xl text-gray-900 tabular-nums">{record.rounds}</p>
              <p className="text-xs text-gray-400 mt-0.5">{t('rounds', 'Runden')}</p>
            </div>
            <div>
              <p className="font-display text-2xl text-red-700 tabular-nums">{record.best}/{ROUND_SIZE}</p>
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
