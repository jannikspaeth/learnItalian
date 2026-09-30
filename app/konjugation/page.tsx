'use client';

import { useState, useEffect, useCallback } from 'react';
import { getConjugationRecords, recordExercise } from '@/lib/storage';
import { ConjugationRecord, ConjugationExercise } from '@/lib/types';
import Conjugation from '@/components/exercises/Conjugation';
import { TENSES_BY_LANG, defaultTenses, TENSE_STORAGE_KEY, TENSE_VALIDATORS } from '@/lib/tenses';
import { useLocalSetting } from '@/lib/use-local-setting';
import { useLearner } from '@/lib/use-profile';
import { usePack } from '@/lib/content';
import { getConjugationExercise } from '@/lib/conjugation-client';
import { useT, useUiLang, tenseName, T } from '@/lib/ui-lang';
import { dueVerbs, isVerbDue, verbDueDate } from '@/lib/verb-review';

type Tab = 'lernen' | 'all' | 'mistakes';
type VerbSort = 'alpha' | 'accuracy' | 'recent' | 'practiced';

// Score of the most recent attempt only (not lifetime cumulative). Each section
// stores the last attempt's questions (`pronouns`) and mistakes (`recentMistakes`),
// so the last try's correct count is `pronouns.length - recentMistakes.length` —
// consistent with how `mastered` is derived.
function lastTry(r: ConjugationRecord): { correct: number; total: number; pct: number } {
  let correct = 0;
  let total = 0;
  for (const s of r.sections) {
    const q = s.pronouns.length;
    total += q;
    correct += Math.max(0, q - s.recentMistakes.length);
  }
  return { correct, total, pct: total > 0 ? Math.round((correct / total) * 100) : 0 };
}

function accuracyOf(r: ConjugationRecord): number {
  const { correct, total } = lastTry(r);
  return total > 0 ? correct / total : 0;
}

function timeAgo(iso: string, t: T): string {
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff / 60000);
  const h = Math.floor(diff / 3600000);
  const d = Math.floor(diff / 86400000);
  if (min < 1) return t('just now', 'gerade eben');
  if (min < 60) return t(`${min} min. ago`, `vor ${min} Min.`);
  if (h < 24) return t(`${h} hr. ago`, `vor ${h} Std.`);
  return t(`${d} day${d === 1 ? '' : 's'} ago`, `vor ${d} Tag${d === 1 ? '' : 'en'}`);
}

function timeUntil(ms: number, t: T): string {
  const d = Math.ceil((ms - Date.now()) / 86400000);
  return d <= 1 ? t('tomorrow', 'morgen') : t(`in ${d} days`, `in ${d} Tagen`);
}

function TotalBar({ record }: { record: ConjugationRecord }) {
  const { pct } = lastTry(record);
  const color = pct === 100 ? 'bg-green-500' : pct >= 70 ? 'bg-amber-400' : 'bg-red-400';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-gray-400 tabular-nums">{pct}%</span>
    </div>
  );
}

