import type { WritingPack } from './types';

// French writing practice: the two-part negation around the verb, object
// pronouns before the verb, agreement of the participle with a preceding direct
// object, adjective position, y and en, and the subjunctive after il faut que.
export const FR_WRITING: WritingPack = {
  order: [
    { id: 'o-01', de: 'Ich gebe es dir morgen.', answer: 'Je te le donne demain.', hint: 'Im Französischen zuerst te, dann le – beide vor dem Verb.' },
    { id: 'o-02', de: 'Ich sehe ihn nie.', answer: 'Je ne le vois jamais.', hint: 'ne und jamais umklammern das Verb; das Pronomen steht hinter ne.' },
    { id: 'o-03', de: 'Ich habe sie gestern getroffen.', answer: "Je l'ai rencontrée hier.", alt: ["Hier, je l'ai rencontrée."], hint: 'Das Pronomen steht vor dem Hilfsverb; danach gleicht sich das Partizip an: rencontrée.' },
    { id: 'o-04', de: 'Ich habe nichts gesagt.', answer: "Je n'ai rien dit.", hint: 'Bei zusammengesetzten Zeiten steht rien zwischen Hilfsverb und Partizip.' },
    { id: 'o-05', de: 'Wir gehen nie ins Kino.', answer: 'Nous n’allons jamais au cinéma.', hint: 'ne wird vor einem Vokal zu n’.' },
    { id: 'o-06', de: 'Ein schönes rotes Auto.', answer: 'Une belle voiture rouge.', hint: 'beau/belle steht vor dem Nomen, Farben immer dahinter.' },
    { id: 'o-07', de: 'Das ist ein italienischer Freund.', answer: 'C’est un ami italien.', hint: 'Herkunftsadjektive stehen hinter dem Nomen.' },
    { id: 'o-08', de: 'Wann kommt der Zug an?', answer: 'Quand est-ce que le train arrive ?', hint: 'Mit est-ce que bleibt die normale Wortstellung.' },
    { id: 'o-09', de: 'Wie viel kostet dieses Buch?', answer: 'Combien coûte ce livre ?', hint: 'Kurze Fragen mit Inversion sind hier üblich.' },
    { id: 'o-10', de: 'Mit wem gehst du ins Kino?', answer: 'Avec qui vas-tu au cinéma ?', hint: 'Die Präposition steht vorne: avec qui.' },
    { id: 'o-11', de: 'Diese Schuhe gefallen mir.', answer: 'Ces chaussures me plaisent.', hint: 'plaire wie gefallen: das Gefallende ist das Subjekt.' },
    { id: 'o-12', de: 'Meiner Schwester gefällt der Film nicht.', answer: 'Le film ne plaît pas à ma sœur.', hint: 'Die Person steht mit à hinter dem Verb.' },
    { id: 'o-13', de: 'Ich stehe jeden Tag um sieben auf.', answer: 'Je me lève tous les jours à sept heures.', hint: 'Das Reflexivpronomen me steht vor dem Verb.' },
    { id: 'o-14', de: 'Sie ist gestern nach Rom gefahren.', answer: 'Hier, elle est allée à Rome.', alt: ['Elle est allée à Rome hier.'], hint: 'aller nimmt être – das Partizip gleicht sich an: allée.' },
    { id: 'o-15', de: 'Ich habe ihm schon geschrieben.', answer: "Je lui ai déjà écrit.", hint: 'Pronomen vor dem Hilfsverb, déjà zwischen Hilfsverb und Partizip.' },
    { id: 'o-16', de: 'Ich habe immer gut gegessen.', answer: "J'ai toujours bien mangé.", hint: 'Kurze Adverbien stehen zwischen Hilfsverb und Partizip.' },
    { id: 'o-17', de: 'Ich gehe oft dorthin.', answer: "J'y vais souvent.", hint: 'y ersetzt den Ort und steht vor dem Verb.' },
    { id: 'o-18', de: 'Ich habe drei davon gekauft.', answer: "J'en ai acheté trois.", hint: 'en ersetzt „davon" und steht vor dem Hilfsverb.' },
    { id: 'o-19', de: 'Dieses Buch ist interessanter als jenes.', answer: 'Ce livre est plus intéressant que celui-là.', hint: 'Steigerung mit plus … que.' },
    { id: 'o-20', de: 'Ich muss morgen kommen.', answer: 'Il faut que je vienne demain.', hint: 'Nach il faut que steht der Subjonctif: vienne.' },
  ],

  transform: [
    { id: 't-01', task: 'Ins passé composé setzen', source: 'Je mange une pizza.', answer: "J'ai mangé une pizza.", hint: 'avoir + Partizip – und je wird zu j’.' },
    { id: 't-02', task: 'Ins passé composé setzen', source: 'Je vais à la mer.', answer: 'Je suis allé à la mer.', alt: ['Je suis allée à la mer.'], hint: 'Bewegungsverben nehmen être, das Partizip gleicht sich an.' },
    { id: 't-03', task: 'Ins imparfait setzen', source: 'Chaque été je vais à la mer.', answer: 'Chaque été j’allais à la mer.', hint: 'Gewohnheiten in der Vergangenheit: imparfait.' },
    { id: 't-04', task: 'Ins futur simple setzen', source: 'Demain je parle avec lui.', answer: 'Demain je parlerai avec lui.', hint: 'parler → je parlerai.' },
    { id: 't-05', task: 'Frag nach der Uhrzeit', source: 'Marc arrive à huit heures.', answer: 'À quelle heure est-ce que Marc arrive ?', alt: ['À quelle heure arrive Marc ?'], hint: 'à quelle heure + est-ce que + normale Wortstellung.' },
    { id: 't-06', task: 'Verneine den Satz', source: "J'ai compris.", answer: "Je n'ai pas compris.", hint: 'ne … pas umklammert das Hilfsverb, nicht das Partizip.' },
    { id: 't-07', task: 'Ersetze das Objekt durch ein Pronomen', source: "J'achète le pain.", answer: "Je l'achète.", hint: 'le pain → le, vor einem Vokal l’.' },
    { id: 't-08', task: 'Ersetze das Objekt durch ein Pronomen', source: 'Je vois Marie.', answer: 'Je la vois.', hint: 'Marie → la.' },
    { id: 't-09', task: 'Ersetze das Objekt durch ein Pronomen', source: "J'écris à mon frère.", answer: "Je lui écris.", hint: 'à mon frère ist indirekt → lui.' },
    { id: 't-10', task: 'Ersetze das Objekt durch ein Pronomen', source: "J'ai vu tes amis.", answer: "Je les ai vus.", hint: 'les steht vor dem Hilfsverb, danach gleicht sich das Partizip an: vus.' },
    { id: 't-11', task: 'In den Plural setzen', source: 'Le garçon italien est sympathique.', answer: 'Les garçons italiens sont sympathiques.', hint: 'Artikel, Nomen, Adjektiv und Verb gehen alle in den Plural.' },
    { id: 't-12', task: 'In die weibliche Form setzen', source: 'Mon ami est allemand.', answer: 'Mon amie est allemande.', hint: 'Vor einem Vokal bleibt mon, auch im Femininum.' },
    { id: 't-13', task: 'Höflich formulieren (vous)', source: 'Comment vas-tu ?', answer: 'Comment allez-vous ?', hint: 'Die Höflichkeitsform ist die 2. Person Plural.' },
    { id: 't-14', task: 'Höflich formulieren (vous)', source: 'Tu peux m’aider ?', answer: 'Pouvez-vous m’aider ?', alt: ['Est-ce que vous pouvez m’aider ?'], hint: 'tu peux → vous pouvez.' },
    { id: 't-15', task: 'Als Imperativ (tu) formulieren', source: 'Tu dois appeler Marc.', answer: 'Appelle Marc !', hint: 'Im Imperativ fällt bei -er-Verben das s weg: appelle.' },
    { id: 't-16', task: 'Höflicher mit dem Conditionnel', source: 'Je veux un café.', answer: 'Je voudrais un café.', hint: 'je veux klingt fordernd, je voudrais höflich.' },
    { id: 't-17', task: 'Mit „Il faut que …" beginnen', source: 'Je pars tôt.', answer: 'Il faut que je parte tôt.', hint: 'Nach il faut que steht der Subjonctif: parte.' },
    { id: 't-18', task: 'Ins passé composé setzen', source: 'Je me lève tôt.', answer: 'Je me suis levé tôt.', alt: ['Je me suis levée tôt.'], hint: 'Reflexive Verben nehmen être.' },
    { id: 't-19', task: 'Mit être en train de (gerade dabei sein)', source: 'Je lis un livre.', answer: 'Je suis en train de lire un livre.', hint: 'Französisch hat keine Verlaufsform – dafür être en train de + Infinitiv.' },
    { id: 't-20', task: 'Unpersönlich mit on formulieren', source: 'Les gens mangent bien ici.', answer: 'On mange bien ici.', alt: ['Ici, on mange bien.'], hint: 'on + 3. Person Singular = „man".' },
  ],

  letters: [
    {
      id: 'l-01',
      icon: 'home',
      title: 'E-Mail an die Gastfamilie',
      intro: 'Du wohnst nächste Woche bei einer Familie in Lyon und schreibst kurz vor der Ankunft.',
      text: `___ famille Martin,
je ___ appelle Jannik et j'arrive lundi ___ Lyon.
Le train ___ à sept heures du soir.
___ venir me chercher à la gare ?
Je ___ aussi savoir si je peux apporter quelque chose d'Allemagne.
___ beaucoup pour tout.
___ salutations,
Jannik`,
      gaps: [
        { answer: 'Chère', hint: 'famille ist weiblich: chère famille.' },
        { answer: "m'", hint: "je m'appelle – me wird vor dem Vokal zu m'." },
        { answer: 'à', hint: 'Bei Städten steht à: à Lyon.' },
        { answer: 'arrive', hint: '3. Person Singular von arriver.' },
        { answer: 'Pouvez-vous', hint: 'Höfliche Frage mit Inversion.' },
        { answer: 'voudrais', hint: 'je voudrais = ich möchte (höflich).' },
        { answer: 'Merci', hint: 'merci beaucoup = vielen Dank.' },
        { answer: 'Cordiales', hint: 'cordiales salutations = herzliche Grüße.' },
      ],
      extra: ['suis', 'en'],
      de: `Liebe Familie Martin,
ich heiße Jannik und komme am Montag in Lyon an.
Der Zug kommt um sieben Uhr abends an.
Können Sie mich am Bahnhof abholen?
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
      text: `Salut Luc,
je suis ___, mais ce soir je ne ___ pas venir.
Je ___ travailler tard.
___ se voir demain soir ?
___ ça te va, je t'appelle à six heures.
Encore ___ !
À ___,
Jannik`,
      gaps: [
        { answer: 'désolé', hint: 'je suis désolé = es tut mir leid.' },
        { answer: 'peux', hint: '1. Person von pouvoir, zwischen ne und pas.' },
        { answer: 'dois', hint: 'je dois = ich muss.' },
        { answer: 'On peut', hint: 'Vorschlag: on peut …? = können wir …?' },
        { answer: 'Si', hint: 'si = wenn.' },
        { answer: 'pardon', hint: 'encore pardon = nochmal Entschuldigung.' },
        { answer: 'demain', hint: 'à demain = bis morgen.' },
      ],
      extra: ['suis', 'pour'],
      de: `Hallo Luc,
es tut mir leid, aber heute Abend kann ich nicht kommen.
Ich muss lange arbeiten.
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
        { target: "Je m'appelle …", de: 'Ich heiße …' },
        { target: "J'ai … ans.", de: 'Ich bin … Jahre alt.' },
        { target: "Je viens d'Allemagne et j'habite à …", de: 'Ich komme aus Deutschland und wohne in …' },
        { target: 'Je travaille comme …', de: 'Ich arbeite als …' },
        { target: 'Pendant mon temps libre, j’aime …', de: 'In meiner Freizeit mag ich …' },
        { target: "J'apprends le français parce que …", de: 'Ich lerne Französisch, weil …' },
      ],
      model: "Je m'appelle Jannik et j'ai trente ans. Je viens d'Allemagne et j'habite à Stuttgart. Je travaille comme programmeur dans une petite entreprise. Pendant mon temps libre, j'aime cuisiner et faire du vélo. J'apprends le français parce que je vais souvent en France et je veux parler avec les gens.",
      modelDe: 'Ich heiße Jannik und bin dreißig Jahre alt. Ich komme aus Deutschland und wohne in Stuttgart. Ich arbeite als Programmierer in einer kleinen Firma. In meiner Freizeit koche ich gern und fahre Rad. Ich lerne Französisch, weil ich oft nach Frankreich fahre und mit den Leuten sprechen möchte.',
    },
    tagesablauf: {
      blocks: [
        { target: 'Je me lève à …', de: 'Ich stehe um … auf.' },
        { target: 'Je prends le petit-déjeuner avec …', de: 'Ich frühstücke …' },
        { target: 'Je vais au travail en …', de: 'Ich fahre mit … zur Arbeit.' },
        { target: 'À midi …', de: 'Mittags …' },
        { target: 'Le soir …', de: 'Abends …' },
        { target: 'Je me couche vers …', de: 'Ich gehe gegen … ins Bett.' },
      ],
      model: "Je me lève à six heures et demie et je prends un café avec du pain. Ensuite je vais au travail à vélo, ça prend vingt minutes. À midi je mange avec mes collègues. Le soir je cuisine et je regarde une série, ou j'appelle un ami. D'habitude je me couche vers onze heures.",
      modelDe: 'Ich stehe um halb sieben auf und trinke einen Kaffee mit Brot. Dann fahre ich mit dem Rad zur Arbeit, das dauert zwanzig Minuten. Mittags esse ich mit meinen Kollegen. Abends koche ich und schaue eine Serie, oder ich rufe einen Freund an. Normalerweise gehe ich gegen elf ins Bett.',
    },
    zimmer: {
      blocks: [
        { target: 'Madame, Monsieur,', de: 'Sehr geehrte Damen und Herren,' },
        { target: 'Je voudrais réserver une chambre double.', de: 'Ich möchte ein Doppelzimmer reservieren.' },
        { target: 'pour deux nuits, du … au …', de: 'für zwei Nächte, vom … bis zum …' },
        { target: 'Le petit-déjeuner est-il compris ?', de: 'Ist das Frühstück inklusive?' },
        { target: 'Dans l’attente de votre réponse,', de: 'In Erwartung Ihrer Antwort,' },
        { target: 'Cordialement', de: 'Mit freundlichen Grüßen' },
      ],
      model: 'Madame, Monsieur, je voudrais réserver une chambre double pour deux nuits, du 12 au 14 mai. Nous sommes deux personnes et nous arrivons vers six heures du soir. Je voudrais savoir si le petit-déjeuner est compris et s’il y a un parking près de l’hôtel. Dans l’attente de votre réponse, cordialement. Jannik Spath',
      modelDe: 'Sehr geehrte Damen und Herren, ich möchte ein Doppelzimmer für zwei Nächte reservieren, vom 12. bis zum 14. Mai. Wir sind zwei Personen und kommen gegen sechs Uhr abends an. Ich würde gern wissen, ob das Frühstück inklusive ist und ob es in der Nähe des Hotels einen Parkplatz gibt. In Erwartung Ihrer Antwort, mit freundlichen Grüßen. Jannik Spath',
    },
    urlaub: {
      blocks: [
        { target: "L'année dernière, je suis allé(e) à …", de: 'Letztes Jahr bin ich nach … gefahren.' },
        { target: 'avec ma famille / avec un ami', de: 'mit meiner Familie / mit einem Freund' },
        { target: 'Nous sommes restés … jours.', de: 'Wir sind … Tage geblieben.' },
        { target: 'Nous avons visité …', de: 'Wir haben … besichtigt.' },
        { target: "Ça m'a beaucoup plu.", de: 'Es hat mir sehr gefallen.' },
      ],
      model: "L'année dernière, je suis allé en Bretagne avec ma copine. Nous sommes restés dix jours près de Saint-Malo. Nous avons visité le Mont-Saint-Michel et nous avons marché au bord de la mer. Le soir, on mangeait des crêpes dans un petit restaurant. Ça m'a beaucoup plu, surtout les gens.",
      modelDe: 'Letztes Jahr bin ich mit meiner Freundin in die Bretagne gefahren. Wir sind zehn Tage in der Nähe von Saint-Malo geblieben. Wir haben den Mont-Saint-Michel besichtigt und sind am Meer spazieren gegangen. Abends haben wir Crêpes in einem kleinen Restaurant gegessen. Es hat mir sehr gefallen, vor allem die Leute.',
    },
    stadt: {
      blocks: [
        { target: "J'habite à …, dans le sud de l'Allemagne.", de: 'Ich wohne in …, im Süden Deutschlands.' },
        { target: 'Il y a environ … habitants.', de: 'Es gibt ungefähr … Einwohner.' },
        { target: 'Dans le centre, il y a …', de: 'Im Zentrum gibt es …' },
        { target: "J'aime surtout …", de: 'Mir gefällt vor allem …' },
        { target: "Ce que je n'aime pas, c'est …", de: 'Was mir nicht gefällt, ist …' },
        { target: 'Il faut absolument voir …', de: 'Man muss unbedingt … sehen.' },
      ],
      model: "J'habite à Stuttgart, dans le sud de l'Allemagne. Il y a environ six cent mille habitants et la ville est entourée de collines. Dans le centre, il y a une belle place avec le château et beaucoup de magasins. J'aime surtout la nature : en dix minutes on est dans la forêt. Ce que je n'aime pas, c'est la circulation. Il faut absolument voir le musée de l'automobile.",
      modelDe: 'Ich wohne in Stuttgart, im Süden Deutschlands. Es gibt ungefähr sechshunderttausend Einwohner, und die Stadt ist von Hügeln umgeben. Im Zentrum gibt es einen schönen Platz mit dem Schloss und vielen Geschäften. Mir gefällt vor allem die Natur: In zehn Minuten ist man im Wald. Was mir nicht gefällt, ist der Verkehr. Man muss unbedingt das Automuseum sehen.',
    },
    einladung: {
      blocks: [
        { target: "Merci beaucoup pour l'invitation !", de: 'Vielen Dank für die Einladung!' },
        { target: 'Je viens avec plaisir.', de: 'Ich komme gern.' },
        { target: 'Malheureusement, je ne peux pas venir parce que …', de: 'Leider kann ich nicht kommen, weil …' },
        { target: 'À quelle heure dois-je venir ?', de: 'Um wie viel Uhr soll ich kommen?' },
        { target: 'Est-ce que je peux apporter quelque chose ?', de: 'Kann ich etwas mitbringen?' },
        { target: 'À samedi !', de: 'Bis Samstag!' },
      ],
      model: "Salut Anne, merci beaucoup pour l'invitation ! Je viens avec plaisir samedi soir. Je finis le travail à six heures, donc je peux être chez toi vers huit heures. À quelle heure est-ce que vous voulez manger ? Et est-ce que je peux apporter quelque chose, un dessert ou du vin ? Dis-moi. À samedi !",
      modelDe: 'Hallo Anne, vielen Dank für die Einladung! Ich komme am Samstagabend gern. Ich habe um sechs Feierabend, also kann ich gegen acht bei dir sein. Um wie viel Uhr wollt ihr essen? Und kann ich etwas mitbringen, einen Nachtisch oder Wein? Sag mir Bescheid. Bis Samstag!',
    },
  },
};
