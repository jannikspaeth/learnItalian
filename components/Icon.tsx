import {
  AlarmClock, Apple, ArrowLeftRight, Baby, Ban, Banknote, BedDouble, Blocks, BookMarked,
  BookOpen, Brain, Briefcase, Building2, Calendar, Carrot, Castle, ChartColumn, ChefHat,
  CircleCheck, CircleHelp, Citrus, Clapperboard, Clock, Clover, CloudFog, Coffee, Compass,
  CookingPot, Croissant, Dot, DoorOpen, Download, Drum, FlipHorizontal2, Flame, FolderOpen,
  Footprints, Gift, Globe, Grape, GraduationCap, Guitar, Hand, Handshake, Hash, Headphones,
  Heart, HeartPulse, Hospital, House, Hourglass, Laptop, Landmark, Lightbulb, Library, LifeBuoy, Link,
  Link2, Luggage, Mail, MapPin, Megaphone, MessageCircle, MessageCircleDashed, MessagesSquare,
  Mountain, Newspaper, Package, Palette, PartyPopper, PawPrint, PenLine, Pencil, Phone, Pin,
  Plane, Pointer, Puzzle, Quote, Rainbow, RefreshCcw, RefreshCw, Repeat, Rewind, Rocket, Ruler,
  Sailboat, Scale, Search, Shirt, ShoppingBag, ShoppingCart, Shuffle, SkipBack, SkipForward,
  Smartphone, Smile, Snail, Sparkles, SpellCheck, Star, Stethoscope, Sun, Sunrise, Target,
  Timer, TrainFront, TreePalm, TreePine, TriangleAlert, Trophy, Turtle, Type, Umbrella, User,
  Users, UtensilsCrossed, Volume2, Volleyball, Wand2, Waves, WholeWord, Zap, Medal, Menu,
  type LucideIcon,
} from 'lucide-react';
import type { IconName } from '@/lib/icon-names';

// One lucide icon per content icon name (lib/icon-names.ts). The app uses no
// emoji as icons — only the language flags stay, because a flag is the clearest
// label a language can have.
const ICONS = {
  word: Type, letters: SpellCheck, article: WholeWord, scale: Scale, repeat: Repeat,
  shuffle: Shuffle, pin: MapPin, hand: Hand, question: CircleHelp, ban: Ban,
  sparkles: Sparkles, box: Package, heart: Heart, mirror: FlipHorizontal2, zap: Zap,
  pointer: Pointer, swap: ArrowLeftRight, rewind: Rewind, back: SkipBack, forward: SkipForward,
  hourglass: Hourglass, clock: Clock, wand: Wand2, target: Target, mail: Mail, chart: ChartColumn,
  megaphone: Megaphone, brain: Brain, speech: MessageCircle, chat: MessagesSquare,
  thought: MessageCircleDashed, link: Link, knot: Link2, puzzle: Puzzle, compass: Compass,
  ruler: Ruler, steps: Footprints, refresh: RefreshCw, dot: Dot, timer: Timer, users: Users,
  user: User, check: CircleCheck, door: DoorOpen, blocks: Blocks, gift: Gift, rainbow: Rainbow,
  search: Search, film: Clapperboard, landmark: Landmark, fog: CloudFog, bag: ShoppingBag,
  quote: Quote,

  croissant: Croissant, bodyHeart: HeartPulse, stethoscope: Stethoscope, hospital: Hospital,
  shirt: Shirt, plane: Plane, tree: TreePine, paw: PawPrint, money: Banknote, laptop: Laptop,
  ball: Volleyball, smile: Smile, city: Building2, home: House, book: BookOpen,
  books: Library, palette: Palette, hash: Hash, cart: ShoppingCart, train: TrainFront,
  hotel: BedDouble, phone: Phone, smartphone: Smartphone, coffee: Coffee, alarm: AlarmClock,
  apple: Apple, carrot: Carrot, pot: CookingPot, chef: ChefHat, utensils: UtensilsCrossed,
  baby: Baby, graduation: GraduationCap, clover: Clover, guitar: Guitar, drum: Drum,
  luggage: Luggage, sunrise: Sunrise, sun: Sun, beach: Umbrella, palm: TreePalm, snail: Snail,
  boat: Sailboat, grape: Grape, citrus: Citrus, castle: Castle, calendar: Calendar,
  briefcase: Briefcase, mountain: Mountain, waves: Waves,

  flame: Flame, party: PartyPopper, star: Star, medal: Medal, trophy: Trophy, rocket: Rocket,
  pen: PenLine, pencil: Pencil, bookmark: BookMarked, news: Newspaper, folder: FolderOpen,
  headphones: Headphones, volume: Volume2, turtle: Turtle, download: Download, globe: Globe,
  sync: RefreshCcw, warning: TriangleAlert, sos: LifeBuoy, lightbulb: Lightbulb,
  handshake: Handshake, menu: Menu,
} satisfies Record<IconName, LucideIcon>;

// Content icon, sized like the text around it by default.
export default function Icon({
  name,
  className = 'w-5 h-5',
  strokeWidth = 1.75,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name];
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