export default function KonjugationPage() {
  const { profile, lang, beginner, ready } = useLearner();
  const verbPack = usePack('verbs', lang);
  const t = useT();
  const [uiLang] = useUiLang();

  const [records, setRecords] = useState<ConjugationRecord[]>([]);
  const [tab, setTab] = useState<Tab>('lernen');
  const [practicing, setPracticing] = useState<string | null>(null);
  const [exercise, setExercise] = useState<ConjugationExercise | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  // Ordered list of active sort keys; each is a tie-breaker for the previous one.
  const [tenseChoice, setTenseChoice] = useLocalSetting<string>(TENSE_STORAGE_KEY[lang], '', TENSE_VALIDATORS[lang]);
  const [sorts, setSorts] = useState<{ key: VerbSort; dir: 'asc' | 'desc' }[]>([
    { key: 'recent', dir: 'desc' },
  ]);

  // Click cycles a key: off → natural dir → opposite dir → off. Newly activated
  // keys append as the lowest-priority tie-breaker.
  const naturalDir = (key: VerbSort): 'asc' | 'desc' => (key === 'alpha' ? 'asc' : 'desc');
  function cycleSort(key: VerbSort) {
    setSorts(prev => {
      const i = prev.findIndex(s => s.key === key);
      if (i < 0) return [...prev, { key, dir: naturalDir(key) }];
      const cur = prev[i];
      if (cur.dir === naturalDir(key)) {
        const next = [...prev];
        next[i] = { key, dir: cur.dir === 'asc' ? 'desc' : 'asc' };
        return next;
      }
      return prev.filter(s => s.key !== key); // already flipped → remove
    });
  }

  const refresh = useCallback(async () => setRecords(await getConjugationRecords()), []);
  useEffect(() => { refresh(); }, [refresh]);

  if (!ready || !profile || !verbPack) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  const catalog = verbPack.verbs;
  const TENSES = TENSES_BY_LANG[lang];
  const tenses: string[] = tenseChoice ? tenseChoice.split(',') : defaultTenses(lang, beginner);

  function toggleTense(id: string) {
    const next = tenses.includes(id) ? tenses.filter(t => t !== id) : [...tenses, id];
    if (next.length === 0) return; // keep at least one tense
    setTenseChoice(TENSES.map(t => t.id).filter(t => next.includes(t)).join(','));
  }

  const withMistakes = records.filter(r =>
    r.sections.some(s => s.recentMistakes.length > 0)
  );
  const cmpBy = (key: VerbSort, a: ConjugationRecord, b: ConjugationRecord): number => {
    if (key === 'alpha') return a.verb.localeCompare(b.verb);
    if (key === 'accuracy') return accuracyOf(a) - accuracyOf(b);
    if (key === 'practiced') return a.totalAttempts - b.totalAttempts;
    return new Date(a.lastAttempted).getTime() - new Date(b.lastAttempted).getTime();
  };
  const displayed = [...(tab === 'mistakes' ? withMistakes : records)].sort((a, b) => {
    for (const { key, dir } of sorts) {
      const cmp = cmpBy(key, a, b);
      if (cmp !== 0) return dir === 'asc' ? cmp : -cmp;
    }
    return 0;
  });
  const mastered = records.filter(r => r.mastered).length;

  const due = dueVerbs(records);
  const learnedVerbs = new Set(records.map(r => r.verb.toLowerCase()));
  const unseenCount = catalog.filter(v => !learnedVerbs.has(v.infinitive.toLowerCase())).length;

  // Next verb in the Learn panel: a given (due) verb, or the next new one.
  async function startNew(verb?: string, known?: string[]) {
    setPracticing('__new__');
    setExercise(null);
    setError('');
    setLoading(true);
    try {
      const knownVerbs = known ?? records.map(r => r.verb);
      setExercise(await getConjugationExercise({ lang, verb, knownVerbs, beginner, tenses }));
    } catch {
      setError(t('Could not load the verb.', 'Das Verb konnte nicht geladen werden.'));
    } finally {
      setLoading(false);
    }
  }

  function toggleExpand(id: string) {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  async function startPractice(record: ConjugationRecord) {
    if (practicing === record.id) {
      setPracticing(null);
      setExercise(null);
      return;
    }
    setPracticing(record.id);
    setExercise(null);
    setError('');
    setLoading(true);

    try {
      setExercise(await getConjugationExercise({ lang, verb: record.verb, beginner, tenses }));
    } catch {
      setError(t('Could not load the verb.', 'Das Verb konnte nicht geladen werden.'));
    } finally {
      setLoading(false);
    }
  }

  // "Next verb" in Learn: the result is saved, then the next due (or new) verb opens.
  async function handleLearnComplete(correct: number, total: number) {
    const done = exercise?.verb;
    await recordExercise('conjugation', correct, total).catch(() => {});
    const fresh = await getConjugationRecords();
    setRecords(fresh);
    const nextDue = dueVerbs(fresh).find(r => r.verb !== done);
    startNew(nextDue?.verb, fresh.map(r => r.verb));
  }

  // Reviewing a verb from the list: save, then close the panel.
  async function handleReviewComplete(correct: number, total: number) {
    await recordExercise('conjugation', correct, total).catch(() => {});
    setPracticing(null);
    setExercise(null);
    await refresh();
  }

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('Verbs', 'Verben')}</h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {t('Practice conjugations and review mistakes', 'Konjugieren üben und Fehler wiederholen')}
          </p>
        </div>

        {/* Tense picker */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 space-y-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{t('Tenses to practise', 'Zeitformen zum Üben')}</p>
          <div className="flex flex-wrap gap-1.5">
            {TENSES.map(t => {
              const on = tenses.includes(t.id);
              return (
                <button
                  key={t.id}
                  onClick={() => { toggleTense(t.id); setPracticing(null); setExercise(null); }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    on ? 'bg-red-700 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {t.label}
                  <span className={`ml-1 text-[10px] ${on ? 'opacity-70' : 'text-gray-400'}`}>{t.level}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-gray-800">{records.length}</p>
            <p className="text-xs text-gray-400 mt-0.5">{t('Verbs learned', 'Verben gelernt')}</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-green-600">{mastered}</p>
            <p className="text-xs text-gray-400 mt-0.5">{t('Mastered', 'Gemeistert')}</p>
          </div>
          <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-red-600">{withMistakes.length}</p>
            <p className="text-xs text-gray-400 mt-0.5">{t('With errors', 'Mit Fehlern')}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
          {([
            ['lernen', t('Learn', 'Lernen')],
            ['all', t('All Verbs', 'Alle Verben')],
            ['mistakes', t('Errors', 'Fehler')],
          ] as const).map(([id, label]) => (
            <button
              key={id}
              onClick={() => { setTab(id); setPracticing(null); setExercise(null); }}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                tab === id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
              {id === 'mistakes' && withMistakes.length > 0 && (
                <span className="ml-1.5 text-xs px-1.5 py-0.5 rounded-full bg-red-100 text-red-600">
                  {withMistakes.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Lernen tab ── */}
        {tab === 'lernen' && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-4">
            <div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-800">{unseenCount}</span> {t('of', 'von')}{' '}
                <span className="font-semibold text-gray-800">{catalog.length}</span>{' '}
                {t('verbs not practiced yet', 'Verben noch nicht geübt')}
              </p>
              <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-600 rounded-full transition-all"
                  style={{ width: `${Math.round(((catalog.length - unseenCount) / catalog.length) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {catalog.length - unseenCount} {t('learned', 'gelernt')} · {mastered} {t('mastered', 'gemeistert')}
              </p>
            </div>

            {practicing !== '__new__' && (
              <div className="space-y-2">
                {due.length > 0 && (
                  <button
                    onClick={() => startNew(due[0].verb)}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-colors"
                  >
                    {t('Review due verbs', 'Fällige Verben wiederholen')} ({due.length}) →
                  </button>
                )}
                <button
                  onClick={() => startNew()}
                  className="w-full py-3 bg-red-700 hover:bg-red-800 text-white rounded-xl font-semibold transition-colors"
                >
                  {unseenCount > 0 ? t('Learn next verb →', 'Nächstes Verb lernen →') : t('Review random verb →', 'Zufälliges Verb wiederholen →')}
                </button>
                <p className="text-[11px] text-gray-400 text-center">
                  {t(
                    'Verbs come back for review: soon after a mistake, less often once you get them right.',
                    'Verben kommen zur Wiederholung zurück: bald nach einem Fehler, seltener, wenn du sie kannst.',
                  )}
                </p>
              </div>
            )}

            {practicing === '__new__' && (
              <div>
                {loading && (
                  <p className="text-center text-sm text-gray-400 animate-pulse py-4">{t('Loading…', 'Lädt …')}</p>
                )}
                {error && (
                  <div className="bg-red-50 rounded-xl p-3 text-sm text-red-700">{error}</div>
                )}
                {exercise && !loading && (
                  <Conjugation
                    key={exercise.verb}
                    exercise={exercise}
                    lang={lang}
                    onComplete={handleLearnComplete}
                    continueLabel={t('Save & next verb →', 'Speichern & nächstes Verb →')}
                  />
                )}
                {exercise && !loading && (
                  <button
                    onClick={() => startNew(due.find(r => r.verb !== exercise.verb)?.verb)}
                    className="w-full mt-3 text-xs text-gray-400 hover:text-gray-600"
                  >
                    {t('Skip this verb', 'Verb überspringen')}
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Empty states for other tabs */}
        {tab !== 'lernen' && displayed.length === 0 && (
          <div className="text-center py-14">
            <p className="text-4xl mb-3">{tab === 'mistakes' ? '🎉' : '🔤'}</p>
            <p className="text-sm text-gray-500 font-medium">
              {tab === 'mistakes' ? t('No errors – all mastered!', 'Keine Fehler – alles gemeistert!') : t('No verbs practiced yet.', 'Noch keine Verben geübt.')}
            </p>
          </div>
        )}

        {/* Sort controls */}
        {tab !== 'lernen' && displayed.length > 0 && (
          <div className="flex items-center justify-end gap-1 flex-wrap">
            {([
              ['alpha', 'A–Z'],
              ['accuracy', t('Accuracy', 'Genauigkeit')],
              ['practiced', t('Practiced', 'Geübt')],
              ['recent', t('Recent', 'Zuletzt')],
            ] as [VerbSort, string][]).map(([id, label]) => {
              const idx = sorts.findIndex(s => s.key === id);
              const active = idx >= 0;
              const dir = active ? sorts[idx].dir : null;
              return (
                <button
                  key={id}
                  onClick={() => cycleSort(id)}
                  title={t('Tap to add/flip/remove. Multiple can combine.', 'Antippen: hinzufügen/umdrehen/entfernen. Mehrere kombinierbar.')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    active ? 'bg-red-700 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {/* priority number only shown when more than one sort is active */}
                  {active && sorts.length > 1 && (
                    <span className="tabular-nums opacity-70 mr-1">{idx + 1}</span>
                  )}
                  {label}{dir ? (dir === 'asc' ? ' ↑' : ' ↓') : ''}
                </button>
              );
            })}
          </div>
        )}

        {/* Verb cards */}
        {tab !== 'lernen' && (
        <div className="space-y-3">
          {displayed.map(record => {
            const isPracticing = practicing === record.id;
            const isExpanded = expanded.has(record.id);
            const totalMistakes = record.sections.reduce(
              (sum, s) => sum + s.recentMistakes.length,
              0
            );

            return (
              <div
                key={record.id}
                className={`bg-white rounded-xl border-2 shadow-sm transition-colors ${
                  isPracticing ? 'border-red-300' : 'border-gray-100'
                }`}
              >
                <div className="p-4 space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-gray-900 text-lg">{record.verb}</span>
                        {record.mastered ? (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-md font-medium">
                            ✓ {t('Mastered', 'Gemeistert')}
                          </span>
                        ) : totalMistakes > 0 ? (
                          <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-md font-medium">
                            ⚠ {totalMistakes} {totalMistakes === 1 ? t('error', 'Fehler') : t('errors', 'Fehler')}
                          </span>
                        ) : null}
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {record.sections.length} {t('tenses', 'Zeitformen')} · {record.totalAttempts}× {t('practiced', 'geübt')} ·{' '}
                        {timeAgo(record.lastAttempted, t)} ·{' '}
                        {isVerbDue(record) ? (
                          <span className="text-amber-600 font-medium">{t('due for review', 'fällig')}</span>
                        ) : (
                          <>{t('review', 'Wiederholung')} {timeUntil(verbDueDate(record), t)}</>
                        )}
                      </p>
                    </div>
                    <button
                      onClick={() => startPractice(record)}
                      className={`shrink-0 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${
                        isPracticing
                          ? 'bg-gray-100 text-gray-500'
                          : 'bg-red-50 text-red-700 hover:bg-red-100'
                      }`}
                    >
                      {isPracticing ? t('Close', 'Schließen') : t('Review', 'Üben')}
                    </button>
                  </div>

                  {/* Accuracy bar */}
                  <TotalBar record={record} />

                  {/* Per-tense breakdown toggle */}
                  <button
                    onClick={() => toggleExpand(record.id)}
                    className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {isExpanded ? t('Hide tenses ▲', 'Zeitformen ausblenden ▲') : t(`Show ${record.sections.length} tenses ▼`, `${record.sections.length} Zeitformen zeigen ▼`)}
                  </button>

                  {isExpanded && (
                    <div className="space-y-2 pt-1">
                      {record.sections.map(s => {
                        const pct =
                          s.totalQuestions > 0
                            ? Math.round((s.totalCorrect / s.totalQuestions) * 100)
                            : 0;
                        return (
                          <div key={s.tense} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600 font-medium">{tenseName(s.tenseName_de, uiLang)}</span>
                              <span
                                className={`font-semibold ${
                                  pct === 100
                                    ? 'text-green-600'
                                    : pct >= 70
                                    ? 'text-amber-600'
                                    : 'text-red-500'
                                }`}
                              >
                                {s.totalCorrect}/{s.totalQuestions}
                              </span>
                            </div>
                            {s.recentMistakes.length > 0 && (
                              <div className="pl-2 space-y-0.5">
                                {s.recentMistakes.map((m, i) => (
                                  <div key={i} className="flex items-center gap-2 text-xs">
                                    <span className="text-gray-400 w-32 shrink-0">{m.pronoun}</span>
                                    <span className="text-red-400 line-through">{m.userAnswer || '–'}</span>
                                    <span className="text-gray-300">→</span>
                                    <span className="text-green-700 font-medium">{m.correct}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Inline practice */}
                {isPracticing && (
                  <div className="border-t border-gray-100 p-4">
                    {loading && (
                      <p className="text-center text-sm text-gray-400 animate-pulse py-6">
                        {t('Loading exercise…', 'Übung lädt …')}
                      </p>
                    )}
                    {error && (
                      <div className="bg-red-50 rounded-xl p-3 text-sm text-red-700">{error}</div>
                    )}
                    {exercise && !loading && (
                      <Conjugation
                        exercise={exercise}
                        lang={lang}
                        onComplete={handleReviewComplete}
                        continueLabel={t('Save & close', 'Speichern & schließen')}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        )}
      </div>
    </main>
  );
}
