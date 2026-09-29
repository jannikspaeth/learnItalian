'use client';

import { useSyncExternalStore } from 'react';
import type { Lang } from './lang';

// Read-aloud via the browser's built-in speech synthesis (Web Speech API): free,
// offline-capable on most devices, no server. Voice quality depends on the device;
// when no voice for the language is installed the browser falls back to its default.

const BCP47: Record<Lang, string> = { it: 'it-IT', es: 'es-ES', fr: 'fr-FR' };

export const NORMAL_RATE = 0.95;
export const SLOW_RATE = 0.65;

function synth(): SpeechSynthesis | null {
  return typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
}

// Prefer an exact locale match (it-IT), then any voice of the language (it-CH …).
function voiceFor(lang: Lang): SpeechSynthesisVoice | undefined {
  const voices = synth()?.getVoices() ?? [];
  const tag = BCP47[lang].toLowerCase();
  const exact = voices.filter(v => v.lang.replace('_', '-').toLowerCase() === tag);
  const pool = exact.length ? exact : voices.filter(v => v.lang.toLowerCase().startsWith(lang));
  // Local voices start instantly and work offline; the "Google"/"Premium" ones sound better.
  return (
    pool.find(v => /premium|enhanced|google/i.test(v.name)) ??
    pool.find(v => v.localService) ??
    pool[0]
  );
}

// Catalog entries carry notes and variants — "andato/a", "il ragazzo / la ragazza",
// "libro (m)", "allé(e)s" — read out the words only.
export function speakableText(text: string): string {
  return text
    .replace(/\(([a-zà-ÿ]{1,2})\)/gi, '')   // agreement markers: allé(e), assis(es)
    .replace(/\s*\([^)]*\)\s*/g, ' ')          // parenthetical notes
    .replace(/(\p{L})\/\p{L}{1,2}\b/gu, '$1')  // andato/a → andato
    .replace(/\s+\/\s+/g, ', ')                // alternatives → short pause
    .replace(/…|___|＿+/g, ' … ')
    .replace(/\s*[→·|]\s*/g, ', ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function canSpeak(): boolean {
  return synth() !== null;
}

export function stopSpeaking(): void {
  synth()?.cancel();
}

export function speak(
  text: string,
  lang: Lang,
  opts: { rate?: number; onEnd?: () => void } = {},
): void {
  const s = synth();
  if (!s) return;
  const clean = speakableText(text);
  if (!clean) return;
  s.cancel(); // never queue up — the latest tap wins
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = BCP47[lang];
  const v = voiceFor(lang);
  if (v) u.voice = v;
  u.rate = opts.rate ?? NORMAL_RATE;
  if (opts.onEnd) {
    u.onend = opts.onEnd;
    u.onerror = opts.onEnd;
  }
  s.speak(u);
}

// True once we know the browser can speak (false during SSR / unsupported).
const noop = () => () => {};
export function useSpeechSupported(): boolean {
  return useSyncExternalStore(noop, canSpeak, () => false);
}

// Some browsers fill the voice list asynchronously; ask early so the right voice
// is ready by the first tap.
if (typeof window !== 'undefined') synth()?.getVoices();

// "pronoun + verb form" as it is spoken: first variant only ("lui / lei" → "lui"),
// imperative pronouns in brackets left out, French je → j' before a vowel.
export function spokenForm(pronoun: string, form: string, lang: Lang): string {
  const f = form.split(' / ')[0].trim();
  if (/^\(.*\)$/.test(pronoun.trim())) return f;
  const p = pronoun.split(' / ')[0].trim();
  if (lang === 'fr' && /(^|\s)je$/.test(p) && /^[aeiouhéèêàâîôûy]/i.test(f)) return p.replace(/je$/, "j'") + f;
  return `${p} ${f}`;
}
