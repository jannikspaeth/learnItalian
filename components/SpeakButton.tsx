'use client';

import { useEffect, useRef, useState } from 'react';
import { speak, stopSpeaking, useSpeechSupported, NORMAL_RATE, SLOW_RATE } from '@/lib/speech';
import type { Lang } from '@/lib/lang';
import { Volume2, Turtle } from 'lucide-react';
import { useT } from '@/lib/ui-lang';

// 🔊 read-aloud button. Renders nothing where the browser can't speak. `slow`
// reads at a slower pace (🐢) — handy for dictation and long sentences.
export default function SpeakButton({
  text,
  lang,
  slow = false,
  size = 'sm',
  className = '',
  label,
}: {
  text: string;
  lang: Lang;
  slow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}) {
  const supported = useSpeechSupported();
  const [playing, setPlaying] = useState(false);
  const playingRef = useRef(false);
  const t = useT();

  // Stop reading when the button goes away mid-sentence (next card, page change).
  useEffect(() => () => { if (playingRef.current) stopSpeaking(); }, []);

  if (!supported || !text.trim()) return null;

  const dims =
    size === 'lg' ? 'h-12 min-w-12' : size === 'md' ? 'h-9 min-w-9' : 'h-7 min-w-7';
  const icon = size === 'lg' ? 'w-6 h-6' : size === 'md' ? 'w-5 h-5' : 'w-4 h-4';
  const Icon = slow ? Turtle : Volume2;

  return (
    <button
      type="button"
      onClick={e => {
        e.stopPropagation();
        setPlaying(true);
        playingRef.current = true;
        speak(text, lang, {
          rate: slow ? SLOW_RATE : NORMAL_RATE,
          onEnd: () => { playingRef.current = false; setPlaying(false); },
        });
      }}
      title={slow ? t('Read aloud slowly', 'Langsam vorlesen') : t('Read aloud', 'Vorlesen')}
      aria-label={slow ? t('Read aloud slowly', 'Langsam vorlesen') : t('Read aloud', 'Vorlesen')}
      className={`inline-flex items-center justify-center gap-1 px-1.5 rounded-full shrink-0 transition-colors ${dims} ${
        playing ? 'bg-red-700 text-white' : 'bg-red-50 text-red-700 hover:bg-red-100'
      } ${className}`}
    >
      <Icon className={icon} aria-hidden />
      {label && <span className="text-xs font-medium pr-1">{label}</span>}
    </button>
  );
}
