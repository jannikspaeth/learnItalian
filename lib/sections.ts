import { BookOpen, SpellCheck, BookMarked, PenLine, Newspaper, Trophy, CircleHelp, Zap, Hash, MessagesSquare, NotebookPen } from 'lucide-react';

// The app's sections, shared by the navigation, the "Practise" hub and the
// profile page. Labels are [English, German].

export const PRACTICE = [
  {
    href: '/vokabeln',
    label: ['Vocabulary', 'Vokabeln'],
    hint: ['Flashcards with spaced repetition', 'Karteikarten mit Wiederholungsplan'],
    Icon: BookOpen,
  },
  {
    href: '/konjugation',
    label: ['Verbs', 'Verben'],
    hint: ['Conjugate every tense', 'Alle Zeitformen konjugieren'],
    Icon: SpellCheck,
  },
  {
    href: '/grammar',
    label: ['Grammar', 'Grammatik'],
    hint: ['Exercises and lessons A1–B1', 'Übungen und Lektionen A1–B1'],
    Icon: BookMarked,
  },
  {
    href: '/saetze',
    label: ['Sentences & Dictation', 'Sätze & Diktat'],
    hint: ['Translate and write what you hear', 'Übersetzen und Gehörtes aufschreiben'],
    Icon: PenLine,
  },
  {
    href: '/lesen',
    label: ['Reading', 'Lesen'],
    hint: ['Short texts, tap any word', 'Kurze Texte, jedes Wort antippbar'],
    Icon: Newspaper,
  },
  {
    href: '/redemittel',
    label: ['Phrases', 'Redemittel'],
    hint: ['What to say in real situations', 'Was man in echten Situationen sagt'],
    Icon: MessagesSquare,
  },
  {
    href: '/schreiben',
    label: ['Writing', 'Schreiben'],
    hint: ['Build, rewrite and write sentences', 'Sätze bauen, umformen und schreiben'],
    Icon: NotebookPen,
  },
  {
    href: '/artikel',
    label: ['Article blitz', 'Artikel-Blitz'],
    hint: ['Gender of every noun, fast', 'Genus im Schnelldurchlauf'],
    Icon: Zap,
  },
  {
    href: '/zahlen',
    label: ['Numbers & time', 'Zahlen & Uhrzeit'],
    hint: ['Numbers, clock times, dates', 'Zahlen, Uhrzeiten, Datum'],
    Icon: Hash,
  },
] as const;

export const ACCOUNT = [
  { href: '/erfolge', label: ['Achievements', 'Erfolge'], Icon: Trophy },
  { href: '/help', label: ['Help', 'Hilfe'], Icon: CircleHelp },
] as const;
