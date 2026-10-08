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
import FeedbackBar from '@/components/practice/FeedbackBar';
import { X, Volume2, Turtle, Square, Languages, Plus, Check, ChevronRight } from 'lucide-react';
import { useT } from '@/lib/ui-lang';

export default function LesenPage() {
  const { profile, lang, beginner, ready } = useLearner();
  const reading = usePack('reading', lang);
  const [extras, setExtras] = useState<UserExtras | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const t = useT();

  useEffect(() => {
    if (!ready) return;
    let alive = true;
    getExtras().then(e => { if (alive) setExtras(e); });
    return () => { alive = false; };
  }, [ready]);

  if (!ready || !profile || !reading) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">{t('Loading…', 'Lädt …')}</p>
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
          <h1 className="text-3xl text-gray-900 flex items-center gap-2">
            {t('Reading', 'Lesen')}
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {t(
              'Short texts from A1 to B1. Tap any word to see what it means, listen along, then answer a few questions.',
              'Kurze Texte von A1 bis B1. Tippe auf ein Wort, um seine Bedeutung zu sehen, hör mit und beantworte danach ein paar Fragen.',
            )}
            {texts.length > 0 && ` ${t(`${readCount} of ${texts.length} read.`, `${readCount} von ${texts.length} gelesen.`)}`}
          </p>
        </div>

        {texts.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <p className="text-sm text-gray-500">{t(`No texts for ${langInfo(lang).name} yet.`, `Noch keine Texte auf ${langInfo(lang).nameDe}.`)}</p>
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
                  {list.filter(x => done[x.id]).length}/{list.length} {t('read', 'gelesen')}
                </span>
              </h2>
              {list.map(text => {
                const rec = done[text.id];
                return (
                  <button
                    key={text.id}
                    onClick={() => { setOpenId(text.id); window.scrollTo(0, 0); }}
                    className={`w-full text-left bg-white rounded-2xl border border-gray-200 p-4 flex items-center gap-3 hover:border-red-200 transition-colors ${
                      muted ? 'opacity-80' : ''
                    }`}
                  >
                    <span className="w-11 h-11 shrink-0 rounded-xl bg-red-50 text-red-700 flex items-center justify-center font-display text-xl">
                      {text.title.replace(/^[^\p{L}]+/u, '').slice(0, 1)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg text-gray-900 leading-tight">{text.title}</span>
                      <span className="block text-xs text-gray-500">{text.titleDe}</span>
                    </span>
                    {rec ? (
                      <span
                        className={`shrink-0 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 ${
                          rec.correct === rec.total ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" /> {rec.correct}/{rec.total}
                      </span>
                    ) : (
                      <ChevronRight className="w-5 h-5 shrink-0 text-gray-400" />
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
  const t = useT();

  // Reading view: the tab bar steps aside (see globals.css).
  useEffect(() => {
    document.body.dataset.focus = '1';
    return () => { delete document.body.dataset.focus; };
  }, []);

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
      setAddError(t('Could not save – check your connection.', 'Speichern fehlgeschlagen – prüf deine Verbindung.'));
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
          <button
            onClick={onBack}
            aria-label={t('All texts', 'Alle Texte')}
            title={t('All texts', 'Alle Texte')}
            className="w-11 h-11 -ml-2 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">{text.level}</span>
        </div>

        <div>
          <h1 className="text-3xl text-gray-900">{text.title}</h1>
          <p className="text-gray-500 text-sm mt-1">{text.titleDe}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => readAll()}
            className="h-10 px-4 rounded-full bg-red-700 hover:bg-red-800 text-white text-sm font-semibold transition-colors inline-flex items-center gap-1.5"
          >
            <Volume2 className="w-4 h-4" /> {t('Listen', 'Anhören')}
          </button>
          <button
            onClick={() => readAll(SLOW_RATE)}
            className="h-10 px-4 rounded-full bg-red-50 hover:bg-red-100 text-red-700 text-sm font-semibold transition-colors inline-flex items-center gap-1.5"
          >
            <Turtle className="w-4 h-4" /> {t('Slowly', 'Langsam')}
          </button>
          <button
            onClick={() => { readingAll.current = false; stopSpeaking(); }}
            aria-label={t('Stop', 'Stopp')}
            title={t('Stop', 'Stopp')}
            className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors inline-flex items-center justify-center"
          >
            <Square className="w-3.5 h-3.5 fill-current" />
          </button>
          <span className="text-xs text-gray-500">{t('Tap a word for its meaning.', 'Tippe auf ein Wort für die Bedeutung.')}</span>
        </div>

        <article className="bg-white rounded-3xl border border-gray-200 p-5 space-y-5">
          {paragraphs.map((tokens, p) => (
            <div key={p} className="space-y-2">
              <p className="font-display !font-normal text-[19px] leading-8 text-gray-900 whitespace-pre-line">
                {tokens.map((tok, t) =>
                  tok.word ? (
                    <span
                      key={t}
                      role="button"
                      tabIndex={0}
                      onClick={() => tap(p, t, tok.text)}
                      onKeyDown={e => { if (e.key === 'Enter') tap(p, t, tok.text); }}
                      className={`cursor-pointer rounded px-px transition-colors ${
                        selected?.p === p && selected.t === t ? 'bg-red-100 text-red-800' : 'hover:bg-red-50'
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
                  className="text-xs text-gray-500 hover:text-gray-800 inline-flex items-center gap-1"
                >
                  <Languages className="w-3.5 h-3.5" /> {showDe.has(p) ? t('Hide translation', 'Übersetzung ausblenden') : t('Translation', 'Übersetzung')}
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
        <section className="bg-white rounded-3xl border border-gray-200 p-5 space-y-4">
          <h2 className="font-display text-xl text-gray-900">{t('Did you understand it?', 'Hast du es verstanden?')}</h2>
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
                      className={`text-left px-3 py-2.5 rounded-xl border-2 text-[15px] transition-colors ${
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
              className="w-full h-12 bg-red-700 hover:bg-red-800 disabled:bg-gray-200 disabled:text-gray-500 text-white rounded-full font-semibold transition-colors"
            >
              {t('Check answers', 'Antworten prüfen')}
            </button>
          ) : (
            <FeedbackBar
              correct={correct === text.questions.length}
              title={correct === text.questions.length ? 'Bravo!' : t(`${correct} of ${text.questions.length} correct`, `${correct} von ${text.questions.length} richtig`)}
              actions={
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={onBack}
                    className="flex-1 h-12 rounded-full border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:bg-white/60 transition-colors"
                  >
                    {t('All texts', 'Alle Texte')}
                  </button>
                  {onNext && (
                    <button
                      type="button"
                      onClick={onNext}
                      className={`flex-1 h-12 rounded-full text-white text-sm font-semibold transition-colors ${
                        correct === text.questions.length ? 'bg-green-700 hover:bg-green-800' : 'bg-red-700 hover:bg-red-800'
                      }`}
                    >
                      {t('Next text', 'Nächster Text')}
                    </button>
                  )}
                </div>
              }
            >
              {correct < text.questions.length && (
                <p className="text-sm text-gray-700">{t('The right answers are marked above.', 'Die richtigen Antworten sind oben markiert.')}</p>
              )}
            </FeedbackBar>
          )}
        </section>
      </div>

      {/* Word panel */}
      {selected && (
        <div className="fixed left-0 right-0 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] md:bottom-4 md:left-56 z-40 px-3">
          <div className="max-w-xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl p-4 space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-display text-xl text-gray-900 flex items-center gap-2">
                  {selected.text}
                  <SpeakButton text={selected.text} lang={lang} />
                </p>
                {selected.info ? (
                  <>
                    <p className="text-sm text-gray-700">{selected.info.de}</p>
                    {selected.info.also && <p className="text-xs text-gray-500">{t('also', 'auch')}: {selected.info.also}</p>}
                    {selected.info.note && <p className="text-xs text-gray-400">{selected.info.note}</p>}
                  </>
                ) : (
                  <p className="text-sm text-gray-400">{index ? t('No translation found.', 'Keine Übersetzung gefunden.') : t('Loading dictionary…', 'Wörterbuch lädt …')}</p>
                )}
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label={t('Close', 'Schließen')}
                className="shrink-0 w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {addable && myWords && (
              alreadyMine ? (
                <p className="text-xs text-green-700">✓ {t(`„${addable.word}“ is in your words`, `„${addable.word}“ ist in deinen Wörtern`)}</p>
              ) : (
                <button
                  onClick={addWord}
                  className="w-full h-10 rounded-full bg-red-50 text-red-700 hover:bg-red-100 text-sm font-semibold transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> {t(`Add „${addable.word}“ to my words`, `„${addable.word}“ zu meinen Wörtern`)}
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
