import type { WritingPack } from './types';

// Italian writing practice. The sentences target what German speakers get wrong
// in Italian: clitic pronouns before the verb, the two-part negation, adjectives
// after the noun, piacere with an indirect object, and agreement in the perfect.
export const IT_WRITING: WritingPack = {
  order: [
    { id: 'o-01', de: 'Ich gebe es dir morgen.', answer: 'Te lo do domani.', hint: 'Zwei Pronomen: erst das indirekte (te), dann das direkte (lo) – beide vor dem Verb.' },
    { id: 'o-02', de: 'Ich sehe ihn nie.', answer: 'Non lo vedo mai.', hint: 'Verneinung in zwei Teilen: non vor dem Verb, mai danach. Das Pronomen steht dazwischen.' },
    { id: 'o-03', de: 'Ich habe sie gestern getroffen.', answer: "L'ho incontrata ieri.", alt: ["Ieri l'ho incontrata."], hint: 'Direktes Pronomen vor dem Hilfsverb; das Partizip gleicht sich an: incontrata.' },
    { id: 'o-04', de: 'Ich habe nichts gesagt.', answer: 'Non ho detto niente.', hint: 'non + Hilfsverb + Partizip + niente – niente steht hinten.' },
    { id: 'o-05', de: 'Wir gehen nie ins Kino.', answer: 'Non andiamo mai al cinema.', hint: 'mai steht direkt hinter dem konjugierten Verb.' },
    { id: 'o-06', de: 'Ein schönes rotes Auto.', answer: 'Una bella macchina rossa.', hint: 'bello steht vor dem Nomen, Farben immer dahinter.' },
    { id: 'o-07', de: 'Das ist ein italienischer Freund.', answer: 'Questo è un amico italiano.', hint: 'Herkunftsadjektive stehen hinter dem Nomen.' },
    { id: 'o-08', de: 'Wann kommt der Zug an?', answer: 'Quando arriva il treno?', hint: 'Fragewort, dann Verb, dann Subjekt – kein Hilfsverb wie im Deutschen.' },
    { id: 'o-09', de: 'Wie viel kostet dieses Buch?', answer: 'Quanto costa questo libro?', hint: 'quanto + Verb + Subjekt.' },
    { id: 'o-10', de: 'Mit wem gehst du ins Kino?', answer: 'Con chi vai al cinema?', hint: 'Die Präposition steht vorne beim Fragewort: con chi.' },
    { id: 'o-11', de: 'Mir gefallen diese Schuhe.', answer: 'Mi piacciono queste scarpe.', hint: 'Bei piacere ist das Gefallende das Subjekt – Plural: piacciono.' },
    { id: 'o-12', de: 'Meiner Schwester gefällt der Film nicht.', answer: 'A mia sorella non piace il film.', hint: 'Die Person steht mit a; non kommt direkt vor piace.' },
    { id: 'o-13', de: 'Ich stehe jeden Tag um sieben auf.', answer: 'Mi alzo ogni giorno alle sette.', alt: ['Ogni giorno mi alzo alle sette.'], hint: 'Reflexivpronomen mi steht vor dem Verb.' },
    { id: 'o-14', de: 'Sie ist gestern nach Rom gefahren.', answer: 'Ieri è andata a Roma.', alt: ['È andata a Roma ieri.'], hint: 'andare bildet das Perfekt mit essere – das Partizip gleicht sich an: andata.' },
    { id: 'o-15', de: 'Ich habe ihm schon geschrieben.', answer: 'Gli ho già scritto.', hint: 'Pronomen vor dem Hilfsverb, già zwischen Hilfsverb und Partizip.' },
    { id: 'o-16', de: 'Ich habe immer gut gegessen.', answer: 'Ho sempre mangiato bene.', hint: 'sempre steht zwischen Hilfsverb und Partizip.' },
    { id: 'o-17', de: 'Ich gehe oft dorthin.', answer: 'Ci vado spesso.', hint: 'ci ersetzt den Ort und steht vor dem Verb.' },
    { id: 'o-18', de: 'Ich habe drei davon gekauft.', answer: 'Ne ho comprati tre.', hint: 'ne ersetzt „davon"; das Partizip gleicht sich an die Menge an: comprati.' },
    { id: 'o-19', de: 'Dieses Buch ist interessanter als jenes.', answer: 'Questo libro è più interessante di quello.', hint: 'Steigerung mit più … di.' },
    { id: 'o-20', de: 'Ich glaube, dass er morgen kommt.', answer: 'Credo che lui arrivi domani.', hint: 'Nach credo che steht der Congiuntivo: arrivi.' },
  ],

  transform: [
    { id: 't-01', task: 'Ins passato prossimo setzen', source: 'Mangio una pizza.', answer: 'Ho mangiato una pizza.', hint: 'avere + Partizip: mangiato.' },
    { id: 't-02', task: 'Ins passato prossimo setzen', source: 'Vado al mare.', answer: 'Sono andato al mare.', alt: ['Sono andata al mare.'], hint: 'Bewegungsverben nehmen essere – und das Partizip gleicht sich an.' },
    { id: 't-03', task: 'Ins imperfetto setzen', source: 'Ogni estate vado al mare.', answer: 'Ogni estate andavo al mare.', hint: 'Gewohnheiten in der Vergangenheit: imperfetto.' },
    { id: 't-04', task: 'Ins futuro semplice setzen', source: 'Domani parlo con lui.', answer: 'Domani parlerò con lui.', hint: 'parlare → parlerò.' },
    { id: 't-05', task: 'Frag nach der Uhrzeit', source: 'Marco arriva alle otto.', answer: 'A che ora arriva Marco?', hint: 'a che ora + Verb + Subjekt.' },
    { id: 't-06', task: 'Verneine den Satz', source: 'Ho capito.', answer: 'Non ho capito.', hint: 'non steht vor dem Hilfsverb, nicht vor dem Partizip.' },
    { id: 't-07', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Compro il pane.', answer: 'Lo compro.', hint: 'il pane → lo, und das Pronomen rutscht vor das Verb.' },
    { id: 't-08', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Vedo Maria.', answer: 'La vedo.', hint: 'Maria → la.' },
    { id: 't-09', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Scrivo a mio fratello.', answer: 'Gli scrivo.', hint: 'a mio fratello ist ein indirektes Objekt → gli.' },
    { id: 't-10', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Ho visto i tuoi amici.', answer: 'Li ho visti.', hint: 'i tuoi amici → li; nach li gleicht sich das Partizip an: visti.' },
    { id: 't-11', task: 'In den Plural setzen', source: 'Il ragazzo italiano è simpatico.', answer: 'I ragazzi italiani sono simpatici.', hint: 'Artikel, Nomen, Adjektiv und Verb gehen alle in den Plural.' },
    { id: 't-12', task: 'In die weibliche Form setzen', source: 'Il mio amico è tedesco.', answer: 'La mia amica è tedesca.', hint: 'Auch der Possessivbegleiter passt sich an: la mia.' },
    { id: 't-13', task: 'Höflich formulieren (Lei)', source: 'Come stai?', answer: 'Come sta?', hint: 'Die Höflichkeitsform benutzt die 3. Person Singular.' },
    { id: 't-14', task: 'Höflich formulieren (Lei)', source: 'Puoi aiutarmi?', answer: 'Può aiutarmi?', hint: 'puoi → può.' },
    { id: 't-15', task: 'Als Imperativ (tu) formulieren', source: 'Devi chiamare Marco.', answer: 'Chiama Marco!', hint: '-are-Verben enden im Imperativ (tu) auf -a.' },
    { id: 't-16', task: 'Höflicher mit dem Condizionale', source: 'Voglio un caffè.', answer: 'Vorrei un caffè.', hint: 'voglio klingt fordernd, vorrei höflich.' },
    { id: 't-17', task: 'Mit „Penso che …" beginnen', source: 'È vero.', answer: 'Penso che sia vero.', hint: 'Nach penso che steht der Congiuntivo: sia.' },
    { id: 't-18', task: 'Ins passato prossimo setzen', source: 'Mi alzo presto.', answer: 'Mi sono alzato presto.', alt: ['Mi sono alzata presto.'], hint: 'Reflexive Verben bilden das Perfekt mit essere.' },
    { id: 't-19', task: 'Mit stare + Gerundium (gerade dabei sein)', source: 'Leggo un libro.', answer: 'Sto leggendo un libro.', hint: 'stare + Gerundium für das, was gerade passiert.' },
    { id: 't-20', task: 'Unpersönlich mit si formulieren', source: 'La gente mangia bene qui.', answer: 'Si mangia bene qui.', alt: ['Qui si mangia bene.'], hint: 'si + 3. Person Singular = „man".' },
  ],

  letters: [
    {
      id: 'l-01',
      icon: 'home',
      title: 'E-Mail an die Gastfamilie',
      intro: 'Du wohnst nächste Woche bei einer Familie in Bologna und schreibst kurz vor der Ankunft.',
      text: `___ famiglia Rossi,
mi ___ Jannik e arrivo lunedì ___ Bologna.
Il treno ___ alle sette di sera.
___ venire a prendermi alla stazione?
___ anche sapere se posso portare qualcosa dalla Germania.
___ mille per tutto.
Cordiali ___,
Jannik`,
      gaps: [
        { answer: 'Cara', hint: 'Anrede an eine Familie: cara famiglia.' },
        { answer: 'chiamo', hint: 'mi chiamo … – so stellt man sich vor.' },
        { answer: 'a', hint: 'Bei Städten steht a: a Bologna.' },
        { answer: 'arriva', hint: '3. Person Singular von arrivare.' },
        { answer: 'Potete', hint: 'Höfliche Frage an mehrere: potete …?' },
        { answer: 'Vorrei', hint: 'vorrei = ich möchte (höflich).' },
        { answer: 'Grazie', hint: 'grazie mille = vielen Dank.' },
        { answer: 'saluti', hint: 'cordiali saluti = mit freundlichen Grüßen.' },
      ],
      extra: ['sono', 'in'],
      de: `Liebe Familie Rossi,
ich heiße Jannik und komme am Montag in Bologna an.
Der Zug kommt um sieben Uhr abends an.
Könnt ihr mich am Bahnhof abholen?
Ich würde auch gern wissen, ob ich etwas aus Deutschland mitbringen kann.
Vielen Dank für alles.
Herzliche Grüße,
Jannik`,
    },
    {
      id: 'l-02',
      icon: 'smartphone',
      title: 'Nachricht an einen Freund',
      intro: 'Ihr wolltet euch heute Abend treffen, aber du schaffst es nicht und willst verschieben.',
      text: `Ciao Luca,
___ dispiace, ma stasera non ___ venire.
___ lavorare fino a tardi.
___ vederci domani sera?
___ te va bene, ti chiamo alle sei.
___ scusa ancora!
A ___,
Jannik`,
      gaps: [
        { answer: 'mi', hint: 'mi dispiace = es tut mir leid.' },
        { answer: 'posso', hint: '1. Person von potere.' },
        { answer: 'Devo', hint: 'devo = ich muss.' },
        { answer: 'Possiamo', hint: 'Vorschlag in der 1. Person Plural: possiamo …?' },
        { answer: 'Se', hint: 'se = wenn.' },
        { answer: 'Ti', hint: 'ti chiedo scusa – hier kurz: ti scusa ancora.' },
        { answer: 'domani', hint: 'a domani = bis morgen.' },
      ],
      extra: ['sono', 'per'],
      de: `Hallo Luca,
es tut mir leid, aber heute Abend kann ich nicht kommen.
Ich muss bis spät arbeiten.
Können wir uns morgen Abend sehen?
Wenn es dir passt, rufe ich dich um sechs an.
Nochmal Entschuldigung!
Bis morgen,
Jannik`,
    },
  ],

  free: {
    vorstellen: {
      blocks: [
        { target: 'Mi chiamo …', de: 'Ich heiße …' },
        { target: 'Ho … anni.', de: 'Ich bin … Jahre alt.' },
        { target: 'Vengo dalla Germania e abito a …', de: 'Ich komme aus Deutschland und wohne in …' },
        { target: 'Lavoro come …', de: 'Ich arbeite als …' },
        { target: 'Nel tempo libero mi piace …', de: 'In der Freizeit mag ich …' },
        { target: 'Imparo l’italiano perché …', de: 'Ich lerne Italienisch, weil …' },
      ],
      model: 'Mi chiamo Jannik e ho trent’anni. Vengo dalla Germania e abito a Stoccarda. Lavoro come programmatore in una piccola ditta. Nel tempo libero mi piace cucinare e andare in bicicletta. Imparo l’italiano perché vado spesso in Italia e voglio parlare con la gente.',
      modelDe: 'Ich heiße Jannik und bin dreißig Jahre alt. Ich komme aus Deutschland und wohne in Stuttgart. Ich arbeite als Programmierer in einer kleinen Firma. In der Freizeit koche ich gern und fahre Rad. Ich lerne Italienisch, weil ich oft nach Italien fahre und mit den Leuten sprechen möchte.',
    },
    tagesablauf: {
      blocks: [
        { target: 'Mi alzo alle …', de: 'Ich stehe um … auf.' },
        { target: 'Faccio colazione con …', de: 'Ich frühstücke …' },
        { target: 'Vado al lavoro in …', de: 'Ich fahre mit … zur Arbeit.' },
        { target: 'A mezzogiorno …', de: 'Mittags …' },
        { target: 'La sera …', de: 'Abends …' },
        { target: 'Vado a letto verso le …', de: 'Ich gehe gegen … ins Bett.' },
      ],
      model: 'Mi alzo alle sei e mezza e faccio colazione con un caffè e un po’ di pane. Poi vado al lavoro in bicicletta, ci metto venti minuti. A mezzogiorno mangio con i colleghi. La sera cucino e guardo una serie, oppure chiamo un amico. Di solito vado a letto verso le undici.',
      modelDe: 'Ich stehe um halb sieben auf und frühstücke einen Kaffee und etwas Brot. Dann fahre ich mit dem Rad zur Arbeit, ich brauche zwanzig Minuten. Mittags esse ich mit den Kollegen. Abends koche ich und schaue eine Serie, oder ich rufe einen Freund an. Normalerweise gehe ich gegen elf ins Bett.',
    },
    zimmer: {
      blocks: [
        { target: 'Gentili signori,', de: 'Sehr geehrte Damen und Herren,' },
        { target: 'Vorrei prenotare una camera doppia.', de: 'Ich möchte ein Doppelzimmer reservieren.' },
        { target: 'per due notti, dal … al …', de: 'für zwei Nächte, vom … bis zum …' },
        { target: 'La colazione è compresa?', de: 'Ist das Frühstück inklusive?' },
        { target: 'In attesa di una vostra risposta,', de: 'In Erwartung Ihrer Antwort,' },
        { target: 'Cordiali saluti', de: 'Mit freundlichen Grüßen' },
      ],
      model: 'Gentili signori, vorrei prenotare una camera doppia per due notti, dal 12 al 14 maggio. Siamo due persone e arriviamo verso le sei di sera. Vorrei sapere se la colazione è compresa e se c’è un parcheggio vicino all’albergo. In attesa di una vostra risposta, cordiali saluti. Jannik Spath',
      modelDe: 'Sehr geehrte Damen und Herren, ich möchte ein Doppelzimmer für zwei Nächte reservieren, vom 12. bis zum 14. Mai. Wir sind zwei Personen und kommen gegen sechs Uhr abends an. Ich würde gern wissen, ob das Frühstück inklusive ist und ob es in der Nähe des Hotels einen Parkplatz gibt. In Erwartung Ihrer Antwort, mit freundlichen Grüßen. Jannik Spath',
    },
    urlaub: {
      blocks: [
        { target: 'L’anno scorso sono andato/a a …', de: 'Letztes Jahr bin ich nach … gefahren.' },
        { target: 'con la mia famiglia / con un amico', de: 'mit meiner Familie / mit einem Freund' },
        { target: 'Siamo rimasti … giorni.', de: 'Wir sind … Tage geblieben.' },
        { target: 'Abbiamo visitato …', de: 'Wir haben … besichtigt.' },
        { target: 'Mi è piaciuto molto.', de: 'Es hat mir sehr gefallen.' },
      ],
      model: 'L’anno scorso sono andato in Sicilia con la mia ragazza. Siamo rimasti dieci giorni vicino a Catania. Abbiamo visitato Siracusa e siamo saliti sull’Etna. La sera mangiavamo sempre pesce in un piccolo ristorante sul mare. Mi è piaciuto molto, soprattutto la gente.',
      modelDe: 'Letztes Jahr bin ich mit meiner Freundin nach Sizilien gefahren. Wir sind zehn Tage in der Nähe von Catania geblieben. Wir haben Syrakus besichtigt und sind auf den Ätna gestiegen. Abends haben wir immer Fisch in einem kleinen Restaurant am Meer gegessen. Es hat mir sehr gefallen, vor allem die Leute.',
    },
    stadt: {
      blocks: [
        { target: 'Abito a …, nel sud della Germania.', de: 'Ich wohne in …, im Süden Deutschlands.' },
        { target: 'Ci sono circa … abitanti.', de: 'Es gibt ungefähr … Einwohner.' },
        { target: 'In centro c’è …', de: 'Im Zentrum gibt es …' },
        { target: 'Mi piace soprattutto …', de: 'Mir gefällt vor allem …' },
        { target: 'Non mi piace che …', de: 'Mir gefällt nicht, dass …' },
        { target: 'Bisogna assolutamente vedere …', de: 'Man muss unbedingt … sehen.' },
      ],
      model: 'Abito a Stoccarda, nel sud della Germania. Ci sono circa seicentomila abitanti e intorno alla città ci sono molte colline. In centro c’è una bella piazza con il castello e tanti negozi. Mi piace soprattutto il verde: in dieci minuti sei nel bosco. Non mi piace che ci sia sempre troppo traffico. Bisogna assolutamente vedere il museo delle automobili.',
      modelDe: 'Ich wohne in Stuttgart, im Süden Deutschlands. Es gibt ungefähr sechshunderttausend Einwohner, und rund um die Stadt sind viele Hügel. Im Zentrum gibt es einen schönen Platz mit dem Schloss und vielen Geschäften. Mir gefällt vor allem das Grün: In zehn Minuten bist du im Wald. Mir gefällt nicht, dass immer zu viel Verkehr ist. Man muss unbedingt das Automuseum sehen.',
    },
    einladung: {
      blocks: [
        { target: 'Grazie mille per l’invito!', de: 'Vielen Dank für die Einladung!' },
        { target: 'Vengo volentieri.', de: 'Ich komme gern.' },
        { target: 'Purtroppo non posso venire, perché …', de: 'Leider kann ich nicht kommen, weil …' },
        { target: 'A che ora devo venire?', de: 'Um wie viel Uhr soll ich kommen?' },
        { target: 'Posso portare qualcosa?', de: 'Kann ich etwas mitbringen?' },
        { target: 'A sabato!', de: 'Bis Samstag!' },
      ],
      model: 'Ciao Anna, grazie mille per l’invito! Vengo volentieri sabato sera. Esco dal lavoro alle sei, quindi posso essere da te verso le otto. A che ora volete mangiare? E posso portare qualcosa, magari un dolce o del vino? Fammi sapere. A sabato!',
      modelDe: 'Hallo Anna, vielen Dank für die Einladung! Ich komme am Samstagabend gern. Ich habe um sechs Feierabend, also kann ich gegen acht bei dir sein. Um wie viel Uhr wollt ihr essen? Und kann ich etwas mitbringen, vielleicht einen Nachtisch oder Wein? Sag mir Bescheid. Bis Samstag!',
    },
  },
};
