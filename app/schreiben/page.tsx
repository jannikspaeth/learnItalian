'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { useLearner } from '@/lib/use-profile';
import { usePack } from '@/lib/content';
import { langInfo } from '@/lib/lang';
import { useT } from '@/lib/ui-lang';
import { getExtras, recordExercise, recordMistakes, updateExtras } from '@/lib/storage';
import { writingMistake } from '@/lib/mistakes';
import {
  LetterTask,
  OrderItem,
  ROUND_SIZE,
  TransformItem,
  WRITING_TASKS,
  WritingTaskSpec,
  pickRound,
  writingCounts,
} from '@/lib/writing';
import type { WritingProgress } from '@/lib/types';
import { LetterCard, OrderCard, TransformCard } from '@/components/practice/WritingCards';
import SpeakButton from '@/components/SpeakButton';
import Icon from '@/components/Icon';

type Tab = 'order' | 'transform' | 'letter' | 'free';
type Rating = 'good' | 'partly' | 'again';

const TABS: [Tab, string, string][] = [
  ['order', 'Word order', 'Satzbau'],
  ['transform', 'Rewrite', 'Umformen'],
  ['letter', 'Letters', 'Briefe'],
  ['free', 'Free writing', 'Frei schreiben'],
];

const empty: WritingProgress = { items: {}, texts: {} };

