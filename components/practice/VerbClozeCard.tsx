'use client';

import type { Lang } from '@/lib/lang';
import { clozeLead, type VerbStep } from '@/lib/verb-cloze';
import { conjugationMatches } from '@/lib/conjugation-match';
import { spokenForm } from '@/lib/speech';
import { useT, useUiLang, tenseName } from '@/lib/ui-lang';
import TypeCard from './TypeCard';

// One verb-form question: a cloze sentence (tense hidden — recognising it from
// the sentence is the point) when the step carries one, else the classic
// "pronoun ___" drill with the tense named.
export default function VerbClozeCard({
  step,
  lang,
  onResult,
}: {
  step: VerbStep;
  lang: Lang;
  onResult: (correct: boolean, userAnswer: string) => void;
}) {
  const t = useT();
  const [uiLang] = useUiLang();
  const check = (v: string) => ({ correct: conjugationMatches(v, step.answer) });

  if (step.clozeBefore !== undefined) {
    const before = clozeLead(step.clozeBefore, step.answer, lang);
    return (
      <TypeCard
        label={t('Complete the sentence', 'Vervollständige den Satz')}
        prompt={
          <span>
            {before}
            <span className="text-gray-400 font-medium">({step.verb})</span> ＿＿{step.clozeAfter}
          </span>
        }
        answer={step.answer}
        check={check}
        speakText={`${before}${step.answer}${step.clozeAfter}`}
        lang={lang}
        onResult={onResult}
      />
    );
  }

  return (
    <TypeCard
      label={`${t('Conjugate', 'Konjugiere')} · ${tenseName(step.tenseLabel, uiLang)}`}
      prompt={
        <span>
          <span className="text-gray-400 font-medium">{step.pronoun}</span> ＿＿
        </span>
      }
      sub={step.verb}
      answer={step.answer}
      check={check}
      speakText={spokenForm(step.pronoun, step.answer, lang)}
      lang={lang}
      onResult={onResult}
    />
  );
}
