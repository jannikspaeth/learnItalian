// Names of the icons the content may use. The content files (grammar topics,
// reading texts, vocabulary topics, phrase situations, badges …) store a name,
// never an emoji; components/Icon.tsx maps each name to a lucide icon, and
// TypeScript makes sure every name in this list has one.

export const ICON_NAMES = [
  // grammar and language
  'word', 'letters', 'article', 'scale', 'repeat', 'shuffle', 'pin', 'hand',
  'question', 'ban', 'sparkles', 'box', 'heart', 'mirror', 'zap', 'pointer',
  'swap', 'rewind', 'back', 'forward', 'hourglass', 'clock', 'wand', 'target',
  'mail', 'chart', 'megaphone', 'brain', 'speech', 'chat', 'thought', 'link',
  'knot', 'puzzle', 'compass', 'ruler', 'steps', 'refresh', 'dot', 'timer',
  'users', 'user', 'check', 'door', 'blocks', 'gift', 'rainbow', 'search',
  'film', 'landmark', 'fog', 'bag', 'quote',
  // things and places
  'croissant', 'bodyHeart', 'stethoscope', 'hospital', 'shirt', 'plane', 'tree',
  'paw', 'money', 'laptop', 'ball', 'smile', 'city', 'home', 'book', 'books',
  'palette', 'hash', 'cart', 'train', 'hotel', 'phone', 'smartphone', 'coffee',
  'alarm', 'apple', 'carrot', 'pot', 'chef', 'utensils', 'baby', 'graduation',
  'clover', 'guitar', 'drum', 'luggage', 'sunrise', 'sun', 'beach', 'palm',
  'snail', 'boat', 'grape', 'citrus', 'castle', 'calendar', 'briefcase',
  'mountain', 'waves',
  // app, progress and feedback
  'flame', 'party', 'star', 'medal', 'trophy', 'rocket', 'pen', 'pencil',
  'bookmark', 'news', 'folder', 'headphones', 'volume', 'turtle', 'download',
  'globe', 'sync', 'warning', 'sos', 'lightbulb', 'handshake', 'menu',
] as const;

export type IconName = (typeof ICON_NAMES)[number];

export function isIconName(v: string): v is IconName {
  return (ICON_NAMES as readonly string[]).includes(v);
}
