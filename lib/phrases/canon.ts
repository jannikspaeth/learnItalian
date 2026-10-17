// ─── Set phrases for real situations ──────────────────────────────────────────
// The catalogs teach single words; this teaches what you actually say at a
// counter, a doctor's or on the phone. The German side is written once, here, and
// every language file maps the same ids to its own wording — so the five
// languages can't drift apart (lib/phrases/index.ts checks the ids line up).

import type { IconName } from '../icon-names';
export interface PhraseSpec {
  id: string;
  de: string;
  note?: string; // short usage note, German (the learner's L1)
}

export interface SituationSpec {
  id: string;
  icon: IconName;
  label: [string, string]; // [English, German] — UI chrome
  phrases: PhraseSpec[];
}

export const SITUATIONS: SituationSpec[] = [
  {
    id: 'begruessung',
    icon: 'hand',
    label: ['Greetings', 'Begrüßung & Abschied'],
    phrases: [
      { id: 'greet-hello', de: 'Hallo!' },
      { id: 'greet-morning', de: 'Guten Morgen!' },
      { id: 'greet-evening', de: 'Guten Abend!' },
      { id: 'greet-howareyou', de: "Wie geht's?" },
      { id: 'greet-fine', de: 'Danke, gut.' },
      { id: 'greet-name', de: 'Ich heiße Jannik.' },
      { id: 'greet-nicetomeet', de: 'Freut mich!' },
      { id: 'greet-wherefrom', de: 'Ich komme aus Deutschland.' },
      { id: 'greet-bye', de: 'Auf Wiedersehen!' },
      { id: 'greet-seeyou', de: 'Bis später!' },
    ],
  },
  {
    id: 'hoeflichkeit',
    icon: 'handshake',
    label: ['Politeness', 'Höflichkeit & Nachfragen'],
    phrases: [
      { id: 'pol-please', de: 'Bitte.' },
      { id: 'pol-thanks', de: 'Vielen Dank!' },
      { id: 'pol-welcome', de: 'Gern geschehen.' },
      { id: 'pol-sorry', de: 'Entschuldigung!' },
      { id: 'pol-repeat', de: 'Können Sie das wiederholen?' },
      { id: 'pol-slower', de: 'Können Sie langsamer sprechen?' },
      { id: 'pol-notunderstood', de: 'Das habe ich nicht verstanden.' },
      { id: 'pol-english', de: 'Sprechen Sie Englisch?' },
      { id: 'pol-howtosay', de: 'Wie sagt man das?' },
      { id: 'pol-help', de: 'Können Sie mir helfen?' },
    ],
  },
  {
    id: 'smalltalk',
    icon: 'chat',
    label: ['Small talk', 'Small Talk'],
    phrases: [
      { id: 'small-job', de: 'Was machst du beruflich?' },
      { id: 'small-ilivein', de: 'Ich wohne in Stuttgart.' },
      { id: 'small-stilllearning', de: 'Ich lerne noch.' },
      { id: 'small-howold', de: 'Wie alt bist du?' },
      { id: 'small-weather', de: 'Heute ist schönes Wetter.' },
      { id: 'small-firsttime', de: 'Ich bin zum ersten Mal hier.' },
      { id: 'small-holiday', de: 'Ich bin im Urlaub hier.' },
      { id: 'small-ilikeithere', de: 'Mir gefällt es hier sehr.' },
      { id: 'small-andyou', de: 'Und du?' },
      { id: 'small-soon', de: 'Wir sehen uns bald!' },
    ],
  },
  {
    id: 'restaurant',
    icon: 'utensils',
    label: ['Restaurant', 'Restaurant & Café'],
    phrases: [
      { id: 'rest-table', de: 'Einen Tisch für zwei, bitte.' },
      { id: 'rest-menu', de: 'Die Karte, bitte.' },
      { id: 'rest-iwouldlike', de: 'Ich hätte gern einen Kaffee.' },
      { id: 'rest-water', de: 'Ein Glas Wasser, bitte.' },
      { id: 'rest-recommend', de: 'Was empfehlen Sie?' },
      { id: 'rest-vegetarian', de: 'Ich bin Vegetarier.' },
      { id: 'rest-delicious', de: 'Es war sehr lecker!' },
      { id: 'rest-bill', de: 'Die Rechnung, bitte.' },
      { id: 'rest-card', de: 'Kann ich mit Karte zahlen?' },
      { id: 'rest-toilet', de: 'Wo ist die Toilette?' },
    ],
  },
  {
    id: 'einkaufen',
    icon: 'cart',
    label: ['Shopping', 'Einkaufen & Bezahlen'],
    phrases: [
      { id: 'shop-howmuch', de: 'Wie viel kostet das?' },
      { id: 'shop-looking', de: 'Ich suche ein Geschenk.' },
      { id: 'shop-justlooking', de: 'Ich schaue mich nur um.' },
      { id: 'shop-tryon', de: 'Kann ich das anprobieren?' },
      { id: 'shop-toobig', de: 'Das ist mir zu groß.' },
      { id: 'shop-takeit', de: 'Ich nehme es.' },
      { id: 'shop-cheaper', de: 'Haben Sie etwas Günstigeres?' },
      { id: 'shop-bag', de: 'Eine Tüte, bitte.' },
      { id: 'shop-receipt', de: 'Den Kassenzettel, bitte.' },
      { id: 'shop-open', de: 'Wann haben Sie geöffnet?' },
    ],
  },
  {
    id: 'unterwegs',
    icon: 'train',
    label: ['Getting around', 'Unterwegs & Verkehr'],
    phrases: [
      { id: 'way-station', de: 'Wo ist der Bahnhof?' },
      { id: 'way-ticket', de: 'Eine Fahrkarte, bitte.' },
      { id: 'way-platform', de: 'Von welchem Gleis fährt der Zug?' },
      { id: 'way-howlong', de: 'Wie lange dauert die Fahrt?' },
      { id: 'way-nextbus', de: 'Wann kommt der nächste Bus?' },
      { id: 'way-righttrain', de: 'Ist das der richtige Zug?' },
      { id: 'way-getoff', de: 'Wo muss ich aussteigen?' },
      { id: 'way-tocentre', de: 'Wie komme ich zum Zentrum?' },
      { id: 'way-lost', de: 'Ich habe mich verlaufen.' },
      { id: 'way-taxi', de: 'Können Sie mir ein Taxi rufen?' },
    ],
  },
  {
    id: 'uebernachten',
    icon: 'hotel',
    label: ['Hotel', 'Hotel & Unterkunft'],
    phrases: [
      { id: 'hotel-reservation', de: 'Ich habe eine Reservierung.' },
      { id: 'hotel-free', de: 'Haben Sie ein Zimmer frei?' },
      { id: 'hotel-twonights', de: 'Für zwei Nächte, bitte.' },
      { id: 'hotel-breakfast', de: 'Ist das Frühstück inklusive?' },
      { id: 'hotel-wifi', de: 'Wie ist das WLAN-Passwort?' },
      { id: 'hotel-checkout', de: 'Wann müssen wir das Zimmer verlassen?' },
      { id: 'hotel-key', de: 'Der Schlüssel funktioniert nicht.' },
      { id: 'hotel-luggage', de: 'Können wir das Gepäck hier lassen?' },
      { id: 'hotel-quieter', de: 'Haben Sie ein ruhigeres Zimmer?' },
      { id: 'hotel-towels', de: 'Können wir frische Handtücher bekommen?' },
    ],
  },
  {
    id: 'gesundheit',
    icon: 'stethoscope',
    label: ['Doctor', 'Arzt & Apotheke'],
    phrases: [
      { id: 'med-notwell', de: 'Mir geht es nicht gut.' },
      { id: 'med-headache', de: 'Mein Kopf tut weh.' },
      { id: 'med-fever', de: 'Ich habe Fieber.' },
      { id: 'med-doctor', de: 'Ich brauche einen Arzt.' },
      { id: 'med-pharmacy', de: 'Wo ist die nächste Apotheke?' },
      { id: 'med-something', de: 'Haben Sie etwas gegen Kopfschmerzen?' },
      { id: 'med-allergic', de: 'Ich bin allergisch gegen Penicillin.' },
      { id: 'med-insurance', de: 'Hier ist meine Versicherungskarte.' },
      { id: 'med-appointment', de: 'Ich möchte einen Termin.' },
      { id: 'med-better', de: 'Es geht mir schon besser.' },
    ],
  },
  {
    id: 'telefon',
    icon: 'phone',
    label: ['Phone', 'Telefon & Termine'],
    phrases: [
      { id: 'phone-hello', de: 'Hallo, hier spricht Jannik.' },
      { id: 'phone-speakto', de: 'Kann ich mit dem Arzt sprechen?' },
      { id: 'phone-wrongnumber', de: 'Ich glaube, ich habe mich verwählt.' },
      { id: 'phone-callback', de: 'Ich rufe später zurück.' },
      { id: 'phone-makeappointment', de: 'Ich möchte einen Termin vereinbaren.' },
      { id: 'phone-whattime', de: 'Um wie viel Uhr passt es Ihnen?' },
      { id: 'phone-tomorrowten', de: 'Morgen um zehn passt mir gut.' },
      { id: 'phone-badline', de: 'Ich höre Sie schlecht.' },
      { id: 'phone-moment', de: 'Einen Moment, bitte.' },
      { id: 'phone-cancel', de: 'Ich muss den Termin absagen.' },
    ],
  },
  {
    id: 'notfall',
    icon: 'sos',
    label: ['Emergencies', 'Probleme & Notfall'],
    phrases: [
      { id: 'emg-help', de: 'Hilfe!' },
      { id: 'emg-police', de: 'Rufen Sie die Polizei!' },
      { id: 'emg-accident', de: 'Es ist ein Unfall passiert.' },
      { id: 'emg-stolen', de: 'Meine Tasche wurde gestohlen.' },
      { id: 'emg-passport', de: 'Ich habe meinen Pass verloren.' },
      { id: 'emg-ambulance', de: 'Wir brauchen einen Krankenwagen.' },
      { id: 'emg-fire', de: 'Es brennt!' },
      { id: 'emg-notmyfault', de: 'Das war nicht meine Schuld.' },
      { id: 'emg-embassy', de: 'Ich muss die Botschaft anrufen.' },
      { id: 'emg-car', de: 'Mein Auto ist kaputt.' },
    ],
  },
];

export const PHRASE_COUNT = SITUATIONS.reduce((n, s) => n + s.phrases.length, 0);
