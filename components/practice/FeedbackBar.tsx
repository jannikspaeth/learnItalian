'use client';

import { Check, X } from 'lucide-react';
import { useT } from '@/lib/ui-lang';

// After checking an answer: a bar slides up from the bottom with the verdict, the
// solution and the "Next" button — always in the same place, in thumb reach.
export default function FeedbackBar({
  correct,
  children,
  onNext,
  secondary,
  actions,
  title,
}: {
  correct: boolean;
  children?: React.ReactNode;      // the solution, notes, a speak button …
  onNext?: () => void;
  secondary?: { label: string; onClick: () => void };
  actions?: React.ReactNode;       // replaces the Continue row (e.g. rating buttons)
  title?: string;                  // replaces "Correct!" / "Almost – the answer is:"
}) {
  const t = useT();
  return (
    <div
      role="status"
      className={`feedback-bar fixed bottom-0 left-0 right-0 md:left-56 z-[60] border-t rounded-t-3xl px-5 pt-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] ${
        correct ? 'bg-green-50 border-green-200' : 'bg-red-100 border-red-200'
      }`}
    >
      <div className="max-w-xl mx-auto space-y-3">
        <p className={`flex items-center gap-2.5 font-display text-[22px] ${correct ? 'text-green-800' : 'text-red-800'}`}>
          <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${correct ? 'bg-green-700' : 'bg-red-700'}`}>
            {correct ? <Check className="w-5 h-5" strokeWidth={3} /> : <X className="w-5 h-5" strokeWidth={3} />}
          </span>
          {title ?? (correct ? t('Correct!', 'Richtig!') : t('Almost – the answer is:', 'Fast! Richtig ist:'))}
        </p>
        {children && <div className="text-gray-900">{children}</div>}
        {actions ?? (
          <div className="flex gap-2 pt-1">
            {secondary && (
              <button
                type="button"
                onClick={secondary.onClick}
                className={`px-4 h-12 rounded-full border-2 text-sm font-semibold transition-colors ${
                  correct ? 'border-green-300 text-green-800 hover:bg-green-100' : 'border-red-300 text-red-800 hover:bg-red-50'
                }`}
              >
                {secondary.label}
              </button>
            )}
            <button
              type="button"
              onClick={onNext}
              className={`flex-1 h-12 rounded-full text-white font-semibold transition-colors ${
                correct ? 'bg-green-700 hover:bg-green-800' : 'bg-red-700 hover:bg-red-800'
              }`}
            >
              {t('Continue', 'Weiter')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
