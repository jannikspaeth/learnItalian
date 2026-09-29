// Reading texts (/lesen): short graded stories with tap-to-translate and a few
// comprehension questions. One file of texts per language (lib/reading/<lang>.ts).

export type ReadingLevel = 'A1' | 'A2' | 'B1';

export interface ReadingQuestion {
  q: string;          // question in the target language
  options: string[];  // answer options in the target language
  answer: number;     // index of the right option
}

// A gloss is the German meaning, or [German meaning, dictionary form] when the
// word in the text is an inflected form ("belle" → ["schöne", "bello"]).
export type Gloss = string | [de: string, lemma: string];

export interface ReadingText {
  id: string;
  level: ReadingLevel;
  icon: string;
  title: string;          // in the target language
  titleDe: string;
  paragraphs: string[];   // the text, in the target language
  translation: string[];  // German, one per paragraph
  // Words the automatic lookup (vocabulary catalog, verb forms, common words)
  // doesn't find, keyed by the lowercased word as it appears in the text.
  glossary: Record<string, Gloss>;
  questions: ReadingQuestion[];
}
