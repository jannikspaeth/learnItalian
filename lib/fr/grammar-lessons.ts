import type { GrammarLesson } from '../grammar-lessons';

// ─── Grundlagen (A1 grammar mini-lessons, French) ────────────────────────────────
// Short, readable first-steps lessons for beginners, written in German and
// rendered on /grammar as collapsible cards. Same topics as the Italian lessons.

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: 'aussprache',
    icon: 'speech',
    title: 'Aussprache & Alphabet',
    level: 'A1',
    intro: 'Im Französischen schreibt man mehr, als man spricht – ein paar Regeln helfen enorm.',
    sections: [
      {
        heading: 'Stumme Endungen',
        body:
          'Die meisten Konsonanten am Wortende spricht man nicht: -s, -t, -d, -x, -z und das -e am Ende bleiben stumm. ' +
          'Ausnahmen merkt man sich mit „CaReFuL": c, r, f, l werden am Ende oft gesprochen. Das „h" ist immer stumm.',
        examples: [
          { target: 'petit', de: '→ „peti" (klein)' },
          { target: 'ils parlent', de: '→ „il parl" (sie sprechen)' },
          { target: 'le bac, la mer, le chef', de: 'c, r, f am Ende hörbar' },
        ],
      },
      {
        heading: 'Wichtige Laute',
        body:
          '„ou" klingt wie deutsches „u", „u" wie deutsches „ü", „oi" wie „ua", „eau/au" wie „o", „ch" wie „sch", ' +
          '„gn" wie „nj". Vor e und i klingen c wie „s" und g wie „sch" (weich).',
        examples: [
          { target: 'bonjour', de: '→ „bonschur"' },
          { target: 'tu', de: '→ „tü" (du)' },
          { target: 'moi, beau', de: '→ „mua", „bo"' },
          { target: 'montagne', de: '→ „montanj" (Berg)' },
        ],
      },
      {
        heading: 'Nasale',
        body:
          'Vokal + n oder m am Silbenende wird durch die Nase gesprochen, das n selbst hört man kaum: ' +
          'an/en, on, in/un. Folgt ein Vokal, ist der Laut nicht nasal.',
        examples: [
          { target: 'enfant', de: '→ nasal „aⁿfaⁿ" (Kind)' },
          { target: 'bon / bonne', de: 'nasal / nicht nasal (gut)' },
          { target: 'vin', de: '→ nasal „wäⁿ" (Wein)' },
        ],
      },
      {
        heading: 'Bindung & Akzente',
        body:
          'Ein stummer Endkonsonant wird vor einem Vokal oft mitgesprochen (liaison): les amis = „le-sami". ' +
          'Die Betonung liegt immer auf der letzten Silbe. Akzente zeigen die Aussprache (é geschlossen, è offen) ' +
          'oder unterscheiden Wörter: ou (oder) / où (wo).',
        examples: [
          { target: 'les amis', de: '→ „le-sami" (die Freunde)' },
          { target: 'café, père', de: '„é" geschlossen, „è" offen' },
          { target: 'ou / où', de: 'oder / wo' },
        ],
      },
    ],
  },
  {
    id: 'pronomen',
    icon: 'user',
    title: 'Personalpronomen (ich, du, er …)',
    level: 'A1',
    intro: 'Im Französischen steht das Pronomen immer vor dem Verb – anders als im Italienischen.',
    sections: [
      {
        heading: 'Die Pronomen',
        body:
          'je = ich · tu = du · il = er · elle = sie · on = man/wir (Umgangssprache) · ' +
          'nous = wir · vous = ihr / Sie · ils = sie (männlich oder gemischt) · elles = sie (nur weiblich).',
        examples: [
          { target: 'je suis Anna', de: 'ich bin Anna' },
          { target: 'tu es mon amie', de: 'du bist meine Freundin' },
        ],
      },
      {
        heading: 'Nie weglassen – und je wird zu j\'',
        body:
          'Weil man viele Verbformen gleich ausspricht (parle, parles, parlent), braucht es immer das Pronomen. ' +
          'Vor Vokal oder stummem h wird je zu j\'.',
        examples: [
          { target: "j'aime, j'habite", de: 'ich liebe, ich wohne' },
          { target: 'on y va ?', de: 'gehen wir?' },
        ],
      },
      {
        heading: 'Höflich: vous',
        body: 'Wer siezt, benutzt „vous" mit der Verbform der 2. Person Plural – für eine oder mehrere Personen.',
        examples: [
          { target: 'Comment allez-vous ?', de: 'Wie geht es Ihnen?' },
          { target: 'Vous êtes d\'ici ?', de: 'Sind Sie von hier?' },
        ],
      },
    ],
  },
  {
    id: 'artikel',
    icon: 'letters',
    title: 'Nomen & Artikel (le / la)',
    level: 'A1',
    intro: 'Jedes Nomen ist männlich oder weiblich – lerne den Artikel immer mit.',
    sections: [
      {
        heading: 'Bestimmte Artikel',
        body:
          'le (männlich), la (weiblich), vor Vokal oder stummem h beide: l\'. Mehrzahl immer les. ' +
          'Das Geschlecht lässt sich oft nicht erraten – darum steht der Artikel im Wortschatz immer dabei.',
        examples: [
          { target: 'le livre · la maison', de: 'das Buch · das Haus' },
          { target: "l'ami · l'école", de: 'der Freund · die Schule' },
          { target: 'les livres', de: 'die Bücher' },
        ],
      },
      {
        heading: 'Unbestimmte und Teilungsartikel',
        body:
          'un (männlich), une (weiblich), des (Mehrzahl). Für unbestimmte Mengen (Essen, Trinken) steht der ' +
          'Teilungsartikel du / de la / de l\': du pain, de l\'eau. Nach Verneinung wird daraus de: pas de pain.',
        examples: [
          { target: 'un café, une pomme', de: 'ein Kaffee, ein Apfel' },
          { target: 'du pain, de la confiture', de: 'Brot, Marmelade (etwas davon)' },
          { target: 'je ne mange pas de viande', de: 'ich esse kein Fleisch' },
        ],
      },
      {
        heading: 'Mehrzahl',
        body:
          'Meist + s, das man nicht hört – die Mehrzahl erkennt man am Artikel. -eau wird zu -eaux, -al oft zu -aux.',
        examples: [
          { target: 'la fleur → les fleurs', de: 'die Blume → die Blumen' },
          { target: 'le gâteau → les gâteaux', de: 'der Kuchen → die Kuchen' },
          { target: 'le journal → les journaux', de: 'die Zeitung → die Zeitungen' },
        ],
      },
    ],
  },
  {
    id: 'etre-avoir',
    icon: 'scale',
    title: 'être & avoir',
    level: 'A1',
    intro: 'Die zwei wichtigsten Verben – sie bilden auch das Perfekt.',
    sections: [
      {
        heading: 'être (sein)',
        body: 'je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.',
        examples: [
          { target: 'Je suis allemand.', de: 'Ich bin Deutscher.' },
          { target: 'Nous sommes fatigués.', de: 'Wir sind müde.' },
        ],
      },
      {
        heading: 'avoir (haben)',
        body:
          "j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. Das Alter, Hunger, Durst, Angst … " +
          'drückt man mit avoir aus.',
        examples: [
          { target: "J'ai vingt ans.", de: 'Ich bin zwanzig Jahre alt.' },
          { target: "J'ai faim et j'ai soif.", de: 'Ich habe Hunger und Durst.' },
        ],
      },
      {
        heading: 'Es gibt: il y a',
        body: 'il y a bedeutet „es gibt" – für Einzahl und Mehrzahl gleich.',
        examples: [
          { target: 'Il y a un café ici.', de: 'Hier gibt es ein Café.' },
          { target: 'Il y a beaucoup de gens.', de: 'Es gibt viele Leute.' },
        ],
      },
    ],
  },
  {
    id: 'praesens',
    icon: 'repeat',
    title: 'Präsens der Verben',
    level: 'A1',
    intro: 'Die meisten Verben enden auf -er und sind regelmäßig.',
    sections: [
      {
        heading: 'Verben auf -er',
        body:
          'Stamm + -e, -es, -e, -ons, -ez, -ent. Gesprochen klingen je parle, tu parles, il parle und ils parlent gleich.',
        examples: [
          { target: 'je parle, nous parlons', de: 'ich spreche, wir sprechen' },
          { target: 'vous parlez, ils parlent', de: 'ihr sprecht, sie sprechen' },
        ],
      },
      {
        heading: 'Verben auf -ir (2. Gruppe) und -re',
        body:
          'Viele -ir-Verben schieben im Plural -iss- ein: je finis, nous finissons, ils finissent. ' +
          '-re-Verben: je vends, il vend, nous vendons, ils vendent.',
        examples: [
          { target: 'je choisis, nous choisissons', de: 'ich wähle, wir wählen' },
          { target: 'tu attends, ils attendent', de: 'du wartest, sie warten' },
        ],
      },
      {
        heading: 'Die wichtigsten unregelmäßigen',
        body:
          'aller (je vais, ils vont), faire (je fais, vous faites), prendre (je prends, ils prennent), ' +
          'venir (je viens), pouvoir (je peux), vouloir (je veux). Sie kommen so oft vor, dass man sie schnell kann.',
        examples: [
          { target: 'Je vais au cinéma.', de: 'Ich gehe ins Kino.' },
          { target: 'Qu\'est-ce que tu fais ?', de: 'Was machst du?' },
        ],
      },
    ],
  },
  {
    id: 'zahlen',
    icon: 'hash',
    title: 'Zahlen',
    level: 'A1',
    intro: 'Bis 69 ganz regelmäßig – danach wird gerechnet.',
    sections: [
      {
        heading: '0 bis 20',
        body:
          'zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, ' +
          'seize, dix-sept, dix-huit, dix-neuf, vingt.',
        examples: [{ target: 'J\'ai deux frères.', de: 'Ich habe zwei Brüder.' }],
      },
      {
        heading: 'Zehner bis 69',
        body:
          'vingt (20), trente (30), quarante (40), cinquante (50), soixante (60). Bei 21, 31 … steht „et un": vingt et un. ' +
          'Sonst mit Bindestrich: vingt-deux, trente-cinq.',
        examples: [{ target: 'vingt et un, quarante-trois', de: '21, 43' }],
      },
      {
        heading: '70 bis 99: rechnen',
        body:
          '70 = soixante-dix (60 + 10), 71 = soixante et onze, 80 = quatre-vingts (4 × 20), 81 = quatre-vingt-un, ' +
          '90 = quatre-vingt-dix (4 × 20 + 10). 100 = cent, 1000 = mille. In Belgien und der Schweiz sagt man ' +
          'auch septante (70) und nonante (90).',
        examples: [
          { target: 'soixante-quinze', de: '75 (60 + 15)' },
          { target: 'quatre-vingt-dix-neuf', de: '99 (4 × 20 + 19)' },
        ],
      },
    ],
  },
  {
    id: 'praepositionen',
    icon: 'pin',
    title: 'Präpositionen (contractées & einfache)',
    level: 'A1',
    intro: 'Kleine Wörter, große Wirkung – und à und de verschmelzen mit dem Artikel.',
    sections: [
      {
        heading: 'à und de + Artikel',
        body:
          'à + le = au, à + les = aux, de + le = du, de + les = des. Das ist Pflicht, nicht freiwillig: „à le" oder ' +
          '„de les" gibt es nicht. à la, à l\', de la und de l\' bleiben dagegen getrennt.',
        examples: [
          { target: 'Je vais au marché.', de: 'Ich gehe auf den Markt.' },
          { target: 'Il parle aux enfants.', de: 'Er spricht mit den Kindern.' },
          { target: "C'est le livre du professeur.", de: 'Das ist das Buch des Lehrers.' },
        ],
      },
      {
        heading: 'Wo? Einfache Ortsangaben',
        body:
          'dans (in), sur (auf), sous (unter), devant (vor), derrière (hinter), entre (zwischen), à côté de (neben). ' +
          'chez heißt „bei" oder „zu" – aber nur bei Personen: chez moi, chez Paul, chez le médecin.',
        examples: [
          { target: 'Le chat est sous la table.', de: 'Die Katze ist unter dem Tisch.' },
          { target: 'Les clés sont dans mon sac.', de: 'Die Schlüssel sind in meiner Tasche.' },
          { target: 'Ce soir, je dîne chez Paul.', de: 'Heute Abend esse ich bei Paul.' },
        ],
      },
      {
        heading: 'Städte und Länder',
        body:
          'Bei Städten steht à – für „in" und „nach": à Paris, à Berlin. Weibliche Länder (meist auf -e) und Länder ' +
          'mit Vokal am Anfang bekommen en: en France, en Allemagne, en Iran. Männliche Länder bekommen au, Länder im ' +
          'Plural aux: au Japon, au Canada, aux États-Unis. Ausnahme: le Mexique → au Mexique.',
        examples: [
          { target: "J'habite à Berlin, en Allemagne.", de: 'Ich wohne in Berlin, in Deutschland.' },
          { target: 'Il part au Portugal.', de: 'Er fährt nach Portugal.' },
          { target: "Je viens d'Italie, il vient du Canada.", de: 'Ich komme aus Italien, er aus Kanada.' },
        ],
      },
    ],
  },
  {
    id: 'demonstrativpronomen',
    icon: 'pointer',
    title: 'Demonstrativpronomen (ce, cet, cette, ces)',
    level: 'A1',
    intro: 'Dieser, diese, dieses – vier Formen, und man ist dabei.',
    sections: [
      {
        heading: 'ce, cet, cette, ces',
        body:
          'ce vor männlichen Wörtern: ce livre. cet vor männlichen Wörtern mit Vokal oder stummem h – nur der ' +
          'Aussprache wegen: cet ami, cet hôtel. cette für alle weiblichen: cette maison. ces im Plural, egal ' +
          'welches Geschlecht: ces livres, ces filles.',
        examples: [
          { target: 'ce garçon, cet homme', de: 'dieser Junge, dieser Mann' },
          { target: 'cette ville est belle', de: 'diese Stadt ist schön' },
          { target: 'ces chaussures', de: 'diese Schuhe' },
        ],
      },
      {
        heading: 'Hier oder da: -ci und -là',
        body:
          'ce kann „dieser" und „jener" heißen. Wer genau unterscheiden will, hängt -ci (hier) oder -là (da) an. ' +
          'Praktisch bei Zeitangaben: ce matin (heute Morgen), ce soir (heute Abend), cette année (dieses Jahr).',
        examples: [
          { target: 'ce pull-ci ou ce pull-là ?', de: 'dieser Pulli hier oder der da?' },
          { target: 'Ce soir, je reste à la maison.', de: 'Heute Abend bleibe ich zu Hause.' },
        ],
      },
      {
        heading: 'Ohne Nomen: celui, celle, ceux, celles',
        body:
          'Für „der hier / die da" ohne Nomen: celui (m.), celle (f.), ceux (m. Pl.), celles (f. Pl.). Sie stehen ' +
          'nie allein, sondern mit -ci/-là, de oder qui.',
        examples: [
          { target: 'Je prends celui-ci.', de: 'Ich nehme den hier.' },
          { target: 'Quelle robe ? – Celle-là.', de: 'Welches Kleid? – Das da.' },
          { target: "C'est le vélo de Marc ? – Non, c'est celui de Julie.", de: 'Ist das Marcs Rad? – Nein, das von Julie.' },
        ],
      },
    ],
  },
  {
    id: 'possessiv',
    icon: 'pointer',
    title: 'Possessivpronomen (mon, ma, mes …)',
    level: 'A1',
    intro: 'Mein, dein, sein – entscheidend ist das Besessene, nicht der Besitzer.',
    sections: [
      {
        heading: 'Die Formen',
        body:
          'mon / ma / mes (mein), ton / ta / tes (dein), son / sa / ses (sein oder ihr), notre / nos (unser), ' +
          'votre / vos (euer, Ihr), leur / leurs (ihr – bei mehreren Besitzern). Erst kommt die männliche, dann die ' +
          'weibliche, dann die Pluralform.',
        examples: [
          { target: 'mon frère, ma sœur, mes parents', de: 'mein Bruder, meine Schwester, meine Eltern' },
          { target: 'notre maison, nos amis', de: 'unser Haus, unsere Freunde' },
          { target: 'leur fils, leurs enfants', de: 'ihr Sohn, ihre Kinder' },
        ],
      },
      {
        heading: 'Nach dem Besitz, nicht nach dem Besitzer',
        body:
          'son und sa richten sich nach dem grammatischen Geschlecht des Nomens: son père = sein oder ihr Vater, ' +
          'sa mère = seine oder ihre Mutter. Wem etwas gehört, sagt erst der Zusammenhang.',
        examples: [
          { target: 'Marie aime son frère.', de: 'Marie liebt ihren Bruder.' },
          { target: 'Paul lave sa voiture.', de: 'Paul wäscht sein Auto.' },
        ],
      },
      {
        heading: 'mon amie – vor Vokal',
        body:
          'Vor einem weiblichen Wort mit Vokal oder stummem h steht mon, ton, son statt ma, ta, sa – nur damit es ' +
          'sich besser sprechen lässt. Das Wort bleibt trotzdem weiblich.',
        examples: [
          { target: 'mon amie', de: 'meine Freundin' },
          { target: 'son école', de: 'seine / ihre Schule' },
          { target: 'ton histoire', de: 'deine Geschichte' },
        ],
      },
    ],
  },
  {
    id: 'fragen',
    icon: 'question',
    title: 'Fragen & Verneinung',
    level: 'A1',
    intro: 'Drei Wege zu fragen – und zwei Wörter, die das Verb in die Zange nehmen.',
    sections: [
      {
        heading: 'Drei Arten zu fragen',
        body:
          '1. Nur mit der Stimme (Alltag): Tu viens ? 2. Mit est-ce que vor dem normalen Satz: Est-ce que tu viens ? ' +
          '3. Mit Umstellung, der Inversion (gehoben, schriftlich): Viens-tu ? Bei il/elle schiebt man zwischen zwei ' +
          'Vokale ein -t- ein: Parle-t-il français ?',
        examples: [
          { target: 'Tu as faim ?', de: 'Hast du Hunger?' },
          { target: "Est-ce qu'il travaille aujourd'hui ?", de: 'Arbeitet er heute?' },
          { target: 'Avez-vous une chambre libre ?', de: 'Haben Sie ein Zimmer frei?' },
        ],
      },
      {
        heading: 'Fragewörter',
        body:
          'qui (wer), que / quoi (was), où (wo, wohin), quand (wann), comment (wie), pourquoi (warum), combien ' +
          '(wie viel). que steht vorn (Qu\'est-ce que tu fais ?), quoi am Ende oder nach Präposition (Tu fais quoi ? ' +
          'De quoi tu parles ?).',
        examples: [
          { target: "Où est-ce que tu habites ?", de: 'Wo wohnst du?' },
          { target: 'Tu fais quoi ce soir ?', de: 'Was machst du heute Abend?' },
          { target: 'Combien ça coûte ?', de: 'Wie viel kostet das?' },
        ],
      },
      {
        heading: 'Verneinung: ne … pas',
        body:
          'ne steht vor dem konjugierten Verb, pas dahinter; vor Vokal wird ne zu n\'. Genauso: ne … jamais (nie), ' +
          'ne … rien (nichts), ne … plus (nicht mehr). Nach der Verneinung wird un/une/des zu de: je n\'ai pas de ' +
          'voiture. Im gesprochenen Französisch fällt ne oft weg: je sais pas.',
        examples: [
          { target: 'Je ne parle pas allemand.', de: 'Ich spreche kein Deutsch.' },
          { target: "Il n'a jamais le temps.", de: 'Er hat nie Zeit.' },
          { target: 'Je ne mange plus de viande.', de: 'Ich esse kein Fleisch mehr.' },
        ],
      },
    ],
  },
  {
    id: 'adjektive',
    icon: 'palette',
    title: 'Adjektive',
    level: 'A1',
    intro: 'Adjektive passen sich an – und stehen meistens hinter dem Nomen.',
    sections: [
      {
        heading: 'Angleichung',
        body:
          'Weiblich + -e, Plural + -s: grand, grande, grands, grandes. Endet das Adjektiv schon auf -e, bleibt die ' +
          'weibliche Form gleich: jeune, rouge. Häufige Sonderformen: -eux → -euse (heureuse), -if → -ive ' +
          '(sportive), -on → -onne (bonne). Das -e macht oft den Endkonsonanten hörbar: petit „peti", petite „petit".',
        examples: [
          { target: 'un ami content, une amie contente', de: 'ein zufriedener Freund, eine zufriedene Freundin' },
          { target: 'des livres intéressants', de: 'interessante Bücher' },
        ],
      },
      {
        heading: 'Normalerweise nach dem Nomen',
        body: 'Farben, Nationalitäten, Formen und die allermeisten anderen Adjektive stehen hinter dem Nomen.',
        examples: [
          { target: 'une voiture rouge', de: 'ein rotes Auto' },
          { target: 'un film français', de: 'ein französischer Film' },
          { target: 'une question difficile', de: 'eine schwierige Frage' },
        ],
      },
      {
        heading: 'Kurze Adjektive davor',
        body:
          'Eine kleine Gruppe kurzer, häufiger Adjektive steht vor dem Nomen: petit, grand, beau, joli, bon, ' +
          'mauvais, jeune, vieux, nouveau, gros. beau, nouveau und vieux haben vor Vokal eine eigene Form: ' +
          'un bel homme, un nouvel ami, un vieil hôtel (weiblich: belle, nouvelle, vieille).',
        examples: [
          { target: 'un petit appartement', de: 'eine kleine Wohnung' },
          { target: 'une jolie maison', de: 'ein hübsches Haus' },
          { target: 'un bel endroit', de: 'ein schöner Ort' },
        ],
      },
    ],
  },
  {
    id: 'reflexiv',
    icon: 'mirror',
    title: 'Reflexive (pronominale) Verben',
    level: 'A1',
    intro: 'Viele Alltagsverben bringen ihr eigenes Pronomen mit – oft auch da, wo das Deutsche keins hat.',
    sections: [
      {
        heading: 'Die Formen',
        body:
          'je me, tu te, il/elle se, nous nous, vous vous, ils/elles se – vor Vokal m\', t\', s\'. Das wichtigste ' +
          'Beispiel: je m\'appelle, tu t\'appelles, il s\'appelle, nous nous appelons, vous vous appelez, ils ' +
          's\'appellent (ll bei betonter Endung, l bei nous/vous).',
        examples: [
          { target: "Je m'appelle Lena.", de: 'Ich heiße Lena.' },
          { target: "Comment tu t'appelles ?", de: 'Wie heißt du?' },
          { target: 'Nous nous levons à sept heures.', de: 'Wir stehen um sieben auf.' },
        ],
      },
      {
        heading: 'Häufige Verben',
        body:
          'se lever (aufstehen), se coucher (ins Bett gehen), se réveiller (aufwachen), s\'habiller (sich anziehen), ' +
          'se promener (spazieren gehen), se dépêcher (sich beeilen), s\'amuser (Spaß haben), se souvenir de (sich ' +
          'erinnern an). Mit nous/vous/se drücken sie auch „einander" aus: on se voit = wir sehen uns.',
        examples: [
          { target: 'Je me réveille tôt.', de: 'Ich wache früh auf.' },
          { target: 'On se voit demain ?', de: 'Sehen wir uns morgen?' },
        ],
      },
      {
        heading: 'Verneinung',
        body:
          'ne … pas umschließt Pronomen und Verb zusammen: je ne m\'appelle pas, il ne se lève pas. Das Pronomen ' +
          'bleibt immer direkt vor dem Verb.',
        examples: [
          { target: 'Je ne m\'appelle pas Paul.', de: 'Ich heiße nicht Paul.' },
          { target: 'Elle ne se couche jamais avant minuit.', de: 'Sie geht nie vor Mitternacht ins Bett.' },
        ],
      },
    ],
  },
  {
    id: 'passe-compose',
    icon: 'back',
    title: 'Passé composé',
    level: 'A2',
    intro: 'Die Vergangenheit für Erlebtes und Erledigtes – gebildet mit avoir oder être.',
    sections: [
      {
        heading: 'Bildung & Partizip',
        body:
          'avoir oder être im Präsens + Partizip. -er → -é (parlé), -ir → -i (fini, dormi), viele andere → -u ' +
          '(vendu, attendu, voulu, pu). Unregelmäßig: faire → fait, dire → dit, prendre → pris, mettre → mis, ' +
          'voir → vu, avoir → eu, être → été, écrire → écrit, boire → bu, lire → lu, ouvrir → ouvert.',
        examples: [
          { target: "J'ai mangé une pizza.", de: 'Ich habe eine Pizza gegessen.' },
          { target: 'Tu as vu le film ?', de: 'Hast du den Film gesehen?' },
          { target: 'Nous avons fait les courses.', de: 'Wir haben eingekauft.' },
        ],
      },
      {
        heading: 'avoir – der Normalfall',
        body:
          'Die allermeisten Verben nehmen avoir, auch être und avoir selbst: j\'ai été, j\'ai eu. Das Partizip ' +
          'bleibt dann unverändert: elle a mangé, ils ont parlé. Die Verneinung umschließt nur das Hilfsverb: ' +
          'je n\'ai pas compris.',
        examples: [
          { target: 'Elle a fini son travail.', de: 'Sie hat ihre Arbeit beendet.' },
          { target: "Je n'ai pas compris.", de: 'Ich habe nicht verstanden.' },
        ],
      },
      {
        heading: 'être – eine feste Liste',
        body:
          'Mit être bildet nur eine kleine Gruppe von Verben der Bewegung und Veränderung das passé composé: aller, ' +
          'venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, devenir, ' +
          'retourner, passer – dazu ihre Ableitungen wie revenir, rentrer (Merkwort: „DR MRS VANDERTRAMP") und alle ' +
          'reflexiven Verben (je me suis levé). Bei être richtet sich das Partizip nach dem Subjekt wie ein Adjektiv: ' +
          'elle est allée, ils sont partis, elles sont arrivées. Achtung: anders als im Deutschen „sind" ' +
          'voyager, courir oder marcher mit avoir: j\'ai voyagé.',
        examples: [
          { target: 'Elle est allée à Paris.', de: 'Sie ist nach Paris gefahren.' },
          { target: 'Nous sommes rentrés tard.', de: 'Wir sind spät nach Hause gekommen.' },
          { target: 'Il est né en 1990.', de: 'Er ist 1990 geboren.' },
        ],
      },
    ],
  },
  {
    id: 'imparfait',
    icon: 'clock',
    title: 'Imparfait – und welche Vergangenheit wann?',
    level: 'A2',
    intro: 'Die zweite Vergangenheit: für Gewohnheiten, Beschreibungen und alles im Hintergrund.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Man nimmt die nous-Form des Präsens, streicht -ons und hängt -ais, -ais, -ait, -ions, -iez, -aient an: ' +
          'nous parlons → je parlais, nous finissons → je finissais, nous faisons → je faisais. Einzige Ausnahme: ' +
          'être → j\'étais. -ais, -ait und -aient klingen gleich.',
        examples: [
          { target: "Quand j'étais petit, j'habitais à Lyon.", de: 'Als ich klein war, wohnte ich in Lyon.' },
          { target: 'Nous finissions toujours tard.', de: 'Wir hörten immer spät auf.' },
        ],
      },
      {
        heading: 'Wofür?',
        body:
          'Für Gewohnheiten (früher immer wieder), für Beschreibungen (Wetter, Aussehen, Gefühle, Uhrzeit, Alter) ' +
          'und für Handlungen, die gerade im Gange waren. Typische Signale: d\'habitude, souvent, toujours, tous ' +
          'les jours, autrefois.',
        examples: [
          { target: 'Tous les étés, nous allions à la mer.', de: 'Jeden Sommer fuhren wir ans Meer.' },
          { target: 'Il faisait beau et je me sentais bien.', de: 'Das Wetter war schön und ich fühlte mich gut.' },
        ],
      },
      {
        heading: 'Imparfait oder passé composé?',
        body:
          'passé composé = ein abgeschlossenes, einmaliges Ereignis, das die Geschichte voranbringt (Was ist ' +
          'passiert?). imparfait = Kulisse und Zustand (Wie war es?). Oft steht beides in einem Satz: der Hintergrund ' +
          'im imparfait, das plötzliche Ereignis im passé composé.',
        examples: [
          { target: 'Je regardais la télé quand le téléphone a sonné.', de: 'Ich sah fern, als das Telefon klingelte.' },
          { target: "Hier, j'ai vu Marie. Elle était fatiguée.", de: 'Gestern habe ich Marie gesehen. Sie war müde.' },
          { target: 'Il pleuvait, alors nous sommes restés à la maison.', de: 'Es regnete, also sind wir zu Hause geblieben.' },
        ],
      },
    ],
  },
  {
    id: 'futur',
    icon: 'wand',
    title: 'Futur simple',
    level: 'A2',
    intro: 'Die Zukunft in einem Wort – für Vorhersagen, Versprechen und fernere Pläne.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Infinitiv + -ai, -as, -a, -ons, -ez, -ont (fast wie avoir im Präsens). Bei -re-Verben fällt das ' +
          'End-e weg: prendre → je prendrai. parler → je parlerai, finir → tu finiras, vendre → il vendra.',
        examples: [
          { target: 'Je parlerai avec lui demain.', de: 'Ich werde morgen mit ihm sprechen.' },
          { target: 'Nous partirons à huit heures.', de: 'Wir werden um acht abfahren.' },
          { target: 'Vous prendrez le train ?', de: 'Werden Sie den Zug nehmen?' },
        ],
      },
      {
        heading: 'Unregelmäßige Stämme',
        body:
          'Die Endungen bleiben, nur der Stamm ändert sich: être → ser-, avoir → aur-, aller → ir-, faire → fer-, ' +
          'pouvoir → pourr-, vouloir → voudr-, venir → viendr-, voir → verr-, savoir → saur-, devoir → devr-, ' +
          'falloir → il faudra.',
        examples: [
          { target: 'Je serai là à midi.', de: 'Ich werde mittags da sein.' },
          { target: 'Demain, il fera beau.', de: 'Morgen wird es schön.' },
          { target: 'On verra.', de: 'Mal sehen.' },
        ],
      },
      {
        heading: 'Nach quand: Futur!',
        body:
          'Wenn quand (wenn, sobald) sich auf die Zukunft bezieht, steht im Französischen auch im Nebensatz das ' +
          'Futur – im Deutschen sagt man Präsens. Für nahe, schon feste Pläne nimmt man im Alltag meist das ' +
          'futur proche.',
        examples: [
          { target: "Quand j'aurai le temps, je t'appellerai.", de: 'Wenn ich Zeit habe, rufe ich dich an.' },
          { target: 'Quand tu seras grand, tu comprendras.', de: 'Wenn du groß bist, wirst du es verstehen.' },
        ],
      },
    ],
  },
  {
    id: 'futur-proche',
    icon: 'rocket',
    title: 'Futur proche (aller + Infinitiv)',
    level: 'A2',
    intro: 'Die Zukunft, die man im Alltag am meisten hört – und die man sofort kann.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'aller im Präsens (je vais, tu vas, il va, nous allons, vous allez, ils vont) + Infinitiv. Es entspricht ' +
          'dem deutschen „gleich / vorhaben zu" oder dem englischen „going to".',
        examples: [
          { target: 'Je vais manger.', de: 'Ich esse gleich. / Ich werde essen.' },
          { target: 'Ils vont partir demain.', de: 'Sie fahren morgen ab.' },
          { target: 'Il va pleuvoir.', de: 'Es wird regnen.' },
        ],
      },
      {
        heading: 'Verneinung & Pronomen',
        body:
          'ne … pas umschließt aller. Objekt- und Reflexivpronomen gehören aber zum Infinitiv und stehen direkt ' +
          'davor: je vais le faire, tu vas te coucher.',
        examples: [
          { target: 'Je ne vais pas sortir ce soir.', de: 'Ich gehe heute Abend nicht aus.' },
          { target: "Je vais l'appeler.", de: 'Ich rufe ihn/sie gleich an.' },
        ],
      },
      {
        heading: 'Futur proche oder futur simple?',
        body:
          'Im Gespräch nimmt man für Geplantes und Absehbares fast immer das futur proche. Das futur simple klingt ' +
          'etwas förmlicher und ferner – für Vorhersagen, Versprechen, Texte und nach quand. Oft geht beides. ' +
          'Das Gegenstück in die Vergangenheit: venir de + Infinitiv = gerade etwas getan haben.',
        examples: [
          { target: 'Attention, tu vas tomber !', de: 'Pass auf, du fällst gleich!' },
          { target: 'Un jour, je visiterai le Japon.', de: 'Eines Tages werde ich Japan besuchen.' },
          { target: 'Je viens de manger.', de: 'Ich habe gerade gegessen.' },
        ],
      },
    ],
  },
  {
    id: 'objektpronomen',
    icon: 'target',
    title: 'Objektpronomen (le, la, lui, leur …)',
    level: 'A2',
    intro: 'Ihn, sie, ihm, ihnen – und fast immer vor dem Verb.',
    sections: [
      {
        heading: 'Direkte Objekte (wen? was?)',
        body:
          'me, te, le, la, nous, vous, les – vor Vokal m\', t\', l\'. le und la stehen für Personen und Sachen. ' +
          'Achtung: Manche Verben sind anders als im Deutschen direkt: aider qn (je l\'aide = ich helfe ihm), ' +
          'écouter qn, attendre qn.',
        examples: [
          { target: 'Tu vois Marie ? – Oui, je la vois.', de: 'Siehst du Marie? – Ja, ich sehe sie.' },
          { target: "Le film ? Je l'ai déjà vu.", de: 'Der Film? Den habe ich schon gesehen.' },
          { target: 'Il nous invite.', de: 'Er lädt uns ein.' },
        ],
      },
      {
        heading: 'Indirekte Objekte (wem?)',
        body:
          'me, te, lui, nous, vous, leur – für Personen nach à: parler à, dire à, donner à, écrire à, téléphoner à. ' +
          'lui heißt „ihm" und „ihr", leur (ohne -s) „ihnen". Auch hier weicht das Deutsche ab: téléphoner à qn → ' +
          'je lui téléphone (ich rufe ihn an).',
        examples: [
          { target: 'Je lui parle.', de: 'Ich spreche mit ihm / ihr.' },
          { target: 'Je leur écris une lettre.', de: 'Ich schreibe ihnen einen Brief.' },
        ],
      },
      {
        heading: 'Stellung: vor dem Verb',
        body:
          'Das Pronomen steht vor dem konjugierten Verb – auch in der Verneinung (je ne le vois pas) und im passé ' +
          'composé vor dem Hilfsverb (je l\'ai vu). Mit Infinitiv steht es vor dem Infinitiv: je veux le voir. ' +
          'Anders als im Italienischen oder Spanischen wird es nie an Infinitiv oder Verb angehängt – einzige ' +
          'Ausnahme ist der bejahte Imperativ: regarde-le !',
        examples: [
          { target: 'Je ne le connais pas.', de: 'Ich kenne ihn nicht.' },
          { target: 'Je vais lui dire.', de: 'Ich werde es ihm/ihr sagen.' },
          { target: 'Prends-la !', de: 'Nimm sie!' },
        ],
      },
    ],
  },
  {
    id: 'imperativ',
    icon: 'megaphone',
    title: 'Impératif',
    level: 'A2',
    intro: 'Bitten, Tipps und Befehle – aus dem Präsens, nur ohne Pronomen.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Drei Formen: tu, nous, vous – einfach die Präsensform ohne Subjekt. Bei -er-Verben (und aller) verliert ' +
          'die tu-Form ihr -s: tu parles → parle !, tu vas → va ! Andere Verben behalten es: finis !, prends ! ' +
          'Vor y und en kommt das -s zurück: vas-y !',
        examples: [
          { target: 'Parle plus lentement !', de: 'Sprich langsamer!' },
          { target: 'Allons au cinéma !', de: 'Lass uns ins Kino gehen!' },
          { target: 'Prenez la première rue à droite.', de: 'Nehmen Sie die erste Straße rechts.' },
        ],
      },
      {
        heading: 'Unregelmäßige Formen',
        body:
          'être → sois, soyons, soyez; avoir → aie, ayons, ayez; savoir → sache, sachons, sachez; vouloir → ' +
          'veuillez (sehr höflich, z. B. auf Schildern und in Briefen).',
        examples: [
          { target: 'Sois sage !', de: 'Sei brav!' },
          { target: "N'ayez pas peur !", de: 'Haben Sie keine Angst!' },
          { target: 'Veuillez patienter.', de: 'Bitte warten Sie.' },
        ],
      },
      {
        heading: 'Pronomen: bejaht dahinter, verneint davor',
        body:
          'Im bejahten Imperativ hängt das Pronomen mit Bindestrich hinter dem Verb, aus me und te werden moi und ' +
          'toi: dis-le !, donne-moi le sel, lève-toi ! Im verneinten Imperativ bleibt alles wie gewohnt vor dem ' +
          'Verb: ne le dis pas !, ne te lève pas !',
        examples: [
          { target: 'Dis-le ! / Ne le dis pas !', de: 'Sag es! / Sag es nicht!' },
          { target: 'Assieds-toi !', de: 'Setz dich!' },
          { target: 'Ne me regarde pas comme ça !', de: 'Schau mich nicht so an!' },
        ],
      },
    ],
  },
  {
    id: 'vergleiche',
    icon: 'ruler',
    title: 'Komparativ & Superlativ',
    level: 'A2',
    intro: 'Größer, kleiner, am besten – alles mit plus, moins und aussi.',
    sections: [
      {
        heading: 'Komparativ',
        body:
          'plus … que (mehr / -er als), moins … que (weniger … als), aussi … que (genauso … wie). Das Adjektiv ' +
          'wird wie immer angeglichen. Bei Nomen: plus de, moins de, autant de … que.',
        examples: [
          { target: 'Paris est plus grand que Lyon.', de: 'Paris ist größer als Lyon.' },
          { target: 'Elle est aussi sympa que son frère.', de: 'Sie ist genauso nett wie ihr Bruder.' },
          { target: "J'ai moins de temps que toi.", de: 'Ich habe weniger Zeit als du.' },
        ],
      },
      {
        heading: 'Superlativ',
        body:
          'le / la / les plus (oder moins) + Adjektiv. Steht das Adjektiv hinter dem Nomen, kommt der Artikel ' +
          'zweimal: le film le plus intéressant. „In / von" heißt beim Superlativ de: le plus grand du monde.',
        examples: [
          { target: "C'est la plus belle ville du monde.", de: 'Das ist die schönste Stadt der Welt.' },
          { target: "C'est le film le plus drôle de l'année.", de: 'Das ist der lustigste Film des Jahres.' },
        ],
      },
      {
        heading: 'bon / bien: meilleur und mieux',
        body:
          'bon (Adjektiv, „gut") → meilleur → le meilleur. bien (Adverb, „gut" beim Verb) → mieux → le mieux. ' +
          '„plus bon" gibt es nicht. mauvais → plus mauvais oder pire (le pire).',
        examples: [
          { target: "Ce gâteau est meilleur que l'autre.", de: 'Dieser Kuchen ist besser als der andere.' },
          { target: 'Elle chante mieux que moi.', de: 'Sie singt besser als ich.' },
          { target: "C'est le pire jour de ma vie.", de: 'Das ist der schlimmste Tag meines Lebens.' },
        ],
      },
    ],
  },
  {
    id: 'depuis-pendant',
    icon: 'hourglass',
    title: 'Depuis, pendant, il y a (Zeitangaben)',
    level: 'B1',
    intro: 'Seit, während, vor – drei Zeitangaben mit jeweils eigenen Regeln für die Zeitform.',
    sections: [
      {
        heading: 'depuis + Präsens',
        body:
          'Was in der Vergangenheit angefangen hat und noch andauert, steht mit depuis im Präsens – genau wie im ' +
          'Deutschen („ich wohne seit drei Jahren hier"). Wer Englisch im Kopf hat („I have lived"), greift gern zum ' +
          'passé composé – das ist der klassische Fehler. depuis geht mit Zeitraum (depuis trois ans) und Zeitpunkt ' +
          '(depuis 2020). Gleichbedeutend: ça fait / il y a + Zeitraum + que.',
        examples: [
          { target: "J'habite à Paris depuis trois ans.", de: 'Ich wohne seit drei Jahren in Paris.' },
          { target: "Je t'attends depuis une heure !", de: 'Ich warte seit einer Stunde auf dich!' },
          { target: "Ça fait deux ans que j'apprends le français.", de: 'Ich lerne seit zwei Jahren Französisch.' },
        ],
      },
      {
        heading: 'Achtung bei der Verneinung',
        body:
          'Wird etwas seit einer Weile nicht mehr getan, steht nach depuis meist das passé composé: Gemeint ist ' +
          'das letzte Mal, und das liegt abgeschlossen in der Vergangenheit.',
        examples: [
          { target: "Je ne l'ai pas vu depuis des mois.", de: 'Ich habe ihn seit Monaten nicht gesehen.' },
          { target: "Il n'a pas plu depuis trois semaines.", de: 'Es hat seit drei Wochen nicht geregnet.' },
        ],
      },
      {
        heading: 'pendant = während, lang',
        body:
          'pendant gibt die Dauer einer abgeschlossenen (oder geplanten) Handlung an, deren Ende feststeht – meist ' +
          'mit passé composé oder Futur. Bei Zeiträumen kann man pendant oft weglassen: j\'ai dormi huit heures. ' +
          'Mit Nomen heißt es „während": pendant les vacances.',
        examples: [
          { target: "J'ai vécu à Rome pendant deux ans.", de: 'Ich habe zwei Jahre lang in Rom gelebt.' },
          { target: 'Pendant les vacances, je lis beaucoup.', de: 'In den Ferien lese ich viel.' },
        ],
      },
      {
        heading: 'il y a = vor',
        body:
          'il y a + Zeitraum heißt „vor" im zeitlichen Sinn und steht mit einer Vergangenheitsform. Nicht ' +
          'verwechseln mit avant (vor einem Zeitpunkt: avant lundi) und devant (räumlich: devant la porte).',
        examples: [
          { target: 'Je suis arrivé il y a deux jours.', de: 'Ich bin vor zwei Tagen angekommen.' },
          { target: "Il y a dix ans, j'habitais à Munich.", de: 'Vor zehn Jahren wohnte ich in München.' },
        ],
      },
    ],
  },
  {
    id: 'conditionnel',
    icon: 'brain',
    title: 'Conditionnel (würde, hätte, könnte)',
    level: 'B1',
    intro: 'Für Höflichkeit, Wünsche, Ratschläge und Gedankenspiele.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Stamm des futur simple + Endungen des imparfait: -ais, -ais, -ait, -ions, -iez, -aient. parler → je ' +
          'parlerais, finir → tu finirais, prendre → il prendrait. Die unregelmäßigen Stämme sind dieselben wie im ' +
          'Futur: serais, aurais, irais, ferais, pourrais, voudrais, devrais, viendrais, verrais, saurais, il ' +
          'faudrait. Vorsicht: je parlerai (Futur) und je parlerais klingen fast gleich.',
        examples: [
          { target: "J'aimerais voyager en Australie.", de: 'Ich würde gern nach Australien reisen.' },
          { target: 'Nous pourrions partir demain.', de: 'Wir könnten morgen fahren.' },
        ],
      },
      {
        heading: 'Höflichkeit',
        body:
          'Mit dem conditionnel klingen Bitten und Wünsche viel weicher als im Präsens: je voudrais statt je veux, ' +
          'pourriez-vous statt pouvez-vous. Im Café, am Telefon und in E-Mails ist das der Normalton.',
        examples: [
          { target: "Je voudrais un café, s'il vous plaît.", de: 'Ich hätte gern einen Kaffee, bitte.' },
          { target: "Pourriez-vous m'aider ?", de: 'Könnten Sie mir helfen?' },
          { target: 'Tu aurais une minute ?', de: 'Hättest du eine Minute?' },
        ],
      },
      {
        heading: 'Ratschläge, Vermutungen, Hypothesen',
        body:
          'tu devrais (du solltest), il vaudrait mieux (es wäre besser), à ta place, je … (an deiner Stelle würde ' +
          'ich …). In Nachrichten markiert es Unbestätigtes: le ministre serait malade (soll krank sein). Und es ' +
          'ist die Folge im irrealen Bedingungssatz – nach si selbst steht es aber nie: Si j\'avais le temps, ' +
          'je viendrais.',
        examples: [
          { target: 'Tu devrais dormir plus.', de: 'Du solltest mehr schlafen.' },
          { target: 'À ta place, je partirais.', de: 'An deiner Stelle würde ich fahren.' },
          { target: "Si j'étais riche, j'achèterais une maison.", de: 'Wenn ich reich wäre, würde ich ein Haus kaufen.' },
        ],
      },
    ],
  },
  {
    id: 'subjonctif',
    icon: 'thought',
    title: 'Subjonctif présent',
    level: 'B1',
    intro: 'Die Möglichkeitsform für Wille, Notwendigkeit, Gefühl und Zweifel – fast immer nach que.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'Man nimmt die ils-Form des Präsens, streicht -ent und hängt -e, -es, -e, -ions, -iez, -ent an: ' +
          'ils parlent → que je parle; ils finissent → que je finisse; ils prennent → que je prenne. nous und vous ' +
          'nehmen den nous-Stamm, sehen also aus wie das imparfait: que nous prenions, que vous veniez (aber que je ' +
          'vienne).',
        examples: [
          { target: 'Il faut que tu finisses ce travail.', de: 'Du musst diese Arbeit fertig machen.' },
          { target: 'Je veux que vous preniez le train.', de: 'Ich will, dass ihr den Zug nehmt.' },
        ],
      },
      {
        heading: 'Unregelmäßige Formen',
        body:
          'être → que je sois, tu sois, il soit, nous soyons, vous soyez, ils soient; avoir → que j\'aie, tu aies, ' +
          'il ait, nous ayons, vous ayez, ils aient; faire → fasse; pouvoir → puisse; savoir → sache; aller → aille ' +
          '(nous allions); vouloir → veuille (nous voulions); falloir → qu\'il faille.',
        examples: [
          { target: "Il faut que je sois à l'heure.", de: 'Ich muss pünktlich sein.' },
          { target: "Je doute qu'il puisse venir.", de: 'Ich bezweifle, dass er kommen kann.' },
        ],
      },
      {
        heading: 'Wann subjonctif?',
        body:
          'Nach que bei Wille und Wunsch (vouloir que, aimer que, préférer que), Notwendigkeit (il faut que, il est ' +
          'important que), Gefühl (être content que, avoir peur que, regretter que) und Zweifel (douter que, je ne ' +
          'pense pas que). Außerdem nach den Konjunktionen avant que (bevor), bien que (obwohl), pour que (damit), ' +
          'à condition que (unter der Bedingung, dass), sans que (ohne dass).',
        examples: [
          { target: 'Je veux que tu viennes.', de: 'Ich will, dass du kommst.' },
          { target: "Bien qu'il pleuve, nous sortons.", de: 'Obwohl es regnet, gehen wir raus.' },
          { target: 'Je suis contente que tu sois là.', de: 'Ich freue mich, dass du da bist.' },
        ],
      },
      {
        heading: 'Wann nicht?',
        body:
          'Bei Gewissheit und bejahter Meinung steht der Indikativ: je sais que, je suis sûr que, je pense que, je ' +
          'crois que. Die klassische Falle: espérer que nimmt den Indikativ, obwohl es ein Wunsch ist. Bei gleichem ' +
          'Subjekt nimmt man den Infinitiv: je veux partir (nicht: je veux que je parte), avant de partir.',
        examples: [
          { target: "J'espère que tu vas bien.", de: 'Ich hoffe, es geht dir gut.' },
          { target: "Je pense qu'elle a raison.", de: 'Ich denke, sie hat recht.' },
          { target: "Je ne pense pas qu'elle ait raison.", de: 'Ich glaube nicht, dass sie recht hat.' },
        ],
      },
    ],
  },
  {
    id: 'y-en',
    icon: 'puzzle',
    title: 'Die Pronomen y und en',
    level: 'B1',
    intro: 'Zwei kleine Wörter ohne deutsches Gegenstück – im Alltag hört man sie ständig.',
    sections: [
      {
        heading: 'y = dort, dahin, daran',
        body:
          'y ersetzt einen Ort (mit à, en, dans, chez …) und à + Sache: penser à qc → j\'y pense, ' +
          'répondre à une lettre → j\'y réponds. Bei Personen nimmt man stattdessen lui/leur oder à lui: je pense ' +
          'à lui.',
        examples: [
          { target: "Tu vas à Paris ? – Oui, j'y vais demain.", de: 'Fährst du nach Paris? – Ja, ich fahre morgen hin.' },
          { target: "Ton examen ? J'y pense tout le temps.", de: 'Deine Prüfung? Daran denke ich die ganze Zeit.' },
          { target: 'On y va ?', de: 'Gehen wir?' },
        ],
      },
      {
        heading: 'en = davon, welche',
        body:
          'en ersetzt de + Sache (parler de, avoir besoin de, revenir de + Ort), Teilungsartikel (du, de la, des) ' +
          'und Mengen. Eine Zahl oder Mengenangabe bleibt dabei stehen: j\'en ai deux, j\'en veux un peu.',
        examples: [
          { target: "Tu as des frères ? – Oui, j'en ai deux.", de: 'Hast du Brüder? – Ja, ich habe zwei.' },
          { target: "Du pain ? J'en prends un peu.", de: 'Brot? Ich nehme ein bisschen.' },
          { target: 'Il parle de son voyage ? – Oui, il en parle.', de: 'Spricht er von seiner Reise? – Ja, er spricht davon.' },
        ],
      },
      {
        heading: 'Stellung',
        body:
          'Wie alle Objektpronomen vor dem konjugierten Verb (oder vor dem Infinitiv); en steht dabei immer ganz ' +
          'hinten: il y en a. Im bejahten Imperativ dahinter: vas-y !, prends-en ! Feste Ausdrücke: il y a, ' +
          'ça y est (geschafft), je m\'en vais (ich gehe), j\'en ai marre (ich hab die Nase voll).',
        examples: [
          { target: "Je n'y vais pas.", de: 'Ich gehe nicht hin.' },
          { target: 'Il y en a trois.', de: 'Es gibt drei davon.' },
          { target: 'Vas-y !', de: 'Los, mach!' },
        ],
      },
    ],
  },
  {
    id: 'relativ',
    icon: 'link',
    title: 'Relativpronomen (qui, que, où, dont)',
    level: 'B1',
    intro: 'Der, die, das, wo, dessen – vier kleine Wörter verbinden Sätze.',
    sections: [
      {
        heading: 'qui und que',
        body:
          'qui ist Subjekt des Relativsatzes – danach folgt meist direkt das Verb. que ist direktes Objekt – danach ' +
          'folgt ein eigenes Subjekt. Beide gelten für Personen und Sachen. que wird vor Vokal zu qu\', qui nie.',
        examples: [
          { target: "L'homme qui parle est mon voisin.", de: 'Der Mann, der spricht, ist mein Nachbar.' },
          { target: 'Le livre que je lis est passionnant.', de: 'Das Buch, das ich lese, ist spannend.' },
          { target: "C'est le film qu'on cherchait.", de: 'Das ist der Film, den wir gesucht haben.' },
        ],
      },
      {
        heading: 'où – Ort und Zeit',
        body:
          'où steht für Orte (wo, in dem) und auch für Zeitpunkte: le jour où (der Tag, an dem), l\'année où, le ' +
          'moment où. Hier also nicht quand!',
        examples: [
          { target: "La ville où j'habite est petite.", de: 'Die Stadt, in der ich wohne, ist klein.' },
          { target: 'Le jour où je suis né, il neigeait.', de: 'An dem Tag, an dem ich geboren wurde, schneite es.' },
        ],
      },
      {
        heading: 'dont – ersetzt de + …',
        body:
          'dont steht für alles, was mit de angeschlossen wird: parler de, avoir besoin de, se souvenir de, être ' +
          'fier de. Und es drückt Besitz aus: „dessen", „deren".',
        examples: [
          { target: "C'est le film dont je t'ai parlé.", de: 'Das ist der Film, von dem ich dir erzählt habe.' },
          { target: "Voilà l'outil dont j'ai besoin.", de: 'Da ist das Werkzeug, das ich brauche.' },
          { target: 'Mon amie, dont le frère habite à Rome, …', de: 'Meine Freundin, deren Bruder in Rom wohnt, …' },
        ],
      },
      {
        heading: 'ce qui, ce que – „was"',
        body:
          'Ohne Bezugswort heißt „was" ce qui (Subjekt) oder ce que (Objekt), entsprechend ce dont. Oft mit ' +
          'tout: tout ce que (alles, was).',
        examples: [
          { target: "Ce qui m'intéresse, c'est l'histoire.", de: 'Was mich interessiert, ist Geschichte.' },
          { target: 'Dis-moi ce que tu veux.', de: 'Sag mir, was du willst.' },
          { target: "C'est tout ce dont j'ai besoin.", de: 'Das ist alles, was ich brauche.' },
        ],
      },
    ],
  },
  {
    id: 'pronoms-doubles',
    icon: 'blocks',
    title: 'Doppelte Objektpronomen',
    level: 'B1',
    intro: 'Zwei Pronomen vor einem Verb – in einer festen Reihenfolge.',
    sections: [
      {
        heading: 'Die Reihenfolge',
        body:
          'me / te / se / nous / vous → le / la / les → lui / leur → y → en. Also: le/la/les stehen hinter ' +
          'me, te, nous, vous, aber vor lui und leur. Vor Vokal werden me, te, le, la zu m\', t\', l\'.',
        examples: [
          { target: 'Il me le donne.', de: 'Er gibt es mir.' },
          { target: 'Je le lui donne.', de: 'Ich gebe es ihm/ihr.' },
          { target: 'Elle nous les montre.', de: 'Sie zeigt sie uns.' },
        ],
      },
      {
        heading: 'Mit y und en',
        body:
          'en steht immer ganz am Ende, y direkt davor: je t\'en donne, il y en a, je lui en ai parlé. ' +
          'Die Kombination y + en kommt praktisch nur in il y en a vor.',
        examples: [
          { target: "Tu m'en donnes un peu ?", de: 'Gibst du mir ein bisschen davon?' },
          { target: "Je vous y emmène.", de: 'Ich bringe Sie hin.' },
          { target: 'Je lui en ai parlé.', de: 'Ich habe mit ihm/ihr darüber gesprochen.' },
        ],
      },
      {
        heading: 'Verneinung, Zeiten, Infinitiv',
        body:
          'Der Pronomenblock bleibt zusammen: im passé composé vor dem Hilfsverb, bei Verneinung zwischen ne und ' +
          'Verb, bei Verb + Infinitiv vor dem Infinitiv.',
        examples: [
          { target: 'Je ne le lui ai pas dit.', de: 'Ich habe es ihm/ihr nicht gesagt.' },
          { target: 'Je vais te le montrer.', de: 'Ich zeige es dir gleich.' },
        ],
      },
      {
        heading: 'Bejahter Imperativ',
        body:
          'Hier stehen die Pronomen hinter dem Verb, mit Bindestrichen und in der Reihenfolge direkt vor indirekt: ' +
          'donne-le-moi, dis-le-lui. Mit en: donne-m\'en. Verneint gilt wieder die normale Reihenfolge: ne me le ' +
          'donne pas.',
        examples: [
          { target: 'Donne-le-moi !', de: 'Gib es mir!' },
          { target: 'Dis-le-lui !', de: 'Sag es ihm/ihr!' },
          { target: 'Ne me le donne pas !', de: 'Gib es mir nicht!' },
        ],
      },
    ],
  },
  {
    id: 'bedingungssaetze',
    icon: 'shuffle',
    title: 'Bedingungssätze mit si',
    level: 'B1',
    intro: 'Wenn … dann – zwei Grundtypen und eine goldene Regel.',
    sections: [
      {
        heading: 'Realer Fall: si + présent',
        body:
          'Was gut passieren kann: si + Präsens, im Hauptsatz Präsens, Futur oder Imperativ. si wird vor il und ' +
          'ils zu s\' (s\'il), vor elle aber nicht.',
        examples: [
          { target: "S'il pleut, je reste à la maison.", de: 'Wenn es regnet, bleibe ich zu Hause.' },
          { target: 'Si tu viens, on ira au cinéma.', de: 'Wenn du kommst, gehen wir ins Kino.' },
          { target: 'Si tu as faim, mange quelque chose !', de: 'Wenn du Hunger hast, iss etwas!' },
        ],
      },
      {
        heading: 'Irrealer Fall: si + imparfait',
        body:
          'Was nur gedacht ist oder gerade nicht zutrifft: si + imparfait, im Hauptsatz conditionnel – das ' +
          'deutsche „wenn ich hätte, würde ich".',
        examples: [
          { target: "Si j'avais le temps, je voyagerais plus.", de: 'Wenn ich Zeit hätte, würde ich mehr reisen.' },
          { target: "Si j'étais toi, je l'appellerais.", de: 'Wenn ich du wäre, würde ich ihn anrufen.' },
          { target: 'Que ferais-tu si tu gagnais au loto ?', de: 'Was würdest du tun, wenn du im Lotto gewinnen würdest?' },
        ],
      },
      {
        heading: 'Die goldene Regel',
        body:
          'Nach si („wenn") stehen nie Futur oder conditionnel – also nie „si j\'aurais". Anders bei si = „ob" in ' +
          'indirekten Fragen: dort ist jede Zeit möglich (je ne sais pas s\'il viendra). Für die Vergangenheit: ' +
          'si + plus-que-parfait, im Hauptsatz conditionnel passé.',
        examples: [
          { target: "Si j'avais su, je serais venu.", de: 'Wenn ich das gewusst hätte, wäre ich gekommen.' },
          { target: "Je ne sais pas s'il viendra.", de: 'Ich weiß nicht, ob er kommt.' },
        ],
      },
    ],
  },
  {
    id: 'plus-que-parfait',
    icon: 'rewind',
    title: 'Plus-que-parfait (Plusquamperfekt)',
    level: 'B1',
    intro: 'Die Vorvergangenheit: was schon vorher passiert war.',
    sections: [
      {
        heading: 'Bildung',
        body:
          'avoir oder être im imparfait + Partizip. Welches Hilfsverb und wann das Partizip angeglichen wird, ' +
          'regelt sich genau wie beim passé composé: j\'avais mangé, tu avais fini, elle était partie, nous nous ' +
          'étions levés.',
        examples: [
          { target: "J'avais déjà mangé.", de: 'Ich hatte schon gegessen.' },
          { target: 'Elle était partie très tôt.', de: 'Sie war sehr früh weggefahren.' },
        ],
      },
      {
        heading: 'Wann?',
        body:
          'Für eine Handlung, die vor einer anderen vergangenen Handlung liegt – oft mit déjà, nach quand, parce ' +
          'que oder in Relativsätzen. Im Deutschen ist es das „hatte / war … gemacht".',
        examples: [
          { target: 'Quand je suis arrivé, le film avait déjà commencé.', de: 'Als ich ankam, hatte der Film schon angefangen.' },
          { target: "Il était fatigué parce qu'il avait mal dormi.", de: 'Er war müde, weil er schlecht geschlafen hatte.' },
          { target: "J'ai perdu le livre que tu m'avais prêté.", de: 'Ich habe das Buch verloren, das du mir geliehen hattest.' },
        ],
      },
      {
        heading: 'Weitere Verwendungen',
        body:
          'In irrealen Bedingungssätzen der Vergangenheit (si + plus-que-parfait), bei Bedauern mit si seulement ' +
          'und in der indirekten Rede, wenn aus dem passé composé eine Vorvergangenheit wird.',
        examples: [
          { target: "Si j'avais su, je ne serais pas venu.", de: 'Hätte ich das gewusst, wäre ich nicht gekommen.' },
          { target: "Si seulement j'avais écouté !", de: 'Hätte ich doch nur zugehört!' },
          { target: "Il m'a dit qu'il avait fini.", de: 'Er hat mir gesagt, dass er fertig war.' },
        ],
      },
    ],
  },
];
