import type { GrammarItem, GrammarTopic } from '../grammar-exercises';

// ─── French grammar exercises ───────────────────────────────────────────────────
// Hand-written cloze sets covering the grammar of CEFR levels A1–B1, in the same
// format as the Italian and Spanish ones: exactly one blank per item, `options`
// for multiple choice (must contain the answer), German hints, rules and
// examples. `lessonId` links to lib/fr/grammar-lessons.ts.

const q = (
  before: string,
  answer: string,
  after: string,
  options: string[],
  hint: string,
  alternatives?: string[],
): GrammarItem => ({ before, answer, after, options, hint, alternatives });

const DEF = ['le', 'la', "l'", 'les'];
const INDEF = ['un', 'une', 'des'];
const PART = ['du', 'de la', "de l'", 'des', 'de'];
const DEM = ['ce', 'cet', 'cette', 'ces'];
const TIME = ['depuis', 'pendant', 'il y a'];

export const FR_GRAMMAR_TOPICS: GrammarTopic[] = [
  // ══════════════════════════════ A1 ══════════════════════════════
  {
    id: 'articles-definis',
    icon: '🔤',
    title: 'Bestimmte Artikel (le, la, l\', les)',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Setze den passenden bestimmten Artikel ein.',
    explanation:
      'le (männlich), la (weiblich), vor Vokal oder stummem h: l\'. Mehrzahl immer les. ' +
      'Das Geschlecht muss man meist mitlernen: le problème ist männlich, la voiture weiblich.',
    examples: [
      { target: 'le livre · la maison', de: 'das Buch · das Haus' },
      { target: "l'ami · l'hôtel", de: 'der Freund · das Hotel' },
      { target: 'les enfants', de: 'die Kinder' },
    ],
    items: [
      q('', 'le', ' livre', DEF, 'männlich → le'),
      q('', 'la', ' maison', DEF, 'weiblich → la'),
      q('', "l'", 'école', DEF, 'beginnt mit Vokal → l\''),
      q('', 'les', ' enfants', DEF, 'Mehrzahl → les'),
      q('', 'le', ' soleil', DEF, 'männlich → le'),
      q('', 'la', ' lune', DEF, 'weiblich → la'),
      q('', "l'", 'hôtel', DEF, 'stummes h → l\''),
      q('', 'les', ' fleurs', DEF, 'Mehrzahl → les'),
      q('', 'le', ' problème', DEF, 'endet auf -e, ist aber männlich'),
      q('', 'la', ' voiture', DEF, 'weiblich → la'),
      q('', "l'", 'eau', DEF, 'weiblich, beginnt mit Vokal → l\''),
      q('', 'les', ' yeux', DEF, 'Mehrzahl (von l\'œil) → les'),
    ],
  },
  {
    id: 'articles-indefinis',
    icon: '🅰️',
    title: 'Unbestimmte Artikel (un, une, des)',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Setze den passenden unbestimmten Artikel ein.',
    explanation: 'un (männlich), une (weiblich), des (Mehrzahl – „einige", im Deutschen oft ohne Artikel).',
    examples: [
      { target: 'un chien · une pharmacie', de: 'ein Hund · eine Apotheke' },
      { target: 'des amis', de: '(einige) Freunde' },
    ],
    items: [
      q("J'ai ", 'un', ' chien.', INDEF, 'le chien → un'),
      q('Il y a ', 'une', ' pharmacie ici ?', INDEF, 'la pharmacie → une'),
      q('Je voudrais ', 'un', ' café.', INDEF, 'le café → un'),
      q('Elle a ', 'des', ' enfants.', INDEF, 'Mehrzahl → des'),
      q("C'est ", 'une', ' bonne idée.', INDEF, "l'idée (weiblich) → une"),
      q("J'achète ", 'des', ' pommes.', INDEF, 'Mehrzahl → des'),
      q('Nous cherchons ', 'un', ' hôtel.', INDEF, "l'hôtel (männlich) → un"),
      q("C'est ", 'une', ' ville magnifique.', INDEF, 'la ville → une'),
      q('Il a ', 'un', ' problème.', INDEF, 'le problème (männlich!) → un'),
      q("J'ai ", 'des', ' amis à Paris.', INDEF, 'Mehrzahl → des'),
      q('Tu as ', 'une', ' voiture ?', INDEF, 'la voiture → une'),
      q('Il y a ', 'des', ' fleurs sur la table.', INDEF, 'Mehrzahl → des'),
    ],
  },
  {
    id: 'partitifs',
    icon: '🥖',
    title: 'Teilungsartikel (du, de la, de l\')',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Setze den passenden Teilungsartikel ein.',
    explanation:
      'Für eine unbestimmte Menge (Essen, Trinken, Stoffe): du (m), de la (f), de l\' (vor Vokal), des (Mehrzahl). ' +
      'Nach Verneinung und nach Mengenwörtern (beaucoup, un peu, un kilo …) steht nur de / d\'.',
    examples: [
      { target: 'du pain, de la confiture', de: 'Brot, Marmelade' },
      { target: "de l'eau, des légumes", de: 'Wasser, Gemüse' },
      { target: 'pas de vin · beaucoup de café', de: 'keinen Wein · viel Kaffee' },
    ],
    items: [
      q('Je bois ', 'du', ' café.', PART, 'le café → du'),
      q('Tu veux ', "de l'", 'eau ?', PART, "l'eau (Vokal) → de l'"),
      q('Elle mange ', 'de la', ' confiture.', PART, 'la confiture → de la'),
      q('Nous achetons ', 'des', ' légumes.', PART, 'Mehrzahl → des'),
      q('Je ne bois pas ', 'de', ' vin.', PART, 'nach Verneinung → de'),
      q('Il y a ', 'du', ' lait dans le frigo.', PART, 'le lait → du'),
      q('Je prends ', 'de la', ' salade.', PART, 'la salade → de la'),
      q('Il faut ', 'de la', ' farine.', PART, 'la farine → de la'),
      q('Je ne mange pas ', 'de', ' viande.', PART, 'nach Verneinung → de'),
      q('Tu as ', "de l'", 'argent ?', PART, "l'argent (Vokal) → de l'"),
      q('Il boit beaucoup ', 'de', ' café.', PART, 'nach Mengenwort (beaucoup) → de'),
      q('Achète ', 'du', ' pain, s\'il te plaît.', PART, 'le pain → du'),
    ],
  },
  {
    id: 'pluriel',
    icon: '👥',
    title: 'Mehrzahl der Nomen',
    level: 'A1',
    lessonId: 'artikel',
    instruction: 'Bilde die Mehrzahl.',
    explanation:
      'Meist + -s (man hört es nicht). Auf -s, -x, -z: bleibt gleich. -eau, -eu → -x (gâteaux). -al → -aux (journaux, ' +
      'chevaux). Einige auf -ou → -oux (bijoux). Unregelmäßig: un œil → des yeux, un travail → des travaux.',
    examples: [
      { target: 'un livre → des livres', de: '+ s' },
      { target: 'un gâteau → des gâteaux', de: '-eau → -eaux' },
      { target: 'un journal → des journaux', de: '-al → -aux' },
    ],
    items: [
      q('un livre → deux ', 'livres', '', ['livres', 'livrex', 'livre', 'livrees'], '+ s'),
      q('un gâteau → deux ', 'gâteaux', '', ['gâteaux', 'gâteaus', 'gâteau', 'gâtaux'], '-eau → -eaux'),
      q('un journal → deux ', 'journaux', '', ['journaux', 'journals', 'journales', 'journal'], '-al → -aux'),
      q('une fleur → deux ', 'fleurs', '', ['fleurs', 'fleures', 'fleurx', 'fleur'], '+ s'),
      q('un bus → deux ', 'bus', '', ['bus', 'buss', 'buses', 'bux'], 'endet auf -s → bleibt gleich'),
      q('un prix → deux ', 'prix', '', ['prix', 'prixs', 'prixes', 'pris'], 'endet auf -x → bleibt gleich'),
      q('un nez → deux ', 'nez', '', ['nez', 'nezs', 'nezes', 'nes'], 'endet auf -z → bleibt gleich'),
      q('un cheval → deux ', 'chevaux', '', ['chevaux', 'chevals', 'chevales', 'cheval'], '-al → -aux'),
      q('un œil → deux ', 'yeux', '', ['yeux', 'œils', 'œux', 'œil'], 'ganz unregelmäßig: les yeux'),
      q('un bijou → deux ', 'bijoux', '', ['bijoux', 'bijous', 'bijouxs', 'bijou'], 'einige auf -ou → -oux'),
      q('un travail → des ', 'travaux', '', ['travaux', 'travails', 'travailes', 'travail'], 'unregelmäßig: -ail → -aux'),
      q('un animal → deux ', 'animaux', '', ['animaux', 'animals', 'animales', 'animal'], '-al → -aux'),
    ],
  },
  {
    id: 'etre-avoir',
    icon: '⚖️',
    title: 'être & avoir',
    level: 'A1',
    lessonId: 'etre-avoir',
    instruction: 'Setze die richtige Form von être oder avoir ein.',
    explanation:
      'être: suis, es, est, sommes, êtes, sont. avoir: ai, as, a, avons, avez, ont. Alter, Hunger, Durst, Angst, ' +
      'Recht haben drückt man mit avoir aus: j\'ai vingt ans, j\'ai faim, tu as raison.',
    examples: [
      { target: 'Je suis allemand.', de: 'Ich bin Deutscher.' },
      { target: "J'ai vingt ans.", de: 'Ich bin zwanzig.' },
    ],
    items: [
      q('Je ', 'suis', ' allemand.', ['suis', 'ai', 'es', 'est'], 'être, je → suis'),
      q("J'", 'ai', ' vingt ans.', ['ai', 'suis', 'as', 'a'], 'Alter → avoir: j\'ai'),
      q('Tu ', 'es', ' fatigué ?', ['es', 'as', 'est', 'a'], 'être, tu → es'),
      q('Il ', 'a', ' faim.', ['a', 'est', 'as', 'es'], 'Hunger → avoir: il a'),
      q('Nous ', 'sommes', ' amis.', ['sommes', 'avons', 'êtes', 'sont'], 'être, nous → sommes'),
      q('Vous ', 'avez', ' une voiture ?', ['avez', 'êtes', 'avons', 'ont'], 'avoir, vous → avez'),
      q('Elles ', 'sont', ' françaises.', ['sont', 'ont', 'est', 'sommes'], 'être, elles → sont'),
      q('Ils ', 'ont', ' deux enfants.', ['ont', 'sont', 'a', 'avons'], 'avoir, ils → ont'),
      q('Tu ', 'as', ' raison.', ['as', 'es', 'a', 'est'], 'Recht haben → avoir raison'),
      q('Elle ', 'est', ' médecin.', ['est', 'a', 'es', 'as'], 'Beruf → être (ohne Artikel!)'),
      q('Nous ', 'avons', ' soif.', ['avons', 'sommes', 'avez', 'ont'], 'Durst → avoir soif'),
      q('Vous ', 'êtes', ' en retard.', ['êtes', 'avez', 'sommes', 'sont'], 'être, vous → êtes'),
    ],
  },
  {
    id: 'present-er',
    icon: '🔁',
    title: 'Präsens der Verben auf -er',
    level: 'A1',
    lessonId: 'praesens',
    instruction: 'Konjugiere das Verb in Klammern im Präsens.',
    explanation:
      'Stamm + -e, -es, -e, -ons, -ez, -ent. Schreibregeln: -ger → nous mangeons, -cer → nous commençons; ' +
      'acheter → j\'achète, préférer → je préfère, appeler → j\'appelle, payer → je paie/paye (nicht bei nous/vous).',
    examples: [
      { target: 'je parle, nous parlons, ils parlent', de: 'ich spreche, wir sprechen, sie sprechen' },
      { target: 'nous mangeons, nous commençons', de: 'wir essen, wir fangen an' },
    ],
    items: [
      q('Je ', 'parle', ' français. (parler)', ['parle', 'parles', 'parlent', 'parlons'], 'je → -e'),
      q('Tu ', 'habites', ' à Paris ? (habiter)', ['habites', 'habite', 'habitez', 'habitent'], 'tu → -es'),
      q('Il ', 'travaille', ' dans une banque. (travailler)', ['travaille', 'travailles', 'travaillent', 'travail'], 'il → -e'),
      q('Nous ', 'mangeons', ' une pizza. (manger)', ['mangeons', 'mangons', 'mangez', 'mangent'], '-ger: nous → -geons'),
      q('Vous ', 'écoutez', ' la radio ? (écouter)', ['écoutez', 'écoutes', 'écoutons', 'écoutent'], 'vous → -ez'),
      q('Ils ', 'regardent', ' la télé. (regarder)', ['regardent', 'regardes', 'regardons', 'regarde'], 'ils → -ent (stumm)'),
      q('Je ', 'commence', ' à huit heures. (commencer)', ['commence', 'commences', 'commencent', 'commençons'], 'je → -e (kein ç vor e)'),
      q('Nous ', 'commençons', ' à huit heures. (commencer)', ['commençons', 'commenceons', 'commencez', 'commencent'], '-cer: nous → -çons'),
      q('Tu ', 'achètes', ' ce pull ? (acheter)', ['achètes', 'achettes', 'achète', 'achetez'], 'acheter: e → è (tu achètes)'),
      q('Elle ', 'préfère', ' le thé. (préférer)', ['préfère', 'préfèrent', 'préfères', 'préférons'], 'préférer: é → è'),
      q("J'", 'appelle', ' mon frère. (appeler)', ['appelle', 'appele', 'appelles', 'appellons'], 'appeler: l → ll'),
      q('Vous ', 'payez', ' par carte ? (payer)', ['payez', 'paiez', 'payes', 'paient'], 'vous → -ez (y bleibt)'),
    ],
  },
  {
    id: 'present-irreguliers',
    icon: '🔀',
    title: 'Unregelmäßige Verben im Präsens',
    level: 'A1',
    lessonId: 'praesens',
    instruction: 'Konjugiere das Verb in Klammern im Präsens.',
    explanation:
      'aller: vais, vas, va, allons, allez, vont · faire: fais, fais, fait, faisons, faites, font · ' +
      'prendre: prends … prenons, prennent · pouvoir: peux, peut, pouvons, peuvent · vouloir: veux, veut … veulent · ' +
      'venir: viens … venons, viennent · savoir: sais … savent · 2. Gruppe: finir → nous finissons.',
    examples: [
      { target: 'Je vais au cinéma.', de: 'Ich gehe ins Kino.' },
      { target: 'Vous faites quoi ?', de: 'Was macht ihr?' },
    ],
    items: [
      q('Je ', 'vais', ' au cinéma. (aller)', ['vais', 'va', 'allez', 'vas'], 'aller, je → vais'),
      q('Nous ', 'faisons', ' du sport. (faire)', ['faisons', 'fesons', 'faites', 'font'], 'faire, nous → faisons'),
      q("Qu'est-ce que vous ", 'dites', ' ? (dire)', ['dites', 'disez', 'dis', 'disent'], 'dire, vous → dites'),
      q('Ils ', 'prennent', ' le train. (prendre)', ['prennent', 'prendent', 'prenent', 'prenons'], 'prendre, ils → prennent'),
      q('Je ', 'peux', ' venir demain. (pouvoir)', ['peux', 'peut', 'pouve', 'pouvons'], 'pouvoir, je → peux'),
      q('Tu ', 'veux', ' un café ? (vouloir)', ['veux', 'veut', 'voulez', 'voux'], 'vouloir, tu → veux'),
      q('Elle ', 'vient', ' de Lyon. (venir)', ['vient', 'viens', 'venit', 'viennent'], 'venir, elle → vient'),
      q('Je ne ', 'sais', ' pas. (savoir)', ['sais', 'sait', 'savons', 'sache'], 'savoir, je → sais'),
      q('Ils ', 'vont', ' au travail. (aller)', ['vont', 'allent', 'vas', 'va'], 'aller, ils → vont'),
      q('Vous ', 'faites', ' la cuisine ? (faire)', ['faites', 'faisez', 'faisons', 'font'], 'faire, vous → faites'),
      q('Nous ', 'finissons', ' à six heures. (finir)', ['finissons', 'finons', 'finisons', 'finissez'], '2. Gruppe: nous → -issons'),
      q('Je ', 'lis', ' un livre. (lire)', ['lis', 'lit', 'lise', 'lisons'], 'lire, je → lis'),
    ],
  },
  {
    id: 'articles-contractes',
    icon: '📍',
    title: 'à und de mit Artikel (au, du, aux …)',
    level: 'A1',
    instruction: 'Setze Präposition + Artikel zusammen ein.',
    explanation:
      'à + le = au, à + les = aux, de + le = du, de + les = des. à la, à l\', de la, de l\' bleiben getrennt. ' +
      'jouer à (Sport): au foot · jouer de (Instrument): du piano.',
    examples: [
      { target: 'Je vais au cinéma et à la plage.', de: 'Ich gehe ins Kino und an den Strand.' },
      { target: 'Je viens du marché.', de: 'Ich komme vom Markt.' },
    ],
    items: [
      q('Je vais ', 'au', ' cinéma. (à + le)', ['au', 'à le', 'du', 'aux'], 'à + le = au'),
      q('Il est ', 'à la', ' plage. (à + la)', ['à la', 'au', 'aux', 'de la'], 'à + la bleibt à la'),
      q('On va ', "à l'", 'hôpital. (à + l\')', ["à l'", 'au', "de l'", 'aux'], "à + l' bleibt à l'"),
      q('Je parle ', 'aux', ' enfants. (à + les)', ['aux', 'à les', 'des', 'au'], 'à + les = aux'),
      q('Je viens ', 'du', ' marché. (de + le)', ['du', 'de le', 'au', 'des'], 'de + le = du'),
      q("C'est la voiture ", 'du', ' professeur. (de + le)', ['du', 'de le', 'au', 'de la'], 'de + le = du'),
      q('Elle rentre ', "de l'", 'école. (de + l\')', ["de l'", 'du', "à l'", 'des'], "de + l' bleibt de l'"),
      q('Le prix ', 'des', ' billets. (de + les)', ['des', 'de les', 'aux', 'du'], 'de + les = des'),
      q('Nous allons ', 'à la', ' piscine. (à + la)', ['à la', 'au', 'de la', 'aux'], 'à + la bleibt à la'),
      q("J'ai mal ", 'aux', ' dents. (à + les)', ['aux', 'à les', 'au', 'des'], 'à + les = aux'),
      q('Je joue ', 'au', ' foot. (à + le)', ['au', 'du', 'à le', 'de le'], 'Sport → jouer à: au foot'),
      q('Il joue ', 'du', ' piano. (de + le)', ['du', 'au', 'de le', 'des'], 'Instrument → jouer de: du piano'),
    ],
  },
  {
    id: 'possessifs',
    icon: '🫵',
    title: 'Possessivbegleiter (mon, ma, mes …)',
    level: 'A1',
    lessonId: 'pronomen',
    instruction: 'Setze den passenden Possessivbegleiter ein.',
    explanation:
      'mon/ma/mes, ton/ta/tes, son/sa/ses, notre/nos, votre/vos, leur/leurs. Sie richten sich nach dem Besitz, ' +
      'nicht nach dem Besitzer: son père = sein oder ihr Vater. Vor weiblichem Wort mit Vokal: mon amie, son école.',
    examples: [
      { target: 'mon frère · ma sœur · mes parents', de: 'mein Bruder · meine Schwester · meine Eltern' },
      { target: 'mon amie', de: 'meine Freundin (Vokal → mon)' },
    ],
    items: [
      q('', 'mon', ' frère (je)', ['mon', 'ma', 'mes', 'ton'], 'le frère → mon'),
      q('', 'ma', ' sœur (je)', ['ma', 'mon', 'mes', 'sa'], 'la sœur → ma'),
      q('', 'mon', ' amie (je)', ['mon', 'ma', 'mes', 'm\''], 'weiblich, aber Vokal → mon'),
      q('', 'tes', ' parents (tu)', ['tes', 'ton', 'ta', 'ses'], 'Mehrzahl → tes'),
      q('', 'sa', ' voiture (il)', ['sa', 'son', 'ses', 'leur'], 'la voiture → sa (auch wenn „er")'),
      q('', 'son', ' père (elle)', ['son', 'sa', 'ses', 'leur'], 'le père → son (auch wenn „sie")'),
      q('', 'notre', ' maison (nous)', ['notre', 'nos', 'votre', 'leur'], 'Einzahl → notre'),
      q('', 'nos', ' enfants (nous)', ['nos', 'notre', 'vos', 'leurs'], 'Mehrzahl → nos'),
      q('', 'votre', ' adresse (vous)', ['votre', 'vos', 'notre', 'leur'], 'Einzahl → votre'),
      q('', 'vos', ' livres (vous)', ['vos', 'votre', 'nos', 'leurs'], 'Mehrzahl → vos'),
      q('', 'leur', ' chien (ils)', ['leur', 'leurs', 'son', 'ses'], 'sie, ein Besitz → leur'),
      q('', 'leurs', ' amis (ils)', ['leurs', 'leur', 'ses', 'vos'], 'sie, mehrere → leurs'),
    ],
  },
  {
    id: 'questions',
    icon: '❓',
    title: 'Fragewörter (où, quand, comment …)',
    level: 'A1',
    instruction: 'Setze das passende Fragewort ein.',
    explanation:
      'où (wo/wohin), d\'où (woher), quand (wann), comment (wie), pourquoi (warum; Antwort: parce que), ' +
      'combien (wie viel), qui (wer), qu\'est-ce que (was), quel/quelle/quels/quelles (welche/r – angeglichen).',
    examples: [
      { target: "Comment tu t'appelles ? D'où viens-tu ?", de: 'Wie heißt du? Woher kommst du?' },
      { target: 'Quelle heure est-il ?', de: 'Wie spät ist es?' },
    ],
    items: [
      q('', 'Comment', " tu t'appelles ?", ['Comment', 'Quel', 'Qui', 'Où'], 'wie? → comment'),
      q('', 'Où', ' habites-tu ?', ['Où', 'Quand', 'Comment', 'Qui'], 'wo? → où'),
      q('', "Qu'est-ce que", ' tu fais ?', ["Qu'est-ce que", 'Qui', 'Quel', 'Où'], 'was? → qu\'est-ce que'),
      q('', 'Qui', ' est ce garçon ?', ['Qui', 'Que', 'Quel', 'Quoi'], 'wer? → qui'),
      q('', 'Quel', ' âge as-tu ?', ['Quel', 'Quelle', 'Quels', 'Combien'], "l'âge (männlich) → quel"),
      q('', 'Quelle', ' heure est-il ?', ['Quelle', 'Quel', 'Quelles', 'Combien'], "l'heure (weiblich) → quelle"),
      q('', 'Combien', ' coûte le livre ?', ['Combien', 'Comment', 'Quel', 'Quand'], 'wie viel? → combien'),
      q('', 'Quand', ' pars-tu ?', ['Quand', 'Où', 'Combien', 'Comment'], 'wann? → quand'),
      q('', 'Pourquoi', ' tu ris ?', ['Pourquoi', 'Parce que', 'Comment', 'Quoi'], 'warum? → pourquoi'),
      q('', 'Combien de', ' frères as-tu ?', ['Combien de', 'Combien', 'Quels', 'Quel de'], 'wie viele + Nomen → combien de'),
      q('', 'Quelle', ' est ta couleur préférée ?', ['Quelle', 'Quel', 'Qu\'est-ce que', 'Laquelle de'], 'la couleur → quelle'),
      q("D'", 'où', ' viens-tu ?', ['où', 'quand', 'qui', 'quoi'], "woher? → d'où"),
    ],
  },
  {
    id: 'negation',
    icon: '🚫',
    title: 'Verneinung (ne … pas, ne … jamais …)',
    level: 'A1',
    instruction: 'Setze den fehlenden Teil der Verneinung ein.',
    explanation:
      'Die Verneinung umschließt das Verb: ne … pas (nicht), ne … plus (nicht mehr), ne … jamais (nie), ' +
      'ne … rien (nichts), ne … personne (niemand). Vor Vokal: n\'. Im Perfekt umschließt sie das Hilfsverb: ' +
      "je n'ai pas vu. Personne ne … steht auch als Subjekt am Satzanfang.",
    examples: [
      { target: "Je ne parle pas espagnol.", de: 'Ich spreche kein Spanisch.' },
      { target: "Il ne fume plus. Je n'ai rien vu.", de: 'Er raucht nicht mehr. Ich habe nichts gesehen.' },
    ],
    items: [
      q('Je ', 'ne', ' parle pas espagnol.', ['ne', 'pas', 'non', "n'"], 'Verneinung beginnt mit ne vor dem Verb'),
      q('Je ne mange ', 'pas', ' de viande.', ['pas', 'plus', 'rien', 'jamais'], 'nicht → ne … pas'),
      q('Il ne fume ', 'plus', '. (nicht mehr)', ['plus', 'pas', 'jamais', 'rien'], 'nicht mehr → ne … plus'),
      q("Je n'ai ", 'jamais', ' vu ce film. (nie)', ['jamais', 'pas', 'rien', 'personne'], 'nie → ne … jamais'),
      q('Je ne vois ', 'rien', '. (nichts)', ['rien', 'personne', 'pas', 'jamais'], 'nichts → ne … rien'),
      q('Je ne connais ', 'personne', ' ici. (niemand)', ['personne', 'rien', 'pas', 'plus'], 'niemand → ne … personne'),
      q('Il ', 'ne', ' travaille pas le lundi.', ['ne', 'pas', 'non', 'n\''], 'ne vor dem Verb'),
      q("Elle n'a ", 'pas', " d'argent.", ['pas', 'rien', 'plus', 'jamais'], 'kein → ne … pas de'),
      q('Tu ne bois ', 'jamais', ' de café ? (nie)', ['jamais', 'pas', 'rien', 'plus'], 'nie → ne … jamais'),
      q('', 'Personne', " ne m'a appelé. (niemand)", ['Personne', 'Rien', 'Jamais', 'Pas'], 'niemand als Subjekt → Personne ne'),
      q("Je n'ai ", 'plus', ' faim. (nicht mehr)', ['plus', 'pas', 'rien', 'jamais'], 'nicht mehr → ne … plus'),
      q("Ce n'est ", 'pas', ' grave.', ['pas', 'rien', 'plus', 'jamais'], 'nicht → ne … pas'),
    ],
  },
  {
    id: 'adjectifs',
    icon: '🎨',
    title: 'Adjektive angleichen',
    level: 'A1',
    instruction: 'Setze das Adjektiv in der richtigen Form ein.',
    explanation:
      'Weiblich meist + -e, Mehrzahl + -s. Besondere Formen: blanc → blanche, heureux → heureuse, bon → bonne, ' +
      'cher → chère, nouveau → nouvelle. beau/nouveau/vieux vor männlichem Vokal: bel, nouvel, vieil. ' +
      'Die meisten Adjektive stehen nach dem Nomen; kurze häufige (petit, grand, bon, beau, jeune, vieux) davor.',
    examples: [
      { target: 'une maison blanche · une bonne idée', de: 'ein weißes Haus · eine gute Idee' },
      { target: 'un bel homme · un vieil ami', de: 'ein schöner Mann · ein alter Freund' },
    ],
    items: [
      q('une maison ', 'blanche', ' (blanc)', ['blanche', 'blance', 'blanc', 'blanches'], 'blanc → blanche'),
      q('une ', 'petite', ' fille (petit)', ['petite', 'petit', 'petites', 'petitte'], 'weiblich → + e'),
      q('des voitures ', 'rouges', ' (rouge)', ['rouges', 'rouge', 'rougees', 'rougex'], 'Mehrzahl → + s'),
      q('une femme ', 'heureuse', ' (heureux)', ['heureuse', 'heureuxe', 'heureux', 'heureuses'], '-eux → -euse'),
      q('un ', 'vieil', ' ami (vieux)', ['vieil', 'vieux', 'vieille', 'vieu'], 'vor männlichem Vokal → vieil'),
      q('une ', 'bonne', ' idée (bon)', ['bonne', 'bone', 'bon', 'bonnes'], 'bon → bonne'),
      q('des livres ', 'intéressants', ' (intéressant)', ['intéressants', 'intéressantes', 'intéressant', 'intéressante'], 'männlich, Mehrzahl → + s'),
      q('une ', 'belle', ' maison (beau)', ['belle', 'beau', 'bel', 'belles'], 'beau → belle'),
      q('un ', 'bel', ' homme (beau)', ['bel', 'beau', 'belle', 'beaux'], 'vor männlichem Vokal/h → bel'),
      q('une ', 'nouvelle', ' robe (nouveau)', ['nouvelle', 'nouveau', 'nouvel', 'nouvelles'], 'nouveau → nouvelle'),
      q('une amie ', 'allemande', ' (allemand)', ['allemande', 'allemand', 'allemandes', 'allemane'], 'weiblich → + e'),
      q('des chaussures ', 'chères', ' (cher)', ['chères', 'chers', 'chère', 'cherres'], 'cher → chère, Mehrzahl chères'),
    ],
  },
  {
    id: 'prepositions-lieux',
    icon: '🌍',
    title: 'Städte und Länder (à, en, au, aux)',
    level: 'A1',
    instruction: 'Setze die passende Präposition ein.',
    explanation:
      'Städte: à (à Paris). Weibliche Länder (meist auf -e) und Länder mit Vokal: en (en France, en Italie). ' +
      'Männliche Länder: au (au Canada, au Japon). Länder im Plural: aux (aux États-Unis).',
    examples: [
      { target: "J'habite à Berlin, en Allemagne.", de: 'Ich wohne in Berlin, in Deutschland.' },
      { target: 'Il va au Canada et aux États-Unis.', de: 'Er fährt nach Kanada und in die USA.' },
    ],
    items: [
      q("J'habite ", 'à', ' Paris.', ['à', 'en', 'au', 'aux'], 'Stadt → à'),
      q('Je vais ', 'en', ' France.', ['en', 'à', 'au', 'aux'], 'la France (weiblich) → en'),
      q('Il vit ', 'au', ' Canada.', ['au', 'en', 'à', 'aux'], 'le Canada (männlich) → au'),
      q('Nous allons ', 'aux', ' États-Unis.', ['aux', 'au', 'en', 'à'], 'Mehrzahl → aux'),
      q('Elle travaille ', 'en', ' Italie.', ['en', 'au', 'à', 'aux'], "l'Italie (weiblich) → en"),
      q('Je suis né ', 'à', ' Berlin.', ['à', 'en', 'au', 'aux'], 'Stadt → à'),
      q('Ils partent ', 'au', ' Japon.', ['au', 'en', 'à', 'aux'], 'le Japon (männlich) → au'),
      q("On passe l'été ", 'en', ' Espagne.', ['en', 'au', 'à', 'aux'], "l'Espagne (weiblich) → en"),
      q('Il habite ', 'au', ' Portugal.', ['au', 'en', 'à', 'aux'], 'le Portugal (männlich) → au'),
      q('Je vais ', 'à', ' Londres.', ['à', 'en', 'au', 'aux'], 'Stadt → à'),
      q('Nous voyageons ', 'aux', ' Pays-Bas.', ['aux', 'au', 'en', 'à'], 'les Pays-Bas (Mehrzahl) → aux'),
      q('Elle étudie ', 'en', ' Allemagne.', ['en', 'au', 'à', 'aux'], "l'Allemagne (weiblich) → en"),
    ],
  },

  // ══════════════════════════════ A2 ══════════════════════════════
  {
    id: 'demonstratifs',
    icon: '👉',
    title: 'Demonstrativbegleiter (ce, cet, cette, ces)',
    level: 'A2',
    instruction: 'Setze den passenden Demonstrativbegleiter ein.',
    explanation:
      'ce (männlich), cet (männlich vor Vokal oder stummem h), cette (weiblich), ces (Mehrzahl). ' +
      'Zeitangaben: ce matin, cet après-midi, cette semaine, cette année.',
    examples: [
      { target: 'ce livre · cet homme · cette maison · ces enfants', de: 'dieses Buch · dieser Mann · dieses Haus · diese Kinder' },
      { target: 'cette semaine', de: 'diese Woche' },
    ],
    items: [
      q('', 'Ce', ' livre est intéressant.', ['Ce', 'Cet', 'Cette', 'Ces'], 'männlich → ce'),
      q('', 'Cet', ' homme est mon voisin.', ['Cet', 'Ce', 'Cette', 'Ces'], 'männlich + Vokal/h → cet'),
      q('', 'Cette', ' maison est belle.', ['Cette', 'Ce', 'Cet', 'Ces'], 'weiblich → cette'),
      q('', 'Ces', ' enfants jouent dehors.', ['Ces', 'Ce', 'Cet', 'Cette'], 'Mehrzahl → ces'),
      q('', 'Cet', ' hôtel est cher.', ['Cet', 'Ce', 'Cette', 'Ces'], 'stummes h → cet'),
      q('', 'Cette', ' année, je vais en Italie.', ['Cette', 'Cet', 'Ce', 'Ces'], "l'année (weiblich) → cette"),
      q('', 'Ce', ' matin, il pleut.', ['Ce', 'Cet', 'Cette', 'Ces'], 'le matin → ce'),
      q("J'aime ", 'cette', ' voiture.', DEM, 'la voiture → cette'),
      q("C'est ", 'cet', ' ami dont je t\'ai parlé.', DEM, 'männlich + Vokal → cet'),
      q("J'achète ", 'ces', ' fleurs.', DEM, 'Mehrzahl → ces'),
      q('Tu connais ', 'ce', ' garçon ?', DEM, 'männlich → ce'),
      q('', 'Cet', ' été, nous restons ici.', ['Cet', 'Ce', 'Cette', 'Ces'], "l'été (männlich, Vokal) → cet"),
    ],
  },
  {
    id: 'pronominaux',
    icon: '🪞',
    title: 'Reflexive Verben (se lever …)',
    level: 'A2',
    instruction: 'Setze das Reflexivpronomen oder die Verbform ein.',
    explanation:
      'me, te, se, nous, vous, se stehen vor dem Verb; vor Vokal: m\', t\', s\'. Im bejahten Imperativ hinten: ' +
      'lève-toi, dépêchez-vous. Beim Infinitiv passt das Pronomen zur Person: je vais me doucher.',
    examples: [
      { target: 'Je me lève à sept heures.', de: 'Ich stehe um sieben auf.' },
      { target: "Elle s'appelle Marie.", de: 'Sie heißt Marie.' },
    ],
    items: [
      q('Je ', 'me', ' lève à sept heures.', ['me', 'te', 'se', 'nous'], 'je → me'),
      q('Tu ', "t'", 'appelles comment ?', ["t'", 'te', "s'", "m'"], "tu vor Vokal → t'"),
      q('Il ', 'se', ' rase le matin.', ['se', 'le', 'lui', 'me'], 'il → se'),
      q('Nous ', 'nous', ' couchons tard.', ['nous', 'vous', 'se', 'nos'], 'nous → nous'),
      q('Vous ', 'vous', ' habillez vite ?', ['vous', 'nous', 'se', 'vos'], 'vous → vous'),
      q('Elles ', "s'", 'amusent bien.', ["s'", 'se', 'les', "l'"], "elles vor Vokal → s'"),
      q('Je ', "m'", 'appelle Marie.', ["m'", 'me', "t'", "s'"], "je vor Vokal → m'"),
      q('Tu te ', 'réveilles', ' à quelle heure ? (se réveiller)', ['réveilles', 'réveille', 'réveillez', 'réveil'], 'tu → -es'),
      q('Nous nous ', 'retrouvons', ' au café. (se retrouver)', ['retrouvons', 'retrouvez', 'retrouve', 'retrouvent'], 'nous → -ons'),
      q('Ils se ', 'disputent', ' souvent. (se disputer)', ['disputent', 'dispute', 'disputes', 'disputons'], 'ils → -ent'),
      q('Je vais ', 'me', ' doucher.', ['me', 'se', 'te', 'moi'], 'Pronomen passt zur Person: je → me'),
      q('Dépêche-', 'toi', ' !', ['toi', 'te', 'tu', 'moi'], 'bejahter Imperativ: te → toi'),
    ],
  },
  {
    id: 'passe-compose-avoir',
    icon: '✅',
    title: 'Passé composé mit avoir',
    level: 'A2',
    instruction: 'Setze das Hilfsverb oder das Partizip ein.',
    explanation:
      'avoir im Präsens + Partizip: -er → -é, -ir → -i, -re → -u. Unregelmäßig: fait, dit, écrit, pris, mis, vu, lu, ' +
      'bu, eu, été, ouvert, reçu, pu, voulu, su. Mit avoir wird das Partizip (hier) nicht angeglichen.',
    examples: [
      { target: "Hier, j'ai travaillé.", de: 'Gestern habe ich gearbeitet.' },
      { target: 'Tu as fait tes devoirs ?', de: 'Hast du deine Hausaufgaben gemacht?' },
    ],
    items: [
      q("Hier, j'", 'ai', ' travaillé.', ['ai', 'suis', 'as', 'a'], 'j\' → ai'),
      q('Tu ', 'as', ' mangé ?', ['as', 'es', 'a', 'ai'], 'tu → as'),
      q('Nous ', 'avons', ' vu un film.', ['avons', 'sommes', 'avez', 'ont'], 'nous → avons'),
      q('Ils ', 'ont', ' fini.', ['ont', 'sont', 'a', 'avons'], 'ils → ont'),
      q("J'ai ", 'lu', ' un livre. (lire)', ['lu', 'lis', 'lit', 'lisé'], 'lire → lu'),
      q('Elle a ', 'écrit', ' une lettre. (écrire)', ['écrit', 'écrivé', 'écris', 'écrire'], 'écrire → écrit'),
      q('Vous avez ', 'ouvert', ' la porte ? (ouvrir)', ['ouvert', 'ouvri', 'ouvré', 'ouvrit'], 'ouvrir → ouvert'),
      q('Il a ', 'dit', ' la vérité. (dire)', ['dit', 'disé', 'dis', 'dié'], 'dire → dit'),
      q('On a ', 'bu', ' du vin. (boire)', ['bu', 'boi', 'boiré', 'buvé'], 'boire → bu'),
      q("J'ai ", 'pris', ' le train. (prendre)', ['pris', 'prendu', 'prené', 'prit'], 'prendre → pris'),
      q('Tu as ', 'fait', ' tes devoirs ? (faire)', ['fait', 'faisé', 'fais', 'faité'], 'faire → fait'),
      q('Nous avons ', 'reçu', ' un cadeau. (recevoir)', ['reçu', 'recevu', 'reçevé', 'reçoit'], 'recevoir → reçu'),
    ],
  },
  {
    id: 'passe-compose-etre',
    icon: '🚪',
    title: 'Passé composé mit être',
    level: 'A2',
    instruction: 'Setze das Hilfsverb oder das angeglichene Partizip ein.',
    explanation:
      'Mit être: Verben der Bewegung/Veränderung (aller, venir, arriver, partir, entrer, sortir, monter, descendre, ' +
      'tomber, rester, naître, mourir, rentrer, devenir) und alle reflexiven Verben. Das Partizip richtet sich dann ' +
      'nach dem Subjekt: elle est partie, ils sont venus, elles sont arrivées.',
    examples: [
      { target: 'Je suis allé(e) au cinéma.', de: 'Ich bin ins Kino gegangen.' },
      { target: 'Elles sont arrivées à midi.', de: 'Sie sind mittags angekommen.' },
    ],
    items: [
      q('Je ', 'suis', ' allé au cinéma.', ['suis', 'ai', 'es', 'est'], 'aller → être: je suis'),
      q('Elle est ', 'partie', ' hier. (partir)', ['partie', 'parti', 'partis', 'parties'], 'elle → Partizip + e'),
      q('Nous ', 'sommes', ' arrivés à midi.', ['sommes', 'avons', 'êtes', 'sont'], 'arriver → être: nous sommes'),
      q('Ils sont ', 'venus', ' en retard. (venir)', ['venus', 'venu', 'venues', 'viens'], 'ils → Partizip + s'),
      q('Elle est ', 'née', ' en 1990. (naître)', ['née', 'né', 'nés', 'naît'], 'naître → né, elle → née'),
      q('Tu ', 'es', ' resté à la maison ?', ['es', 'as', 'est', 'a'], 'rester → être: tu es'),
      q('Marie est ', 'tombée', '. (tomber)', ['tombée', 'tombé', 'tombés', 'tombées'], 'Marie (weiblich) → + e'),
      q('Paul et Julie sont ', 'sortis', '. (sortir)', ['sortis', 'sorties', 'sorti', 'sortie'], 'gemischt → männlich Mehrzahl: + s'),
      q('Je me suis ', 'levée', ' tôt. (se lever – eine Frau spricht)', ['levée', 'levé', 'levés', 'levées'], 'reflexiv → être, weiblich + e'),
      q('Ils se sont bien ', 'amusés', '. (s\'amuser)', ['amusés', 'amusé', 'amusées', 'amusée'], 'reflexiv, ils → + s'),
      q('Il est ', 'descendu', ' du train. (descendre)', ['descendu', 'descendi', 'descendé', 'descendus'], 'descendre → descendu'),
      q('Mes sœurs sont ', 'rentrées', ' tard. (rentrer)', ['rentrées', 'rentrés', 'rentrée', 'rentré'], 'weiblich Mehrzahl → + es'),
    ],
  },
  {
    id: 'imparfait',
    icon: '🕰️',
    title: 'Imparfait (je parlais)',
    level: 'A2',
    instruction: 'Setze das Verb im imparfait ein.',
    explanation:
      'Stamm der nous-Form im Präsens (nous parlons → parl-) + -ais, -ais, -ait, -ions, -iez, -aient. ' +
      'Einzige Ausnahme: être → ét-. Gebraucht für Gewohnheiten, Beschreibungen und Umstände in der Vergangenheit.',
    examples: [
      { target: 'Quand j\'étais petit, je jouais au foot.', de: 'Als ich klein war, spielte ich Fußball.' },
      { target: 'Il faisait beau.', de: 'Das Wetter war schön.' },
    ],
    items: [
      q('Quand j\'étais petit, je ', 'jouais', ' au foot. (jouer)', ['jouais', 'jouait', 'jouai', 'jouerais'], 'je → -ais'),
      q('Nous ', 'habitions', ' à la campagne. (habiter)', ['habitions', 'habitons', 'habitiez', 'habitaient'], 'nous → -ions'),
      q('Il ', 'faisait', ' beau. (faire)', ['faisait', 'fesait', 'faisais', 'fait'], 'faire → fais- + -ait'),
      q('Tu ', 'lisais', ' souvent ? (lire)', ['lisais', 'lisait', 'lirais', 'lis'], 'lire → lis- + -ais'),
      q("C'", 'était', ' en 2010. (être)', ['était', 'été', 'étais', 'est'], 'être → ét- + -ait'),
      q('Elles ', 'riaient', ' toujours. (rire)', ['riaient', 'rient', 'riait', 'riraient'], 'rire → ri- + -aient'),
      q('Vous ', 'aviez', ' un chien ? (avoir)', ['aviez', 'avez', 'avions', 'auriez'], 'avoir → av- + -iez'),
      q('Je ', 'buvais', ' du café chaque matin. (boire)', ['buvais', 'boivais', 'boirais', 'bois'], 'boire → buv- + -ais'),
      q('Nous ', 'regardions', ' la télé. (regarder)', ['regardions', 'regardons', 'regardiez', 'regardait'], 'nous → -ions'),
      q('Il ', 'pleuvait', ' quand je suis sorti. (pleuvoir)', ['pleuvait', 'pleuvais', 'pleut', 'pleuvra'], 'Hintergrund → imparfait'),
      q('Mes parents ', 'travaillaient', ' beaucoup. (travailler)', ['travaillaient', 'travaillait', 'travaillent', 'travaillèrent'], 'ils → -aient'),
      q('On ', 'mangeait', ' des glaces. (manger)', ['mangeait', 'mangait', 'mangeais', 'mange'], '-ger: e bleibt vor a'),
    ],
  },
  {
    id: 'futur',
    icon: '🔮',
    title: 'Futur simple',
    level: 'A2',
    instruction: 'Setze das Verb im futur simple ein.',
    explanation:
      'Infinitiv (bei -re ohne e) + -ai, -as, -a, -ons, -ez, -ont. Unregelmäßige Stämme: ser- (être), aur- (avoir), ' +
      'ir- (aller), fer- (faire), pourr- (pouvoir), voudr- (vouloir), viendr- (venir), verr- (voir), saur- (savoir), ' +
      'devr- (devoir), enverr- (envoyer), pleuvr- (pleuvoir).',
    examples: [
      { target: 'Demain, je verrai mes amis.', de: 'Morgen werde ich meine Freunde sehen.' },
      { target: "L'été prochain, nous irons en Italie.", de: 'Nächsten Sommer fahren wir nach Italien.' },
    ],
    items: [
      q('Demain, je ', 'verrai', ' mes grands-parents. (voir)', ['verrai', 'voirai', 'verrais', 'vois'], 'voir → verr-'),
      q("L'été prochain, nous ", 'irons', ' en Italie. (aller)', ['irons', 'allerons', 'irions', 'allons'], 'aller → ir-'),
      q('Tu ', 'viendras', ' à la fête ? (venir)', ['viendras', 'veniras', 'viendrais', 'viens'], 'venir → viendr-'),
      q('Il ', 'pleuvra', ' demain. (pleuvoir)', ['pleuvra', 'pleuvoira', 'pleuvrait', 'pleut'], 'pleuvoir → pleuvr-'),
      q('Ils ', 'auront', ' le temps. (avoir)', ['auront', 'avoiront', 'auraient', 'ont'], 'avoir → aur-'),
      q('Je te le ', 'dirai', ' plus tard. (dire)', ['dirai', 'direrai', 'dirais', 'dis'], 'dire → dir-'),
      q('Vous ', 'ferez', ' quoi ce week-end ? (faire)', ['ferez', 'fairez', 'feriez', 'faites'], 'faire → fer-'),
      q('Je ne ', 'pourrai', ' pas venir. (pouvoir)', ['pourrai', 'pouvrai', 'pourrais', 'peux'], 'pouvoir → pourr-'),
      q('Nous ', 'serons', ' à l\'heure. (être)', ['serons', 'êtrons', 'serions', 'sommes'], 'être → ser-'),
      q('Elle ', 'arrivera', ' à midi. (arriver)', ['arrivera', 'arrivra', 'arriverait', 'arrive'], 'Infinitiv + -a'),
      q('Tu ', 'sauras', ' les résultats lundi. (savoir)', ['sauras', 'savoiras', 'saurais', 'sais'], 'savoir → saur-'),
      q('Nous ', 'mettrons', ' la table. (mettre)', ['mettrons', 'metterons', 'mettrions', 'mettons'], '-re: Infinitiv ohne e + -ons'),
    ],
  },
  {
    id: 'pronoms-cod',
    icon: '🎯',
    title: 'Direkte Objektpronomen (le, la, les)',
    level: 'A2',
    instruction: 'Setze das passende direkte Objektpronomen ein.',
    explanation:
      'me, te, le/la (vor Vokal: l\'), nous, vous, les ersetzen das direkte Objekt (Akkusativ). Sie stehen vor dem ' +
      'konjugierten Verb, beim Infinitiv vor dem Infinitiv: je veux le voir. Im Perfekt vor dem Hilfsverb: je l\'ai vu.',
    examples: [
      { target: 'Tu vois Paul ? – Oui, je le vois.', de: 'Siehst du Paul? – Ja, ich sehe ihn.' },
      { target: 'Je veux voir le film. → Je veux le voir.', de: 'Ich will den Film sehen. → … ihn sehen.' },
    ],
    items: [
      q('Tu vois Paul ? – Oui, je ', 'le', ' vois.', ['le', 'la', 'lui', 'les'], 'Paul (männlich) → le'),
      q('Tu as la clé ? – Oui, je ', "l'", 'ai.', ["l'", 'la', 'le', 'lui'], "vor Vokal → l'"),
      q('Tu prends les billets ? – Oui, je ', 'les', ' prends.', ['les', 'leur', 'le', 'la'], 'Mehrzahl → les'),
      q('Tu connais ses sœurs ? – Non, je ne ', 'les', ' connais pas.', ['les', 'leur', 'la', 'lui'], 'Mehrzahl → les'),
      q("Tu m'appelles demain ? – Oui, je ", "t'", 'appelle.', ["t'", 'te', "m'", 'toi'], "dich, vor Vokal → t'"),
      q('Tu nous invites ? – Bien sûr, je ', 'vous', ' invite.', ['vous', 'nous', 'les', 'leur'], 'euch → vous'),
      q('Je veux voir le film. → Je veux ', 'le', ' voir.', ['le', 'lui', 'la', 'les'], 'vor dem Infinitiv'),
      q('Tu as lu le journal ? – Oui, je ', "l'", 'ai lu.', ["l'", 'le', 'lui', 'la'], "vor avoir → l'"),
      q('Je regarde la télé. → Je ', 'la', ' regarde.', ['la', 'le', 'lui', 'les'], 'la télé → la'),
      q('Il aime Marie ? – Oui, il ', "l'", 'aime.', ["l'", 'la', 'lui', 'le'], "Marie, vor Vokal → l'"),
      q("Tu m'aimes ? – Oui, je ", "t'", 'aime.', ["t'", 'te', 'toi', "m'"], "dich, vor Vokal → t'"),
      q('Tu attends le bus ? – Oui, je ', "l'", 'attends.', ["l'", 'le', 'lui', 'la'], "vor Vokal → l'"),
    ],
  },
  {
    id: 'pronoms-coi',
    icon: '🎁',
    title: 'Indirekte Objektpronomen (lui, leur)',
    level: 'A2',
    instruction: 'Setze das passende indirekte Objektpronomen ein.',
    explanation:
      'me, te, lui, nous, vous, leur ersetzen „à + Person" (Dativ: wem?). lui = ihm/ihr, leur = ihnen. ' +
      'Typische Verben: donner, dire, écrire, parler, téléphoner, envoyer, offrir, demander à qn.',
    examples: [
      { target: 'Je donne le livre à Anna. → Je lui donne le livre.', de: 'Ich gebe ihr das Buch.' },
      { target: 'Tu écris à tes parents ? → Tu leur écris ?', de: 'Schreibst du ihnen?' },
    ],
    items: [
      q('Je ', 'lui', ' donne le livre. (à Anna)', ['lui', 'la', 'leur', 'le'], 'à Anna → lui'),
      q('Tu ', 'leur', ' écris ? (à tes parents)', ['leur', 'les', 'lui', 'leurs'], 'à tes parents → leur'),
      q('Ma mère ', "m'", 'offre un livre. (à moi)', ["m'", 'me', 'moi', "t'"], "mir, vor Vokal → m'"),
      q('Je peux ', 'te', ' poser une question ? (à toi)', ['te', 'toi', 'lui', 'vous'], 'dir → te'),
      q('Le prof ', 'nous', ' explique la règle. (à nous)', ['nous', 'vous', 'leur', 'lui'], 'uns → nous'),
      q('Je ', 'lui', ' offre des fleurs. (à ma mère)', ['lui', 'la', 'leur', "l'"], 'à ma mère → lui'),
      q("Qu'est-ce qui ", "t'", 'arrive ? (à toi)', ["t'", 'te', 'toi', "s'"], "dir, vor Vokal → t'"),
      q('Je ', 'lui', ' téléphone ce soir. (à Paul)', ['lui', 'le', 'leur', 'la'], 'à Paul → lui'),
      q('Je ', 'vous', ' apporte un café, madame ?', ['vous', 'lui', 'la', 'te'], 'Ihnen (vous) → vous'),
      q('Il ', 'lui', ' ressemble beaucoup. (à son père)', ['lui', 'le', 'leur', 'se'], 'à son père → lui'),
      q('Tu ', 'leur', ' as parlé ? (à tes parents)', ['leur', 'les', 'lui', 'leurs'], 'à tes parents → leur'),
      q('Je ', 'leur', ' envoie un message. (à mes amis)', ['leur', 'les', 'lui', 'leurs'], 'à mes amis → leur'),
    ],
  },
  {
    id: 'comparatifs',
    icon: '📊',
    title: 'Vergleiche (plus … que, aussi … que)',
    level: 'A2',
    instruction: 'Setze das passende Wort ein.',
    explanation:
      'plus / moins / aussi + Adjektiv + que. Mit Nomen: plus de / moins de / autant de … que. ' +
      'Unregelmäßig: bon → meilleur, bien → mieux. Superlativ: le/la/les plus … (de). Vor Zahlen: plus de.',
    examples: [
      { target: 'Paris est plus grand que Lyon.', de: 'Paris ist größer als Lyon.' },
      { target: 'Il est aussi grand que moi.', de: 'Er ist so groß wie ich.' },
      { target: 'Ton vélo est meilleur que le mien.', de: 'Dein Fahrrad ist besser als meins.' },
    ],
    items: [
      q('Paris est ', 'plus', ' grand que Lyon.', ['plus', 'aussi', 'très', 'beaucoup'], 'größer als → plus … que'),
      q('Il est ', 'aussi', ' grand que moi.', ['aussi', 'autant', 'plus', 'si'], 'so … wie → aussi … que'),
      q('Ce film est ', 'moins', ' intéressant que le livre. (weniger)', ['moins', 'aussi', 'plus', 'peu'], 'weniger → moins … que'),
      q('Elle a ', 'autant de', ' livres que moi. (so viele)', ['autant de', 'aussi', 'autant', 'aussi de'], 'so viele + Nomen → autant de'),
      q('Ton vélo est ', 'meilleur', ' que le mien. (gut)', ['meilleur', 'plus bon', 'mieux', 'bon'], 'besser (Adjektiv) → meilleur'),
      q('Il chante ', 'mieux', ' que moi. (gut)', ['mieux', 'meilleur', 'plus bien', 'bon'], 'besser (Adverb) → mieux'),
      q("C'est le garçon le ", 'plus', ' gentil de la classe.', ['plus', 'très', 'aussi', 'moins de'], 'Superlativ → le plus …'),
      q("C'est la ", 'meilleure', ' idée ! (gut, Superlativ)', ['meilleure', 'plus bonne', 'mieux', 'meilleur'], 'die beste → la meilleure'),
      q('Paris est plus grand ', 'que', ' Lyon.', ['que', 'comme', 'de', 'aussi'], 'als → que'),
      q("J'ai plus ", 'de', ' cent livres.', ['de', 'que', 'des', 'à'], 'vor Zahlen → plus de'),
      q('Elle court ', 'plus', ' vite que moi.', ['plus', 'aussi', 'moins de', 'autant'], 'schneller → plus vite'),
      q('Mon frère est ', 'plus', ' âgé que moi. (älter)', ['plus', 'moins', 'autant', 'aussi de'], 'älter → plus âgé'),
    ],
  },
  {
    id: 'imperatif',
    icon: '📢',
    title: 'Imperativ (parle ! parlez !)',
    level: 'A2',
    instruction: 'Setze den bejahten Imperativ ein.',
    explanation:
      'Formen von tu, nous, vous ohne Pronomen. Bei -er-Verben (und aller) fällt das -s der tu-Form weg: parle, va. ' +
      'Unregelmäßig: être (sois, soyons, soyez), avoir (aie, ayons, ayez), savoir (sache …). ' +
      'Reflexiv: lève-toi, dépêchez-vous.',
    examples: [
      { target: 'Ferme la porte ! Venez ici !', de: 'Mach die Tür zu! Kommt her!' },
      { target: 'Sois sage ! Lève-toi !', de: 'Sei brav! Steh auf!' },
    ],
    items: [
      q('', 'Ferme', ' la porte ! (fermer, tu)', ['Ferme', 'Fermes', 'Fermez', 'Fermer'], '-er, tu → ohne s'),
      q('', 'Viens', ' ici ! (venir, tu)', ['Viens', 'Vient', 'Viene', 'Venez'], 'venir, tu → viens'),
      q('', 'Fais', ' tes devoirs ! (faire, tu)', ['Fais', 'Fait', 'Faites', 'Faire'], 'faire, tu → fais'),
      q('', 'Parlez', ' plus lentement ! (parler, vous)', ['Parlez', 'Parle', 'Parles', 'Parlons'], 'vous → -ez'),
      q('', 'Allons', '-y ! (aller, nous)', ['Allons', 'Allez', 'Va', 'Vont'], 'nous → allons'),
      q('', 'Sois', ' sage ! (être, tu)', ['Sois', 'Es', 'Soit', 'Sais'], 'être, tu → sois'),
      q('', 'Aie', ' confiance ! (avoir, tu)', ['Aie', 'As', 'Ais', 'Ait'], 'avoir, tu → aie'),
      q('', 'Va', ' à la maison ! (aller, tu)', ['Va', 'Vas', 'Vais', 'Allez'], 'aller, tu → va (ohne s)'),
      q('', 'Mettez', ' la table ! (mettre, vous)', ['Mettez', 'Mets', 'Mettons', 'Mettre'], 'vous → mettez'),
      q('', 'Lève-toi', ' ! (se lever, tu)', ['Lève-toi', 'Lève-te', 'Te lève', 'Levez-toi'], 'reflexiv: Pronomen hinten, te → toi'),
      q('', 'Attends', '-moi ! (attendre, tu)', ['Attends', 'Attend', 'Attende', 'Attendez-moi'], '-re, tu → attends (mit s)'),
      q('', 'Buvez', ' de l\'eau ! (boire, vous)', ['Buvez', 'Boivez', 'Boirez', 'Bois'], 'boire, vous → buvez'),
    ],
  },
  {
    id: 'futur-proche',
    icon: '⏳',
    title: 'Nahe Zukunft, jüngste Vergangenheit, Verlauf',
    level: 'A2',
    instruction: 'Setze das fehlende Wort ein.',
    explanation:
      'aller + Infinitiv: gleich/bald (je vais partir). venir de + Infinitiv: gerade eben (je viens de manger). ' +
      'être en train de + Infinitiv: gerade dabei sein (je suis en train de cuisiner).',
    examples: [
      { target: 'Je vais partir.', de: 'Ich gehe gleich.' },
      { target: 'Il vient de sortir.', de: 'Er ist gerade gegangen.' },
      { target: 'Nous sommes en train de manger.', de: 'Wir essen gerade.' },
    ],
    items: [
      q('Je ', 'vais', ' partir. (gleich)', ['vais', 'viens', 'suis', 'va'], 'aller + Infinitiv'),
      q('Il ', 'vient', ' de sortir. (gerade eben)', ['vient', 'va', 'est', 'viens'], 'venir de + Infinitiv'),
      q('Nous sommes en ', 'train', ' de manger.', ['train', 'cours', 'trains', 'temps'], 'être en train de'),
      q('Elles ', 'vont', ' arriver bientôt.', ['vont', 'viennent', 'sont', 'vas'], 'aller, elles → vont'),
      q('Je ', 'viens', ' de finir mon travail.', ['viens', 'vais', 'suis', 'vient'], 'venir de, je → viens'),
      q('Tu es en train ', 'de', ' lire ?', ['de', 'à', 'en', 'pour'], 'en train de + Infinitiv'),
      q('On ', 'va', ' voir. (wir werden sehen)', ['va', 'vient', 'vont', 'est'], 'aller, on → va'),
      q('Ils ', 'viennent', ' de partir.', ['viennent', 'vont', 'venont', 'vient'], 'venir de, ils → viennent'),
      q('Vous ', 'allez', ' faire quoi ?', ['allez', 'venez', 'êtes', 'vont'], 'aller, vous → allez'),
      q('Je suis ', 'en', ' train de cuisiner.', ['en', 'au', 'dans', 'à'], 'être en train de'),
      q('Elle vient ', 'de', ' téléphoner.', ['de', 'à', 'en', 'pour'], 'venir de + Infinitiv'),
      q('Nous ', 'venons', ' de rentrer.', ['venons', 'allons', 'sommes', 'venez'], 'venir de, nous → venons'),
    ],
  },

  // ══════════════════════════════ B1 ══════════════════════════════
  {
    id: 'imparfait-passe-compose',
    icon: '🎬',
    title: 'Imparfait oder Passé composé?',
    level: 'B1',
    instruction: 'Wähle die passende Vergangenheitsform.',
    explanation:
      'Passé composé: abgeschlossene, einmalige Handlungen und Ereignisse (hier, soudain, en 2015) – der Vordergrund. ' +
      'Imparfait: Gewohnheiten, Beschreibungen, Uhrzeit, Umstände und laufende Handlungen – der Hintergrund. ' +
      'Je regardais la télé quand le téléphone a sonné.',
    examples: [
      { target: 'Hier, je suis allé au cinéma.', de: 'Gestern bin ich ins Kino gegangen. (einmalig)' },
      { target: 'Quand j\'étais petit, je jouais au foot.', de: 'Als Kind spielte ich Fußball. (Gewohnheit)' },
    ],
    items: [
      q('Hier, je ', 'suis allé', ' au cinéma. (aller)', ['suis allé', 'allais'], 'einmalig, gestern → passé composé'),
      q("Quand j'étais petit, je ", 'jouais', ' au foot. (jouer)', ['jouais', 'ai joué'], 'Gewohnheit → imparfait'),
      q('Je ', 'regardais', ' la télé quand le téléphone a sonné. (regarder)', ['regardais', 'ai regardé'], 'laufende Handlung → imparfait'),
      q('Ce jour-là, il ', 'faisait', ' beau. (faire)', ['faisait', 'a fait'], 'Wetter/Beschreibung → imparfait'),
      q("Soudain, j'", 'ai entendu', ' un bruit. (entendre)', ['ai entendu', 'entendais'], 'soudain → passé composé'),
      q('Il ', 'était', ' minuit quand je suis rentré. (être)', ['était', 'a été'], 'Uhrzeit → imparfait'),
      q('En 2015, nous ', 'avons déménagé', ' à Paris. (déménager)', ['avons déménagé', 'déménagions'], 'Zeitpunkt, abgeschlossen → passé composé'),
      q("Avant, j'", 'habitais', ' à Hambourg. (habiter)', ['habitais', 'ai habité'], 'früherer Zustand → imparfait'),
      q('La maison ', 'était', ' grande. (être)', ['était', 'a été'], 'Beschreibung → imparfait'),
      q("Hier, j'", 'ai étudié', ' trois heures. (étudier)', ['ai étudié', 'étudiais'], 'abgeschlossener Zeitraum → passé composé'),
      q('Il ', 'arrivait', ' toujours en retard. (arriver)', ['arrivait', 'est arrivé'], 'toujours, Gewohnheit → imparfait'),
      q('Quand je suis sorti, il ', 'pleuvait', '. (pleuvoir)', ['pleuvait', 'a plu'], 'Umstand → imparfait'),
    ],
  },
  {
    id: 'conditionnel',
    icon: '🤔',
    title: 'Konditional (je voudrais)',
    level: 'B1',
    instruction: 'Setze das Verb im conditionnel ein.',
    explanation:
      'Stamm des Futurs + Endungen des Imparfait: -ais, -ais, -ait, -ions, -iez, -aient (je parlerais, je serais, ' +
      "j'aurais, je ferais, je pourrais, je voudrais). Für höfliche Bitten, Wünsche, Ratschläge und Hypothesen.",
    examples: [
      { target: "J'aimerais aller au Japon.", de: 'Ich würde gern nach Japan fahren.' },
      { target: 'Tu pourrais fermer la fenêtre ?', de: 'Könntest du das Fenster schließen?' },
    ],
    items: [
      q("J'", 'aimerais', ' aller au Japon. (aimer)', ['aimerais', 'aimerai', 'aimais', 'aime'], 'Wunsch → -ais'),
      q('Tu ', 'pourrais', ' fermer la fenêtre ? (pouvoir)', ['pourrais', 'pouvrais', 'pourras', 'pouvais'], 'höflich, pouvoir → pourr-'),
      q('À ta place, je ne le ', 'ferais', ' pas. (faire)', ['ferais', 'fairais', 'ferai', 'faisais'], 'Ratschlag, faire → fer-'),
      q('Je ', 'voudrais', ' un café. (vouloir)', ['voudrais', 'voulerais', 'voudrai', 'voulais'], 'höflich, vouloir → voudr-'),
      q('Avec un autre travail, nous ', 'gagnerions', ' plus. (gagner)', ['gagnerions', 'gagnerons', 'gagnions', 'gagnons'], 'Hypothese → -ions'),
      q("Qu'est-ce que vous ", 'feriez', ' avec un million ? (faire)', ['feriez', 'ferez', 'faisiez', 'faites'], 'faire → fer- + -iez'),
      q("Il a dit qu'il ", 'appellerait', ' plus tard. (appeler)', ['appellerait', 'appelerait', 'appellera', 'appelait'], 'Zukunft in der Vergangenheit → conditionnel'),
      q('Vous ', 'auriez', " l'heure ? (avoir)", ['auriez', 'avriez', 'aurez', 'aviez'], 'höflich, avoir → aur-'),
      q('Ils ', 'devraient', ' étudier plus. (devoir)', ['devraient', 'devoiraient', 'devront', 'devaient'], 'Ratschlag, devoir → devr-'),
      q('Je ne ', 'dirais', ' pas ça. (dire)', ['dirais', 'direrais', 'dirai', 'disais'], 'dire → dir-'),
      q('Ça nous ', 'ferait', ' plaisir. (faire)', ['ferait', 'fairait', 'fera', 'faisait'], 'faire → fer- + -ait'),
      q('Sans voiture, comment ', 'irais', '-tu au travail ? (aller)', ['irais', 'allerais', 'iras', 'allais'], 'aller → ir-'),
    ],
  },
  {
    id: 'subjonctif',
    icon: '🌈',
    title: 'Subjonctif présent (que je parle)',
    level: 'B1',
    instruction: 'Setze das Verb im subjonctif ein.',
    explanation:
      'Stamm der ils-Form (ils partent → part-) + -e, -es, -e, -ions, -iez, -ent. Unregelmäßig: être (sois), ' +
      'avoir (aie), aller (aille), faire (fasse), pouvoir (puisse), savoir (sache), vouloir (veuille). ' +
      'Nach il faut que, vouloir que, bien que, avant que und nach Gefühl, Zweifel, Möglichkeit.',
    examples: [
      { target: 'Il faut que tu viennes.', de: 'Du musst kommen.' },
      { target: 'Je suis content que tu sois là.', de: 'Ich freue mich, dass du da bist.' },
    ],
    items: [
      q('Je veux que tu ', 'viennes', '. (venir)', ['viennes', 'viens', 'viendras', 'venes'], 'vouloir que → subjonctif'),
      q('Il faut que nous ', 'partions', '. (partir)', ['partions', 'partons', 'partirons', 'partiions'], 'il faut que → subjonctif'),
      q('Je suis content que tu ', 'sois', ' là. (être)', ['sois', 'es', 'seras', 'soit'], 'Gefühl → subjonctif, être → sois'),
      q('Il faut que tu ', 'fasses', ' tes devoirs. (faire)', ['fasses', 'fais', 'faises', 'feras'], 'faire → fass-'),
      q("Bien qu'il ", 'fasse', ' froid, on sort. (faire)', ['fasse', 'fait', 'fera', 'faisait'], 'bien que → subjonctif'),
      q('Je voudrais que vous ', 'ayez', ' patience. (avoir)', ['ayez', 'avez', 'aiez', 'aurez'], 'avoir → ayez'),
      q("Il est possible qu'il ", 'pleuve', '. (pleuvoir)', ['pleuve', 'pleut', 'pleuvra', 'pleuvait'], 'Möglichkeit → subjonctif'),
      q('Mes parents veulent que je ', 'fasse', ' médecine. (faire)', ['fasse', 'fais', 'ferai', 'faisais'], 'vouloir que → subjonctif'),
      q("Je doute qu'ils le ", 'sachent', '. (savoir)', ['sachent', 'savent', 'sauront', 'sachient'], 'Zweifel → savoir: sachent'),
      q("Il faut qu'on se ", 'lève', ' tôt. (se lever)', ['lève', 'lèves', 'lèvera', 'levait'], 'il faut que → subjonctif'),
      q('Dommage que tu ne ', 'puisses', ' pas venir. (pouvoir)', ['puisses', 'peux', 'pourras', 'pouvais'], 'Gefühl → pouvoir: puisses'),
      q('Avant que tu ', 'partes', ', appelle-moi. (partir)', ['partes', 'pars', 'partiras', 'partais'], 'avant que → subjonctif'),
    ],
  },
  {
    id: 'subjonctif-indicatif',
    icon: '🔍',
    title: 'Subjonctif oder Indikativ?',
    level: 'B1',
    instruction: 'Wähle Indikativ oder Subjonctif.',
    explanation:
      'Indikativ bei Tatsachen, Wissen, bejahter Meinung und Hoffnung: je pense que, je crois que, je sais que, ' +
      "j'espère que, il est évident que, quand. Subjonctif bei verneinter Meinung (je ne pense pas que), Wunsch, " +
      'Pflicht (il faut que), Gefühl, Zweifel, bien que.',
    examples: [
      { target: "Je pense qu'il a raison.", de: 'Ich denke, dass er recht hat. (Indikativ)' },
      { target: "Je ne pense pas qu'il ait raison.", de: 'Ich glaube nicht, dass er recht hat. (Subjonctif)' },
    ],
    items: [
      q("Je pense qu'il ", 'a', ' raison. (avoir)', ['a', 'ait'], 'bejahte Meinung → Indikativ'),
      q("Je ne pense pas qu'il ", 'ait', ' raison. (avoir)', ['ait', 'a'], 'verneinte Meinung → Subjonctif'),
      q("Je crois que c'", 'est', ' une bonne idée. (être)', ['est', 'soit'], 'bejahte Meinung → Indikativ'),
      q('Je ne crois pas que ce ', 'soit', ' une bonne idée. (être)', ['soit', 'est'], 'verneinte Meinung → Subjonctif'),
      q('Je sais que tu ', 'es', ' fatigué. (être)', ['es', 'sois'], 'Wissen → Indikativ'),
      q('Il faut que tu ', 'dormes', ' plus. (dormir)', ['dormes', 'dors'], 'il faut que → Subjonctif'),
      q("Il est évident qu'il ", 'est', ' là. (être)', ['est', 'soit'], 'Tatsache → Indikativ'),
      q("J'espère que tu ", 'vas', ' bien. (aller)', ['vas', 'ailles'], "espérer que → Indikativ (!)"),
      q('Je veux que tu ', 'ailles', ' bien. (aller)', ['ailles', 'vas'], 'vouloir que → Subjonctif'),
      q('Quand il ', 'fait', ' beau, on sort. (faire)', ['fait', 'fasse'], 'quand → Indikativ'),
      q("Bien qu'il ", 'fasse', ' beau, je reste. (faire)', ['fasse', 'fait'], 'bien que → Subjonctif'),
      q("Il me semble que c'", 'est', ' tard. (être)', ['est', 'soit'], 'il me semble que → Indikativ'),
    ],
  },
  {
    id: 'y-en',
    icon: '🧩',
    title: 'Die Pronomen y und en',
    level: 'B1',
    instruction: 'Setze y oder en ein.',
    explanation:
      'y ersetzt einen Ort (à Paris, en France, chez moi) oder à + Sache (penser à, croire à). ' +
      'en ersetzt de + Sache/Ort (venir de, parler de) und Mengen (du pain, des frères, trois pommes → j\'en ai trois). ' +
      'Feste Ausdrücke: il y a, on y va, il n\'y en a plus.',
    examples: [
      { target: "Tu vas à Paris ? – Oui, j'y vais.", de: 'Fährst du nach Paris? – Ja, ich fahre hin.' },
      { target: "Tu veux du café ? – Oui, j'en veux.", de: 'Willst du Kaffee? – Ja, ich will welchen.' },
    ],
    items: [
      q("Tu vas à Paris ? – Oui, j'", 'y', ' vais.', ['y', 'en', 'le', 'lui'], 'Ort (à Paris) → y'),
      q("Tu veux du café ? – Oui, j'", 'en', ' veux.', ['en', 'y', 'le', 'la'], 'Menge (du café) → en'),
      q("Tu penses à ton examen ? – Oui, j'", 'y', ' pense.', ['y', 'en', 'lui', 'le'], 'penser à + Sache → y'),
      q("Tu as des frères ? – Oui, j'", 'en', ' ai deux.', ['en', 'y', 'les', 'leur'], 'Menge (des frères) → en'),
      q("Tu viens de la gare ? – Oui, j'", 'en', ' viens.', ['en', 'y', 'la', 'lui'], 'venir de + Ort → en'),
      q("Il reste du pain ? – Non, il n'", 'en', ' reste plus.', ['en', 'y', 'le', 'lui'], 'Menge (du pain) → en'),
      q("Tu es déjà allé en Grèce ? – Oui, j'", 'y', ' suis allé.', ['y', 'en', 'la', 'lui'], 'Ort (en Grèce) → y'),
      q("Combien de pommes veux-tu ? – J'", 'en', ' veux trois.', ['en', 'y', 'les', 'leur'], 'Menge mit Zahl → en'),
      q('On ', 'y', ' va ! (los geht\'s)', ['y', 'en', 'le', 'lui'], 'fester Ausdruck: on y va'),
      q("Tu parles de ton travail ? – Non, je n'", 'en', ' parle pas.', ['en', 'y', 'le', 'lui'], 'parler de → en'),
      q("Tu crois au destin ? – Non, je n'", 'y', ' crois pas.', ['y', 'en', 'le', 'lui'], 'croire à → y'),
      q('Il ', 'y', ' a beaucoup de monde.', ['y', 'en', 'le', 'lui'], 'es gibt → il y a'),
    ],
  },
  {
    id: 'relatifs',
    icon: '🔗',
    title: 'Relativpronomen (qui, que, où, dont)',
    level: 'B1',
    instruction: 'Setze das passende Relativpronomen ein.',
    explanation:
      'qui: Subjekt (… qui habite ici). que/qu\': direktes Objekt (… que je lis). où: Ort und Zeit (la ville où, le jour où). ' +
      'dont: ersetzt de + … (parler de, avoir besoin de, le père de …). ce qui / ce que: „das, was".',
    examples: [
      { target: 'La femme qui habite ici est prof.', de: 'Die Frau, die hier wohnt, ist Lehrerin.' },
      { target: 'Le film dont je te parle est super.', de: 'Der Film, von dem ich dir erzähle, ist super.' },
    ],
    items: [
      q('Le livre ', 'que', ' je lis est bon.', ['que', 'qui', 'où', 'dont'], 'direktes Objekt → que'),
      q('La femme ', 'qui', ' habite ici est prof.', ['qui', 'que', 'où', 'dont'], 'Subjekt → qui'),
      q('La ville ', 'où', ' je suis né est petite.', ['où', 'que', 'qui', 'dont'], 'Ort → où'),
      q('Le film ', 'dont', ' je te parle est super.', ['dont', 'que', 'qui', 'où'], 'parler de → dont'),
      q("C'est l'homme ", 'dont', ' la fille est médecin.', ['dont', 'qui', 'que', 'où'], 'la fille de l\'homme → dont'),
      q('Le jour ', 'où', ' nous nous sommes rencontrés, il pleuvait.', ['où', 'que', 'quand', 'dont'], 'Zeitpunkt → où'),
      q('Les amis ', 'que', " j'ai invités ne sont pas venus.", ['que', 'qui', 'dont', 'où'], 'direktes Objekt → que'),
      q('Voilà le train ', 'qui', ' va à Lyon.', ['qui', 'que', 'où', 'dont'], 'Subjekt → qui'),
      q('Je ne comprends pas ce ', 'que', ' tu dis.', ['que', 'qui', 'dont', 'quoi'], 'das, was (Objekt) → ce que'),
      q('Ce ', 'qui', ' me plaît, c\'est la mer.', ['qui', 'que', 'dont', 'où'], 'das, was (Subjekt) → ce qui'),
      q("C'est la chose ", 'dont', " j'ai besoin.", ['dont', 'que', 'qui', 'où'], 'avoir besoin de → dont'),
      q("La personne à ", 'qui', " j'ai parlé est gentille.", ['qui', 'que', 'dont', 'où'], 'Präposition + Person → qui'),
    ],
  },
  {
    id: 'si-conditionnel',
    icon: '🔀',
    title: 'Bedingungssätze (si …)',
    level: 'B1',
    instruction: 'Setze das Verb in der passenden Form ein.',
    explanation:
      'Reale Bedingung: si + Präsens → Futur, Präsens oder Imperativ (Si j\'ai le temps, j\'irai). ' +
      'Irreale Bedingung: si + imparfait → conditionnel (Si j\'avais de l\'argent, j\'achèterais une maison). ' +
      'Nach si steht nie Futur oder Konditional.',
    examples: [
      { target: "Si j'ai le temps, j'irai au cinéma.", de: 'Wenn ich Zeit habe, gehe ich ins Kino.' },
      { target: "Si j'étais riche, je voyagerais.", de: 'Wenn ich reich wäre, würde ich reisen.' },
    ],
    items: [
      q("Si j'", 'ai', " le temps, j'irai au cinéma. (avoir)", ['ai', 'aurai', 'avais', 'aurais'], 'real → si + Präsens'),
      q("S'il pleut, nous ", 'resterons', ' à la maison. (rester)', ['resterons', 'resterions', 'restions', 'restassions'], 'real → Futur (oder Präsens)', ['restons']),
      q("Si j'", 'avais', " de l'argent, j'achèterais une maison. (avoir)", ['avais', 'ai', 'aurais', 'aurai'], 'irreal → si + imparfait'),
      q("Si j'étais riche, je ", 'voyagerais', ' partout. (voyager)', ['voyagerais', 'voyagerai', 'voyageais', 'voyage'], 'irreal → conditionnel'),
      q('Si tu ', 'es', ' fatigué, repose-toi. (être)', ['es', 'seras', 'étais', 'serais'], 'real + Imperativ → si + Präsens'),
      q("Si j'", 'étais', ' toi, je ne le ferais pas. (être)', ['étais', 'serais', 'suis', 'serai'], 'irreal → si + imparfait'),
      q("Si tu m'appelles, je t'", 'aiderai', '. (aider)', ['aiderai', 'aiderais', 'aidais', 'aiderions'], 'real → Futur (oder Präsens)', ['aide']),
      q('Si tu ', 'travaillais', ' plus, tu réussirais. (travailler)', ['travaillais', 'travailles', 'travaillerais', 'travailleras'], 'irreal → si + imparfait'),
      q('Si elle ', 'était', ' là, elle serait contente. (être)', ['était', 'est', 'serait', 'sera'], 'irreal → si + imparfait'),
      q("S'il fait beau, nous ", 'irons', ' à la plage. (aller)', ['irons', 'irions', 'allions', 'allerons'], 'real → Futur (oder Präsens)', ['allons']),
      q("Qu'est-ce que tu ", 'ferais', ' si tu gagnais au loto ? (faire)', ['ferais', 'feras', 'faisais', 'fais'], 'irreal → conditionnel'),
      q('Si tu ne ', 'fumais', ' pas autant, tu dormirais mieux. (fumer)', ['fumais', 'fumes', 'fumerais', 'fumeras'], 'irreal → si + imparfait'),
    ],
  },
  {
    id: 'plus-que-parfait',
    icon: '⏮️',
    title: 'Plusquamperfekt (j\'avais parlé)',
    level: 'B1',
    instruction: 'Setze das Hilfsverb oder das Partizip ein.',
    explanation:
      'avoir oder être im imparfait (avais, étais …) + Partizip. Beschreibt, was vor einem anderen Zeitpunkt in der ' +
      'Vergangenheit schon geschehen war. Die Regeln für être und die Angleichung sind wie beim passé composé.',
    examples: [
      { target: 'Quand je suis arrivé, le film avait commencé.', de: 'Als ich ankam, hatte der Film angefangen.' },
      { target: 'Ils étaient déjà partis.', de: 'Sie waren schon gegangen.' },
    ],
    items: [
      q('Quand je suis arrivé, le film ', 'avait', ' commencé.', ['avait', 'a', 'était', 'aurait'], 'Vorvergangenheit → avait + Partizip'),
      q("Je n'", 'avais', ' jamais vu la mer avant 2019.', ['avais', 'ai', 'étais', 'aurais'], 'je → avais'),
      q('Ils ', 'étaient', ' déjà partis quand on a appelé.', ['étaient', 'avaient', 'sont', 'seraient'], 'partir → être: étaient'),
      q('Je ne savais pas que tu ', 'avais', ' vécu en Italie.', ['avais', 'as', 'étais', 'aurais'], 'tu → avais'),
      q('Nous avions déjà ', 'fait', ' le dîner. (faire)', ['fait', 'faisé', 'fais', 'faite'], 'faire → fait'),
      q("Il m'a dit qu'il ", 'avait', ' lu le livre.', ['avait', 'a', 'était', 'aura'], 'il → avait'),
      q('Vous ', 'aviez', ' déjà vu la mer avant le voyage ?', ['aviez', 'avez', 'étiez', 'auriez'], 'vous → aviez'),
      q("J'avais oublié que je te l'", 'avais', ' dit.', ['avais', 'ai', 'étais', 'aurais'], 'je → avais'),
      q('Quand je suis rentré, quelqu\'un avait ', 'cassé', ' la fenêtre. (casser)', ['cassé', 'cassait', 'casser', 'cassée'], 'Partizip -er → -é'),
      q('Elles ', 'étaient', ' rentrées avant dix heures.', ['étaient', 'avaient', 'sont', 'étais'], 'rentrer → être: étaient'),
      q('Je pensais que tu ', 'avais', " réussi l'examen.", ['avais', 'as', 'étais', 'aies'], 'tu → avais'),
      q('Le magasin ', 'avait', ' déjà fermé.', ['avait', 'était', 'a', 'aurait'], 'fermer → avoir: avait'),
    ],
  },
  {
    id: 'pronoms-doubles',
    icon: '🪢',
    title: 'Doppelte Pronomen (je te le donne)',
    level: 'B1',
    instruction: 'Setze das fehlende Pronomen ein.',
    explanation:
      'Reihenfolge vor dem Verb: me/te/nous/vous → le/la/les → lui/leur → y → en. Also: je te le donne, ' +
      'je le lui donne, je les leur envoie. Im bejahten Imperativ: Verb – direkt – indirekt: donne-le-moi.',
    examples: [
      { target: 'Tu me donnes le livre ? – Oui, je te le donne.', de: 'Gibst du mir das Buch? – Ja, ich gebe es dir.' },
      { target: 'Je donne le cadeau à Anna. → Je le lui donne.', de: 'Ich gebe es ihr.' },
    ],
    items: [
      q('Tu me donnes le livre ? – Oui, je ', 'te', ' le donne.', ['te', 'le', 'lui', 'me'], 'dir → te (vor le)'),
      q('Tu donnes le cadeau à Anna ? – Oui, je le ', 'lui', ' donne.', ['lui', 'la', 'leur', 'se'], 'ihr → lui (nach le)'),
      q('Tu nous expliques le problème ? – Oui, je ', 'vous', " l'explique.", ['vous', 'nous', 'leur', 'lui'], 'euch → vous'),
      q('Tu me prêtes ton vélo ? – Oui, je te ', 'le', ' prête.', ['le', 'la', 'lui', 'les'], 'le vélo → le'),
      q('Tu as envoyé les lettres à tes parents ? – Oui, je les ', 'leur', ' ai envoyées.', ['leur', 'lui', 'les', 'leurs'], 'ihnen → leur'),
      q('Tu me dis la vérité ? – Oui, je te ', 'la', ' dis.', ['la', 'le', 'lui', 'les'], 'la vérité → la'),
      q('Tu as acheté les chaussures à ton fils ? – Oui, je ', 'les', ' lui ai achetées.', ['les', 'leur', 'le', 'lui'], 'les chaussures → les'),
      q('Donne-', 'le-moi', ' ! (le livre, mir)', ['le-moi', 'moi-le', 'me-le', 'lui-le'], 'Imperativ: direkt vor indirekt'),
      q('Qui t\'a donné les fleurs ? – Paul me ', 'les', ' a données.', ['les', 'leur', 'la', 'lui'], 'les fleurs → les'),
      q('Tu veux du gâteau ? – Oui, donne-m\'', 'en', ' un peu.', ['en', 'y', 'le', 'la'], 'Menge → en'),
      q('Tu nous apportes les assiettes ? – Je vous ', 'les', ' apporte.', ['les', 'leur', 'la', 'lui'], 'les assiettes → les'),
      q("J'ai offert un livre à ma mère. → Je le ", 'lui', ' ai offert.', ['lui', 'la', 'leur', 'le'], 'ihr → lui'),
    ],
  },
  {
    id: 'depuis-pendant',
    icon: '⌛',
    title: 'depuis, pendant oder il y a?',
    level: 'B1',
    instruction: 'Setze depuis, pendant oder il y a ein.',
    explanation:
      'depuis: seit – etwas dauert noch an (meist mit Präsens): j\'habite ici depuis trois ans. ' +
      'pendant: während / lang – abgeschlossene Dauer: j\'ai dormi pendant huit heures. ' +
      'il y a: vor – Zeitpunkt in der Vergangenheit: je suis arrivé il y a une semaine.',
    examples: [
      { target: "J'apprends le français depuis un an.", de: 'Ich lerne seit einem Jahr Französisch.' },
      { target: 'Je suis arrivé il y a une semaine.', de: 'Ich bin vor einer Woche angekommen.' },
    ],
    items: [
      q("J'habite ici ", 'depuis', ' trois ans.', TIME, 'dauert noch an → depuis'),
      q("J'ai habité à Rome ", 'pendant', ' deux ans.', TIME, 'abgeschlossene Dauer → pendant'),
      q('Je suis arrivé ', 'il y a', ' une semaine.', TIME, 'vor (Zeitpunkt) → il y a'),
      q('Il pleut ', 'depuis', ' ce matin.', TIME, 'seit → depuis'),
      q("J'ai dormi ", 'pendant', ' huit heures.', TIME, 'abgeschlossene Dauer → pendant'),
      q('Nous nous sommes rencontrés ', 'il y a', ' dix ans.', TIME, 'vor → il y a'),
      q('Elle apprend le français ', 'depuis', ' janvier.', TIME, 'seit (Zeitpunkt) → depuis'),
      q('', 'Pendant', " les vacances, j'ai beaucoup lu.", ['Pendant', 'Depuis', 'Il y a'], 'während → pendant'),
      q('Il est parti ', 'il y a', ' une heure.', TIME, 'vor → il y a'),
      q('Je t\'attends ', 'depuis', ' vingt minutes !', TIME, 'dauert noch an → depuis'),
      q('Ils ont parlé ', 'pendant', ' tout le repas.', TIME, 'während → pendant'),
      q("J'ai commencé ", 'il y a', ' deux mois.', TIME, 'vor → il y a'),
    ],
  },
];
