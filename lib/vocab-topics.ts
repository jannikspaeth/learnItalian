// Topic areas for the vocabulary catalog. Every CatalogWord carries one topic;
// the Learn tab can be narrowed to a topic and the Words list grouped by it.
// Verbs and adjectives get their own topics (rather than being spread across
// themes) so they can be drilled as a group; nouns and phrases go by theme.

export const TOPICS = [
  { id: 'begruessung', label: 'Begrüßung & Höflichkeit', icon: '👋' },
  { id: 'grundwoerter', label: 'Kleine Wörter', icon: '🧩' },
  { id: 'zahlen', label: 'Zahlen & Mengen', icon: '🔢' },
  { id: 'zeit', label: 'Zeit & Kalender', icon: '🕐' },
  { id: 'farben', label: 'Farben & Formen', icon: '🎨' },
  { id: 'familie', label: 'Familie & Menschen', icon: '👨‍👩‍👧' },
  { id: 'koerper', label: 'Körper', icon: '🫀' },
  { id: 'gesundheit', label: 'Gesundheit', icon: '🏥' },
  { id: 'essen', label: 'Essen & Trinken', icon: '🍝' },
  { id: 'wohnen', label: 'Wohnen & Haushalt', icon: '🏠' },
  { id: 'kleidung', label: 'Kleidung', icon: '👕' },
  { id: 'stadt', label: 'Stadt & Orte', icon: '🏙️' },
  { id: 'reisen', label: 'Reisen & Verkehr', icon: '✈️' },
  { id: 'natur', label: 'Natur & Wetter', icon: '🌳' },
  { id: 'tiere', label: 'Tiere', icon: '🐾' },
  { id: 'laender', label: 'Länder & Orte der Welt', icon: '🌍' },
  { id: 'schule', label: 'Schule & Lernen', icon: '📚' },
  { id: 'arbeit', label: 'Arbeit & Berufe', icon: '💼' },
  { id: 'geld', label: 'Geld & Einkaufen', icon: '💶' },
  { id: 'technik', label: 'Technik & Material', icon: '💻' },
  { id: 'freizeit', label: 'Freizeit & Kultur', icon: '⚽' },
  { id: 'gefuehle', label: 'Gefühle & Charakter', icon: '😊' },
  { id: 'gesellschaft', label: 'Gesellschaft & Politik', icon: '🏛️' },
  { id: 'abstrakt', label: 'Ideen & Begriffe', icon: '💭' },
  { id: 'verben', label: 'Verben', icon: '🏃' },
  { id: 'adjektive', label: 'Eigenschaften', icon: '✨' },
] as const;

export type TopicId = (typeof TOPICS)[number]['id'];

export const TOPIC_IDS = new Set<string>(TOPICS.map(t => t.id));

export function topicInfo(id: string) {
  return TOPICS.find(t => t.id === id);
}
