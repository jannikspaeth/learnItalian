// ─── Grammar lessons ──────────────────────────────────────────────────────────
// Short, readable explanations from the first steps up to B1. Written in German
// (the learner's L1) and rendered on /grammar as collapsible cards, grouped by
// level. Keep each lesson tight: a one-line intro, a few sections, and concrete
// target→de examples. Exercise sets link here via `lessonId`.

export interface GrammarExample {
  target: string; // sentence in the target language
  de: string;
}

export interface GrammarSection {
  heading: string;
  body: string;
  examples?: GrammarExample[];
}

export interface GrammarLesson {
  id: string;
  icon: string;
  title: string;
  level?: 'A1' | 'A2' | 'B1'; // lessons without a level are listed as one group
  intro: string;
  sections: GrammarSection[];
}

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: 'aussprache',
    icon: '🗣️',
    title: 'Aussprache & Alphabet',
    level: 'A1',
    intro: 'Gute Nachricht: Italienisch wird fast so gelesen, wie es geschrieben wird.',
    sections: [
      {
        heading: 'Die wichtigsten Regeln',
        body:
          'Die Vokale a, e, i, o, u klingen klar und immer ähnlich. Es gibt keine Umlaute. ' +
          'Das „h" ist immer stumm. Das „r" wird mit der Zungenspitze leicht gerollt.',
        examples: [
          { target: 'ho', de: 'das „h" bleibt stumm → „o" (ich habe)' },
          { target: 'Roma', de: 'gerolltes Zungen-„r"' },
        ],
      },
      {
        heading: 'c und g: hart oder weich',
        body:
          'Vor e und i werden c und g weich: „ce/ci" wie „tsche/tschi", „ge/gi" wie „dsche/dschi". ' +
          'Vor a, o, u sind sie hart wie im Deutschen. Ein „h" dazwischen macht sie wieder hart: che = „ke", ghi = „gi".',
        examples: [
          { target: 'ciao', de: '→ „tschao"' },
          { target: 'gelato', de: '→ „dschelato"' },
          { target: 'che', de: '→ „ke" (was / dass)' },
          { target: 'spaghetti', de: '→ „spagetti"' },
        ],
      },
      {
        heading: 'gli, gn und sc',
        body:
          '„gli" klingt wie „lj" (ähnlich wie in „Familie"), „gn" wie „nj" (wie in „Cognac"). ' +
          '„sc" vor e/i klingt wie „sch", sonst wie „sk".',
        examples: [
          { target: 'famiglia', de: '→ „familja" (Familie)' },
          { target: 'gnocchi', de: '→ „njokki"' },
          { target: 'scusa', de: '→ „skusa" (Entschuldigung)' },
          { target: 'pesce', de: '→ „pesche" (Fisch)' },
        ],
      },
      {
        heading: 'Doppelte Konsonanten & Betonung',
        body:
          'Doppelte Konsonanten werden hörbar länger gesprochen – das kann die Bedeutung ändern. ' +
          'Meist liegt die Betonung auf der vorletzten Silbe. Ein Akzent auf dem letzten Vokal zeigt, dass dort betont wird.',
        examples: [
          { target: 'nonno / nono', de: 'Großvater / neunter' },
          { target: 'città', de: 'betont auf „tà" (Stadt)' },
          { target: 'caffè', de: 'betont auf „fè"' },
        ],
      },
    ],
  },
  {
    id: 'pronomen',
    icon: '👤',
    title: 'Personalpronomen (ich, du, er …)',
    level: 'A1',
    intro: 'Diese kleinen Wörter brauchst du, um über Personen zu sprechen.',
    sections: [
      {
        heading: 'Die Pronomen',
        body:
          'io = ich · tu = du · lui = er · lei = sie · Lei = Sie (höflich) · ' +
          'noi = wir · voi = ihr · loro = sie (Mehrzahl).',
        examples: [
          { target: 'io sono Anna', de: 'ich bin Anna' },
          { target: 'tu sei mia amica', de: 'du bist meine Freundin' },
        ],
      },
      {
        heading: 'Tipp: meistens lässt man sie weg',
        body:
          'Weil die Verbendung schon zeigt, wer gemeint ist, lässt man das Pronomen im Italienischen meistens weg. ' +
          '„Sono Anna" reicht völlig. Man benutzt es nur zur Betonung.',
        examples: [
          { target: 'sono tedesca', de: '(ich) bin Deutsche' },
          { target: 'parli italiano?', de: 'sprichst du Italienisch?' },
        ],
      },
      {
        heading: 'Höflich: Lei',
        body:
          'Wer siezt, benutzt „Lei" (groß oder klein geschrieben) mit der Verbform der 3. Person – wie „er/sie".',
        examples: [
          { target: 'Come sta?', de: 'Wie geht es Ihnen?' },
          { target: 'Lei è di qui?', de: 'Sind Sie von hier?' },
        ],
      },
    ],
  },
  {
    id: 'artikel',
    icon: '🔤',
    title: 'Nomen & Artikel (il / la)',
    level: 'A1',
    intro: 'Jedes Nomen ist männlich oder weiblich – lerne den Artikel immer mit.',
    sections: [
      {
        heading: 'Männlich oder weiblich',
        body:
          'Faustregel: Wörter auf -o sind meist männlich, Wörter auf -a meist weiblich. ' +
          'Wörter auf -e können beides sein – darum lernst du den Artikel immer mit dem Wort.',
        examples: [
          { target: 'il libro', de: 'das Buch (männlich)' },
          { target: 'la casa', de: 'das Haus (weiblich)' },
          { target: 'il pane / la notte', de: 'das Brot (m) / die Nacht (f)' },
        ],
      },
      {
        heading: 'Die bestimmten Artikel',
        body:
          'Männlich: il (normal), lo (vor s+Konsonant, z, gn, ps, y), l\' (vor Vokal). ' +
          'Weiblich: la, l\' (vor Vokal).',
        examples: [
          { target: 'il ragazzo', de: 'der Junge' },
          { target: 'lo studente', de: 'der Student' },
          { target: "l'amico / l'amica", de: 'der Freund / die Freundin' },
          { target: 'la ragazza', de: 'das Mädchen' },
        ],
      },
      {
        heading: 'Mehrzahl',
        body:
          'Aus -o wird -i, aus -a wird -e, aus -e wird -i. ' +
          'Die Artikel: il → i, lo/l\' (m) → gli, la/l\' (f) → le.',
        examples: [
          { target: 'i libri', de: 'die Bücher' },
          { target: 'gli studenti', de: 'die Studenten' },
          { target: 'le case', de: 'die Häuser' },
        ],
      },
      {
        heading: 'Ein / eine',
        body: 'un = ein (männlich), uno vor s+Konsonant/z, una = eine (weiblich), un\' vor weiblichem Vokal.',
        examples: [
          { target: 'un amico', de: 'ein Freund' },
          { target: 'uno zaino', de: 'ein Rucksack' },
          { target: "un'amica", de: 'eine Freundin' },
        ],
      },
    ],
  },
  {
    id: 'essere-avere',
    icon: '⚖️',
    title: 'Essere & Avere (sein & haben)',
    level: 'A1',
    intro: 'Die zwei wichtigsten Verben – beide unregelmäßig, beide überall.',
    sections: [
      {
        heading: 'essere = sein',
        body: 'sono, sei, è, siamo, siete, sono. Achtung: „è" (er/sie ist) hat einen Akzent, „e" ohne heißt „und".',
        examples: [
          { target: 'sono Anna', de: 'ich bin Anna' },
          { target: 'sono di Berlino', de: 'ich bin aus Berlin' },
          { target: 'la casa è grande', de: 'das Haus ist groß' },
        ],
      },
      {
        heading: 'avere = haben',
        body: 'ho, hai, ha, abbiamo, avete, hanno. Das „h" ist stumm: ho klingt wie „o".',
        examples: [
          { target: 'ho un fratello', de: 'ich habe einen Bruder' },
          { target: 'hai tempo?', de: 'hast du Zeit?' },
        ],
      },
      {
        heading: 'Anders als im Deutschen',
        body: 'Beim Alter und bei manchen Gefühlen sagt man „haben" statt „sein".',
        examples: [
          { target: 'ho vent\'anni', de: 'ich bin zwanzig (wörtl.: habe 20 Jahre)' },
          { target: 'ho fame / ho sete', de: 'ich habe Hunger / Durst' },
          { target: 'ho freddo', de: 'mir ist kalt' },
        ],
      },
    ],
  },
  {
    id: 'praesens',
    icon: '🔁',
    title: 'Regelmäßige Verben im Präsens',
    level: 'A1',
    intro: 'Die meisten Verben enden auf -are, -ere oder -ire. Du tauschst einfach die Endung.',
    sections: [
      {
        heading: '-are: parlare (sprechen)',
        body: 'parlo, parli, parla, parliamo, parlate, parlano.',
        examples: [
          { target: 'parlo italiano', de: 'ich spreche Italienisch' },
          { target: 'lei parla molto', de: 'sie spricht viel' },
        ],
      },
      {
        heading: '-ere: prendere (nehmen)',
        body: 'prendo, prendi, prende, prendiamo, prendete, prendono.',
        examples: [
          { target: 'prendo un caffè', de: 'ich nehme einen Kaffee' },
          { target: 'prendiamo il treno', de: 'wir nehmen den Zug' },
        ],
      },
      {
        heading: '-ire: dormire (schlafen) und capire (verstehen)',
        body:
          'dormo, dormi, dorme, dormiamo, dormite, dormono. ' +
          'Viele -ire-Verben schieben „-isc-" ein: capisco, capisci, capisce, capiamo, capite, capiscono.',
        examples: [
          { target: 'dormo bene', de: 'ich schlafe gut' },
          { target: 'non capisco', de: 'ich verstehe nicht' },
        ],
      },
      {
        heading: 'Das Muster',
        body:
          'Die Endungen für „ich/du/er" sind bei allen drei Gruppen fast gleich: -o, -i, -a/-e. ' +
          '„wir" endet immer auf -iamo. Übe sie auf der Seite „Verbs".',
      },
    ],
  },
  {
    id: 'zahlen',
    icon: '🔢',
    title: 'Zahlen, Uhrzeit & Datum',
    level: 'A1',
    intro: 'Zählen, die Uhrzeit sagen und ein Datum nennen – mit ein paar einfachen Mustern.',
    sections: [
      {
        heading: 'Zahlen 0–20',
        body:
          'zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci, ' +
          'undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove, venti.',
        examples: [{ target: 'Ho due fratelli.', de: 'Ich habe zwei Brüder.' }],
      },
      {
        heading: 'Zehner und große Zahlen',
        body:
          'venti, trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta, cento (100), mille (1000), ' +
          'duemila (2000). Zehner + Einer werden zusammengeschrieben: ventidue, trentacinque. ' +
          'Bei uno und otto fällt der Vokal des Zehners weg: ventuno, ventotto. Wer „drei“ anhängt, schreibt einen Akzent: ventitré.',
        examples: [
          { target: 'quarantotto', de: '48' },
          { target: 'centocinquanta euro', de: '150 Euro' },
          { target: 'duemilaventisei', de: '2026' },
        ],
      },
      {
        heading: 'Die Uhrzeit',
        body:
          'Man fragt „Che ore sono?“ oder „Che ora è?“. Die Antwort steht in der Mehrzahl (sono le …), ' +
          'nur bei 1 Uhr, Mittag und Mitternacht in der Einzahl (è l’una, è mezzogiorno, è mezzanotte). ' +
          'Viertel = un quarto, halb = mezza, „vor“ = meno. Um wie viel Uhr? = A che ora? → alle …',
        examples: [
          { target: 'Sono le tre e un quarto.', de: 'Es ist Viertel nach drei.' },
          { target: 'Sono le otto e mezza.', de: 'Es ist halb neun.' },
          { target: 'Sono le sei meno dieci.', de: 'Es ist zehn vor sechs.' },
          { target: 'Il treno parte alle nove.', de: 'Der Zug fährt um neun ab.' },
        ],
      },
      {
        heading: 'Wochentage, Monate & Datum',
        body:
          'lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica – klein geschrieben. ' +
          'Monate: gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre. ' +
          'Beim Datum nimmt man die Grundzahl mit Artikel: il tre maggio. Nur der Erste heißt il primo. ' +
          '„il lunedì“ mit Artikel heißt „montags“ (jede Woche).',
        examples: [
          { target: 'Oggi è il primo aprile.', de: 'Heute ist der erste April.' },
          { target: 'Sono nato il 12 luglio.', de: 'Ich bin am 12. Juli geboren.' },
          { target: 'Il sabato vado al mercato.', de: 'Samstags gehe ich auf den Markt.' },
        ],
      },
      {
        heading: 'Sich vorstellen',
        body: 'Ein paar Sätze für den Anfang:',
        examples: [
          { target: 'Come ti chiami?', de: 'Wie heißt du?' },
          { target: 'Mi chiamo Anna.', de: 'Ich heiße Anna.' },
          { target: 'Piacere!', de: 'Freut mich!' },
          { target: 'Quanti anni hai?', de: 'Wie alt bist du?' },
          { target: 'Parli tedesco?', de: 'Sprichst du Deutsch?' },
          { target: 'Un caffè, per favore.', de: 'Einen Kaffee, bitte.' },
        ],
      },
    ],
  },
  {
    id: 'es-gibt',
    icon: '👉',
    title: "c'è / ci sono, questo & quello",
    level: 'A1',
    intro: 'Sagen, was es gibt – und auf Dinge zeigen.',
    sections: [
      {
        heading: "c'è und ci sono = es gibt",
        body:
          "c'è steht bei einer Sache (Einzahl), ci sono bei mehreren. Anders als im Deutschen hängt die Form davon ab, " +
          'was folgt. Verneint: non c’è, non ci sono. Gefragt: C’è …?',
        examples: [
          { target: "C'è un bar qui vicino?", de: 'Gibt es hier in der Nähe eine Bar?' },
          { target: 'Ci sono molti turisti.', de: 'Es gibt viele Touristen.' },
          { target: "Oggi non c'è lezione.", de: 'Heute ist kein Unterricht.' },
        ],
      },
      {
        heading: 'questo = dieser (hier)',
        body:
          'questo, questa, questi, queste – wie ein Adjektiv auf -o. Vor Vokal oft verkürzt: quest’anno. ' +
          'Allein benutzt heißt es „das hier“: Questo è mio.',
        examples: [
          { target: 'Questa pizza è buonissima.', de: 'Diese Pizza ist super lecker.' },
          { target: 'Questi sono i miei amici.', de: 'Das sind meine Freunde.' },
        ],
      },
      {
        heading: 'quello = jener (dort)',
        body:
          'Vor einem Nomen verändert sich quello wie der bestimmte Artikel: quel (il), quello (lo), quell’ (l’), quella (la), ' +
          'quei (i), quegli (gli), quelle (le). Allein stehend: quello, quella, quelli, quelle.',
        examples: [
          { target: 'quel ragazzo', de: 'jener Junge (il ragazzo)' },
          { target: 'quegli studenti', de: 'jene Studenten (gli studenti)' },
          { target: "Quell'albero è altissimo.", de: 'Jener Baum ist sehr hoch.' },
          { target: 'Preferisco quello.', de: 'Ich nehme lieber den da.' },
        ],
      },
    ],
  },
  {
    id: 'adjektive',
    icon: '🎨',
    title: 'Adjektive',
    level: 'A1',
    intro: 'Adjektive passen sich dem Nomen an – und stehen meistens dahinter.',
    sections: [
      {
        heading: 'Zwei Gruppen',
        body:
          'Adjektive auf -o haben vier Formen: rosso, rossa, rossi, rosse. ' +
          'Adjektive auf -e haben nur zwei: grande (Einzahl, m und f), grandi (Mehrzahl).',
        examples: [
          { target: 'un vestito rosso · una gonna rossa', de: 'ein rotes Kleid · ein roter Rock' },
          { target: 'i vestiti rossi · le gonne rosse', de: 'die roten Kleider · die roten Röcke' },
          { target: 'un libro interessante · due libri interessanti', de: 'ein interessantes Buch · zwei interessante Bücher' },
        ],
      },
      {
        heading: 'Die Stellung',
        body:
          'Meistens steht das Adjektiv hinter dem Nomen, besonders Farben, Nationalitäten und Formen. ' +
          'Einige kurze, häufige Adjektive stehen oft davor: bello, buono, grande, piccolo, nuovo, vecchio, bravo.',
        examples: [
          { target: 'una macchina tedesca', de: 'ein deutsches Auto' },
          { target: 'una bella giornata', de: 'ein schöner Tag' },
          { target: 'un piccolo problema', de: 'ein kleines Problem' },
        ],
      },
      {
        heading: 'bello und buono vor dem Nomen',
        body:
          'bello verändert sich vor dem Nomen wie der bestimmte Artikel: bel (il), bello (lo), bell’ (l’), bei (i), begli (gli). ' +
          'buono verhält sich im Singular wie un/uno: buon giorno, buono stipendio, buon’amica.',
        examples: [
          { target: 'un bel ragazzo · i bei ragazzi', de: 'ein hübscher Junge · die hübschen Jungen' },
          { target: 'un bell’albero · begli occhi', de: 'ein schöner Baum · schöne Augen' },
          { target: 'Buon viaggio!', de: 'Gute Reise!' },
        ],
      },
      {
        heading: 'Unveränderliche und -co/-go',
        body:
          'Manche Farben ändern sich nie: blu, rosa, viola, beige. ' +
          'Adjektive auf -co/-go behalten den harten Klang oft mit h: bianco → bianchi, bianche; lungo → lunghi. ' +
          'molto vor einem Adjektiv (= sehr) bleibt gleich, vor einem Nomen (= viel) passt es sich an.',
        examples: [
          { target: 'le scarpe blu', de: 'die blauen Schuhe' },
          { target: 'sono molto stanchi', de: 'sie sind sehr müde' },
          { target: 'molte persone', de: 'viele Leute' },
        ],
      },
    ],
  },
  {
    id: 'possessiv',
    icon: '🏠',
    title: 'Possessivpronomen (mein, dein …)',
    level: 'A1',
    intro: 'Im Italienischen steht vor „mein“ meistens ein Artikel – il mio libro.',
    sections: [
      {
        heading: 'Die Formen',
        body:
          'mio, tuo, suo (sein/ihr/Ihr), nostro, vostro, loro – jeweils mit vier Formen: ' +
          'il mio, la mia, i miei, le mie · il tuo, la tua, i tuoi, le tue · il suo, la sua, i suoi, le sue. ' +
          'loro bleibt immer gleich: il loro, la loro, i loro, le loro.',
        examples: [
          { target: 'il mio telefono', de: 'mein Handy' },
          { target: 'le tue scarpe', de: 'deine Schuhe' },
          { target: 'i nostri amici', de: 'unsere Freunde' },
        ],
      },
      {
        heading: 'Nach dem Besitz, nicht nach dem Besitzer',
        body:
          'Die Form richtet sich nach dem Ding, das jemandem gehört. „suo“ heißt deshalb sein UND ihr: ' +
          'la sua macchina = sein Auto oder ihr Auto (macchina ist weiblich).',
        examples: [
          { target: 'Marco e la sua ragazza', de: 'Marco und seine Freundin' },
          { target: 'Anna e il suo ragazzo', de: 'Anna und ihr Freund' },
          { target: 'Signora, è la Sua borsa?', de: 'Ist das Ihre Tasche?' },
        ],
      },
      {
        heading: 'Familie: ohne Artikel',
        body:
          'Bei einem einzelnen Familienmitglied fällt der Artikel weg: mia madre, tuo fratello, sua sorella. ' +
          'Er kommt zurück in der Mehrzahl (i miei fratelli), bei Koseformen (la mia mamma, il mio papà), ' +
          'mit einem Adjektiv (la mia cara zia) und immer bei loro (la loro figlia).',
        examples: [
          { target: 'Mio padre è medico.', de: 'Mein Vater ist Arzt.' },
          { target: 'I miei genitori abitano a Roma.', de: 'Meine Eltern wohnen in Rom.' },
          { target: 'la loro figlia', de: 'ihre Tochter' },
        ],
      },
    ],
  },
  {
    id: 'fragen',
    icon: '❓',
    title: 'Fragen & Verneinung',
    level: 'A1',
    intro: 'Fragen stellen ist leicht: gleiche Wortstellung, nur die Stimme geht nach oben.',
    sections: [
      {
        heading: 'Ja/Nein-Fragen',
        body:
          'Die Wortstellung bleibt wie im Aussagesatz – nur die Satzmelodie steigt am Ende. ' +
          'Das Subjekt steht oft am Ende: È arrivato Marco?',
        examples: [
          { target: 'Parli italiano.', de: 'Du sprichst Italienisch.' },
          { target: 'Parli italiano?', de: 'Sprichst du Italienisch?' },
        ],
      },
      {
        heading: 'Fragewörter',
        body:
          'chi (wer) · che cosa / cosa / che (was) · dove (wo/wohin) · di dove (woher) · quando (wann) · come (wie) · ' +
          'perché (warum – auch „weil“) · quanto/quanta/quanti/quante (wie viel/e, passt sich an) · quale (welcher; vor è: qual è).',
        examples: [
          { target: 'Di dove sei?', de: 'Woher kommst du?' },
          { target: 'Quanti anni hai?', de: 'Wie alt bist du?' },
          { target: "Qual è il tuo numero?", de: 'Was ist deine Nummer?' },
          { target: 'Perché ridi? – Perché sono felice.', de: 'Warum lachst du? – Weil ich glücklich bin.' },
        ],
      },
      {
        heading: 'Verneinung mit non',
        body: 'non steht direkt vor dem Verb (und vor Pronomen, die zum Verb gehören).',
        examples: [
          { target: 'Non ho tempo.', de: 'Ich habe keine Zeit.' },
          { target: 'Non lo so.', de: 'Ich weiß es nicht.' },
        ],
      },
      {
        heading: 'Doppelte Verneinung',
        body:
          'Mit mai, niente, nessuno, più, ancora bleibt non vor dem Verb – im Deutschen wäre das doppelt, im Italienischen ist es Pflicht. ' +
          'Steht das Verneinungswort am Satzanfang, fällt non weg: Nessuno lo sa.',
        examples: [
          { target: 'Non vado mai al cinema.', de: 'Ich gehe nie ins Kino.' },
          { target: 'Non ho visto nessuno.', de: 'Ich habe niemanden gesehen.' },
          { target: 'Non abito più qui.', de: 'Ich wohne nicht mehr hier.' },
          { target: 'Non è ancora arrivato.', de: 'Er ist noch nicht angekommen.' },
        ],
      },
    ],
  },
  {
    id: 'praepositionen',
    icon: '📍',
    title: 'Präpositionen (a, di, in, da …)',
    level: 'A1',
    intro: 'Kleine Wörter, große Wirkung – und mit dem Artikel verschmelzen sie.',
    sections: [
      {
        heading: 'Die wichtigsten',
        body:
          'di (von, aus), a (zu, in, nach), da (von, bei, seit), in (in, nach), con (mit), su (auf, über), per (für, durch), tra/fra (zwischen, in).',
        examples: [
          { target: 'Sono di Monaco.', de: 'Ich bin aus München.' },
          { target: 'Vado a Roma.', de: 'Ich fahre nach Rom.' },
          { target: 'Abito in Germania.', de: 'Ich wohne in Deutschland.' },
          { target: 'Esco con gli amici.', de: 'Ich gehe mit Freunden aus.' },
        ],
      },
      {
        heading: 'Städte, Länder, Verkehrsmittel',
        body:
          'Städte mit a (a Milano), Länder und Regionen mit in (in Italia, in Toscana). ' +
          'Verkehrsmittel mit in (in treno, in macchina, in bici), aber a piedi (zu Fuß). ' +
          'Zu einer Person oder in ein Geschäft, das nach der Person heißt: da (dal medico, da Marco).',
        examples: [
          { target: 'Vado in ufficio in bici.', de: 'Ich fahre mit dem Rad ins Büro.' },
          { target: 'Stasera andiamo da Luca.', de: 'Heute Abend gehen wir zu Luca.' },
          { target: 'Studio italiano da due anni.', de: 'Ich lerne seit zwei Jahren Italienisch.' },
          { target: 'Ci vediamo tra un’ora.', de: 'Wir sehen uns in einer Stunde.' },
        ],
      },
      {
        heading: 'Mit Artikel verschmolzen',
        body:
          'a, di, da, in, su verbinden sich mit dem bestimmten Artikel zu einem Wort. in wird dabei zu ne-, di zu de-: ' +
          'a + il = al, di + il = del, da + il = dal, in + il = nel, su + il = sul. ' +
          'Genauso mit lo, la, l’, i, gli, le: allo, alla, all’, ai, agli, alle · dello, della … · nello, nella, negli, nelle.',
        examples: [
          { target: 'Vado al mare.', de: 'Ich fahre ans Meer.' },
          { target: 'il libro della professoressa', de: 'das Buch der Lehrerin' },
          { target: 'Le chiavi sono nella borsa.', de: 'Die Schlüssel sind in der Tasche.' },
          { target: 'Il gatto dorme sul divano.', de: 'Die Katze schläft auf dem Sofa.' },
        ],
      },
      {
        heading: 'Wann ohne Artikel?',
        body:
          'Bei vielen festen Orten steht in ohne Artikel: in centro, in banca, in ufficio, in cucina, in montagna. ' +
          'Genauso a casa, a scuola, a letto. Kommt ein Adjektiv oder eine genauere Angabe dazu, braucht es den Artikel: nella banca vicino alla stazione.',
        examples: [
          { target: 'Lavoro in banca.', de: 'Ich arbeite in einer/der Bank.' },
          { target: 'Torno a casa.', de: 'Ich gehe nach Hause.' },
        ],
      },
    ],
  },
  {
    id: 'unregelmaessig',
    icon: '⚡',
    title: 'Wichtige unregelmäßige Verben',
    level: 'A1',
    intro: 'Eine Handvoll Verben kommt ständig vor – und tanzt aus der Reihe.',
    sections: [
      {
        heading: 'andare, fare, stare, dare',
        body:
          'andare (gehen): vado, vai, va, andiamo, andate, vanno · fare (machen): faccio, fai, fa, facciamo, fate, fanno · ' +
          'stare (sich befinden): sto, stai, sta, stiamo, state, stanno · dare (geben): do, dai, dà, diamo, date, danno.',
        examples: [
          { target: 'Come stai? – Sto bene.', de: 'Wie geht’s? – Mir geht’s gut.' },
          { target: 'Che cosa fai stasera?', de: 'Was machst du heute Abend?' },
          { target: 'Andiamo al cinema?', de: 'Gehen wir ins Kino?' },
        ],
      },
      {
        heading: 'Die Modalverben',
        body:
          'volere (wollen): voglio, vuoi, vuole, vogliamo, volete, vogliono · potere (können): posso, puoi, può, possiamo, potete, possono · ' +
          'dovere (müssen): devo, devi, deve, dobbiamo, dovete, devono. Danach folgt der Infinitiv.',
        examples: [
          { target: 'Voglio imparare l’italiano.', de: 'Ich will Italienisch lernen.' },
          { target: 'Posso entrare?', de: 'Darf ich reinkommen?' },
          { target: 'Devo lavorare domani.', de: 'Ich muss morgen arbeiten.' },
        ],
      },
      {
        heading: 'venire, uscire, dire, sapere, bere',
        body:
          'venire (kommen): vengo, vieni, viene, veniamo, venite, vengono · uscire (ausgehen): esco, esci, esce, usciamo, uscite, escono · ' +
          'dire (sagen): dico, dici, dice, diciamo, dite, dicono · sapere (wissen): so, sai, sa, sappiamo, sapete, sanno · ' +
          'bere (trinken): bevo, bevi, beve, beviamo, bevete, bevono.',
        examples: [
          { target: 'Vieni con noi?', de: 'Kommst du mit uns?' },
          { target: 'Non so nuotare.', de: 'Ich kann nicht schwimmen.' },
          { target: 'Che cosa dici?', de: 'Was sagst du?' },
        ],
      },
      {
        heading: 'sapere oder potere?',
        body:
          'sapere + Infinitiv = etwas gelernt haben und können (so cucinare). ' +
          'potere = die Möglichkeit oder Erlaubnis haben (oggi non posso cucinare).',
        examples: [
          { target: 'So guidare, ma oggi non posso.', de: 'Ich kann Auto fahren, aber heute geht es nicht.' },
        ],
      },
    ],
  },
  {
    id: 'piacere',
    icon: '❤️',
    title: 'Mögen: mi piace',
    level: 'A1',
    intro: '„Mir gefällt …“ – so drückt man im Italienischen aus, was man mag.',
    sections: [
      {
        heading: 'Umgekehrt gedacht',
        body:
          'Wörtlich sagt man „mir gefällt die Pizza“. Die Sache ist das Subjekt: eine Sache oder ein Infinitiv → piace, ' +
          'mehrere Sachen → piacciono.',
        examples: [
          { target: 'Mi piace la pizza.', de: 'Ich mag Pizza.' },
          { target: 'Mi piacciono i gatti.', de: 'Ich mag Katzen.' },
          { target: 'Mi piace viaggiare.', de: 'Ich reise gern.' },
        ],
      },
      {
        heading: 'Wem gefällt es?',
        body:
          'mi (mir), ti (dir), gli (ihm), le (ihr), Le (Ihnen), ci (uns), vi (euch), gli (ihnen). ' +
          'Mit Namen oder zur Betonung: a Marco piace …, a me piace, a te piace? Verneint: non mi piace.',
        examples: [
          { target: 'Ti piace il vino?', de: 'Magst du Wein?' },
          { target: 'A Giulia non piace il calcio.', de: 'Giulia mag keinen Fußball.' },
          { target: 'A me piace, e a te?', de: 'Mir gefällt es, und dir?' },
        ],
      },
      {
        heading: 'In der Vergangenheit & höflich',
        body:
          'Im passato prossimo mit essere, das Partizip passt sich der Sache an: mi è piaciuto il film, mi è piaciuta la città. ' +
          'Einen Wunsch drückt man mit dem Konditional aus: mi piacerebbe …',
        examples: [
          { target: 'Ti è piaciuta la festa?', de: 'Hat dir die Party gefallen?' },
          { target: 'Mi piacerebbe vedere Venezia.', de: 'Ich würde gern Venedig sehen.' },
        ],
      },
    ],
  },
  {
    id: 'reflexiv',
    icon: '🪞',
    title: 'Reflexive Verben',
    level: 'A1',
    intro: 'Verben mit „sich“ – im Italienischen deutlich häufiger als im Deutschen.',
    sections: [
      {
        heading: 'Die Pronomen',
        body:
          'Im Infinitiv hängt -si an: alzarsi, chiamarsi, divertirsi. Konjugiert steht das Pronomen vor dem Verb: ' +
          'mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano.',
        examples: [
          { target: 'Mi chiamo Luca.', de: 'Ich heiße Luca.' },
          { target: 'A che ora ti svegli?', de: 'Wann wachst du auf?' },
          { target: 'Ci vediamo domani!', de: 'Wir sehen uns morgen!' },
        ],
      },
      {
        heading: 'Typische reflexive Verben',
        body:
          'alzarsi (aufstehen), svegliarsi (aufwachen), lavarsi (sich waschen), vestirsi (sich anziehen), sentirsi (sich fühlen), ' +
          'divertirsi (Spaß haben), riposarsi (sich ausruhen), sbagliarsi (sich irren), ricordarsi (sich erinnern), trovarsi (sich befinden).',
        examples: [
          { target: 'Mi sento meglio.', de: 'Ich fühle mich besser.' },
          { target: 'Vi divertite?', de: 'Habt ihr Spaß?' },
        ],
      },
      {
        heading: 'Mit Modalverb und in der Vergangenheit',
        body:
          'Mit volere/potere/dovere hängt das Pronomen an den Infinitiv oder steht vorne: devo alzarmi = mi devo alzare. ' +
          'Im passato prossimo immer mit essere, das Partizip passt sich an: mi sono alzato (Mann), mi sono alzata (Frau).',
        examples: [
          { target: 'Domani devo alzarmi presto.', de: 'Morgen muss ich früh aufstehen.' },
          { target: 'Ci siamo divertiti molto.', de: 'Wir hatten viel Spaß.' },
        ],
      },
    ],
  },
  {
    id: 'passato-prossimo',
    icon: '⏪',
    title: 'Passato prossimo (Perfekt)',
    level: 'A2',
    intro: 'Die wichtigste Vergangenheitsform – gebildet wie das deutsche Perfekt.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'avere oder essere im Präsens + Partizip. Das Partizip: -are → -ato (parlato), -ere → -uto (venduto), -ire → -ito (dormito).',
        examples: [
          { target: 'Ho mangiato una pizza.', de: 'Ich habe eine Pizza gegessen.' },
          { target: 'Abbiamo dormito bene.', de: 'Wir haben gut geschlafen.' },
        ],
      },
      {
        heading: 'avere oder essere?',
        body:
          'Die meisten Verben nehmen avere. essere nehmen Verben der Bewegung zu einem Ziel und der Veränderung ' +
          '(andare, venire, arrivare, partire, uscire, entrare, tornare, nascere, morire, diventare), ' +
          'dazu essere, stare, restare, piacere, succedere und alle reflexiven Verben. Mit essere passt sich das Partizip an das Subjekt an.',
        examples: [
          { target: 'Sono andato a Napoli.', de: 'Ich (m) bin nach Neapel gefahren.' },
          { target: 'Anna è arrivata ieri.', de: 'Anna ist gestern angekommen.' },
          { target: 'Siamo rimasti a casa.', de: 'Wir sind zu Hause geblieben.' },
          { target: 'Ho camminato molto.', de: 'Ich bin viel gelaufen. (avere!)' },
        ],
      },
      {
        heading: 'Unregelmäßige Partizipien',
        body:
          'fare → fatto, dire → detto, leggere → letto, scrivere → scritto, prendere → preso, mettere → messo, ' +
          'vedere → visto, aprire → aperto, chiudere → chiuso, bere → bevuto, venire → venuto, essere/stare → stato, ' +
          'rimanere → rimasto, nascere → nato, morire → morto, scegliere → scelto, perdere → perso, rispondere → risposto.',
        examples: [
          { target: 'Hai visto il film?', de: 'Hast du den Film gesehen?' },
          { target: 'Chi ha scritto questa lettera?', de: 'Wer hat diesen Brief geschrieben?' },
        ],
      },
      {
        heading: 'Signalwörter',
        body:
          'ieri, l’altro ieri, la settimana scorsa, l’anno scorso, stamattina, una volta, già (schon), appena (gerade eben). ' +
          'già und ancora stehen zwischen Hilfsverb und Partizip.',
        examples: [
          { target: 'Ho già mangiato.', de: 'Ich habe schon gegessen.' },
          { target: 'Non ho ancora finito.', de: 'Ich bin noch nicht fertig.' },
        ],
      },
    ],
  },
  {
    id: 'imperfetto',
    icon: '🎞️',
    title: 'Imperfetto – und wann welche Vergangenheit?',
    level: 'A2',
    intro: 'Das Imperfetto erzählt, wie es war. Das Passato prossimo sagt, was passiert ist.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Infinitiv ohne -re + -vo, -vi, -va, -vamo, -vate, -vano: parlavo, prendevo, dormivo. ' +
          'Fast alles ist regelmäßig. Ausnahmen: essere (ero, eri, era, eravamo, eravate, erano), fare (facevo), dire (dicevo), bere (bevevo).',
        examples: [
          { target: 'Da bambino abitavo a Torino.', de: 'Als Kind wohnte ich in Turin.' },
          { target: 'Era una bella giornata.', de: 'Es war ein schöner Tag.' },
        ],
      },
      {
        heading: 'Wofür das Imperfetto?',
        body:
          'Gewohnheiten (was man früher regelmäßig tat), Beschreibungen von Personen, Wetter, Zeit und Gefühlen, ' +
          'und Handlungen, die gerade im Gange waren – der Hintergrund einer Geschichte.',
        examples: [
          { target: "Ogni estate andavamo al mare.", de: 'Jeden Sommer fuhren wir ans Meer.' },
          { target: 'Mia nonna era molto simpatica.', de: 'Meine Oma war sehr nett.' },
          { target: 'Erano le dieci e pioveva.', de: 'Es war zehn Uhr und es regnete.' },
        ],
      },
      {
        heading: 'Imperfetto oder passato prossimo?',
        body:
          'Frage dich: Wie war es? (Zustand, Gewohnheit, Hintergrund) → imperfetto. Was ist passiert? (abgeschlossen, einmalig) → passato prossimo. ' +
          'Oft kommen beide in einem Satz vor: Die laufende Handlung im imperfetto wird durch ein Ereignis im passato prossimo unterbrochen.',
        examples: [
          { target: 'Mentre cucinavo, è arrivato Paolo.', de: 'Während ich kochte, kam Paolo.' },
          { target: 'Ieri ero stanco, quindi sono andato a letto presto.', de: 'Gestern war ich müde, also bin ich früh ins Bett gegangen.' },
        ],
      },
      {
        heading: 'Signalwörter',
        body:
          'imperfetto: sempre, di solito, ogni giorno, spesso, mentre, da bambino, una volta (= früher). ' +
          'passato prossimo: ieri, all’improvviso, una volta (= einmal), a un tratto, poi.',
      },
    ],
  },
  {
    id: 'futuro',
    icon: '🔮',
    title: 'Futuro semplice',
    level: 'A2',
    intro: 'Für Pläne, Versprechen und Vermutungen.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Infinitiv ohne -e + -ò, -ai, -à, -emo, -ete, -anno. Bei -are wird das a zu e: parlare → parlerò. ' +
          '-care/-gare bekommen ein h (cercherò, pagherò), -ciare/-giare verlieren das i (comincerò, mangerò).',
        examples: [
          { target: 'Domani partirò presto.', de: 'Morgen werde ich früh abfahren.' },
          { target: 'Pagheremo con la carta.', de: 'Wir werden mit Karte zahlen.' },
        ],
      },
      {
        heading: 'Unregelmäßige Stämme',
        body:
          'essere → sarò, avere → avrò, andare → andrò, fare → farò, dare → darò, stare → starò, venire → verrò, ' +
          'volere → vorrò, potere → potrò, dovere → dovrò, sapere → saprò, vedere → vedrò, vivere → vivrò, bere → berrò, rimanere → rimarrò.',
        examples: [
          { target: 'Sarà una bella festa.', de: 'Es wird ein schönes Fest.' },
          { target: 'Verrai anche tu?', de: 'Kommst du auch?' },
        ],
      },
      {
        heading: 'Präsens für die Zukunft & Vermutungen',
        body:
          'Für feste, nahe Pläne reicht wie im Deutschen oft das Präsens (Domani vado a Roma). ' +
          'Das Futur drückt außerdem eine Vermutung in der Gegenwart aus – wie „wohl“.',
        examples: [
          { target: 'Dov’è Marco? – Sarà ancora al lavoro.', de: 'Wo ist Marco? – Er wird wohl noch arbeiten.' },
          { target: 'Che ore sono? – Saranno le sei.', de: 'Wie spät ist es? – Es wird so sechs sein.' },
        ],
      },
    ],
  },
  {
    id: 'objektpronomen',
    icon: '🎯',
    title: 'Objektpronomen (lo, la, gli, le …)',
    level: 'A2',
    intro: 'Statt ein Nomen zu wiederholen, nimmt man ein kurzes Pronomen – und stellt es vor das Verb.',
    sections: [
      {
        heading: 'Direkte Pronomen (wen? was?)',
        body:
          'mi (mich), ti (dich), lo (ihn/es), la (sie/es), La (Sie), ci (uns), vi (euch), li (sie, m. Mz.), le (sie, w. Mz.). ' +
          'lo und la werden vor Vokal zu l’.',
        examples: [
          { target: 'Conosci Marta? – Sì, la conosco.', de: 'Kennst du Marta? – Ja, ich kenne sie.' },
          { target: 'Il giornale? Lo compro ogni giorno.', de: 'Die Zeitung? Ich kaufe sie jeden Tag.' },
          { target: 'Ti amo.', de: 'Ich liebe dich.' },
        ],
      },
      {
        heading: 'Indirekte Pronomen (wem?)',
        body:
          'mi (mir), ti (dir), gli (ihm), le (ihr), Le (Ihnen), ci (uns), vi (euch), gli (ihnen). ' +
          'Typisch bei Verben mit a + Person: dare, dire, scrivere, telefonare, regalare, chiedere, rispondere.',
        examples: [
          { target: 'Telefono a Luca. → Gli telefono.', de: 'Ich rufe Luca an. → Ich rufe ihn an.' },
          { target: 'Le ho scritto una mail.', de: 'Ich habe ihr eine Mail geschrieben.' },
          { target: 'Mi dai il sale?', de: 'Gibst du mir das Salz?' },
        ],
      },
      {
        heading: 'Wo steht das Pronomen?',
        body:
          'Vor dem konjugierten Verb (Lo vedo). An den Infinitiv wird es angehängt, das -e fällt weg (Voglio vederlo). ' +
          'Mit Modalverb geht beides: Lo voglio vedere = Voglio vederlo. Beim Imperativ mit tu/noi/voi hängt es hinten an (Guardalo!).',
        examples: [
          { target: 'Devo chiamarla.', de: 'Ich muss sie anrufen.' },
          { target: 'La devo chiamare.', de: 'Ich muss sie anrufen.' },
        ],
      },
      {
        heading: 'Im passato prossimo',
        body:
          'Vor avere passt sich das Partizip an lo, la, li, le an: L’ho visto (ihn), L’ho vista (sie), Li ho visti, Le ho viste. ' +
          'Bei indirekten Pronomen gibt es keine Angleichung: Le ho parlato.',
        examples: [
          { target: 'Le chiavi? Le ho perse!', de: 'Die Schlüssel? Ich habe sie verloren!' },
          { target: 'La torta l’ha fatta Giulia.', de: 'Den Kuchen hat Giulia gemacht.' },
        ],
      },
    ],
  },
  {
    id: 'imperativ',
    icon: '📢',
    title: 'Imperativ (Befehle & Bitten)',
    level: 'A2',
    intro: 'Aufforderungen, Anleitungen, Rezepte, Wegbeschreibungen.',
    sections: [
      {
        heading: 'tu, noi, voi',
        body:
          'tu: -are → -a (parla!), -ere/-ire → -i (prendi! senti! finisci!). noi und voi wie im Präsens: andiamo! guardate!',
        examples: [
          { target: 'Aspetta un momento!', de: 'Warte einen Moment!' },
          { target: 'Prendete la prima a destra.', de: 'Nehmt die erste rechts.' },
          { target: 'Andiamo!', de: 'Los geht’s! / Gehen wir!' },
        ],
      },
      {
        heading: 'Höflich: Lei',
        body:
          'Für Lei nimmt man den congiuntivo: -are → -i, -ere/-ire → -a. parli, prenda, senta, scusi, venga, vada, faccia.',
        examples: [
          { target: 'Scusi, dov’è la stazione?', de: 'Entschuldigen Sie, wo ist der Bahnhof?' },
          { target: 'Prego, si accomodi.', de: 'Bitte, nehmen Sie Platz.' },
          { target: 'Giri a sinistra.', de: 'Biegen Sie links ab.' },
        ],
      },
      {
        heading: 'Verneinung',
        body: 'Bei tu: non + Infinitiv. Bei allen anderen: non vor die normale Form.',
        examples: [
          { target: 'Non preoccuparti!', de: 'Mach dir keine Sorgen!' },
          { target: 'Non toccare!', de: 'Nicht anfassen!' },
          { target: 'Non dimenticate i biglietti!', de: 'Vergesst die Fahrkarten nicht!' },
        ],
      },
      {
        heading: 'Kurzformen und Pronomen',
        body:
          'andare → va’, fare → fa’, dare → da’, stare → sta’, dire → di’; essere → sii, avere → abbi. ' +
          'Pronomen hängen bei tu/noi/voi hinten an; nach den Kurzformen verdoppelt sich der Konsonant: dimmi, fammi, dammi (aber: gli → dagli).',
        examples: [
          { target: 'Dimmi la verità!', de: 'Sag mir die Wahrheit!' },
          { target: 'Alzati, è tardi!', de: 'Steh auf, es ist spät!' },
          { target: 'Fammi vedere!', de: 'Lass mich sehen!' },
        ],
      },
    ],
  },
  {
    id: 'vergleiche',
    icon: '⚖️',
    title: 'Vergleiche & Superlativ',
    level: 'A2',
    intro: 'größer als, so groß wie, am größten – und „sehr“ mit -issimo.',
    sections: [
      {
        heading: 'più / meno … di',
        body:
          'Vor Nomen, Namen und Pronomen steht di (mit Artikel verschmolzen): più alto di Marco, meno caro del treno.',
        examples: [
          { target: 'Roma è più grande di Firenze.', de: 'Rom ist größer als Florenz.' },
          { target: 'Il treno è meno caro dell’aereo.', de: 'Der Zug ist billiger als das Flugzeug.' },
        ],
      },
      {
        heading: 'più … che',
        body:
          'che steht, wenn zwei Adjektive, Verben, Mengen oder Ausdrücke mit Präposition verglichen werden.',
        examples: [
          { target: 'È più facile leggere che parlare.', de: 'Lesen ist leichter als sprechen.' },
          { target: 'Mangio più verdura che carne.', de: 'Ich esse mehr Gemüse als Fleisch.' },
          { target: 'Fa più caldo a Roma che a Milano.', de: 'In Rom ist es wärmer als in Mailand.' },
        ],
      },
      {
        heading: 'Gleichheit',
        body: '(tanto) … quanto oder (così) … come: Luca è alto come suo padre.',
        examples: [{ target: 'Sono stanco quanto te.', de: 'Ich bin genauso müde wie du.' }],
      },
      {
        heading: 'Superlativ und Sonderformen',
        body:
          'Relativ: il/la più … (di): il ragazzo più simpatico della classe. Absolut mit -issimo (= sehr): bellissimo, carissima. ' +
          'Unregelmäßig: buono → migliore, cattivo → peggiore; beim Adverb bene → meglio, male → peggio.',
        examples: [
          { target: 'È il ristorante più famoso della città.', de: 'Es ist das bekannteste Restaurant der Stadt.' },
          { target: 'Questo vino è migliore.', de: 'Dieser Wein ist besser.' },
          { target: 'Oggi sto meglio.', de: 'Heute geht es mir besser.' },
        ],
      },
    ],
  },
  {
    id: 'gerundio',
    icon: '⏳',
    title: 'stare + Gerundium (gerade tun)',
    level: 'A2',
    intro: 'Die Verlaufsform: Was passiert genau jetzt?',
    sections: [
      {
        heading: 'Bildung',
        body:
          'stare + Gerundium. Gerundium: -are → -ando (parlando), -ere und -ire → -endo (leggendo, dormendo). ' +
          'Unregelmäßig: fare → facendo, dire → dicendo, bere → bevendo.',
        examples: [
          { target: 'Sto lavorando, ti chiamo dopo.', de: 'Ich arbeite gerade, ich rufe dich später an.' },
          { target: 'Che cosa stai facendo?', de: 'Was machst du gerade?' },
        ],
      },
      {
        heading: 'In der Vergangenheit',
        body: 'Mit dem imperfetto von stare: stavo, stavi, stava … + Gerundium.',
        examples: [{ target: 'Stavo dormendo quando hai chiamato.', de: 'Ich schlief gerade, als du angerufen hast.' }],
      },
      {
        heading: 'stare per = gleich tun',
        body: 'stare per + Infinitiv: kurz davor sein, etwas zu tun.',
        examples: [{ target: 'Il treno sta per partire.', de: 'Der Zug fährt gleich ab.' }],
      },
    ],
  },
  {
    id: 'condizionale',
    icon: '🙏',
    title: 'Condizionale (würde, hätte, könnte)',
    level: 'B1',
    intro: 'Höflich bitten, Wünsche äußern, Ratschläge geben.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Gleicher Stamm wie das Futur + -ei, -esti, -ebbe, -emmo, -este, -ebbero: parlerei, prenderei, dormirei. ' +
          'Die unregelmäßigen Stämme sind dieselben wie im Futur: sarei, avrei, andrei, farei, verrei, vorrei, potrei, dovrei.',
        examples: [
          { target: 'Vorrei un cappuccino, per favore.', de: 'Ich hätte gern einen Cappuccino.' },
          { target: 'Potresti aiutarmi?', de: 'Könntest du mir helfen?' },
        ],
      },
      {
        heading: 'Gebrauch',
        body:
          'Höfliche Bitten (vorrei, potrebbe), Wünsche (mi piacerebbe), Ratschläge (dovresti), ' +
          'und Nachrichten ohne Gewähr – wie das deutsche „soll“: Il ministro sarebbe malato.',
        examples: [
          { target: 'Dovresti dormire di più.', de: 'Du solltest mehr schlafen.' },
          { target: 'Mi piacerebbe vivere al mare.', de: 'Ich würde gern am Meer leben.' },
          { target: 'Al tuo posto non lo farei.', de: 'An deiner Stelle würde ich das nicht tun.' },
        ],
      },
      {
        heading: 'Condizionale passato',
        body:
          'avere/essere im condizionale + Partizip: avrei voluto, sarei venuto. Für Dinge, die nicht passiert sind – ' +
          'und nach Verben des Sagens für die Zukunft aus Sicht der Vergangenheit.',
        examples: [
          { target: 'Sarei venuto volentieri.', de: 'Ich wäre gern gekommen.' },
          { target: 'Ha detto che avrebbe chiamato.', de: 'Er hat gesagt, dass er anrufen würde.' },
        ],
      },
    ],
  },
  {
    id: 'congiuntivo',
    icon: '💭',
    title: 'Congiuntivo presente',
    level: 'B1',
    intro: 'Die Möglichkeitsform für Meinung, Wunsch, Gefühl und Zweifel.',
    sections: [
      {
        heading: 'Bildung',
        body:
          '-are → -i: che io parli, tu parli, lui parli, noi parliamo, voi parliate, loro parlino. ' +
          '-ere/-ire → -a: prenda, dorma, finisca (… prendiamo, prendiate, prendano). ' +
          'Die drei Singularformen sind gleich – darum steht oft das Pronomen dabei.',
        examples: [
          { target: 'Penso che lui abbia ragione.', de: 'Ich denke, dass er recht hat.' },
          { target: 'Spero che tu stia bene.', de: 'Ich hoffe, dass es dir gut geht.' },
        ],
      },
      {
        heading: 'Unregelmäßige Formen',
        body:
          'essere → sia, avere → abbia, andare → vada, fare → faccia, venire → venga, dire → dica, stare → stia, dare → dia, ' +
          'potere → possa, volere → voglia, dovere → debba, sapere → sappia, uscire → esca.',
      },
      {
        heading: 'Wann congiuntivo?',
        body:
          'Nach che bei Meinung (penso, credo, mi sembra), Wunsch und Wille (voglio, preferisco, spero), Gefühl (sono contento, ho paura, mi dispiace), ' +
          'Zweifel (non sono sicuro, dubito) und unpersönlichen Ausdrücken (è importante, è possibile, bisogna). ' +
          'Außerdem nach benché/sebbene (obwohl), prima che (bevor), affinché (damit), a meno che (es sei denn).',
        examples: [
          { target: 'Voglio che tu venga.', de: 'Ich will, dass du kommst.' },
          { target: 'È importante che tutti siano puntuali.', de: 'Es ist wichtig, dass alle pünktlich sind.' },
          { target: 'Benché piova, esco.', de: 'Obwohl es regnet, gehe ich raus.' },
        ],
      },
      {
        heading: 'Wann nicht?',
        body:
          'Bei Tatsachen und Gewissheit steht der Indikativ: so che, è vero che, sono sicuro che, vedo che, perché (weil). ' +
          'Hat der Nebensatz dasselbe Subjekt, nimmt man di + Infinitiv: Penso di partire (nicht: penso che io parta).',
        examples: [
          { target: 'So che è vero.', de: 'Ich weiß, dass es stimmt.' },
          { target: 'Spero di vederti presto.', de: 'Ich hoffe, dich bald zu sehen.' },
        ],
      },
    ],
  },
  {
    id: 'ci-ne',
    icon: '🧩',
    title: 'Die Pronomen ci und ne',
    level: 'B1',
    intro: 'Zwei kleine Wörter, die ganze Satzteile ersetzen.',
    sections: [
      {
        heading: 'ci = da, dorthin, daran',
        body:
          'ci ersetzt einen Ort (Vado a Roma → Ci vado) und a/su + Sache nach Verben wie pensare a, credere a, riuscire a, contare su.',
        examples: [
          { target: 'Sei mai stato in Sicilia? – Sì, ci sono stato due volte.', de: 'Warst du schon mal auf Sizilien? – Ja, zweimal.' },
          { target: 'Pensi ancora all’esame? – Sì, ci penso sempre.', de: 'Denkst du noch an die Prüfung? – Ja, ständig.' },
          { target: 'Non ci riesco.', de: 'Ich schaffe es nicht.' },
        ],
      },
      {
        heading: 'ne = davon, darüber',
        body:
          'ne ersetzt eine Menge oder einen Teil (mit Zahl oder Mengenwort danach) und di + Sache/Person nach Verben wie parlare di, avere bisogno di, avere voglia di.',
        examples: [
          { target: 'Quante mele vuoi? – Ne voglio tre.', de: 'Wie viele Äpfel willst du? – Drei.' },
          { target: 'Hai fratelli? – No, non ne ho.', de: 'Hast du Geschwister? – Nein, keine.' },
          { target: 'Ne parliamo domani.', de: 'Wir sprechen morgen darüber.' },
        ],
      },
      {
        heading: 'Feste Wendungen',
        body:
          'ci vuole / ci vogliono (man braucht), metterci (Zeit brauchen), andarsene (weggehen), non poterne più (nicht mehr können), ' +
          'Che ne pensi? (Was hältst du davon?). Im passato prossimo passt sich das Partizip nach ne an die Menge an.',
        examples: [
          { target: 'Ci vogliono due ore.', de: 'Man braucht zwei Stunden.' },
          { target: 'Non ne posso più!', de: 'Ich kann nicht mehr!' },
          { target: 'Di pizze, ne ho mangiate tre.', de: 'Pizzen habe ich drei gegessen.' },
        ],
      },
    ],
  },
  {
    id: 'relativ',
    icon: '🔗',
    title: 'Relativpronomen (che, cui, chi)',
    level: 'B1',
    intro: 'Sätze verbinden: der Mann, der … – die Stadt, in der …',
    sections: [
      {
        heading: 'che',
        body: 'che ist das Standard-Relativpronomen für Subjekt und Objekt – für alle Geschlechter und Zahlen, ohne Präposition.',
        examples: [
          { target: 'La ragazza che parla è mia sorella.', de: 'Das Mädchen, das spricht, ist meine Schwester.' },
          { target: 'Il libro che leggo è un giallo.', de: 'Das Buch, das ich lese, ist ein Krimi.' },
        ],
      },
      {
        heading: 'cui nach Präpositionen',
        body:
          'Nach einer Präposition steht cui: in cui, con cui, a cui, di cui, per cui. il/la cui heißt „dessen/deren“ ' +
          '(der Artikel richtet sich nach dem folgenden Nomen).',
        examples: [
          { target: 'la città in cui vivo', de: 'die Stadt, in der ich lebe' },
          { target: "l'amico con cui lavoro", de: 'der Freund, mit dem ich arbeite' },
          { target: 'Ecco il motivo per cui sono qui.', de: 'Das ist der Grund, warum ich hier bin.' },
          { target: 'lo scrittore il cui libro ho letto', de: 'der Schriftsteller, dessen Buch ich gelesen habe' },
        ],
      },
      {
        heading: 'chi und quello che',
        body:
          'chi = derjenige, der / wer (immer Einzahl): Chi dorme non piglia pesci. ' +
          'quello che / ciò che = das, was: Fai quello che vuoi.',
        examples: [
          { target: 'Chi cerca trova.', de: 'Wer sucht, der findet.' },
          { target: 'Non capisco quello che dici.', de: 'Ich verstehe nicht, was du sagst.' },
        ],
      },
    ],
  },
  {
    id: 'pronomi-combinati',
    icon: '🔀',
    title: 'Doppelte Pronomen (me lo, glielo)',
    level: 'B1',
    intro: 'Wem? und was? in einem Rutsch: Ich gebe es dir → Te lo do.',
    sections: [
      {
        heading: 'Die Regel',
        body:
          'Das indirekte Pronomen kommt zuerst und ändert sein i zu e: mi → me, ti → te, ci → ce, vi → ve, si → se. ' +
          'Dann folgt lo, la, li, le oder ne.',
        examples: [
          { target: 'Me lo dai?', de: 'Gibst du es mir?' },
          { target: 'Te la presto volentieri.', de: 'Ich leihe sie dir gern.' },
          { target: 'Ce ne sono tanti.', de: 'Es gibt viele davon.' },
        ],
      },
      {
        heading: 'gli, le, Le → glie-',
        body:
          'gli (ihm/ihnen), le (ihr) und Le (Ihnen) werden alle zu glie- und mit dem zweiten Pronomen zusammengeschrieben: ' +
          'glielo, gliela, glieli, gliele, gliene.',
        examples: [
          { target: 'Il libro? Glielo porto domani.', de: 'Das Buch? Ich bringe es ihm/ihr morgen.' },
          { target: 'Gliene ho parlato.', de: 'Ich habe mit ihm/ihr darüber gesprochen.' },
        ],
      },
      {
        heading: 'Angehängt und angeglichen',
        body:
          'An Infinitiv und Imperativ (tu/noi/voi) hängt man beide an: Puoi darmelo? Dimmelo! ' +
          'Im passato prossimo passt sich das Partizip an lo/la/li/le an: Me l’ha detta (la verità).',
        examples: [
          { target: 'Voglio regalarglielo.', de: 'Ich will es ihm schenken.' },
          { target: 'Le foto? Te le ho già mandate.', de: 'Die Fotos? Ich habe sie dir schon geschickt.' },
        ],
      },
    ],
  },
  {
    id: 'trapassato',
    icon: '⏮️',
    title: 'Trapassato prossimo (Plusquamperfekt)',
    level: 'B1',
    intro: 'Was schon vorher passiert war.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'imperfetto von avere oder essere + Partizip: avevo mangiato, eri partito, era arrivata. ' +
          'Die Wahl des Hilfsverbs und die Angleichung sind wie im passato prossimo.',
        examples: [
          { target: 'Avevo già cenato.', de: 'Ich hatte schon zu Abend gegessen.' },
          { target: 'Erano appena usciti.', de: 'Sie waren gerade hinausgegangen.' },
        ],
      },
      {
        heading: 'Gebrauch',
        body:
          'Eine Handlung, die vor einer anderen vergangenen Handlung abgeschlossen war. Oft mit già, appena, prima, non … ancora.',
        examples: [
          { target: 'Quando siamo arrivati, il film era già cominciato.', de: 'Als wir ankamen, hatte der Film schon angefangen.' },
          { target: 'Mi ha detto che non era mai stato a Roma.', de: 'Er hat mir gesagt, dass er noch nie in Rom gewesen war.' },
        ],
      },
    ],
  },
  {
    id: 'bedingungssaetze',
    icon: '🔁',
    title: 'Bedingungssätze mit se',
    level: 'B1',
    intro: 'Wenn … dann: real, möglich oder nur gedacht.',
    sections: [
      {
        heading: 'Realer Fall',
        body: 'se + Präsens → Präsens, Futur oder Imperativ. Die Bedingung kann gut eintreten.',
        examples: [
          { target: 'Se piove, restiamo a casa.', de: 'Wenn es regnet, bleiben wir zu Hause.' },
          { target: 'Se hai tempo, chiamami!', de: 'Wenn du Zeit hast, ruf mich an!' },
        ],
      },
      {
        heading: 'Möglicher / unwirklicher Fall',
        body:
          'se + congiuntivo imperfetto → condizionale. Wie im Deutschen „Wenn ich Zeit hätte, würde ich …“. ' +
          'Achtung: Nach se steht nie das condizionale!',
        examples: [
          { target: 'Se avessi tempo, verrei.', de: 'Wenn ich Zeit hätte, würde ich kommen.' },
          { target: 'Se fossi in te, non lo farei.', de: 'Wenn ich du wäre, würde ich es nicht tun.' },
          { target: 'Se vincessi alla lotteria, comprerei una casa al mare.', de: 'Wenn ich im Lotto gewinnen würde, würde ich ein Haus am Meer kaufen.' },
        ],
      },
      {
        heading: 'Congiuntivo imperfetto',
        body:
          '-are → -assi, -assi, -asse, -assimo, -aste, -assero (parlassi); -ere → -essi … (prendessi); -ire → -issi … (dormissi). ' +
          'Unregelmäßig: essere → fossi, fossi, fosse, fossimo, foste, fossero; fare → facessi; dire → dicessi; dare → dessi; stare → stessi; bere → bevessi.',
        examples: [
          { target: 'Se potessi, partirei subito.', de: 'Wenn ich könnte, würde ich sofort abreisen.' },
          { target: 'Magari fosse vero!', de: 'Wenn das nur wahr wäre!' },
        ],
      },
    ],
  },
  {
    id: 'si',
    icon: '👥',
    title: 'si impersonale & Passiv',
    level: 'B1',
    intro: '„Man“ und „wird gemacht“ – zwei Wege, ohne handelnde Person zu sprechen.',
    sections: [
      {
        heading: 'si = man',
        body:
          'si + Verb in der 3. Person: Si mangia bene qui. Steht ein Nomen in der Mehrzahl dabei, steht auch das Verb in der Mehrzahl.',
        examples: [
          { target: 'In Italia si cena tardi.', de: 'In Italien isst man spät zu Abend.' },
          { target: 'Qui si parla inglese.', de: 'Hier spricht man Englisch.' },
          { target: 'Si vendono biciclette usate.', de: 'Gebrauchte Fahrräder zu verkaufen.' },
        ],
      },
      {
        heading: 'Das Passiv',
        body:
          'essere + Partizip, angeglichen an das Subjekt. Wer es tut, steht mit da. ' +
          'In einfachen Zeiten geht auch venire statt essere (betont den Vorgang).',
        examples: [
          { target: 'La casa è stata costruita nel 1900.', de: 'Das Haus wurde 1900 gebaut.' },
          { target: 'Il libro è letto da milioni di persone.', de: 'Das Buch wird von Millionen Menschen gelesen.' },
          { target: 'Le lettere vengono spedite domani.', de: 'Die Briefe werden morgen verschickt.' },
        ],
      },
    ],
  },
];
