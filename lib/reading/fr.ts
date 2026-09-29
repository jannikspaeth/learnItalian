import type { ReadingText } from './types';

// French reading texts, A1 → B1. Glossaries list only what the automatic lookup
// (catalog, verb forms, common words) can't find.

export const READING_TEXTS: ReadingText[] = [
  // ─── A1 ──────────────────────────────────────────────────────────────────────
  {
    id: 'fr-a1-famille',
    level: 'A1',
    icon: '👨‍👩‍👧',
    title: 'Ma famille',
    titleDe: 'Meine Familie',
    paragraphs: [
      'Bonjour ! Je m’appelle Camille, j’ai vingt-trois ans et j’habite à Lyon. Je suis française, mais ma mère est allemande. Alors je parle français et allemand.',
      'Ma famille n’est pas très grande. Mon père s’appelle Pierre et il est médecin. Ma mère, Julia, est professeure. J’ai un frère, Hugo. Il a dix-sept ans et il va encore au lycée.',
      'Nous avons aussi un chien, Filou. Il est petit, blanc et très gentil. Le dimanche, nous déjeunons toujours chez mes grands-parents. Ma grand-mère fait très bien la cuisine !',
    ],
    translation: [
      'Hallo! Ich heiße Camille, bin dreiundzwanzig Jahre alt und wohne in Lyon. Ich bin Französin, aber meine Mutter ist Deutsche. Deshalb spreche ich Französisch und Deutsch.',
      'Meine Familie ist nicht sehr groß. Mein Vater heißt Pierre und ist Arzt. Meine Mutter, Julia, ist Lehrerin. Ich habe einen Bruder, Hugo. Er ist siebzehn und geht noch aufs Gymnasium.',
      'Wir haben auch einen Hund, Filou. Er ist klein, weiß und sehr lieb. Sonntags essen wir immer bei meinen Großeltern zu Mittag. Meine Oma kocht sehr gut!',
    ],
    glossary: { camille: 'Camille (Name)', lyon: 'Lyon', julia: 'Julia (Name)', hugo: 'Hugo (Name)', filou: 'Filou (Hundename)', déjeunons: ['wir essen zu Mittag', 'déjeuner'], pierre: 'Pierre (Name)' },
    questions: [
      { q: 'Où habite Camille ?', options: ['À Paris', 'À Lyon', 'En Allemagne'], answer: 1 },
      { q: 'Que fait son père ?', options: ['Il est médecin', 'Il est professeur', 'Il est cuisinier'], answer: 0 },
      { q: 'Quel âge a Hugo ?', options: ['Vingt-trois ans', 'Sept ans', 'Dix-sept ans'], answer: 2 },
      { q: 'Comment est le chien ?', options: ['Grand et noir', 'Petit et blanc', 'Vieux et fatigué'], answer: 1 },
    ],
  },
  {
    id: 'fr-a1-cafe',
    level: 'A1',
    icon: '🥐',
    title: 'Au café',
    titleDe: 'Im Café',
    paragraphs: [
      'Il est huit heures du matin. Thomas entre dans le petit café en bas de chez lui, comme tous les jours.',
      '– Bonjour, Thomas ! Comme d’habitude ? – demande le serveur.\n– Bonjour, Karim ! Oui, un café crème et un croissant, s’il vous plaît.\n– Et pour madame ?\n– Pour moi, un thé et une tartine avec du beurre, merci – dit Léa, la collègue de Thomas.',
      'En France, beaucoup de gens prennent un petit café au comptoir avant d’aller au travail. C’est rapide et ce n’est pas cher.\n– Ça fait combien ? – demande Thomas.\n– Sept euros cinquante.\n– Voilà. Bonne journée !',
    ],
    translation: [
      'Es ist acht Uhr morgens. Thomas geht in das kleine Café unten in seinem Haus, wie jeden Tag.',
      '– Guten Morgen, Thomas! Wie immer? – fragt der Kellner.\n– Guten Morgen, Karim! Ja, einen Milchkaffee und ein Croissant, bitte.\n– Und für die Dame?\n– Für mich einen Tee und ein Butterbrot, danke – sagt Léa, Thomas’ Kollegin.',
      'In Frankreich trinken viele Leute an der Theke schnell einen Kaffee, bevor sie zur Arbeit gehen. Das geht schnell und ist nicht teuer.\n– Was macht das? – fragt Thomas.\n– Sieben Euro fünfzig.\n– Bitte schön. Einen schönen Tag!',
    ],
    glossary: { bas: 'unten (en bas de = unten in) / niedrig', thomas: 'Thomas (Name)', karim: 'Karim (Name)', tartine: 'Butterbrot, Brotscheibe', léa: 'Léa (Name)', comptoir: 'Theke, Tresen', habitude: 'Gewohnheit (comme d’habitude = wie immer)' },
    questions: [
      { q: 'Quelle heure est-il ?', options: ['Sept heures', 'Huit heures', 'Neuf heures'], answer: 1 },
      { q: 'Que prend Thomas ?', options: ['Un thé et une tartine', 'Un chocolat chaud', 'Un café crème et un croissant'], answer: 2 },
      { q: 'Qui est Léa ?', options: ['La collègue de Thomas', 'La sœur de Thomas', 'La serveuse'], answer: 0 },
      { q: 'Combien paient-ils ?', options: ['Cinq euros', 'Sept euros cinquante', 'Dix-sept euros'], answer: 1 },
    ],
  },
  {
    id: 'fr-a1-journee',
    level: 'A1',
    icon: '⏰',
    title: 'Une journée normale',
    titleDe: 'Ein ganz normaler Tag',
    paragraphs: [
      'Sophie se réveille à sept heures. Elle se lève, elle se lave et elle s’habille. Ensuite, elle prend son petit-déjeuner dans la cuisine : un café et une tartine.',
      'À huit heures, elle prend le métro pour aller au travail. Sophie travaille dans un bureau au centre de Paris. Son travail est intéressant, mais parfois un peu stressant. À midi, elle mange un sandwich avec ses collègues.',
      'Elle finit de travailler à dix-huit heures. Le soir, elle va à la salle de sport ou elle voit ses amies. Après le dîner, elle regarde un film ou elle lit un livre. Elle se couche à onze heures, parce qu’elle est fatiguée.',
    ],
    translation: [
      'Sophie wacht um sieben Uhr auf. Sie steht auf, wäscht sich und zieht sich an. Dann frühstückt sie in der Küche: einen Kaffee und ein Butterbrot.',
      'Um acht nimmt sie die Metro, um zur Arbeit zu fahren. Sophie arbeitet in einem Büro im Zentrum von Paris. Ihre Arbeit ist interessant, aber manchmal ein bisschen stressig. Mittags isst sie mit ihren Kollegen ein Sandwich.',
      'Sie hört um achtzehn Uhr auf zu arbeiten. Abends geht sie ins Fitnessstudio oder trifft ihre Freundinnen. Nach dem Abendessen sieht sie einen Film oder liest ein Buch. Sie geht um elf ins Bett, weil sie müde ist.',
    ],
    glossary: { sophie: 'Sophie (Name)', tartine: 'Butterbrot, Brotscheibe', stressant: 'stressig', couche: ['geht ins Bett (se coucher)', 'se coucher'] },
    questions: [
      { q: 'À quelle heure Sophie se réveille-t-elle ?', options: ['À six heures', 'À sept heures', 'À huit heures'], answer: 1 },
      { q: 'Comment va-t-elle au travail ?', options: ['En voiture', 'À pied', 'En métro'], answer: 2 },
      { q: 'Que mange-t-elle à midi ?', options: ['Un sandwich', 'Une pizza', 'Une salade'], answer: 0 },
      { q: 'Pourquoi se couche-t-elle à onze heures ?', options: ['Parce qu’elle a faim', 'Parce qu’elle est fatiguée', 'Parce qu’elle travaille'], answer: 1 },
    ],
  },

  // ─── A2 ──────────────────────────────────────────────────────────────────────
  {
    id: 'fr-a2-bretagne',
    level: 'A2',
    icon: '⛵',
    title: 'Une semaine en Bretagne',
    titleDe: 'Eine Woche in der Bretagne',
    paragraphs: [
      'L’été dernier, mon copain et moi sommes partis une semaine en Bretagne. Nous avons pris le train de Paris à Rennes, et là, nous avons loué une voiture.',
      'D’abord, nous avons visité Saint-Malo. Nous nous sommes promenés sur les remparts et nous avons mangé des crêpes dans une petite crêperie : délicieuses ! Ensuite, nous sommes allés au Mont-Saint-Michel. Il y avait beaucoup de touristes, mais c’était magnifique.',
      'Un jour, il a plu toute la journée et nous sommes restés à l’hôtel. Mais ce n’était pas grave : nous avons dormi, lu et joué aux cartes.',
      'Le dernier soir, nous avons dîné dans un restaurant au bord de la mer. C’étaient des vacances superbes et l’année prochaine, nous voulons revenir !',
    ],
    translation: [
      'Letzten Sommer sind mein Freund und ich für eine Woche in die Bretagne gefahren. Wir haben den Zug von Paris nach Rennes genommen und dort ein Auto gemietet.',
      'Zuerst haben wir Saint-Malo besichtigt. Wir sind auf der Stadtmauer spazieren gegangen und haben in einer kleinen Crêperie Crêpes gegessen: köstlich! Danach sind wir zum Mont-Saint-Michel gefahren. Es gab viele Touristen, aber es war großartig.',
      'Einen Tag hat es den ganzen Tag geregnet, und wir sind im Hotel geblieben. Aber das war nicht schlimm: Wir haben geschlafen, gelesen und Karten gespielt.',
      'Am letzten Abend haben wir in einem Restaurant am Meer zu Abend gegessen. Es waren wunderbare Ferien, und nächstes Jahr wollen wir wiederkommen!',
    ],
    glossary: { plu: ['geregnet (pleuvoir)', 'pleuvoir'], cartes: ['Karten (jouer aux cartes = Karten spielen)', 'carte'], bretagne: 'Bretagne', rennes: 'Rennes', saint: 'Sankt (Saint-Malo, Mont-Saint-Michel)', malo: 'Saint-Malo (Stadt)', promenés: ['spazieren gegangen (se promener)', 'se promener'], remparts: ['Stadtmauer', 'rempart'], crêpes: ['Crêpes', 'crêpe'], crêperie: 'Crêperie', délicieuses: ['köstlich', 'délicieux'], mont: 'Berg (Mont-Saint-Michel)', michel: 'Michael (Mont-Saint-Michel)', dîné: ['zu Abend gegessen', 'dîner'], superbes: ['großartig', 'superbe'] },
    questions: [
      { q: 'Comment sont-ils allés à Rennes ?', options: ['En avion', 'En train', 'En bus'], answer: 1 },
      { q: 'Qu’ont-ils mangé à Saint-Malo ?', options: ['Des crêpes', 'Une pizza', 'Du poisson'], answer: 0 },
      { q: 'Qu’ont-ils fait le jour de pluie ?', options: ['Ils sont allés à la plage', 'Ils sont restés à l’hôtel', 'Ils ont visité Paris'], answer: 1 },
      { q: 'Où ont-ils dîné le dernier soir ?', options: ['À Rennes', 'Au Mont-Saint-Michel', 'Au bord de la mer'], answer: 2 },
    ],
  },
  {
    id: 'fr-a2-enfance',
    level: 'A2',
    icon: '🧒',
    title: 'Quand j’étais petite',
    titleDe: 'Als ich klein war',
    paragraphs: [
      'Quand j’étais petite, j’habitais dans un village des Alpes. Notre maison était vieille et grande, avec un jardin plein d’arbres.',
      'En hiver, il faisait très froid et il neigeait souvent. Mon frère et moi allions à l’école à pied et, après l’école, nous jouions dans la neige pendant des heures. Le soir, ma mère préparait du chocolat chaud.',
      'En été, nous passions les vacances chez notre grand-mère, au bord d’un lac. Elle avait un petit bateau et tous les matins, nous allions pêcher avec elle. Nous ne prenions jamais beaucoup de poissons, mais nous étions heureux.',
      'Aujourd’hui, je vis en ville et je travaille beaucoup. Parfois, je pense à ces années-là : la vie était plus simple et le temps passait plus lentement.',
    ],
    translation: [
      'Als ich klein war, wohnte ich in einem Dorf in den Alpen. Unser Haus war alt und groß, mit einem Garten voller Bäume.',
      'Im Winter war es sehr kalt, und es schneite oft. Mein Bruder und ich gingen zu Fuß zur Schule, und nach der Schule spielten wir stundenlang im Schnee. Abends machte meine Mutter heiße Schokolade.',
      'Im Sommer verbrachten wir die Ferien bei unserer Oma an einem See. Sie hatte ein kleines Boot, und jeden Morgen gingen wir mit ihr angeln. Wir fingen nie viele Fische, aber wir waren glücklich.',
      'Heute lebe ich in der Stadt und arbeite viel. Manchmal denke ich an diese Jahre: Das Leben war einfacher, und die Zeit verging langsamer.',
    ],
    glossary: { neigeait: ['es schneite', 'neiger'], alpes: 'Alpen' },
    questions: [
      { q: 'Où habitait-elle quand elle était petite ?', options: ['En ville', 'Au bord de la mer', 'Dans un village des Alpes'], answer: 2 },
      { q: 'Comment allaient-ils à l’école ?', options: ['À pied', 'En bus', 'À vélo'], answer: 0 },
      { q: 'Que faisaient-ils avec la grand-mère ?', options: ['Ils faisaient du ski', 'Ils allaient pêcher', 'Ils allaient au cinéma'], answer: 1 },
      { q: 'Comment était la vie, selon elle ?', options: ['Plus difficile', 'Plus simple', 'Plus rapide'], answer: 1 },
    ],
  },
  {
    id: 'fr-a2-medecin',
    level: 'A2',
    icon: '🩺',
    title: 'Chez le médecin',
    titleDe: 'Beim Arzt',
    paragraphs: [
      '– Bonjour, docteur.\n– Bonjour, monsieur Martin. Asseyez-vous. Qu’est-ce qui ne va pas ?\n– Depuis trois jours, j’ai mal à la gorge et à la tête. Cette nuit, j’ai aussi eu de la fièvre, trente-huit et demi.',
      '– Voyons. Ouvrez la bouche, s’il vous plaît… Oui, votre gorge est très rouge. Vous toussez ?\n– Oui, un peu, surtout le soir.\n– C’est une grippe. Ce n’est pas grave, mais vous devez vous reposer.',
      '– Restez à la maison quelques jours et buvez beaucoup d’eau ou de thé chaud. Je vous donne une ordonnance pour un sirop contre la toux. Si la fièvre est forte, vous pouvez prendre un paracétamol.\n– Est-ce que je peux aller travailler demain ?\n– Non, surtout pas ! Restez au lit au moins jusqu’à vendredi. Si ça ne va pas mieux dans une semaine, revenez me voir.\n– D’accord. Merci, docteur. Au revoir !',
    ],
    translation: [
      '– Guten Tag, Herr Doktor.\n– Guten Tag, Herr Martin. Setzen Sie sich. Was fehlt Ihnen?\n– Seit drei Tagen tun mir der Hals und der Kopf weh. Heute Nacht hatte ich auch Fieber, achtunddreißigeinhalb.',
      '– Schauen wir mal. Öffnen Sie bitte den Mund … Ja, Ihr Hals ist sehr rot. Husten Sie?\n– Ja, ein bisschen, vor allem abends.\n– Das ist eine Grippe. Nichts Schlimmes, aber Sie müssen sich ausruhen.',
      '– Bleiben Sie ein paar Tage zu Hause und trinken Sie viel Wasser oder heißen Tee. Ich gebe Ihnen ein Rezept für einen Hustensaft. Wenn das Fieber hoch ist, können Sie ein Paracetamol nehmen.\n– Kann ich morgen zur Arbeit gehen?\n– Nein, auf keinen Fall! Bleiben Sie mindestens bis Freitag im Bett. Wenn es in einer Woche nicht besser geht, kommen Sie wieder zu mir.\n– In Ordnung. Danke, Herr Doktor. Auf Wiedersehen!',
    ],
    glossary: { mal: 'Schmerz (avoir mal à = … tut weh) / schlecht', martin: 'Martin (Nachname)', toussez: ['Sie husten', 'tousser'], reposer: 'ausruhen (se reposer)', sirop: 'Sirup, Saft', paracétamol: 'Paracetamol', revenez: ['kommen Sie wieder', 'revenir'], asseyez: ['setzen Sie sich (s’asseoir)', 's’asseoir'], ordonnance: 'Rezept (Arzt)' },
    questions: [
      { q: 'Depuis quand monsieur Martin est-il malade ?', options: ['Depuis hier', 'Depuis trois jours', 'Depuis une semaine'], answer: 1 },
      { q: 'Qu’est-ce qu’il a ?', options: ['Une grippe', 'Un bras cassé', 'Mal aux dents'], answer: 0 },
      { q: 'Que doit-il boire ?', options: ['Du café', 'Du vin', 'De l’eau ou du thé chaud'], answer: 2 },
      { q: 'Jusqu’à quand doit-il rester au lit ?', options: ['Jusqu’à demain', 'Au moins jusqu’à vendredi', 'Un mois'], answer: 1 },
    ],
  },

  // ─── B1 ──────────────────────────────────────────────────────────────────────
  {
    id: 'fr-b1-colocation',
    level: 'B1',
    icon: '🏠',
    title: 'La vie en colocation',
    titleDe: 'Leben in einer WG',
    paragraphs: [
      'À Paris, les loyers sont si élevés que beaucoup de jeunes choisissent la colocation. Partager un grand appartement coûte moins cher que louer un studio, et on n’est jamais seul.',
      'Inès, vingt-cinq ans, vit avec trois colocataires dans le onzième arrondissement. « Au début, j’avais peur qu’on se dispute pour le ménage ou le bruit, raconte-t-elle. Mais on a fixé des règles simples : chacun fait les courses à tour de rôle, et le dimanche soir, on dîne tous ensemble. »',
      'Tout n’est pas toujours facile, bien sûr. Il faut accepter que la salle de bains soit occupée le matin et que le frigo ne soit jamais vraiment à soi. Certains colocataires partent au bout de quelques mois, et il faut alors trouver quelqu’un de nouveau.',
      'Pourtant, Inès ne regrette rien : « Je pense que la colocation m’a appris à être plus patiente. Et puis, mes colocataires sont devenus mes meilleurs amis. »',
    ],
    translation: [
      'In Paris sind die Mieten so hoch, dass viele junge Leute sich für eine WG entscheiden. Eine große Wohnung zu teilen kostet weniger als ein Einzimmerapartment zu mieten, und man ist nie allein.',
      'Inès, fünfundzwanzig, lebt mit drei Mitbewohnern im elften Arrondissement. „Am Anfang hatte ich Angst, dass wir uns wegen des Putzens oder des Lärms streiten“, erzählt sie. „Aber wir haben einfache Regeln festgelegt: Jeder kauft abwechselnd ein, und sonntagabends essen wir alle zusammen.“',
      'Natürlich ist nicht immer alles leicht. Man muss akzeptieren, dass das Bad morgens besetzt ist und dass der Kühlschrank einem nie wirklich allein gehört. Manche Mitbewohner ziehen nach ein paar Monaten aus, und dann muss man jemand Neuen finden.',
      'Trotzdem bereut Inès nichts: „Ich glaube, die WG hat mir beigebracht, geduldiger zu sein. Und außerdem sind meine Mitbewohner meine besten Freunde geworden.“',
    ],
    glossary: { occupée: ['besetzt', 'occupé'], élevés: ['hoch', 'élevé'], colocation: 'WG, Wohngemeinschaft', colocataires: ['Mitbewohner', 'colocataire'], studio: 'Einzimmerwohnung, Studio', inès: 'Inès (Name)', onzième: 'elfte(r)', arrondissement: 'Bezirk (in Paris)', bruit: 'Lärm', fixé: ['festgelegt', 'fixer'], rôle: 'Rolle (à tour de rôle = abwechselnd)', dîne: ['essen zu Abend', 'dîner'], bains: ['Bäder (salle de bains = Bad)', 'bain'], regrette: ['bereut', 'regretter'], dispute: ['streitet (se disputer)', 'se disputer'], ménage: 'Haushalt, Putzen', frigo: 'Kühlschrank' },
    questions: [
      { q: 'Pourquoi beaucoup de jeunes choisissent-ils la colocation ?', options: ['Parce que les loyers sont élevés', 'Parce qu’ils n’aiment pas Paris', 'Parce que c’est obligatoire'], answer: 0 },
      { q: 'Avec combien de colocataires vit Inès ?', options: ['Un', 'Deux', 'Trois'], answer: 2 },
      { q: 'Que font-ils le dimanche soir ?', options: ['Ils font le ménage', 'Ils dînent ensemble', 'Ils sortent'], answer: 1 },
      { q: 'Qu’est-ce que la colocation a appris à Inès ?', options: ['À cuisiner', 'À être plus patiente', 'À parler anglais'], answer: 1 },
    ],
  },
  {
    id: 'fr-b1-loto',
    level: 'B1',
    icon: '🍀',
    title: 'Si je gagnais au loto…',
    titleDe: 'Wenn ich im Lotto gewinnen würde …',
    paragraphs: [
      'Nous avons demandé à trois personnes dans la rue : « Que feriez-vous si vous gagniez un million d’euros ? » Voici leurs réponses.',
      'Julien, 34 ans, serveur : « D’abord, j’arrêterais de travailler, au moins pendant un an ! Ensuite, je ferais le tour du monde avec ma compagne. Nous aimerions voir le Japon et la Patagonie. À notre retour, j’ouvrirais un petit restaurant à moi. »',
      'Nathalie, 52 ans, enseignante : « Franchement, je ne changerais pas grand-chose. J’achèterais une maison plus grande pour mes enfants et j’aiderais ma sœur, qui a quelques problèmes d’argent. Je donnerais le reste à une association qui s’occupe d’enfants. Si j’avais trop d’argent, j’aurais peur de ne plus être moi-même. »',
      'Yanis, 21 ans, étudiant : « Si j’étais riche, je finirais mes études sans devoir travailler le soir. Et j’investirais une partie de l’argent dans une start-up avec mes amis. Mais je ne crois pas que je gagnerai un jour : je ne joue même pas au loto ! »',
    ],
    translation: [
      'Wir haben drei Menschen auf der Straße gefragt: „Was würden Sie tun, wenn Sie eine Million Euro gewinnen würden?“ Hier sind ihre Antworten.',
      'Julien, 34, Kellner: „Zuerst würde ich aufhören zu arbeiten, mindestens ein Jahr lang! Dann würde ich mit meiner Partnerin eine Weltreise machen. Wir würden gern Japan und Patagonien sehen. Nach unserer Rückkehr würde ich ein kleines eigenes Restaurant eröffnen.“',
      'Nathalie, 52, Lehrerin: „Ehrlich gesagt würde ich nicht viel ändern. Ich würde ein größeres Haus für meine Kinder kaufen und meiner Schwester helfen, die ein paar Geldprobleme hat. Den Rest würde ich einem Verein geben, der sich um Kinder kümmert. Wenn ich zu viel Geld hätte, hätte ich Angst, nicht mehr ich selbst zu sein.“',
      'Yanis, 21, Student: „Wenn ich reich wäre, würde ich mein Studium beenden, ohne abends arbeiten zu müssen. Und ich würde einen Teil des Geldes in ein Start-up mit meinen Freunden investieren. Aber ich glaube nicht, dass ich jemals gewinne: Ich spiele nicht einmal Lotto!“',
    ],
    glossary: { julien: 'Julien (Name)', patagonie: 'Patagonien', nathalie: 'Nathalie (Name)', franchement: 'ehrlich gesagt', association: 'Verein', yanis: 'Yanis (Name)', études: ['Studium', 'étude'], investirais: ['ich würde investieren', 'investir'], "j'investirais": ['ich würde investieren', 'investir'], start: 'Start-up', up: 'Start-up', loto: 'Lotto', japon: 'Japan', compagne: 'Partnerin, Lebensgefährtin', gagniez: ['Sie gewinnen würden (imparfait)', 'gagner'] },
    questions: [
      { q: 'Que ferait Julien d’abord ?', options: ['Il achèterait une maison', 'Il arrêterait de travailler', 'Il ouvrirait une banque'], answer: 1 },
      { q: 'À qui Nathalie donnerait-elle le reste ?', options: ['À une association pour enfants', 'À ses élèves', 'À la banque'], answer: 0 },
      { q: 'De quoi Nathalie aurait-elle peur ?', options: ['De perdre l’argent', 'De ne plus être elle-même', 'De voyager'], answer: 1 },
      { q: 'Pourquoi Yanis ne croit-il pas qu’il gagnera ?', options: ['Il n’a pas de chance', 'Il ne joue pas au loto', 'Il est trop jeune'], answer: 1 },
    ],
  },
  {
    id: 'fr-b1-boulangerie',
    level: 'B1',
    icon: '🥖',
    title: 'La baguette, un trésor national',
    titleDe: 'Das Baguette, ein nationaler Schatz',
    paragraphs: [
      'Chaque jour, les Français achètent environ six millions de baguettes. Pour beaucoup, il est impensable de passer une journée sans aller à la boulangerie du quartier. En 2022, l’UNESCO a même inscrit le savoir-faire des boulangers français au patrimoine culturel immatériel de l’humanité.',
      'Mais une vraie baguette, qu’est-ce que c’est ? Selon la loi, la « baguette de tradition » ne peut contenir que quatre ingrédients : de la farine, de l’eau, du sel et de la levure. Elle doit être préparée sur place, sans produits surgelés.',
      'Pourtant, les boulangeries artisanales ont des difficultés. Dans les petits villages, beaucoup ont fermé parce que les habitants font leurs courses au supermarché. Pour les sauver, certaines communes proposent des loyers bas aux jeunes boulangers qui veulent s’installer.',
      'Les Français, eux, restent attachés à leur pain. Et si vous voulez passer pour un vrai Parisien, faites comme eux : achetez votre baguette le soir, bien chaude, et mangez-en le bout avant d’arriver chez vous.',
    ],
    translation: [
      'Jeden Tag kaufen die Franzosen rund sechs Millionen Baguettes. Für viele ist es undenkbar, einen Tag zu verbringen, ohne zur Bäckerei im Viertel zu gehen. 2022 hat die UNESCO das Können der französischen Bäcker sogar in das immaterielle Kulturerbe der Menschheit aufgenommen.',
      'Aber was ist ein echtes Baguette? Laut Gesetz darf das „traditionelle Baguette“ nur vier Zutaten enthalten: Mehl, Wasser, Salz und Hefe. Es muss vor Ort zubereitet werden, ohne Tiefkühlprodukte.',
      'Trotzdem haben die handwerklichen Bäckereien Schwierigkeiten. In den kleinen Dörfern haben viele geschlossen, weil die Einwohner im Supermarkt einkaufen. Um sie zu retten, bieten manche Gemeinden jungen Bäckern, die sich niederlassen wollen, niedrige Mieten an.',
      'Die Franzosen selbst hängen an ihrem Brot. Und wenn Sie als echter Pariser durchgehen wollen, machen Sie es wie sie: Kaufen Sie Ihr Baguette abends, schön warm, und essen Sie die Spitze, bevor Sie zu Hause ankommen.',
    ],
    glossary: { "s'installer": 'sich niederlassen', baguettes: ['Baguettes', 'baguette'], baguette: 'Baguette', impensable: 'undenkbar', unesco: 'UNESCO', "l'unesco": 'die UNESCO', patrimoine: 'Erbe (patrimoine culturel = Kulturerbe)', culturel: 'kulturell', immatériel: 'immateriell', humanité: 'Menschheit', "l'humanité": 'die Menschheit', artisanales: ['handwerklich', 'artisanal'], parisien: 'Pariser', inscrit: ['aufgenommen, eingetragen', 'inscrire'], levure: 'Hefe', surgelés: ['tiefgekühlt', 'surgelé'], farine: 'Mehl', communes: ['Gemeinden', 'commune'], attachés: ['verbunden, hängen an', 'attaché'] },
    questions: [
      { q: 'Combien de baguettes les Français achètent-ils par jour ?', options: ['Six mille', 'Environ six millions', 'Soixante millions'], answer: 1 },
      { q: 'Combien d’ingrédients peut contenir une baguette de tradition ?', options: ['Quatre', 'Six', 'Dix'], answer: 0 },
      { q: 'Pourquoi beaucoup de boulangeries de village ont-elles fermé ?', options: ['Les gens achètent au supermarché', 'La farine est trop chère', 'La loi l’interdit'], answer: 0 },
      { q: 'Que fait un vrai Parisien, selon le texte ?', options: ['Il achète son pain le matin', 'Il mange le bout de la baguette en rentrant', 'Il fait son pain lui-même'], answer: 1 },
    ],
  },
];
