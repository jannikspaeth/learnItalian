// Topic areas for the vocabulary catalog. Every CatalogWord carries one topic;
// the Learn tab can be narrowed to a topic and the Words list grouped by it.
// Verbs and adjectives get their own topics (rather than being spread across
// themes) so they can be drilled as a group; nouns and phrases go by theme.

export const TOPICS = [
  { id: 'begruessung', label: 'Begrüßung & Höflichkeit', icon: 'hand' },
  { id: 'grundwoerter', label: 'Kleine Wörter', icon: 'puzzle' },
  { id: 'zahlen', label: 'Zahlen & Mengen', icon: 'hash' },
  { id: 'zeit', label: 'Zeit & Kalender', icon: 'clock' },
  { id: 'farben', label: 'Farben & Formen', icon: 'palette' },
  { id: 'familie', label: 'Familie & Menschen', icon: 'users' },
  { id: 'koerper', label: 'Körper', icon: 'bodyHeart' },
  { id: 'gesundheit', label: 'Gesundheit', icon: 'hospital' },
  { id: 'essen', label: 'Essen & Trinken', icon: 'utensils' },
  { id: 'wohnen', label: 'Wohnen & Haushalt', icon: 'home' },
  { id: 'kleidung', label: 'Kleidung', icon: 'shirt' },
  { id: 'stadt', label: 'Stadt & Orte', icon: 'city' },
  { id: 'reisen', label: 'Reisen & Verkehr', icon: 'plane' },
  { id: 'natur', label: 'Natur & Wetter', icon: 'tree' },
  { id: 'tiere', label: 'Tiere', icon: 'paw' },
  { id: 'laender', label: 'Länder & Orte der Welt', icon: 'globe' },
  { id: 'schule', label: 'Schule & Lernen', icon: 'books' },
  { id: 'arbeit', label: 'Arbeit & Berufe', icon: 'briefcase' },
  { id: 'geld', label: 'Geld & Einkaufen', icon: 'money' },
  { id: 'technik', label: 'Technik & Material', icon: 'laptop' },
  { id: 'freizeit', label: 'Freizeit & Kultur', icon: 'ball' },
  { id: 'gefuehle', label: 'Gefühle & Charakter', icon: 'smile' },
  { id: 'gesellschaft', label: 'Gesellschaft & Politik', icon: 'landmark' },
  { id: 'abstrakt', label: 'Ideen & Begriffe', icon: 'thought' },
  { id: 'verben', label: 'Verben', icon: 'steps' },
  { id: 'adjektive', label: 'Eigenschaften', icon: 'sparkles' },
] as const;

export type TopicId = (typeof TOPICS)[number]['id'];

export const TOPIC_IDS = new Set<string>(TOPICS.map(t => t.id));

export function topicInfo(id: string) {
  return TOPICS.find(t => t.id === id);
}