export default function SchreibenPage() {
  const { profile, lang, ready } = useLearner();
  const t = useT();
  const info = langInfo(lang);
  const pack = usePack('writing', lang);

  const [tab, setTab] = useState<Tab>('order');
  const [progress, setProgress] = useState<WritingProgress | null>(null);
  const [round, setRound] = useState<(OrderItem | TransformItem)[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [tally, setTally] = useState({ c: 0, t: 0 });
  const [finished, setFinished] = useState(false);
  const [letter, setLetter] = useState<LetterTask | null>(null);
  const [task, setTask] = useState<WritingTaskSpec | null>(null);
  const [text, setText] = useState('');
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    let alive = true;
    getExtras()
      .then(e => alive && setProgress(e.writing ?? empty))
      .catch(() => alive && setProgress(empty));
    return () => { alive = false; };
  }, [lang]);

  const busy = (round !== null && !finished) || letter !== null || task !== null;
  useEffect(() => {
    if (!busy) return;
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, [busy]);

  const counts = useMemo(
    () => (pack ? writingCounts(pack, progress ?? undefined) : null),
    [pack, progress],
  );

  const saveItem = useCallback((id: string, correct: boolean) => {
    if (!correct) return;
    setProgress(p => ({ ...(p ?? empty), items: { ...(p ?? empty).items, [id]: ((p ?? empty).items[id] ?? 0) + 1 } }));
    updateExtras(e => {
      const w = e.writing ?? empty;
      return { ...e, writing: { ...w, items: { ...w.items, [id]: (w.items[id] ?? 0) + 1 } } };
    }).catch(() => {});
  }, []);

  function startRound(kind: 'order' | 'transform') {
    if (!pack) return;
    const items: (OrderItem | TransformItem)[] = kind === 'order' ? pack.order : pack.transform;
    setRound(pickRound(items, progress ?? undefined, ROUND_SIZE));
    setIdx(0);
    setTally({ c: 0, t: 0 });
    setFinished(false);
  }

  function handleResult(correct: boolean, userAnswer: string) {
    const item = round![idx];
    saveItem(item.id, correct);
    if (!correct) {
      const isOrder = 'de' in item;
      recordMistakes([writingMistake({
        id: item.id,
        prompt: isOrder ? (item as OrderItem).de : `${(item as TransformItem).task}: ${(item as TransformItem).source}`,
        answer: item.answer,
        alternatives: item.alt,
        hint: item.hint,
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
    recordExercise('writing', next.c, next.t).catch(() => {});
  }

  function finishLetter(correct: number, total: number, wrong: number[]) {
    if (letter) {
      saveItem(letter.id, correct === total);
      if (wrong.length > 0) {
        const parts = letter.text.split('___');
        recordMistakes(wrong.map(i => writingMistake({
          id: `${letter.id}-${i}`,
          prompt: `…${parts[i].slice(-28)}___${(parts[i + 1] ?? '').slice(0, 28)}…`,
          answer: letter.gaps[i].answer,
          hint: letter.gaps[i].hint,
          options: [...new Set([...letter.gaps.map(g => g.answer), ...(letter.extra ?? [])])].slice(0, 6),
        })));
      }
      recordExercise('writing', correct, total).catch(() => {});
    }
    setLetter(null);
  }

  function rateText(rating: Rating) {
    if (!task) return;
    const entry = { times: (progress?.texts[task.id]?.times ?? 0) + 1, last: new Date().toISOString(), rating };
    setProgress(p => ({ ...(p ?? empty), texts: { ...(p ?? empty).texts, [task.id]: entry } }));
    updateExtras(e => {
      const w = e.writing ?? empty;
      return { ...e, writing: { ...w, texts: { ...w.texts, [task.id]: { ...entry, times: (w.texts[task.id]?.times ?? 0) + 1 } } } };
    }).catch(() => {});
    recordExercise('writing', rating === 'again' ? 0 : 1, 1).catch(() => {});
    setTask(null);
    setText('');
    setRevealed(false);
  }

  if (!ready || !profile) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  const stop = (
    <button
      onClick={() => { setRound(null); setLetter(null); setTask(null); setText(''); setRevealed(false); setFinished(false); }}
      aria-label={t('Stop', 'Beenden')}
      className="w-11 h-11 -ml-2 shrink-0 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
    >
      <X className="w-6 h-6" />
    </button>
  );

  // ── A round of word-order or rewriting ──
  if (round !== null && !finished) {
    const item = round[idx];
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
        <div className="max-w-xl mx-auto p-5 space-y-5">
          <div className="flex items-center gap-3">
            {stop}
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-700 rounded-full transition-all" style={{ width: `${(idx / round.length) * 100}%` }} />
            </div>
            <span className="text-sm text-gray-500 tabular-nums shrink-0">{idx + 1}/{round.length}</span>
          </div>
          {'de' in item ? (
            <OrderCard key={item.id} item={item as OrderItem} lang={lang} onResult={handleResult} />
          ) : (
            <TransformCard key={item.id} item={item as TransformItem} lang={lang} onResult={handleResult} />
          )}
        </div>
      </main>
    );
  }

  // ── Round finished ──
  if (finished && round) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
        <div className="max-w-xl mx-auto p-5 space-y-5">
          <h1 className="text-3xl text-gray-900">
            {tally.c === tally.t ? t('All right!', 'Alles richtig!') : t('Round done', 'Runde geschafft')}
          </h1>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
            <p className="font-display text-4xl text-gray-900 tabular-nums">{tally.c}/{tally.t}</p>
            <p className="text-xs text-gray-400 mt-1">{t('right', 'richtig')}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => startRound(tab === 'transform' ? 'transform' : 'order')}
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

  // ── One letter ──
  if (letter) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 pb-40 md:pb-8">
        <div className="max-w-xl mx-auto p-5 space-y-5">
          <div className="flex items-center gap-3">{stop}<p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{t('Letters', 'Briefe')}</p></div>
          <LetterCard letter={letter} lang={lang} onDone={finishLetter} />
        </div>
      </main>
    );
  }

  // ── One free writing task ──
  if (task) {
    const model = pack?.free[task.id];
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
        <div className="max-w-xl mx-auto p-5 space-y-5">
          <div className="flex items-center gap-3">{stop}<p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{t('Free writing', 'Frei schreiben')}</p></div>
          <div>
            <h1 className="text-3xl text-gray-900 flex items-center gap-2.5">
              <Icon name={task.icon} className="w-7 h-7 text-red-700" />
              {task.title}
            </h1>
            <p className="text-gray-600 text-sm mt-1">{task.task}</p>
          </div>

          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-2">
            <h2 className="text-sm font-bold text-gray-800">{t('Mention these', 'Das soll vorkommen')}</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              {task.points.map((p, i) => <li key={i}>· {p}</li>)}
            </ul>
          </section>

          {model && (
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-2">
              <h2 className="text-sm font-bold text-gray-800">{t('Phrases to build with', 'Bausteine')}</h2>
              {model.blocks.map((b, i) => (
                <p key={i} className="text-sm flex items-start gap-2">
                  <SpeakButton text={b.target} lang={lang} className="mt-0.5" />
                  <span>
                    <span className="font-medium text-gray-900">{b.target}</span>
                    <span className="block text-gray-500">{b.de}</span>
                  </span>
                </p>
              ))}
            </section>
          )}

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              rows={8}
              placeholder={t(`Write in ${info.name}…`, `Schreib auf ${info.nameDe} …`)}
              className="w-full border-2 border-gray-200 focus:border-red-600 rounded-xl p-3 text-base outline-none transition-colors resize-y"
            />
            <p className="text-xs text-gray-400 tabular-nums">
              {t(`${words} words · aim for about ${task.words}`, `${words} Wörter · etwa ${task.words} wären gut`)}
            </p>
            {!revealed && (
              <button
                onClick={() => setRevealed(true)}
                disabled={words < 5}
                className="w-full h-12 bg-red-700 hover:bg-red-800 disabled:bg-gray-300 text-white rounded-full font-semibold transition-colors"
              >
                {t('Show the model answer', 'Musterlösung zeigen')}
              </button>
            )}
          </div>

          {revealed && model && (
            <>
              <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
                <h2 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                  {t('Model answer', 'Musterlösung')}
                  <SpeakButton text={model.model} lang={lang} />
                </h2>
                <p className="text-gray-900 leading-relaxed">{model.model}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{model.modelDe}</p>
                <p className="text-xs text-gray-400">
                  {t(
                    'Yours will look different — that is fine. Compare the structures, not the words.',
                    'Deiner sieht anders aus – das ist richtig so. Vergleich die Strukturen, nicht die Wörter.',
                  )}
                </p>
              </section>
              <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
                <h2 className="text-sm font-bold text-gray-800">{t('How did it go?', 'Wie ist es gelaufen?')}</h2>
                <div className="grid grid-cols-3 gap-2">
                  {([
                    ['good', t('Went well', 'Lief gut'), 'border-green-300 text-green-800 hover:bg-green-50'],
                    ['partly', t('Partly', 'Teilweise'), 'border-amber-300 text-amber-800 hover:bg-amber-50'],
                    ['again', t('Again', 'Nochmal'), 'border-red-300 text-red-800 hover:bg-red-50'],
                  ] as [Rating, string, string][]).map(([r, label, cls]) => (
                    <button
                      key={r}
                      onClick={() => rateText(r)}
                      className={`h-12 rounded-xl border-2 text-sm font-semibold transition-colors ${cls}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </main>
    );
  }

  // ── Overview ──
  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-3xl text-gray-900">{t('Writing', 'Schreiben')}</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {counts
              ? t(
                  `${counts.solved} of ${counts.items} sentences solved · ${counts.written} of ${counts.tasks} texts written`,
                  `${counts.solved} von ${counts.items} Sätzen gelöst · ${counts.written} von ${counts.tasks} Texten geschrieben`,
                )
              : t('Whole sentences, not single words', 'Ganze Sätze statt einzelner Wörter')}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-1 bg-gray-100 rounded-xl p-1">
          {TABS.map(([id, en, de]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                tab === id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {t(en, de)}
            </button>
          ))}
        </div>

        {!pack || !progress ? (
          <p className="text-sm text-gray-400">{t('Loading…', 'Lädt …')}</p>
        ) : tab === 'order' ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              {t(
                `The German sentence is given, the ${info.name} words are jumbled — tap them into the right order. ${pack.order.length} sentences, ${ROUND_SIZE} per round, aimed at what German speakers put in the wrong place.`,
                `Der deutsche Satz steht da, die ${info.nameDe}-Wörter sind durcheinander – tippe sie in die richtige Reihenfolge. ${pack.order.length} Sätze, ${ROUND_SIZE} pro Runde, genau an den Stellen, an denen Deutsche falsch stellen.`,
              )}
            </p>
            <button
              onClick={() => startRound('order')}
              className="w-full h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors"
            >
              {t('Start a round', 'Runde starten')}
            </button>
          </div>
        ) : tab === 'transform' ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              {t(
                `One sentence, one instruction: into the past, as a question, with a pronoun, politely. ${pack.transform.length} sentences, ${ROUND_SIZE} per round — every one has exactly one right answer, so the app can mark it.`,
                `Ein Satz, eine Anweisung: in die Vergangenheit, als Frage, mit Pronomen, höflich. ${pack.transform.length} Sätze, ${ROUND_SIZE} pro Runde – jeder hat genau eine richtige Lösung, deshalb kann die App korrigieren.`,
              )}
            </p>
            <button
              onClick={() => startRound('transform')}
              className="w-full h-12 bg-red-700 hover:bg-red-800 text-white rounded-full font-semibold transition-colors"
            >
              {t('Start a round', 'Runde starten')}
            </button>
          </div>
        ) : tab === 'letter' ? (
          <div className="space-y-3">
            {pack.letters.map(l => (
              <button
                key={l.id}
                onClick={() => setLetter(l)}
                className="w-full flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 text-left hover:border-red-200 hover:bg-red-50/40 transition-colors"
              >
                <Icon name={l.icon} className="w-6 h-6 shrink-0 text-red-700" />
                <span className="flex-1 min-w-0">
                  <span className="block font-display text-lg text-gray-900">{l.title}</span>
                  <span className="block text-sm text-gray-500">{l.intro}</span>
                  <span className="block text-xs text-gray-400 mt-0.5">
                    {l.gaps.length} {t('gaps', 'Lücken')}
                    {(progress.items[l.id] ?? 0) > 0 && ` · ✓ ${progress.items[l.id]}×`}
                  </span>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-gray-500">
              {t(
                'You write, then compare with a model answer and judge yourself — the app cannot correct a free text.',
                'Du schreibst, vergleichst dann mit einer Musterlösung und bewertest dich selbst – einen freien Text kann die App nicht korrigieren.',
              )}
            </p>
            {WRITING_TASKS.map(task => {
              const done = progress.texts[task.id];
              return (
                <button
                  key={task.id}
                  onClick={() => { setTask(task); setText(''); setRevealed(false); }}
                  className="w-full flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 text-left hover:border-red-200 hover:bg-red-50/40 transition-colors"
                >
                  <Icon name={task.icon} className="w-6 h-6 shrink-0 text-red-700" />
                  <span className="flex-1 min-w-0">
                    <span className="block font-display text-lg text-gray-900">{task.title}</span>
                    <span className="block text-sm text-gray-500">{task.task}</span>
                    <span className="block text-xs text-gray-400 mt-0.5">
                      {t(`about ${task.words} words`, `etwa ${task.words} Wörter`)}
                      {done && ` · ${done.times}× ${t('written', 'geschrieben')}`}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
