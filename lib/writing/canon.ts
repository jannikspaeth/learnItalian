// The free writing tasks (B): the German instruction is written once here, each
// language supplies its own phrases and model answer (lib/writing/<lang>.ts).

import type { IconName } from '../icon-names';
export interface WritingTaskSpec {
  id: string;
  icon: IconName;
  title: string;    // German
  task: string;     // German instruction
  points: string[]; // what the text should mention
  words: number;    // rough target length
}

export const WRITING_TASKS: WritingTaskSpec[] = [
  {
    id: 'vorstellen',
    icon: 'hand',
    title: 'Stell dich vor',
    task: 'Schreib fünf Sätze über dich – als würdest du jemanden kennenlernen.',
    points: ['Name und Alter', 'woher du kommst und wo du wohnst', 'was du beruflich machst', 'ein Hobby', 'warum du die Sprache lernst'],
    words: 45,
  },
  {
    id: 'tagesablauf',
    icon: 'clock',
    title: 'Dein Tagesablauf',
    task: 'Beschreib einen ganz normalen Tag – im Präsens, der Reihe nach.',
    points: ['wann du aufstehst', 'was du frühstückst', 'wie du zur Arbeit kommst', 'was du am Abend machst', 'wann du ins Bett gehst'],
    words: 50,
  },
  {
    id: 'zimmer',
    icon: 'hotel',
    title: 'E-Mail: Zimmer reservieren',
    task: 'Schreib eine kurze, höfliche E-Mail an ein Hotel.',
    points: ['Anrede', 'Zimmer für zwei Personen, zwei Nächte', 'das Datum', 'eine Frage (Frühstück? Parkplatz?)', 'Gruß'],
    words: 50,
  },
  {
    id: 'urlaub',
    icon: 'beach',
    title: 'Dein letzter Urlaub',
    task: 'Erzähl von deinem letzten Urlaub – in der Vergangenheit.',
    points: ['wohin du gefahren bist', 'mit wem', 'wie lange', 'was du gemacht hast', 'wie es war'],
    words: 55,
  },
  {
    id: 'stadt',
    icon: 'city',
    title: 'Deine Stadt',
    task: 'Beschreib die Stadt, in der du wohnst.',
    points: ['wo sie liegt und wie groß sie ist', 'was es dort gibt', 'was dir gefällt', 'was dir nicht gefällt', 'was man dort unbedingt machen sollte'],
    words: 55,
  },
  {
    id: 'einladung',
    icon: 'mail',
    title: 'Antwort auf eine Einladung',
    task: 'Eine Freundin lädt dich am Samstag zum Essen ein. Antworte ihr.',
    points: ['bedank dich', 'sag zu oder ab', 'nenn einen Grund', 'frag nach etwas (Uhrzeit? Was mitbringen?)', 'ein freundlicher Schluss'],
    words: 45,
  },
];
