import type { Lang } from './lang';
import { GRAMMAR_LESSONS as IT_LESSONS, GrammarLesson } from './grammar-lessons';
import { GRAMMAR_LESSONS as ES_LESSONS } from './es/grammar-lessons';
import { GRAMMAR_LESSONS as FR_LESSONS } from './fr/grammar-lessons';
import { GRAMMAR_LESSONS as PT_LESSONS } from './pt/grammar-lessons';
import { GRAMMAR_LESSONS as BR_LESSONS } from './br/grammar-lessons';
import { GRAMMAR_TOPICS as IT_TOPICS, GrammarTopic } from './grammar-exercises';
import { ES_GRAMMAR_TOPICS } from './es/grammar-exercises';
import { FR_GRAMMAR_TOPICS } from './fr/grammar-exercises';
import { GRAMMAR_TOPICS as PT_TOPICS } from './pt/grammar-exercises';
import { GRAMMAR_TOPICS as BR_TOPICS } from './br/grammar-exercises';

// Grammar per language: cloze exercises (A1–B1) and the Grundlagen lessons.
export const LESSONS_BY_LANG: Record<Lang, GrammarLesson[]> = { it: IT_LESSONS, es: ES_LESSONS, fr: FR_LESSONS, pt: PT_LESSONS, br: BR_LESSONS };
export const TOPICS_BY_LANG: Record<Lang, GrammarTopic[]> = { it: IT_TOPICS, es: ES_GRAMMAR_TOPICS, fr: FR_GRAMMAR_TOPICS, pt: PT_TOPICS, br: BR_TOPICS };
