'use client';

import { QuizDirection, quizDirections } from '@/lib/use-quiz-direction';
import { useT } from '@/lib/ui-lang';

export default function QuizDirectionToggle({
  value,
  onChange,
  flag,
}: {
  value: QuizDirection;
  onChange: (d: QuizDirection) => void;
  flag: string; // target language flag
}) {
  const t = useT();
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400 shrink-0">{t('Ask', 'Abfrage')}</span>
      <div className="flex gap-1">
        {quizDirections(flag, t('Mixed', 'Gemischt')).map(([id, label]) => (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
              value === id ? 'bg-red-700 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
