import type { WritingPack } from './types';

// Spanish writing practice: clitic pronouns before the verb, the double
// negation, adjectives after the noun, gustar with an indirect object, ser vs
// estar, and the subjunctive after expressions of hope and doubt.
export const ES_WRITING: WritingPack = {
  order: [
    { id: 'o-01', de: 'Ich gebe es dir morgen.', answer: 'Te lo doy mañana.', hint: 'Zwei Pronomen: erst das indirekte (te), dann das direkte (lo) – beide vor dem Verb.' },
    { id: 'o-02', de: 'Ich sehe ihn nie.', answer: 'No lo veo nunca.', hint: 'Mit no vor dem Verb steht nunca dahinter – oder nunca allein nach vorn.' },
    { id: 'o-03', de: 'Ich habe sie gestern gesehen.', answer: 'Ayer la vi.', alt: ['La vi ayer.'], hint: 'Das Pronomen steht direkt vor dem konjugierten Verb.' },
    { id: 'o-04', de: 'Ich habe nichts gesagt.', answer: 'No he dicho nada.', hint: 'no vor dem Hilfsverb, nada hinter dem Partizip.' },
    { id: 'o-05', de: 'Wir gehen nie ins Kino.', answer: 'No vamos nunca al cine.', hint: 'Die doppelte Verneinung ist im Spanischen richtig.' },
    { id: 'o-06', de: 'Ein schönes rotes Auto.', answer: 'Un bonito coche rojo.', hint: 'bonito darf vor das Nomen, Farben stehen immer dahinter.' },
    { id: 'o-07', de: 'Das ist ein italienischer Freund.', answer: 'Este es un amigo italiano.', hint: 'Herkunftsadjektive stehen hinter dem Nomen.' },
    { id: 'o-08', de: 'Wann kommt der Zug an?', answer: '¿Cuándo llega el tren?', hint: 'Fragewort, Verb, Subjekt – und vorne das umgekehrte Fragezeichen.' },
    { id: 'o-09', de: 'Wie viel kostet dieses Buch?', answer: '¿Cuánto cuesta este libro?', hint: 'cuánto + Verb + Subjekt.' },
    { id: 'o-10', de: 'Mit wem gehst du ins Kino?', answer: '¿Con quién vas al cine?', hint: 'Die Präposition steht vorne beim Fragewort: con quién.' },
    { id: 'o-11', de: 'Mir gefallen diese Schuhe.', answer: 'Me gustan estos zapatos.', hint: 'Bei gustar ist das Gefallende das Subjekt – Plural: gustan.' },
    { id: 'o-12', de: 'Meiner Schwester gefällt der Film nicht.', answer: 'A mi hermana no le gusta la película.', hint: 'Die Person steht mit a, dazu immer das Pronomen le.' },
    { id: 'o-13', de: 'Ich stehe jeden Tag um sieben auf.', answer: 'Me levanto todos los días a las siete.', alt: ['Todos los días me levanto a las siete.'], hint: 'Das Reflexivpronomen me steht vor dem Verb.' },
    { id: 'o-14', de: 'Sie ist gestern nach Rom gefahren.', answer: 'Ayer fue a Roma.', alt: ['Fue a Roma ayer.'], hint: 'Abgeschlossen und mit Zeitangabe: indefinido fue.' },
    { id: 'o-15', de: 'Ich habe ihm schon geschrieben.', answer: 'Ya le he escrito.', alt: ['Le he escrito ya.'], hint: 'Das Pronomen steht vor dem Hilfsverb, nicht dazwischen.' },
    { id: 'o-16', de: 'Ich habe immer gut gegessen.', answer: 'Siempre he comido bien.', alt: ['He comido siempre bien.'], hint: 'Zwischen he und comido darf nichts stehen – anders als im Italienischen.' },
    { id: 'o-17', de: 'Ich gehe oft dorthin.', answer: 'Voy allí a menudo.', alt: ['A menudo voy allí.'], hint: 'allí ersetzt den Ort und steht hinter dem Verb.' },
    { id: 'o-18', de: 'Die Suppe ist kalt.', answer: 'La sopa está fría.', hint: 'Ein Zustand, der sich ändern kann: estar, nicht ser.' },
    { id: 'o-19', de: 'Dieses Buch ist interessanter als jenes.', answer: 'Este libro es más interesante que aquel.', hint: 'Steigerung mit más … que.' },
    { id: 'o-20', de: 'Ich hoffe, dass er morgen kommt.', answer: 'Espero que venga mañana.', hint: 'Nach espero que steht der Subjuntivo: venga.' },
  ],

  transform: [
    { id: 't-01', task: 'Ins pretérito perfecto setzen', source: 'Como una pizza.', answer: 'He comido una pizza.', hint: 'haber + Partizip, das Partizip bleibt unverändert.' },
    { id: 't-02', task: 'Ins pretérito indefinido setzen', source: 'Voy al mar.', answer: 'Fui al mar.', hint: 'ir und ser haben im indefinido dieselbe Form: fui.' },
    { id: 't-03', task: 'Ins imperfecto setzen', source: 'Todos los veranos voy al mar.', answer: 'Todos los veranos iba al mar.', hint: 'Gewohnheiten in der Vergangenheit: imperfecto.' },
    { id: 't-04', task: 'Ins futuro simple setzen', source: 'Mañana hablo con él.', answer: 'Mañana hablaré con él.', hint: 'hablar → hablaré.' },
    { id: 't-05', task: 'Frag nach der Uhrzeit', source: 'Carlos llega a las ocho.', answer: '¿A qué hora llega Carlos?', hint: 'a qué hora + Verb + Subjekt.' },
    { id: 't-06', task: 'Verneine den Satz', source: 'He entendido.', answer: 'No he entendido.', hint: 'no steht vor dem Hilfsverb.' },
    { id: 't-07', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Compro el pan.', answer: 'Lo compro.', hint: 'el pan → lo, und das Pronomen rutscht vor das Verb.' },
    { id: 't-08', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Veo a María.', answer: 'La veo.', hint: 'a María → la.' },
    { id: 't-09', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Escribo a mi hermano.', answer: 'Le escribo.', hint: 'Indirektes Objekt → le.' },
    { id: 't-10', task: 'Ersetze das Objekt durch ein Pronomen', source: 'He visto a tus amigos.', answer: 'Los he visto.', hint: 'a tus amigos → los, vor dem Hilfsverb.' },
    { id: 't-11', task: 'In den Plural setzen', source: 'El chico italiano es simpático.', answer: 'Los chicos italianos son simpáticos.', hint: 'Artikel, Nomen, Adjektiv und Verb gehen alle in den Plural.' },
    { id: 't-12', task: 'In die weibliche Form setzen', source: 'Mi amigo es alemán.', answer: 'Mi amiga es alemana.', hint: 'alemán verliert im Femininum den Akzent: alemana.' },
    { id: 't-13', task: 'Höflich formulieren (usted)', source: '¿Cómo estás?', answer: '¿Cómo está?', hint: 'Die Höflichkeitsform benutzt die 3. Person Singular.' },
    { id: 't-14', task: 'Höflich formulieren (usted)', source: '¿Puedes ayudarme?', answer: '¿Puede ayudarme?', hint: 'puedes → puede.' },
    { id: 't-15', task: 'Als Imperativ (tú) formulieren', source: 'Tienes que llamar a Carlos.', answer: '¡Llama a Carlos!', hint: 'Der bejahte Imperativ für tú ist die 3. Person Singular: llama.' },
    { id: 't-16', task: 'Höflicher formulieren', source: 'Quiero un café.', answer: 'Quisiera un café.', alt: ['Querría un café.'], hint: 'quisiera / querría klingt höflich, quiero fordernd.' },
    { id: 't-17', task: 'Mit „No creo que …" beginnen', source: 'Es verdad.', answer: 'No creo que sea verdad.', hint: 'Nach no creo que steht der Subjuntivo: sea.' },
    { id: 't-18', task: 'Ins pretérito perfecto setzen', source: 'Me levanto temprano.', answer: 'Me he levantado temprano.', hint: 'Das Reflexivpronomen bleibt vor dem Hilfsverb.' },
    { id: 't-19', task: 'Mit estar + Gerundium (gerade dabei sein)', source: 'Leo un libro.', answer: 'Estoy leyendo un libro.', hint: 'leer → leyendo.' },
    { id: 't-20', task: 'Unpersönlich mit se formulieren', source: 'La gente come bien aquí.', answer: 'Se come bien aquí.', alt: ['Aquí se come bien.'], hint: 'se + 3. Person Singular = „man".' },
  ],

  letters: [
    {
      id: 'l-01',
      icon: 'home',
      title: 'E-Mail an die Gastfamilie',
      intro: 'Du wohnst nächste Woche bei einer Familie in Sevilla und schreibst kurz vor der Ankunft.',
      text: `___ familia Ruiz:
me ___ Jannik y llego el lunes ___ Sevilla.
El tren ___ a las siete de la tarde.
¿___ venir a buscarme a la estación?
___ saber también si puedo traer algo de Alemania.
Muchas ___ por todo.
Un ___ cordial,
Jannik`,
      gaps: [
        { answer: 'Querida', hint: 'Anrede an eine Familie: querida familia.' },
        { answer: 'llamo', hint: 'me llamo … – so stellt man sich vor.' },
        { answer: 'a', hint: 'Bei Städten steht a: a Sevilla.' },
        { answer: 'llega', hint: '3. Person Singular von llegar.' },
        { answer: 'Pueden', hint: 'Höfliche Frage an mehrere: ¿pueden …?' },
        { answer: 'Quisiera', hint: 'quisiera = ich möchte (höflich).' },
        { answer: 'gracias', hint: 'muchas gracias = vielen Dank.' },
        { answer: 'saludo', hint: 'un saludo cordial = herzliche Grüße.' },
      ],
      extra: ['soy', 'en'],
      de: `Liebe Familie Ruiz,
ich heiße Jannik und komme am Montag in Sevilla an.
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
      text: `Hola Carlos:
___ siento, pero esta noche no ___ ir.
___ que trabajar hasta tarde.
¿___ vernos mañana por la noche?
___ te va bien, te llamo a las seis.
¡Perdona ___ vez!
___ mañana,
Jannik`,
      gaps: [
        { answer: 'Lo', hint: 'lo siento = es tut mir leid.' },
        { answer: 'puedo', hint: '1. Person von poder.' },
        { answer: 'Tengo', hint: 'tener que = müssen.' },
        { answer: 'Podemos', hint: 'Vorschlag in der 1. Person Plural: ¿podemos …?' },
        { answer: 'Si', hint: 'si = wenn (ohne Akzent).' },
        { answer: 'otra', hint: 'otra vez = nochmal.' },
        { answer: 'Hasta', hint: 'hasta mañana = bis morgen.' },
      ],
      extra: ['soy', 'por'],
      de: `Hallo Carlos,
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
        { target: 'Me llamo …', de: 'Ich heiße …' },
        { target: 'Tengo … años.', de: 'Ich bin … Jahre alt.' },
        { target: 'Soy de Alemania y vivo en …', de: 'Ich komme aus Deutschland und wohne in …' },
        { target: 'Trabajo como …', de: 'Ich arbeite als …' },
        { target: 'En mi tiempo libre me gusta …', de: 'In meiner Freizeit mag ich …' },
        { target: 'Aprendo español porque …', de: 'Ich lerne Spanisch, weil …' },
      ],
      model: 'Me llamo Jannik y tengo treinta años. Soy de Alemania y vivo en Stuttgart. Trabajo como programador en una empresa pequeña. En mi tiempo libre me gusta cocinar y montar en bicicleta. Aprendo español porque viajo mucho y quiero hablar con la gente.',
      modelDe: 'Ich heiße Jannik und bin dreißig Jahre alt. Ich komme aus Deutschland und wohne in Stuttgart. Ich arbeite als Programmierer in einer kleinen Firma. In meiner Freizeit koche ich gern und fahre Rad. Ich lerne Spanisch, weil ich viel reise und mit den Leuten sprechen möchte.',
    },
    tagesablauf: {
      blocks: [
        { target: 'Me levanto a las …', de: 'Ich stehe um … auf.' },
        { target: 'Desayuno …', de: 'Ich frühstücke …' },
        { target: 'Voy al trabajo en …', de: 'Ich fahre mit … zur Arbeit.' },
        { target: 'Al mediodía …', de: 'Mittags …' },
        { target: 'Por la noche …', de: 'Abends …' },
        { target: 'Me acuesto sobre las …', de: 'Ich gehe gegen … ins Bett.' },
      ],
      model: 'Me levanto a las seis y media y desayuno un café con pan. Después voy al trabajo en bicicleta, tardo veinte minutos. Al mediodía como con mis compañeros. Por la noche cocino y veo una serie, o llamo a un amigo. Normalmente me acuesto sobre las once.',
      modelDe: 'Ich stehe um halb sieben auf und frühstücke einen Kaffee mit Brot. Danach fahre ich mit dem Rad zur Arbeit, ich brauche zwanzig Minuten. Mittags esse ich mit meinen Kollegen. Abends koche ich und schaue eine Serie, oder ich rufe einen Freund an. Normalerweise gehe ich gegen elf ins Bett.',
    },
    zimmer: {
      blocks: [
        { target: 'Estimados señores:', de: 'Sehr geehrte Damen und Herren,' },
        { target: 'Quisiera reservar una habitación doble.', de: 'Ich möchte ein Doppelzimmer reservieren.' },
        { target: 'para dos noches, del … al …', de: 'für zwei Nächte, vom … bis zum …' },
        { target: '¿El desayuno está incluido?', de: 'Ist das Frühstück inklusive?' },
        { target: 'Quedo a la espera de su respuesta.', de: 'Ich warte auf Ihre Antwort.' },
        { target: 'Un saludo cordial', de: 'Mit freundlichen Grüßen' },
      ],
      model: 'Estimados señores: quisiera reservar una habitación doble para dos noches, del 12 al 14 de mayo. Somos dos personas y llegamos sobre las seis de la tarde. Quisiera saber si el desayuno está incluido y si hay aparcamiento cerca del hotel. Quedo a la espera de su respuesta. Un saludo cordial, Jannik Spath',
      modelDe: 'Sehr geehrte Damen und Herren, ich möchte ein Doppelzimmer für zwei Nächte reservieren, vom 12. bis zum 14. Mai. Wir sind zwei Personen und kommen gegen sechs Uhr abends an. Ich würde gern wissen, ob das Frühstück inklusive ist und ob es in der Nähe des Hotels einen Parkplatz gibt. Ich warte auf Ihre Antwort. Mit freundlichen Grüßen, Jannik Spath',
    },
    urlaub: {
      blocks: [
        { target: 'El año pasado fui a …', de: 'Letztes Jahr bin ich nach … gefahren.' },
        { target: 'con mi familia / con un amigo', de: 'mit meiner Familie / mit einem Freund' },
        { target: 'Estuvimos … días.', de: 'Wir waren … Tage dort.' },
        { target: 'Visitamos …', de: 'Wir haben … besichtigt.' },
        { target: 'Me gustó mucho.', de: 'Es hat mir sehr gefallen.' },
      ],
      model: 'El año pasado fui a Andalucía con mi novia. Estuvimos diez días cerca de Granada. Visitamos la Alhambra y un día fuimos a la playa. Por la noche cenábamos tapas en un bar del centro. Me gustó mucho, sobre todo la gente.',
      modelDe: 'Letztes Jahr bin ich mit meiner Freundin nach Andalusien gefahren. Wir waren zehn Tage in der Nähe von Granada. Wir haben die Alhambra besichtigt und sind einen Tag an den Strand gefahren. Abends haben wir Tapas in einer Bar im Zentrum gegessen. Es hat mir sehr gefallen, vor allem die Leute.',
    },
    stadt: {
      blocks: [
        { target: 'Vivo en …, en el sur de Alemania.', de: 'Ich wohne in …, im Süden Deutschlands.' },
        { target: 'Tiene unos … habitantes.', de: 'Sie hat ungefähr … Einwohner.' },
        { target: 'En el centro hay …', de: 'Im Zentrum gibt es …' },
        { target: 'Me gusta sobre todo …', de: 'Mir gefällt vor allem …' },
        { target: 'No me gusta que …', de: 'Mir gefällt nicht, dass …' },
        { target: 'Hay que ver …', de: 'Man muss … sehen.' },
      ],
      model: 'Vivo en Stuttgart, en el sur de Alemania. Tiene unos seiscientos mil habitantes y está rodeada de colinas. En el centro hay una plaza bonita con el castillo y muchas tiendas. Me gusta sobre todo el verde: en diez minutos estás en el bosque. No me gusta que haya tanto tráfico. Hay que ver el museo del automóvil.',
      modelDe: 'Ich wohne in Stuttgart, im Süden Deutschlands. Sie hat ungefähr sechshunderttausend Einwohner und ist von Hügeln umgeben. Im Zentrum gibt es einen schönen Platz mit dem Schloss und vielen Geschäften. Mir gefällt vor allem das Grün: In zehn Minuten bist du im Wald. Mir gefällt nicht, dass so viel Verkehr ist. Man muss das Automuseum sehen.',
    },
    einladung: {
      blocks: [
        { target: '¡Muchas gracias por la invitación!', de: 'Vielen Dank für die Einladung!' },
        { target: 'Voy encantado.', de: 'Ich komme sehr gern.' },
        { target: 'Lo siento, no puedo ir porque …', de: 'Es tut mir leid, ich kann nicht kommen, weil …' },
        { target: '¿A qué hora tengo que llegar?', de: 'Um wie viel Uhr soll ich kommen?' },
        { target: '¿Puedo llevar algo?', de: 'Kann ich etwas mitbringen?' },
        { target: '¡Hasta el sábado!', de: 'Bis Samstag!' },
      ],
      model: 'Hola Ana, ¡muchas gracias por la invitación! Voy encantado el sábado por la noche. Salgo del trabajo a las seis, así que puedo estar en tu casa sobre las ocho. ¿A qué hora queréis cenar? ¿Y puedo llevar algo, un postre o vino? Dime algo. ¡Hasta el sábado!',
      modelDe: 'Hallo Ana, vielen Dank für die Einladung! Ich komme am Samstagabend sehr gern. Ich habe um sechs Feierabend, also kann ich gegen acht bei dir sein. Um wie viel Uhr wollt ihr essen? Und kann ich etwas mitbringen, einen Nachtisch oder Wein? Sag mir Bescheid. Bis Samstag!',
    },
  },
};
