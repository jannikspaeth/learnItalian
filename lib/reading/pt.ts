import type { ReadingText } from './types';

// European Portuguese (pt-PT) reading texts, A1 → A2. Glossaries list only what
// the automatic lookup (catalog, verb forms, common words) can't find. Enclitic
// pronouns (chamo-me, levava-me) are fine: the hyphen splits them into two
// tappable words, and the pronoun resolves on its own.

export const READING_TEXTS: ReadingText[] = [
  // ─── A1 ──────────────────────────────────────────────────────────────────────
  {
    id: 'pt-a1-familia',
    level: 'A1',
    icon: '👨‍👩‍👧',
    title: 'A minha família',
    titleDe: 'Meine Familie',
    paragraphs: [
      'Olá! Chamo-me Inês, tenho vinte e quatro anos e moro em Coimbra. Sou portuguesa, mas o meu pai é alemão. Por isso, em casa falamos português e alemão.',
      'A minha família não é muito grande. O meu pai chama-se Thomas e é engenheiro. A minha mãe, Teresa, é enfermeira no hospital. Tenho um irmão mais novo, o Tiago. Ele tem dezasseis anos e ainda anda na escola.',
      'Também temos uma gata, a Mimi. É pequena, preta e muito preguiçosa. Ao domingo almoçamos sempre em casa dos meus avós, perto de Aveiro. A minha avó faz um bacalhau com natas delicioso!',
    ],
    translation: [
      'Hallo! Ich heiße Inês, bin vierundzwanzig Jahre alt und wohne in Coimbra. Ich bin Portugiesin, aber mein Vater ist Deutscher. Deshalb sprechen wir zu Hause Portugiesisch und Deutsch.',
      'Meine Familie ist nicht sehr groß. Mein Vater heißt Thomas und ist Ingenieur. Meine Mutter, Teresa, ist Krankenschwester im Krankenhaus. Ich habe einen jüngeren Bruder, Tiago. Er ist sechzehn und geht noch zur Schule.',
      'Wir haben auch eine Katze, Mimi. Sie ist klein, schwarz und sehr faul. Sonntags essen wir immer bei meinen Großeltern zu Mittag, in der Nähe von Aveiro. Meine Oma macht einen köstlichen Bacalhau com natas (Stockfisch mit Sahne)!',
    ],
    glossary: {
      inês: 'Inês (Name)', coimbra: 'Coimbra (Universitätsstadt)', thomas: 'Thomas (Name)', teresa: 'Teresa (Name)',
      tiago: 'Tiago (Name)', mimi: 'Mimi (Katzenname)', aveiro: 'Aveiro (Stadt an der Küste)',
      almoçamos: ['wir essen zu Mittag', 'almoçar'], preguiçosa: ['faul', 'preguiçoso'], natas: ['Sahne (bacalhau com natas = Stockfisch-Sahne-Auflauf)', 'nata'],
    },
    questions: [
      { q: 'Onde mora a Inês?', options: ['Em Lisboa', 'Em Coimbra', 'Na Alemanha'], answer: 1 },
      { q: 'Qual é a profissão da mãe?', options: ['É professora', 'É enfermeira', 'É engenheira'], answer: 1 },
      { q: 'Quantos anos tem o Tiago?', options: ['Dezasseis', 'Vinte e quatro', 'Seis'], answer: 0 },
      { q: 'Como é a gata?', options: ['Grande e branca', 'Pequena e preta', 'Velha e cansada'], answer: 1 },
    ],
  },
  {
    id: 'pt-a1-cafe',
    level: 'A1',
    icon: '☕',
    title: 'Na pastelaria',
    titleDe: 'In der Konditorei',
    paragraphs: [
      'Todas as manhãs, antes do trabalho, o Rui vai à pastelaria da esquina. É um café pequeno e antigo, perto da estação de comboios. O dono, o senhor Manuel, conhece todos os clientes.',
      '— Bom dia, Rui! O costume? — pergunta o senhor Manuel. — Sim, uma bica e um pastel de nata, por favor. Hoje também quero uma torrada. O Rui bebe o café ao balcão, de pé, como muitos portugueses.',
      'Os dois falam um pouco sobre futebol e sobre o tempo. Está calor outra vez! Depois o Rui paga: dois euros e sessenta. É barato. — Até amanhã, senhor Manuel! — Até amanhã, Rui. Bom trabalho!',
    ],
    translation: [
      'Jeden Morgen vor der Arbeit geht Rui in die Konditorei an der Ecke. Es ist ein kleines, altes Café in der Nähe des Bahnhofs. Der Besitzer, Herr Manuel, kennt alle Kunden.',
      '„Guten Morgen, Rui! Wie immer?“, fragt Herr Manuel. „Ja, einen Espresso und ein Pastel de nata, bitte. Heute möchte ich auch einen Toast.“ Rui trinkt den Kaffee an der Theke, im Stehen, wie viele Portugiesen.',
      'Die beiden reden ein bisschen über Fußball und über das Wetter. Es ist schon wieder heiß! Dann bezahlt Rui: zwei Euro sechzig. Das ist billig. „Bis morgen, Herr Manuel!“ – „Bis morgen, Rui. Schönen Arbeitstag!“',
    ],
    glossary: {
      rui: 'Rui (Name)', manuel: 'Manuel (Name)', pastelaria: 'Konditorei, Café', esquina: 'Ecke',
      costume: 'Gewohnheit (o costume = wie immer)', bica: 'Espresso (Lissabonner Ausdruck)',
      nata: 'Sahne (pastel de nata = Puddingtörtchen)', torrada: 'Toast (dick, mit Butter)', balcão: 'Theke',
      sessenta: 'sechzig', dono: 'Besitzer', pastel: 'Gebäckstück, Törtchen', portugueses: ['Portugiesen', 'português'],
    },
    questions: [
      { q: 'Onde fica a pastelaria?', options: ['Perto da estação', 'Perto da praia', 'No centro comercial'], answer: 0 },
      { q: 'O que pede o Rui hoje?', options: ['Um galão e um bolo', 'Uma bica, um pastel de nata e uma torrada', 'Um chá e uma sopa'], answer: 1 },
      { q: 'Onde bebe o Rui o café?', options: ['Em casa', 'Na esplanada', 'Ao balcão'], answer: 2 },
      { q: 'Quanto paga o Rui?', options: ['Dois euros e sessenta', 'Seis euros', 'Um euro'], answer: 0 },
    ],
  },
  {
    id: 'pt-a1-dia',
    level: 'A1',
    icon: '⏰',
    title: 'Um dia normal',
    titleDe: 'Ein ganz normaler Tag',
    paragraphs: [
      'A Marta é professora numa escola primária em Braga. Durante a semana, acorda às sete horas. Toma um duche rápido, veste-se e toma o pequeno-almoço: café com leite e pão com manteiga.',
      'Às oito e um quarto apanha o autocarro. As aulas começam às nove. Ao meio-dia almoça na cantina com os colegas. À tarde corrige os trabalhos dos alunos e prepara as aulas do dia seguinte.',
      'Chega a casa por volta das seis. Primeiro descansa um pouco e lê um livro. Depois cozinha o jantar com o namorado. À noite veem uma série na televisão. Às onze, a Marta já está na cama.',
    ],
    translation: [
      'Marta ist Lehrerin an einer Grundschule in Braga. Unter der Woche wacht sie um sieben Uhr auf. Sie duscht schnell, zieht sich an und frühstückt: Milchkaffee und Brot mit Butter.',
      'Um Viertel nach acht nimmt sie den Bus. Der Unterricht beginnt um neun. Mittags isst sie mit den Kollegen in der Kantine. Nachmittags korrigiert sie die Arbeiten der Schüler und bereitet den Unterricht für den nächsten Tag vor.',
      'Gegen sechs kommt sie nach Hause. Zuerst ruht sie sich ein bisschen aus und liest ein Buch. Dann kocht sie mit ihrem Freund das Abendessen. Abends schauen sie eine Serie im Fernsehen. Um elf liegt Marta schon im Bett.',
    ],
    glossary: {
      marta: 'Marta (Name)', braga: 'Braga (Stadt im Norden)', primária: ['Grund- (escola primária = Grundschule)', 'primário'],
      duche: 'Dusche', apanha: ['nimmt (Bus, Zug)', 'apanhar'], almoça: ['isst zu Mittag', 'almoçar'],
      corrige: ['korrigiert', 'corrigir'], toma: ['nimmt (tomar; toma o pequeno-almoço = frühstückt)', 'tomar'], cantina: 'Kantine', seguinte: 'folgend, nächste(r)', volta: 'Runde (por volta de = gegen, ungefähr)',
    },
    questions: [
      { q: 'Onde trabalha a Marta?', options: ['Num hospital', 'Numa escola', 'Num café'], answer: 1 },
      { q: 'Como vai a Marta para o trabalho?', options: ['De autocarro', 'De carro', 'A pé'], answer: 0 },
      { q: 'Onde almoça a Marta?', options: ['Em casa', 'Num restaurante', 'Na cantina'], answer: 2 },
      { q: 'O que faz a Marta à noite com o namorado?', options: ['Vai ao cinema', 'Vê uma série', 'Estuda'], answer: 1 },
    ],
  },

  // ─── A2 ──────────────────────────────────────────────────────────────────────
  {
    id: 'pt-a2-regiao',
    level: 'A2',
    icon: '🍇',
    title: 'Uma semana no Douro',
    titleDe: 'Eine Woche am Douro',
    paragraphs: [
      'No verão passado, eu e o meu marido passámos uma semana no Vale do Douro, no norte de Portugal. Primeiro ficámos dois dias no Porto. Passeámos pela Ribeira, atravessámos a ponte D. Luís a pé e visitámos uma cave de vinho do Porto em Vila Nova de Gaia.',
      'Depois apanhámos o comboio até ao Pinhão. A viagem foi lindíssima: o comboio segue o rio durante quase duas horas, entre montanhas cheias de vinhas. No Pinhão dormimos numa quinta antiga. Os donos foram muito simpáticos e ofereceram-nos um jantar típico com cabrito assado.',
      'Num dos dias fizemos um passeio de barco no rio. Também participámos na vindima: apanhámos uvas com os trabalhadores da quinta. Foi cansativo, mas muito divertido! Gostámos tanto da região que já queremos voltar no próximo ano.',
    ],
    translation: [
      'Letzten Sommer haben mein Mann und ich eine Woche im Douro-Tal im Norden Portugals verbracht. Zuerst waren wir zwei Tage in Porto. Wir sind durch die Ribeira spaziert, zu Fuß über die Brücke Dom Luís gegangen und haben in Vila Nova de Gaia eine Portweinkellerei besichtigt.',
      'Danach haben wir den Zug bis Pinhão genommen. Die Fahrt war wunderschön: Der Zug folgt fast zwei Stunden lang dem Fluss, zwischen Bergen voller Weinreben. In Pinhão haben wir auf einem alten Weingut übernachtet. Die Besitzer waren sehr nett und haben uns ein typisches Abendessen mit Zicklein aus dem Ofen angeboten.',
      'An einem der Tage haben wir eine Bootsfahrt auf dem Fluss gemacht. Wir haben auch bei der Weinlese mitgemacht: Mit den Arbeitern des Weinguts haben wir Trauben gepflückt. Es war anstrengend, aber sehr lustig! Die Gegend hat uns so gut gefallen, dass wir schon nächstes Jahr wiederkommen wollen.',
    ],
    glossary: {
      douro: 'Douro (Fluss in Nordportugal)', vale: 'Tal', ribeira: 'Ribeira (Altstadtviertel am Fluss in Porto)',
      passeámos: ['wir sind spazieren gegangen', 'passear'], atravessámos: ['wir haben überquert', 'atravessar'],
      d: 'Dom (Ehrentitel)', luís: 'Luís (Name eines Königs)', cave: 'Weinkeller, Kellerei', vila: 'Kleinstadt',
      nova: ['neu', 'novo'], gaia: 'Gaia (Vila Nova de Gaia, Stadt gegenüber von Porto)',
      apanhámos: ['wir haben genommen / gepflückt', 'apanhar'], pinhão: 'Pinhão (Dorf am Douro)',
      lindíssima: ['wunderschön', 'lindo'], vinhas: ['Weinreben, Weinberge', 'vinha'],
      quinta: 'Landgut, Weingut', cabrito: 'Zicklein', assado: 'gebraten, aus dem Ofen',
      vindima: 'Weinlese', uvas: ['Trauben', 'uva'], cansativo: 'anstrengend', donos: ['Besitzer (Mz.)', 'dono'], divertido: 'lustig, unterhaltsam',
    },
    questions: [
      { q: 'Onde ficaram primeiro?', options: ['Em Lisboa', 'No Porto', 'No Pinhão'], answer: 1 },
      { q: 'Como viajaram até ao Pinhão?', options: ['De carro', 'De autocarro', 'De comboio'], answer: 2 },
      { q: 'Onde dormiram no Pinhão?', options: ['Numa quinta antiga', 'Num hotel moderno', 'Num barco'], answer: 0 },
      { q: 'O que fizeram na vindima?', options: ['Venderam vinho', 'Apanharam uvas', 'Cozinharam o jantar'], answer: 1 },
    ],
  },
  {
    id: 'pt-a2-infancia',
    level: 'A2',
    icon: '🧒',
    title: 'Quando eu era pequeno',
    titleDe: 'Als ich klein war',
    paragraphs: [
      'Quando eu era pequeno, morava com os meus pais numa aldeia no Alentejo. A nossa casa era branca, com janelas azuis, e tinha um quintal enorme com laranjeiras. No verão fazia muito calor, por isso à tarde ninguém saía de casa.',
      'Todos os dias ia a pé para a escola com o meu melhor amigo, o Zé. A escola ficava a dois quilómetros. Pelo caminho falávamos de futebol e às vezes apanhávamos fruta das árvores dos vizinhos. A professora era muito severa, mas eu gostava muito dela.',
      'Ao fim de semana, o meu avô levava-me à feira da vila. Ele comprava queijo e pão, e eu recebia sempre um rebuçado. À noite, enquanto nós jantávamos, a minha avó contava histórias antigas. Tenho muitas saudades desse tempo.',
    ],
    translation: [
      'Als ich klein war, wohnte ich mit meinen Eltern in einem Dorf im Alentejo. Unser Haus war weiß, mit blauen Fenstern, und hatte einen riesigen Hof mit Orangenbäumen. Im Sommer war es sehr heiß, deshalb ging nachmittags niemand aus dem Haus.',
      'Jeden Tag ging ich mit meinem besten Freund Zé zu Fuß zur Schule. Die Schule war zwei Kilometer entfernt. Unterwegs redeten wir über Fußball und manchmal pflückten wir Obst von den Bäumen der Nachbarn. Die Lehrerin war sehr streng, aber ich mochte sie sehr.',
      'Am Wochenende nahm mich mein Opa mit auf den Markt im Städtchen. Er kaufte Käse und Brot, und ich bekam immer ein Bonbon. Abends, während wir zu Abend aßen, erzählte meine Oma alte Geschichten. Ich vermisse diese Zeit sehr.',
    ],
    glossary: {
      aldeia: 'Dorf', alentejo: 'Alentejo (Region im Süden)', quintal: 'Hof, Hausgarten', enorme: 'riesig', levava: ['brachte, nahm mit (levar)', 'levar'],
      laranjeiras: ['Orangenbäume', 'laranjeira'], saía: ['ging hinaus (sair)', 'sair'], zé: 'Zé (Kurzform von José)',
      quilómetros: ['Kilometer', 'quilómetro'], apanhávamos: ['wir pflückten', 'apanhar'], severa: ['streng', 'severo'],
      dela: 'von ihr / sie (de + ela)', feira: 'Markt, Jahrmarkt', vila: 'Kleinstadt, Städtchen',
      rebuçado: 'Bonbon', enquanto: 'während', jantávamos: ['wir aßen zu Abend', 'jantar'],
      saudades: ['Sehnsucht (ter saudades = vermissen)', 'saudade'], desse: 'von diesem (de + esse)',
    },
    questions: [
      { q: 'Onde morava o narrador?', options: ['Numa cidade grande', 'Numa aldeia no Alentejo', 'Perto do mar'], answer: 1 },
      { q: 'Como ia para a escola?', options: ['A pé', 'De autocarro', 'De bicicleta'], answer: 0 },
      { q: 'Como era a professora?', options: ['Muito nova', 'Muito severa', 'Muito divertida'], answer: 1 },
      { q: 'O que recebia o narrador na feira?', options: ['Um livro', 'Um queijo', 'Um rebuçado'], answer: 2 },
    ],
  },
  {
    id: 'pt-a2-medico',
    level: 'A2',
    icon: '🩺',
    title: 'No centro de saúde',
    titleDe: 'Beim Arzt',
    paragraphs: [
      'Na semana passada, a Sara acordou com dores de cabeça e de garganta. Também tinha febre e estava muito cansada. Por isso, não foi trabalhar e telefonou para o centro de saúde. Marcou uma consulta para a mesma tarde.',
      'A médica, a doutora Ferreira, fez-lhe várias perguntas: — Desde quando se sente assim? Tem tosse? — Desde ontem à noite. Tenho um pouco de tosse, sim. A médica ouviu-lhe os pulmões e depois olhou para a garganta dela.',
      '— Não é nada grave, é só uma gripe — explicou a médica. — Precisa de descansar e de beber muita água. Tome um comprimido para a febre de oito em oito horas. Se não melhorar em três dias, volte cá. Agora a Sara está em casa, no sofá, com um chá quente. Já se sente um pouco melhor.',
    ],
    translation: [
      'Letzte Woche wachte Sara mit Kopf- und Halsschmerzen auf. Sie hatte auch Fieber und war sehr müde. Deshalb ging sie nicht zur Arbeit und rief im Gesundheitszentrum an. Sie machte einen Termin für denselben Nachmittag.',
      'Die Ärztin, Frau Dr. Ferreira, stellte ihr mehrere Fragen: „Seit wann fühlen Sie sich so? Haben Sie Husten?“ – „Seit gestern Abend. Ich habe ein bisschen Husten, ja.“ Die Ärztin hörte ihre Lunge ab und schaute ihr dann in den Hals.',
      '„Es ist nichts Ernstes, nur eine Grippe“, erklärte die Ärztin. „Sie müssen sich ausruhen und viel Wasser trinken. Nehmen Sie alle acht Stunden eine Tablette gegen das Fieber. Wenn es in drei Tagen nicht besser wird, kommen Sie wieder her.“ Jetzt ist Sara zu Hause auf dem Sofa, mit einem heißen Tee. Sie fühlt sich schon ein bisschen besser.',
    ],
    glossary: {
      sara: 'Sara (Name)', ferreira: 'Ferreira (Nachname)', doutora: ['Doktor (Anrede, f)', 'doutor'],
      dores: ['Schmerzen', 'dor'], garganta: 'Hals, Rachen', febre: 'Fieber', centro: 'Zentrum', saúde: 'Gesundheit (centro de saúde = Gesundheitszentrum, Hausarztpraxis)',
      consulta: 'Arzttermin, Sprechstunde', várias: ['mehrere', 'vário'], tosse: 'Husten',
      pulmões: ['Lunge(n)', 'pulmão'], dela: 'von ihr / ihr (de + ela)', grave: 'schlimm, ernst', gripe: 'Grippe',
      precisa: ['braucht, muss (precisar de = müssen)', 'precisar'], tome: ['nehmen Sie (tomar)', 'tomar'],
      comprimido: 'Tablette', cá: 'hier, hierher',
    },
    questions: [
      { q: 'Que sintomas tinha a Sara?', options: ['Dor de barriga', 'Dores de cabeça e de garganta e febre', 'Dor nas costas'], answer: 1 },
      { q: 'Quando foi a consulta?', options: ['Na mesma tarde', 'No dia seguinte', 'Uma semana depois'], answer: 0 },
      { q: 'O que tem a Sara, segundo a médica?', options: ['Uma alergia', 'Uma infeção', 'Uma gripe'], answer: 2 },
      { q: 'O que deve fazer se não melhorar?', options: ['Ir ao hospital', 'Voltar ao centro de saúde', 'Ficar na cama'], answer: 1 },
    ],
  },
];
