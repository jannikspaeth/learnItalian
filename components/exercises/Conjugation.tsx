'use client';

import { useState } from 'react';
import { ConjugationExercise } from '@/lib/types';
import { upsertConjugationAttempt, recordMistakes } from '@/lib/storage';
import { conjugationMatches as answersMatch } from '@/lib/conjugation-match';
import { verbMistake } from '@/lib/mistakes';
import { spokenForm } from '@/lib/speech';
import type { Lang } from '@/lib/lang';
import SpeakButton from '@/components/SpeakButton';
import { useT, useUiLang, tenseName } from '@/lib/ui-lang';

interface Props {
  exercise: ConjugationExercise;
  lang: Lang;
  onComplete?: (correct: number, total: number) => void;
  continueLabel?: string; // the button that saves the result and moves on
}

export default function Conjugation({ exercise, lang, onComplete, continueLabel }: Props) {
  const t = useT();
  const [uiLang] = useUiLang();
  const [answers, setAnswers] = useState<string[][]>(
    exercise.sections.map(s => s.pronouns.map(() => ''))
  );
  const [checked, setChecked] = useState(false);
  // Rewrite-to-learn: after checking, the learner retypes each wrong form.
  const [retypes, setRetypes] = useState<string[][]>(
    exercise.sections.map(s => s.pronouns.map(() => ''))
  );
  const [typoForgiven, setTypoForgiven] = useState<boolean[][]>(
    exercise.sections.map(s => s.pronouns.map(() => false))
  );

  const results: boolean[][] = checked
    ? exercise.sections.map((s, si) =>
        s.pronouns.map((_, pi) => answersMatch(answers[si][pi], s.answers[pi]))
      )
    : exercise.sections.map(s => s.pronouns.map(() => false));

  const effectiveResults: boolean[][] = checked
    ? exercise.sections.map((s, si) =>
        s.pronouns.map((_, pi) => results[si][pi] || typoForgiven[si][pi])
      )
    : exercise.sections.map(s => s.pronouns.map(() => false));

  const totalCorrect = effectiveResults.flat().filter(Boolean).length;
  const totalQuestions = exercise.sections.reduce((sum, s) => sum + s.pronouns.length, 0);
  const perfectSections = checked ? effectiveResults.filter(r => r.every(Boolean)).length : 0;

  function retypeOk(si: number, pi: number): boolean {
    return answersMatch(retypes[si][pi], exercise.sections[si].answers[pi]);
  }

  const allWrongHandled = checked && exercise.sections.every((s, si) =>
    s.pronouns.every((_, pi) => results[si][pi] || retypeOk(si, pi) || typoForgiven[si][pi])
  );

  function setAnswer(si: number, pi: number, value: string) {
    setAnswers(prev => {
      const next = prev.map(row => [...row]);
      next[si][pi] = value;
      return next;
    });
  }

  function setRetype(si: number, pi: number, value: string) {
    setRetypes(prev => {
      const next = prev.map(row => [...row]);
      next[si][pi] = value;
      return next;
    });
  }

  function forgiveTypo(si: number, pi: number) {
    setTypoForgiven(prev => {
      const next = prev.map(row => [...row]);
      next[si][pi] = true;
      return next;
    });
  }

  function check() {
    setChecked(true);
  }

  async function saveAndContinue() {
    // Wrong forms (not forgiven as typos) go to "My mistakes".
    recordMistakes(
      exercise.sections.flatMap((s, si) =>
        s.pronouns.flatMap((p, pi) =>
          results[si][pi] || typoForgiven[si][pi]
            ? []
            : [verbMistake({
                verb: exercise.verb,
                tense: s.tense,
                tenseLabel: s.tenseName_de,
                pronoun: p,
                answer: s.answers[pi],
                userAnswer: answers[si][pi],
              })],
        ),
      ),
    );
    await upsertConjugationAttempt(
      exercise.verb,
      exercise.sections.map((s, si) => ({
        tense: s.tense,
        tenseName_de: s.tenseName_de,
        pronouns: s.pronouns,
        correctAnswers: s.answers,
        userAnswers: s.pronouns.map((_, pi) =>
          typoForgiven[si][pi] && !results[si][pi] ? s.answers[pi] : answers[si][pi]
        ),
      }))
    );
    onComplete?.(totalCorrect, totalQuestions);
  }

  function reset() {
    setAnswers(exercise.sections.map(s => s.pronouns.map(() => '')));
    setRetypes(exercise.sections.map(s => s.pronouns.map(() => '')));
    setTypoForgiven(exercise.sections.map(s => s.pronouns.map(() => false)));
    setChecked(false);
  }

  return (
    <div className="space-y-5">
      {/* Verb header */}
      <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{t('Verb', 'Verb')}</p>
          <p className="text-3xl font-bold text-gray-900 mt-0.5">{exercise.verb}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{t('Tenses', 'Zeitformen')}</p>
          <p className="text-sm font-semibold text-red-700 mt-0.5">{exercise.sections.length}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm">{uiLang === 'de'
          ? exercise.instruction.replace(/^Conjugate "(.+?)" \((.+?)\): (.+)$/, 'Konjugiere „$1“ ($2): $3')
          : exercise.instruction}</p>

      {/* Tense sections */}
      <div className="space-y-4">
        {exercise.sections.map((section, si) => {
          const sectionResults = checked ? effectiveResults[si] : [];
          const sectionCorrect = sectionResults.filter(Boolean).length;
          const sectionPerfect = checked && sectionResults.every(Boolean);
          const sectionWrong = checked && !sectionPerfect;

          return (
            <div
              key={si}
              className={`rounded-xl border-2 overflow-hidden transition-colors ${
                sectionPerfect
                  ? 'border-green-300'
                  : sectionWrong
                  ? 'border-red-200'
                  : 'border-gray-200'
              }`}
            >
              {/* Section header */}
              <div
                className={`px-4 py-2.5 flex items-center justify-between ${
                  sectionPerfect
                    ? 'bg-green-50'
                    : sectionWrong
                    ? 'bg-red-50'
                    : 'bg-gray-50'
                }`}
              >
                <div>
                  <span className="font-semibold text-gray-800 text-sm">{tenseName(section.tenseName_de, uiLang)}</span>
                  <span className="text-gray-400 text-xs ml-2 italic">{section.tense}</span>
                </div>
                {checked && (
                  <span className="flex items-center gap-2">
                    <SpeakButton
                      lang={lang}
                      text={section.pronouns.map((p, pi) => spokenForm(p, section.answers[pi], lang)).join(', ')}
                    />
                    <span
                      className={`text-xs font-semibold ${
                        sectionPerfect ? 'text-green-700' : 'text-red-600'
                      }`}
                    >
                      {sectionCorrect}/{section.pronouns.length}
                      {sectionPerfect && ' ✓'}
                    </span>
                  </span>
                )}
              </div>

              {/* Pronoun rows */}
              <div className="bg-white divide-y divide-gray-100">
                {section.pronouns.map((pronoun, pi) => {
                  const isCorrect = checked && effectiveResults[si][pi];
                  const isWrong = checked && !results[si][pi] && !typoForgiven[si][pi];
                  const isTypo = checked && typoForgiven[si][pi] && !results[si][pi];
                  const target = section.answers[pi];
                  const retyped = retypeOk(si, pi);
                  return (
                    <div
                      key={pi}
                      className={`px-4 py-2 ${
                        isCorrect ? 'bg-green-50' : isTypo ? 'bg-amber-50' : isWrong ? 'bg-red-50' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400 w-36 shrink-0">{pronoun}</span>
                        <input
                          type="text"
                          value={answers[si][pi]}
                          disabled={checked}
                          onChange={e => setAnswer(si, pi, e.target.value)}
                          onKeyDown={e => {
                            if (e.key === 'Enter') {
                              const nextPi = pi + 1;
                              const nextSi = si + (nextPi >= section.pronouns.length ? 1 : 0);
                              const actualPi = nextPi >= section.pronouns.length ? 0 : nextPi;
                              if (nextSi < exercise.sections.length) {
                                const id = `inp-${nextSi}-${actualPi}`;
                                document.getElementById(id)?.focus();
                              }
                            }
                          }}
                          id={`inp-${si}-${pi}`}
                          placeholder="..."
                          className={`flex-1 border-b bg-transparent text-sm transition-colors disabled:opacity-100 ${
                            isCorrect || isTypo
                              ? 'border-green-400 text-green-700'
                              : isWrong
                              ? 'border-red-400 text-red-600'
                              : 'border-gray-300 focus:border-red-600 text-gray-900'
                          }`}
                        />
                        {isTypo && (
                          <span className="text-xs text-amber-700 font-medium shrink-0">{t('typo', 'Tippfehler')}</span>
                        )}
                        {isWrong && (
                          <span className="text-sm text-green-700 font-semibold shrink-0">
                            {target}
                          </span>
                        )}
                      </div>

                      {isWrong && (
                        <div className="flex items-center gap-2 mt-1.5 sm:pl-[9.75rem]">
                          <span className="text-xs text-amber-600 shrink-0">{t('Rewrite to learn:', 'Zum Einprägen abschreiben:')}</span>
                          <input
                            type="text"
                            value={retypes[si][pi]}
                            onChange={e => setRetype(si, pi, e.target.value)}
                            placeholder={target}
                            className={`flex-1 min-w-0 border-b bg-transparent text-sm py-0.5 outline-none transition-colors ${
                              retyped
                                ? 'border-green-500 text-green-700'
                                : 'border-amber-400 text-amber-700 focus:border-amber-600'
                            }`}
                          />
                          {retyped && <span className="text-green-600 text-sm shrink-0">✓</span>}
                          <button
                            type="button"
                            onClick={() => forgiveTypo(si, pi)}
                            disabled={!retyped}
                            className="shrink-0 text-xs font-semibold px-2 py-1 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 disabled:opacity-40 transition-colors"
                          >
                            {t('Typo', 'Tippfehler')}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Notes */}
              {section.notes && (
                <div className="px-4 py-2 bg-amber-50 border-t border-amber-100 text-xs text-amber-700">
                  {section.notes}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      {!checked ? (
        <button
          onClick={check}
          className="w-full py-3 bg-red-700 hover:bg-red-800 text-white rounded-xl font-medium transition-colors"
        >
          {t('Check', 'Prüfen')}
        </button>
      ) : (
        <div className="space-y-3">
          <div
            className={`p-4 rounded-xl text-center font-medium ${
              totalCorrect === totalQuestions
                ? 'bg-green-100 text-green-800'
                : totalCorrect >= totalQuestions * 0.7
                ? 'bg-amber-50 text-amber-800'
                : 'bg-red-50 text-red-800'
            }`}
          >
            {perfectSections}/{exercise.sections.length} {t('tenses perfect', 'Zeitformen fehlerfrei')} ·{' '}
            {totalCorrect}/{totalQuestions} {t('forms correct', 'Formen richtig')}
            {totalCorrect === totalQuestions && ' 🎉'}
          </div>
          {!allWrongHandled && results.some(row => row.some(ok => !ok)) && (
            <p className="text-xs text-gray-500 text-center">
              {t(
                'Rewrite each wrong form correctly – and tap “Typo” if it was just a slip.',
                'Schreib jede falsche Form richtig ab – und tippe auf „Tippfehler“, wenn es nur ein Vertipper war.',
              )}
            </p>
          )}
          <button
            onClick={saveAndContinue}
            disabled={!allWrongHandled}
            className="w-full py-3 bg-red-700 hover:bg-red-800 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl font-medium transition-colors"
          >
            {continueLabel ?? t('Continue', 'Weiter')}
          </button>
          <button
            onClick={reset}
            className="w-full py-2 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-xl text-sm transition-colors"
          >
            {t('Try again', 'Nochmal')}
          </button>
        </div>
      )}
    </div>
  );
}
