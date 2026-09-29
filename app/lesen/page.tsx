'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useLearner } from '@/lib/use-profile';
import { usePack } from '@/lib/content';
import { langInfo, Lang } from '@/lib/lang';
import { getExtras, updateExtras, recordExercise, loadVocabStrict, upsertVocabWord } from '@/lib/storage';
import { UserExtras, VocabEntry } from '@/lib/types';
import { GRAMMAR_LEVELS } from '@/lib/grammar-exercises';
import { ReadingText } from '@/lib/reading/types';
import { buildIndex, lookup, tokenize, WordIndex, WordInfo } from '@/lib/reading/lookup';
import { normWord } from '@/lib/norm';
import { speak, stopSpeaking, SLOW_RATE } from '@/lib/speech';
import SpeakButton from '@/components/SpeakButton';

export default function LesenPage() {
  const { profile, lang, beginner, ready } = useLearner();
  const reading = usePack('reading', lang);
  const [extras, setExtras] = useState<UserExtras | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (!ready) return;
    let alive = true;
    getExtras().then(e => { if (alive) setExtras(e); });
    return () => { alive = false; };
  }, [ready]);

  if (!ready || !profile || !reading) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading…</p>
      </main>
    );
  }

  const texts = reading.texts;
  const open = texts.find(t => t.id === openId);
  const done = extras?.reading ?? {};

  if (open) {
    const i = texts.indexOf(open);
    const next = texts.slice(i + 1).find(t => !done[t.id]) ?? texts[i + 1];
    return (
      <Reader
        key={open.id}
        text={open}
        lang={lang}
        onBack={() => { stopSpeaking(); setOpenId(null); }}
        onNext={next ? () => { stopSpeaking(); setOpenId(next.id); window.scrollTo(0, 0); } : undefined}
        onFinished={(correct, total) => {
          const rec = (e: UserExtras) => ({
            correct,
            total,
            times: (e.reading[open.id]?.times ?? 0) + 1,
            last: new Date().toISOString(),
          });
          setExtras(e => (e ? { ...e, reading: { ...e.reading, [open.id]: rec(e) } } : e));
          updateExtras(e => ({ ...e, reading: { ...e.reading, [open.id]: rec(e) } })).catch(() => {});
          recordExercise('reading', correct, total).catch(() => {});
        }}
      />
    );
  }

  const readCount = texts.filter(t => done[t.id]).length;

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span>📰</span> Reading
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            Short texts from A1 to B1. Tap any word to see what it means, listen along, then answer a few questions.
            {texts.length > 0 && ` ${readCount} of ${texts.length} read.`}
          </p>
        </div>

        {texts.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <p className="text-sm text-gray-500">No texts for {langInfo(lang).name} yet.</p>
          </div>
        )}

        {GRAMMAR_LEVELS.map(level => {
          const list = texts.filter(t => t.level === level.id);
          if (list.length === 0) return null;
          const muted = beginner && level.id !== 'A1';
          return (
            <section key={level.id} className="space-y-3">
              <h2 className="flex items-baseline justify-between px-1">
                <span className="text-sm font-bold text-gray-800">{level.label}</span>
                <span className="text-xs text-gray-400">
                  {list.filter(t => done[t.id]).length}/{list.length} read
                </span>
              </h2>
              {list.map(t => {
                const rec = done[t.id];
                return (
                  <button
                    key={t.id}
                    onClick={() => { setOpenId(t.id); window.scrollTo(0, 0); }}
                    className={`w-full text-left bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                      muted ? 'opacity-80' : ''
                    }`}
                  >
                    <span className="text-2xl shrink-0">{t.icon}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-gray-900">{t.title}</span>
                      <span className="block text-xs text-gray-400">{t.titleDe}</span>
                    </span>
                    {rec ? (
                      <span
                        className={`shrink-0 text-xs font-semibold px-2 py-1 rounded-lg ${
                          rec.correct === rec.total ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        ✓ {rec.correct}/{rec.total}
                      </span>
                    ) : (
                      <span className="shrink-0 text-xs font-medium px-2 py-1 rounded-lg bg-gray-100 text-gray-500">New</span>
                    )}
                  </button>
                );
              })}
            </section>
          );
        })}
      </div>
    </main>
  );
}

// ─── Reader ──────────────────────────────────────────────────────────────────

function Reader({
  text,
  lang,
  onBack,
  onNext,
  onFinished,
}: {
  text: ReadingText;
  lang: Lang;
  onBack: () => void;
  onNext?: () => void;
  onFinished: (correct: number, total: number) => void;
}) {
  const vocabPack = usePack('vocab', lang);
  const forms = usePack('forms', lang);
  const index = useMemo<WordIndex | null>(
    () => (vocabPack && forms ? buildIndex(lang, vocabPack, forms) : null),
    [lang, vocabPack, forms],
  );

  const [selected, setSelected] = useState<{ p: number; t: number; info: WordInfo | null; text: string } | null>(null);
  const [showDe, setShowDe] = useState<Set<number>>(new Set());
  const [answers, setAnswers] = useState<(number | null)[]>(() => text.questions.map(() => null));
  const [checked, setChecked] = useState(false);
  const [myWords, setMyWords] = useState<Set<string> | null>(null);
  const [added, setAdded] = useState<Set<string>>(new Set());
  const [addError, setAddError] = useState('');
  const paragraphs = useMemo(() => text.paragraphs.map(p => tokenize(p)), [text]);
  const readingAll = useRef(false);

  // Your word list, to know whether a tapped word is new to you.
  useEffect(() => {
    let alive = true;
    loadVocabStrict()
      .then(v => { if (alive) setMyWords(new Set(v.map(e => normWord(e.word, lang)))); })
      .catch(() => {});
    return () => { alive = false; };
  }, [lang]);

  function tap(p: number, t: number, word: string) {
    if (selected?.p === p && selected.t === t) { setSelected(null); return; }
    setAddError('');
    setSelected({ p, t, text: word, info: index ? lookup(word, index, text.glossary) : null });
  }

  // Read the whole text aloud, paragraph by paragraph.
  function readAll(rate?: number) {
    readingAll.current = true;
    const parts = text.paragraphs.map(p => p.replace(/\n/g, ' '));
    const step = (i: number) => {
      if (!readingAll.current || i >= parts.length) { readingAll.current = false; return; }
      speak(parts[i], lang, { rate, onEnd: () => step(i + 1) });
    };
    step(0);
  }

  // Dictionary form + meaning for "Add to my words".
  const addable = (() => {
    const info = selected?.info;
    if (!info?.lemma || !index) return null;
    const lemmaInfo = lookup(info.lemma, index, {});
    const de = lemmaInfo && lemmaInfo.lemma === info.lemma ? lemmaInfo.de : info.lemmaDe ?? info.de;
    return { word: info.lemma, de };
  })();
  const alreadyMine = addable ? myWords?.has(normWord(addable.word, lang)) || added.has(addable.word) : false;

  async function addWord() {
    if (!addable || !myWords) return;
    const now = new Date().toISOString();
    const entry: VocabEntry = {
      id: crypto.randomUUID(),
      word: addable.word,
      translation: addable.de,
      level: 1,
      nextReview: now,
      addedAt: now,
      reviewCount: 0,
    };
    try {
      await upsertVocabWord(entry);
      setAdded(s => new Set(s).add(addable.word));
    } catch {
      setAddError('Could not save – check your connection.');
    }
  }

  const correct = text.questions.filter((q, i) => answers[i] === q.answer).length;

  function check() {
    setChecked(true);
    onFinished(text.questions.filter((q, i) => answers[i] === q.answer).length, text.questions.length);
  }

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-48 md:pb-40">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div className="flex items-center justify-between gap-3">
          <button onClick={onBack} className="text-sm text-gray-500 hover:text-gray-800">← All texts</button>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-500">{text.level}</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span>{text.icon}</span> {text.title}
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">{text.titleDe}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => readAll()}
            className="px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white text-sm font-semibold transition-colors"
          >
            🔊 Listen
          </button>
          <button
            onClick={() => readAll(SLOW_RATE)}
            className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold transition-colors"
          >
            🐢 Slowly
          </button>
          <button
            onClick={() => { readingAll.current = false; stopSpeaking(); }}
            className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold transition-colors"
          >
            ⏹ Stop
          </button>
          <span className="text-xs text-gray-400">Tap a word for its meaning.</span>
        </div>

        <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-5">
          {paragraphs.map((tokens, p) => (
            <div key={p} className="space-y-2">
              <p className="text-[17px] leading-8 text-gray-900 whitespace-pre-line">
                {tokens.map((tok, t) =>
                  tok.word ? (
                    <span
                      key={t}
                      role="button"
                      tabIndex={0}
                      onClick={() => tap(p, t, tok.text)}
                      onKeyDown={e => { if (e.key === 'Enter') tap(p, t, tok.text); }}
                      className={`cursor-pointer rounded px-px transition-colors ${
                        selected?.p === p && selected.t === t ? 'bg-amber-200' : 'hover:bg-amber-50'
                      }`}
                    >
                      {tok.text}
                    </span>
                  ) : (
                    <span key={t}>{tok.text}</span>
                  ),
                )}
              </p>
              <div className="flex items-center gap-2">
                <SpeakButton text={text.paragraphs[p].replace(/\n/g, ' ')} lang={lang} />
                <button
                  onClick={() =>
                    setShowDe(s => {
                      const n = new Set(s);
                      if (n.has(p)) n.delete(p); else n.add(p);
                      return n;
                    })
                  }
                  className="text-xs text-gray-400 hover:text-gray-600"
                >
                  🇩🇪 {showDe.has(p) ? 'Hide translation' : 'Translation'}
                </button>
              </div>
              {showDe.has(p) && (
                <p className="text-sm text-gray-500 italic leading-relaxed whitespace-pre-line bg-gray-50 rounded-lg p-3">
                  {text.translation[p]}
                </p>
              )}
            </div>
          ))}
        </article>

        {/* Comprehension questions */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
          <h2 className="font-bold text-gray-900">Did you understand it?</h2>
          {text.questions.map((q, i) => (
            <div key={i} className="space-y-2">
              <p className="text-sm font-medium text-gray-800">{i + 1}. {q.q}</p>
              <div className="grid gap-1.5">
                {q.options.map((opt, o) => {
                  const picked = answers[i] === o;
                  const right = checked && o === q.answer;
                  const wrong = checked && picked && o !== q.answer;
                  return (
                    <button
                      key={o}
                      disabled={checked}
                      onClick={() => setAnswers(a => a.map((v, k) => (k === i ? o : v)))}
                      className={`text-left px-3 py-2 rounded-xl border-2 text-sm transition-colors ${
                        right
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : wrong
                          ? 'border-red-400 bg-red-50 text-red-700'
                          : picked
                          ? 'border-red-600 bg-red-50 text-red-800'
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          {!checked ? (
            <button
              onClick={check}
              disabled={answers.some(a => a === null)}
              className="w-full py-3 bg-red-700 hover:bg-red-800 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl font-semibold transition-colors"
            >
              Check answers
            </button>
          ) : (
            <div className="space-y-3">
              <div
                className={`p-4 rounded-xl text-center font-medium ${
                  correct === text.questions.length ? 'bg-green-100 text-green-800' : 'bg-amber-50 text-amber-800'
                }`}
              >
                {correct} of {text.questions.length} correct{correct === text.questions.length ? ' – bravo! 🎉' : ''}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={onBack}
                  className="flex-1 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-sm transition-colors"
                >
                  All texts
                </button>
                {onNext && (
                  <button
                    onClick={onNext}
                    className="flex-1 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-colors"
                  >
                    Next text →
                  </button>
                )}
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Word panel */}
      {selected && (
        <div className="fixed left-0 right-0 bottom-16 md:bottom-4 md:left-56 z-40 px-3">
          <div className="max-w-xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-xl p-4 space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  {selected.text}
                  <SpeakButton text={selected.text} lang={lang} />
                </p>
                {selected.info ? (
                  <>
                    <p className="text-sm text-gray-700">{selected.info.de}</p>
                    {selected.info.also && <p className="text-xs text-gray-500">auch: {selected.info.also}</p>}
                    {selected.info.note && <p className="text-xs text-gray-400">{selected.info.note}</p>}
                  </>
                ) : (
                  <p className="text-sm text-gray-400">{index ? 'No translation found.' : 'Loading dictionary…'}</p>
                )}
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="shrink-0 w-7 h-7 rounded-lg bg-gray-100 text-gray-400 hover:bg-gray-200"
              >
                ✕
              </button>
            </div>
            {addable && myWords && (
              alreadyMine ? (
                <p className="text-xs text-green-700">✓ „{addable.word}“ is in your words</p>
              ) : (
                <button
                  onClick={addWord}
                  className="w-full py-2 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 text-sm font-semibold transition-colors"
                >
                  ＋ Add „{addable.word}“ to my words
                </button>
              )
            )}
            {addError && <p className="text-xs text-red-600">{addError}</p>}
          </div>
        </div>
      )}
    </main>
  );
}
