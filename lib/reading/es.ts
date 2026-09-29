import type { ReadingText } from './types';

// Spanish reading texts, A1 → B1. Glossaries list only what the automatic lookup
// (catalog, verb forms, common words) can't find.

export const READING_TEXTS: ReadingText[] = [
  // ─── A1 ──────────────────────────────────────────────────────────────────────
  {
    id: 'es-a1-familia',
    level: 'A1',
    icon: '👨‍👩‍👧',
    title: 'Mi familia',
    titleDe: 'Meine Familie',
    paragraphs: [
      '¡Hola! Me llamo Lucía, tengo veinticuatro años y vivo en Sevilla. Soy española, pero mi padre es alemán. Por eso hablo español y alemán.',
      'Mi familia no es muy grande. Mi madre se llama Carmen y es médica. Mi padre, Thomas, es profesor de música. Tengo una hermana, Elena. Ella tiene dieciséis años y todavía va al instituto.',
      'También tenemos un gato, Coco. Es negro, pequeño y muy tranquilo. Los domingos comemos siempre en casa de mis abuelos. ¡Mi abuela cocina muy bien!',
    ],
    translation: [
      'Hallo! Ich heiße Lucía, bin vierundzwanzig Jahre alt und wohne in Sevilla. Ich bin Spanierin, aber mein Vater ist Deutscher. Deshalb spreche ich Spanisch und Deutsch.',
      'Meine Familie ist nicht sehr groß. Meine Mutter heißt Carmen und ist Ärztin. Mein Vater, Thomas, ist Musiklehrer. Ich habe eine Schwester, Elena. Sie ist sechzehn und geht noch aufs Gymnasium.',
      'Wir haben auch eine Katze, Coco. Sie ist schwarz, klein und sehr ruhig. Sonntags essen wir immer bei meinen Großeltern. Meine Oma kocht sehr gut!',
    ],
    glossary: { coco: 'Coco (Katzenname)', lucía: 'Lucía (Name)', carmen: 'Carmen (Name)', thomas: 'Thomas (Name)', elena: 'Elena (Name)' },
    questions: [
      { q: '¿Dónde vive Lucía?', options: ['En Madrid', 'En Sevilla', 'En Alemania'], answer: 1 },
      { q: '¿Qué hace su madre?', options: ['Es médica', 'Es profesora', 'Es cocinera'], answer: 0 },
      { q: '¿Cuántos años tiene Elena?', options: ['Veinticuatro', 'Seis', 'Dieciséis'], answer: 2 },
      { q: '¿Cómo es el gato?', options: ['Grande y blanco', 'Negro y pequeño', 'Viejo y gordo'], answer: 1 },
    ],
  },
  {
    id: 'es-a1-cafeteria',
    level: 'A1',
    icon: '☕',
    title: 'En la cafetería',
    titleDe: 'Im Café',
    paragraphs: [
      'Son las nueve de la mañana. Pablo entra en la cafetería de la esquina, como todos los días.',
      '—¡Buenos días, Pablo! ¿Lo de siempre? —pregunta el camarero.\n—¡Buenos días, Luis! Sí, un café con leche y una tostada con tomate, por favor.\n—¿Y para la señora?\n—Para mí un zumo de naranja y un cruasán, gracias —dice Marta, la compañera de Pablo.',
      'En España mucha gente desayuna en un bar antes de ir al trabajo. Es rápido y no es caro.\n—¿Cuánto es? —pregunta Pablo.\n—Son seis euros con cincuenta.\n—Aquí tiene. ¡Hasta mañana!',
    ],
    translation: [
      'Es ist neun Uhr morgens. Pablo geht in das Café an der Ecke, wie jeden Tag.',
      '– Guten Morgen, Pablo! Wie immer? – fragt der Kellner.\n– Guten Morgen, Luis! Ja, einen Milchkaffee und ein Röstbrot mit Tomate, bitte.\n– Und für die Dame?\n– Für mich einen Orangensaft und ein Croissant, danke – sagt Marta, Pablos Kollegin.',
      'In Spanien frühstücken viele Leute in einer Bar, bevor sie zur Arbeit gehen. Das geht schnell und ist nicht teuer.\n– Was macht das? – fragt Pablo.\n– Sechs Euro fünfzig.\n– Bitte schön. Bis morgen!',
    ],
    glossary: { compañera: 'Kollegin', pablo: 'Pablo (Name)', luis: 'Luis (Name)', tostada: 'Röstbrot, Toast', marta: 'Marta (Name)' },
    questions: [
      { q: '¿Qué hora es?', options: ['Las ocho', 'Las nueve', 'Las diez'], answer: 1 },
      { q: '¿Qué toma Pablo?', options: ['Un zumo y un cruasán', 'Un té', 'Un café con leche y una tostada'], answer: 2 },
      { q: '¿Quién es Marta?', options: ['La compañera de Pablo', 'La hermana de Pablo', 'La camarera'], answer: 0 },
      { q: '¿Cuánto pagan?', options: ['Cinco euros', 'Seis euros con cincuenta', 'Dieciséis euros'], answer: 1 },
    ],
  },
  {
    id: 'es-a1-dia',
    level: 'A1',
    icon: '⏰',
    title: 'Un día normal',
    titleDe: 'Ein ganz normaler Tag',
    paragraphs: [
      'Javier se despierta a las siete. Se levanta, se ducha y se viste. Después desayuna en la cocina: toma un café y come unas galletas.',
      'A las ocho coge el metro para ir al trabajo. Javier trabaja en una oficina en el centro de Madrid. El trabajo es interesante, pero a veces es un poco estresante. A las dos come con sus compañeros.',
      'Termina de trabajar a las seis. Por la tarde va al gimnasio o queda con sus amigos. Después de cenar ve una serie o lee un libro. Se acuesta a las doce, porque está cansado.',
    ],
    translation: [
      'Javier wacht um sieben Uhr auf. Er steht auf, duscht und zieht sich an. Dann frühstückt er in der Küche: Er trinkt einen Kaffee und isst ein paar Kekse.',
      'Um acht nimmt er die U-Bahn, um zur Arbeit zu fahren. Javier arbeitet in einem Büro im Zentrum von Madrid. Die Arbeit ist interessant, aber manchmal ein bisschen stressig. Um zwei isst er mit seinen Kollegen zu Mittag.',
      'Er hört um sechs auf zu arbeiten. Nachmittags geht er ins Fitnessstudio oder trifft sich mit Freunden. Nach dem Abendessen sieht er eine Serie oder liest ein Buch. Er geht um zwölf ins Bett, weil er müde ist.',
    ],
    glossary: { viste: ['zieht sich an (vestirse)', 'vestirse'], ducha: ['duscht (ducharse)', 'ducharse'], javier: 'Javier (Name)' },
    questions: [
      { q: '¿A qué hora se despierta Javier?', options: ['A las seis', 'A las siete', 'A las ocho'], answer: 1 },
      { q: '¿Cómo va al trabajo?', options: ['En coche', 'A pie', 'En metro'], answer: 2 },
      { q: '¿Con quién come a las dos?', options: ['Con sus compañeros', 'Con su madre', 'Solo'], answer: 0 },
      { q: '¿Por qué se acuesta a las doce?', options: ['Porque tiene hambre', 'Porque está cansado', 'Porque trabaja'], answer: 1 },
    ],
  },

  // ─── A2 ──────────────────────────────────────────────────────────────────────
  {
    id: 'es-a2-andalucia',
    level: 'A2',
    icon: '🏰',
    title: 'Una semana en Andalucía',
    titleDe: 'Eine Woche in Andalusien',
    paragraphs: [
      'El verano pasado mi novio y yo fuimos a Andalucía durante una semana. Volamos de Berlín a Málaga y allí alquilamos un coche.',
      'Primero visitamos Granada. Vimos la Alhambra, que es impresionante, y por la noche comimos tapas en un bar muy pequeño. Después fuimos a Córdoba y a Sevilla. En Sevilla hacía muchísimo calor: ¡cuarenta grados!',
      'Un día llovió todo el tiempo y nos quedamos en el hotel. Pero no pasó nada: dormimos, leímos y jugamos a las cartas.',
      'La última noche cenamos en un restaurante en la playa, en Cádiz. Fueron unas vacaciones preciosas y el año que viene queremos volver.',
    ],
    translation: [
      'Letzten Sommer sind mein Freund und ich für eine Woche nach Andalusien gefahren. Wir sind von Berlin nach Málaga geflogen und haben dort ein Auto gemietet.',
      'Zuerst haben wir Granada besucht. Wir haben die Alhambra gesehen, die beeindruckend ist, und abends haben wir in einer sehr kleinen Bar Tapas gegessen. Danach sind wir nach Córdoba und Sevilla gefahren. In Sevilla war es unglaublich heiß: vierzig Grad!',
      'Einen Tag hat es die ganze Zeit geregnet, und wir sind im Hotel geblieben. Aber das machte nichts: Wir haben geschlafen, gelesen und Karten gespielt.',
      'Am letzten Abend haben wir in einem Restaurant am Strand in Cádiz gegessen. Es war ein wunderschöner Urlaub, und nächstes Jahr wollen wir wiederkommen.',
    ],
    glossary: { calor: 'Hitze (hace calor = es ist heiß)', pasado: 'vergangen, letzte(r)', quedamos: ['wir blieben (quedarse)', 'quedarse'], andalucía: 'Andalusien', alquilamos: ['wir mieteten', 'alquilar'], alhambra: 'Alhambra (Palast in Granada)', córdoba: 'Córdoba', cádiz: 'Cádiz', granada: 'Granada', málaga: 'Málaga', berlín: 'Berlin' },
    questions: [
      { q: '¿Cómo llegaron a Málaga?', options: ['En tren', 'En avión', 'En coche'], answer: 1 },
      { q: '¿Qué vieron en Granada?', options: ['La Alhambra', 'La playa', 'Un museo de arte'], answer: 0 },
      { q: '¿Qué hicieron el día de lluvia?', options: ['Fueron a la playa', 'Se quedaron en el hotel', 'Visitaron Córdoba'], answer: 1 },
      { q: '¿Dónde cenaron la última noche?', options: ['En Granada', 'En Sevilla', 'En Cádiz'], answer: 2 },
    ],
  },
  {
    id: 'es-a2-infancia',
    level: 'A2',
    icon: '🧒',
    title: 'Cuando era pequeño',
    titleDe: 'Als ich klein war',
    paragraphs: [
      'Cuando era pequeño, vivía en un pueblo de Asturias, en el norte de España. Nuestra casa era vieja y tenía un jardín muy grande con manzanos.',
      'En invierno hacía frío y llovía mucho. Mi hermana y yo íbamos al colegio andando y, después de clase, jugábamos en el río con los otros niños. Por la noche mi madre preparaba chocolate caliente.',
      'En verano pasábamos las vacaciones en casa de mis abuelos, cerca del mar. Mi abuelo tenía un barco pequeño y todas las mañanas salíamos a pescar con él. Casi nunca pescábamos nada, pero éramos muy felices.',
      'Ahora vivo en Madrid y trabajo mucho. A veces pienso en esos años: la vida era más sencilla y el tiempo pasaba más despacio.',
    ],
    translation: [
      'Als ich klein war, lebte ich in einem Dorf in Asturien, im Norden Spaniens. Unser Haus war alt und hatte einen sehr großen Garten mit Apfelbäumen.',
      'Im Winter war es kalt, und es regnete viel. Meine Schwester und ich gingen zu Fuß zur Schule, und nach dem Unterricht spielten wir mit den anderen Kindern am Fluss. Abends machte meine Mutter heiße Schokolade.',
      'Im Sommer verbrachten wir die Ferien bei meinen Großeltern, in der Nähe des Meeres. Mein Opa hatte ein kleines Boot, und jeden Morgen fuhren wir mit ihm zum Fischen hinaus. Wir fingen fast nie etwas, aber wir waren sehr glücklich.',
      'Jetzt lebe ich in Madrid und arbeite viel. Manchmal denke ich an diese Jahre: Das Leben war einfacher, und die Zeit verging langsamer.',
    ],
    glossary: { pienso: ['ich denke', 'pensar'], asturias: 'Asturien', manzanos: ['Apfelbäume', 'manzano'] },
    questions: [
      { q: '¿Dónde vivía de pequeño?', options: ['En Madrid', 'En un pueblo de Asturias', 'En la playa'], answer: 1 },
      { q: '¿Cómo iban al colegio?', options: ['Andando', 'En autobús', 'En coche'], answer: 0 },
      { q: '¿Qué hacían en verano con el abuelo?', options: ['Esquiaban', 'Salían a pescar', 'Iban al cine'], answer: 1 },
      { q: '¿Cómo era la vida, según él?', options: ['Más difícil', 'Más sencilla', 'Más rápida'], answer: 1 },
    ],
  },
  {
    id: 'es-a2-medico',
    level: 'A2',
    icon: '🩺',
    title: 'En el médico',
    titleDe: 'Beim Arzt',
    paragraphs: [
      '—Buenos días, doctora.\n—Buenos días, señor García. Siéntese, por favor. ¿Qué le pasa?\n—Desde hace tres días me duele la garganta y la cabeza. Anoche también tuve fiebre, treinta y ocho y medio.',
      '—A ver. Abra la boca, por favor… Sí, tiene la garganta muy roja. ¿Tiene tos?\n—Sí, un poco, sobre todo por la noche.\n—Es una gripe. No es nada grave, pero tiene que descansar.',
      '—Quédese en casa unos días y beba mucha agua o té caliente. Le voy a recetar un jarabe para la tos. Si la fiebre es alta, puede tomar un paracetamol.\n—¿Puedo ir a trabajar mañana?\n—¡No, de ninguna manera! Quédese en la cama por lo menos hasta el viernes. Si dentro de una semana no está mejor, vuelva a verme.\n—De acuerdo. Muchas gracias, doctora.',
    ],
    translation: [
      '– Guten Tag, Frau Doktor.\n– Guten Tag, Herr García. Setzen Sie sich bitte. Was fehlt Ihnen?\n– Seit drei Tagen tun mir der Hals und der Kopf weh. Gestern Abend hatte ich auch Fieber, achtunddreißigeinhalb.',
      '– Schauen wir mal. Öffnen Sie bitte den Mund … Ja, Ihr Hals ist sehr rot. Haben Sie Husten?\n– Ja, ein bisschen, vor allem nachts.\n– Das ist eine Grippe. Nichts Schlimmes, aber Sie müssen sich ausruhen.',
      '– Bleiben Sie ein paar Tage zu Hause und trinken Sie viel Wasser oder heißen Tee. Ich verschreibe Ihnen einen Hustensaft. Wenn das Fieber hoch ist, können Sie ein Paracetamol nehmen.\n– Kann ich morgen zur Arbeit gehen?\n– Nein, auf keinen Fall! Bleiben Sie mindestens bis Freitag im Bett. Wenn es Ihnen in einer Woche nicht besser geht, kommen Sie wieder zu mir.\n– In Ordnung. Vielen Dank, Frau Doktor.',
    ],
    glossary: { pasa: ['passiert (¿qué le pasa? = was fehlt Ihnen?)', 'pasar'], garcía: 'García (Nachname)', paracetamol: 'Paracetamol', siéntese: ['setzen Sie sich', 'sentarse'], quédese: ['bleiben Sie', 'quedarse'], recetar: 'verschreiben', jarabe: 'Sirup, Saft' },
    questions: [
      { q: '¿Desde cuándo está enfermo el señor García?', options: ['Desde ayer', 'Desde hace tres días', 'Desde hace una semana'], answer: 1 },
      { q: '¿Qué tiene?', options: ['Una gripe', 'Un brazo roto', 'Dolor de muelas'], answer: 0 },
      { q: '¿Qué tiene que beber?', options: ['Café', 'Vino', 'Agua o té caliente'], answer: 2 },
      { q: '¿Hasta cuándo tiene que quedarse en la cama?', options: ['Hasta mañana', 'Por lo menos hasta el viernes', 'Un mes'], answer: 1 },
    ],
  },

  // ─── B1 ──────────────────────────────────────────────────────────────────────
  {
    id: 'es-b1-salamanca',
    level: 'B1',
    icon: '🎓',
    title: 'Estudiar en Salamanca',
    titleDe: 'Studieren in Salamanca',
    paragraphs: [
      'La Universidad de Salamanca, fundada en 1218, es una de las más antiguas de Europa. Hoy estudian allí unos treinta mil estudiantes, muchos de ellos extranjeros que vienen a aprender español. Por eso la ciudad siempre está llena de gente joven.',
      'Quienes han estudiado allí cuentan que Salamanca es acogedora y muy animada: hay conciertos, exposiciones y bares abiertos hasta muy tarde. Además, como la ciudad es pequeña, se puede ir a todas partes a pie.',
      'Sin embargo, no todo es perfecto. En los últimos años los alquileres han subido bastante y encontrar una habitación barata se ha vuelto difícil. Muchos estudiantes creen que el ayuntamiento debería construir más residencias y que algunos propietarios piden precios demasiado altos.',
      'A pesar de todo, la mayoría está contenta con su elección. Como dice Clara, que estudia Medicina: «No creo que haya una ciudad mejor para vivir a los veinte años».',
    ],
    translation: [
      'Die Universität Salamanca, gegründet 1218, ist eine der ältesten Europas. Heute studieren dort rund dreißigtausend Studierende, viele davon aus dem Ausland, die Spanisch lernen wollen. Deshalb ist die Stadt immer voller junger Leute.',
      'Wer dort studiert hat, erzählt, dass Salamanca gastfreundlich und sehr lebendig ist: Es gibt Konzerte, Ausstellungen und Bars, die bis sehr spät geöffnet haben. Außerdem kann man überallhin zu Fuß gehen, weil die Stadt klein ist.',
      'Allerdings ist nicht alles perfekt. In den letzten Jahren sind die Mieten ziemlich gestiegen, und ein günstiges Zimmer zu finden ist schwierig geworden. Viele Studierende meinen, dass die Stadtverwaltung mehr Wohnheime bauen sollte und dass manche Vermieter zu hohe Preise verlangen.',
      'Trotz allem ist die Mehrheit mit ihrer Wahl zufrieden. Wie Clara sagt, die Medizin studiert: „Ich glaube nicht, dass es eine bessere Stadt gibt, um mit zwanzig zu leben.“',
    ],
    glossary: { barata: ['billig', 'barato'], vuelto: ['geworden (volverse)', 'volver'], debería: ['sollte', 'deber'], partes: ['Teile (a todas partes = überallhin)', 'parte'], llena: ['voll', 'lleno'], propietarios: ['Eigentümer, Vermieter', 'propietario'], salamanca: 'Salamanca', fundada: ['gegründet', 'fundar'], acogedora: ['gastfreundlich, gemütlich', 'acogedor'], exposiciones: ['Ausstellungen', 'exposición'], ayuntamiento: 'Stadtverwaltung, Rathaus', residencias: ['Wohnheime', 'residencia'], clara: 'Clara (Name)', haya: ['es gibt (subjuntivo von hay)', 'haber'] },
    questions: [
      { q: '¿Cuándo se fundó la universidad?', options: ['En 1218', 'En 1812', 'En 1512'], answer: 0 },
      { q: '¿Por qué se puede ir a todas partes a pie?', options: ['Porque hay metro', 'Porque la ciudad es pequeña', 'Porque no hay coches'], answer: 1 },
      { q: '¿Cuál es el problema principal para los estudiantes?', options: ['La comida', 'Los alquileres altos', 'Las clases'], answer: 1 },
      { q: '¿Qué opina Clara de Salamanca?', options: ['Que es demasiado cara', 'Que es la mejor ciudad para los jóvenes', 'Que es aburrida'], answer: 1 },
    ],
  },
  {
    id: 'es-b1-loteria',
    level: 'B1',
    icon: '🍀',
    title: 'Si me tocara la lotería…',
    titleDe: 'Wenn ich im Lotto gewinnen würde …',
    paragraphs: [
      'Hemos preguntado a tres personas en la calle: «¿Qué harías si te tocara un millón de euros?» Estas son sus respuestas.',
      'Jorge, 34 años, camarero: «Lo primero, dejaría de trabajar, por lo menos un año. Luego daría la vuelta al mundo con mi pareja. Nos encantaría conocer Japón y la Patagonia. Al volver, abriría un pequeño restaurante propio».',
      'Ana, 52 años, profesora: «Sinceramente, no cambiaría mucho. Compraría una casa más grande para mis hijos y ayudaría a mi hermana, que tiene algunos problemas económicos. El resto lo daría a una asociación que ayuda a niños. Si tuviera demasiado dinero, tendría miedo de no ser yo misma».',
      'Samir, 21 años, estudiante: «Si fuera rico, terminaría la carrera sin tener que trabajar por las noches. E invertiría una parte en una empresa con mis amigos. Aunque no creo que me toque nunca: ¡ni siquiera juego a la lotería!».',
    ],
    translation: [
      'Wir haben drei Menschen auf der Straße gefragt: „Was würdest du tun, wenn du eine Million Euro gewinnen würdest?“ Hier sind ihre Antworten.',
      'Jorge, 34, Kellner: „Als Erstes würde ich aufhören zu arbeiten, mindestens ein Jahr lang. Dann würde ich mit meiner Partnerin eine Weltreise machen. Wir würden gern Japan und Patagonien kennenlernen. Nach der Rückkehr würde ich ein kleines eigenes Restaurant eröffnen.“',
      'Ana, 52, Lehrerin: „Ehrlich gesagt würde ich nicht viel ändern. Ich würde ein größeres Haus für meine Kinder kaufen und meiner Schwester helfen, die ein paar finanzielle Probleme hat. Den Rest würde ich einem Verein geben, der Kindern hilft. Wenn ich zu viel Geld hätte, hätte ich Angst, nicht mehr ich selbst zu sein.“',
      'Samir, 21, Student: „Wenn ich reich wäre, würde ich das Studium beenden, ohne nachts arbeiten zu müssen. Und ich würde einen Teil in eine Firma mit meinen Freunden investieren. Aber ich glaube nicht, dass ich je gewinne: Ich spiele nicht einmal Lotto!“',
    ],
    glossary: { vuelta: 'Runde (dar la vuelta al mundo = eine Weltreise machen)', económicos: ['finanziell, wirtschaftlich', 'económico'], tocara: ['zufallen würde (tocar la lotería = im Lotto gewinnen)', 'tocar'], toque: ['zufällt (subjuntivo)', 'tocar'], jorge: 'Jorge (Name)', sinceramente: 'ehrlich gesagt', samir: 'Samir (Name)', ana: 'Ana (Name)', carrera: 'Studium / Rennen', invertiría: ['ich würde investieren', 'invertir'], patagonia: 'Patagonien', japón: 'Japan' },
    questions: [
      { q: '¿Qué haría Jorge primero?', options: ['Compraría una casa', 'Dejaría de trabajar', 'Abriría un banco'], answer: 1 },
      { q: '¿A quién daría Ana el resto del dinero?', options: ['A una asociación que ayuda a niños', 'A sus alumnos', 'Al banco'], answer: 0 },
      { q: '¿De qué tendría miedo Ana?', options: ['De perder el dinero', 'De no ser ella misma', 'De viajar'], answer: 1 },
      { q: '¿Por qué Samir no cree que gane?', options: ['Porque tiene mala suerte', 'Porque no juega a la lotería', 'Porque es muy joven'], answer: 1 },
    ],
  },
  {
    id: 'es-b1-siesta',
    level: 'B1',
    icon: '🌞',
    title: 'Los horarios españoles',
    titleDe: 'Die spanischen Uhrzeiten',
    paragraphs: [
      'Muchos extranjeros se sorprenden cuando llegan a España: se come a las dos o a las tres, se cena a las diez y los niños a veces siguen jugando en la calle a medianoche. ¿Por qué los horarios españoles son tan diferentes?',
      'Una de las razones es curiosa. En 1940 España cambió su hora para tener la misma que Alemania, aunque geográficamente le corresponde la de Portugal y el Reino Unido. Por eso, en verano, el sol se pone muy tarde y la vida se desplaza hacia la noche.',
      'Además, mucha gente piensa que todos los españoles duermen la siesta, pero no es verdad: según las encuestas, solo una minoría lo hace con regularidad. Con jornadas de trabajo largas y trayectos en metro, pocos tienen tiempo para dormir después de comer.',
      'Desde hace años se discute si sería mejor volver a la hora «natural» y tener horarios más cortos, como en el resto de Europa. Quizás algún día se cambie, pero de momento las cenas tardías siguen siendo parte de la cultura.',
    ],
    translation: [
      'Viele Ausländer sind überrascht, wenn sie nach Spanien kommen: Man isst um zwei oder drei zu Mittag, um zehn zu Abend, und die Kinder spielen manchmal um Mitternacht noch auf der Straße. Warum sind die spanischen Tageszeiten so anders?',
      'Einer der Gründe ist kurios. 1940 stellte Spanien seine Uhrzeit um, um dieselbe wie Deutschland zu haben, obwohl ihm geografisch die von Portugal und Großbritannien entspricht. Deshalb geht die Sonne im Sommer sehr spät unter, und das Leben verschiebt sich in die Nacht.',
      'Außerdem denken viele, dass alle Spanier Siesta halten, aber das stimmt nicht: Laut Umfragen tut das nur eine Minderheit regelmäßig. Bei langen Arbeitstagen und Fahrten mit der U-Bahn haben wenige Zeit, nach dem Essen zu schlafen.',
      'Seit Jahren wird diskutiert, ob es besser wäre, zur „natürlichen“ Zeit zurückzukehren und kürzere Arbeitszeiten zu haben, wie im übrigen Europa. Vielleicht ändert es sich eines Tages, aber vorerst bleiben die späten Abendessen Teil der Kultur.',
    ],
    glossary: { pone: ['geht unter (ponerse, Sonne)', 'poner'], unido: 'vereinigt (Reino Unido = Großbritannien)', curiosa: ['kurios, merkwürdig', 'curioso'], cenas: ['Abendessen (Mz.)', 'cena'], sorprenden: ['sind überrascht (sorprenderse)', 'sorprender'], razones: ['Gründe', 'razón'], geográficamente: 'geografisch', corresponde: ['entspricht', 'corresponder'], desplaza: ['verschiebt sich (desplazarse)', 'desplazar'], siesta: 'Siesta, Mittagsschlaf', trayectos: ['Fahrten, Strecken', 'trayecto'], tardías: ['spät', 'tardío'], portugal: 'Portugal', reino: 'Reich (Reino Unido = Großbritannien)', encuestas: ['Umfragen', 'encuesta'], minoría: 'Minderheit', regularidad: 'Regelmäßigkeit', jornadas: ['Arbeitstage', 'jornada'], quizás: 'vielleicht', cambie: ['ändert sich (subjuntivo)', 'cambiar'] },
    questions: [
      { q: '¿A qué hora se cena normalmente en España?', options: ['A las seis', 'A las ocho', 'A las diez'], answer: 2 },
      { q: '¿Qué hora tiene España desde 1940?', options: ['La de Portugal', 'La de Alemania', 'La del Reino Unido'], answer: 1 },
      { q: '¿Duermen todos los españoles la siesta?', options: ['Sí, todos', 'No, solo una minoría', 'Solo los niños'], answer: 1 },
      { q: '¿Qué se discute desde hace años?', options: ['Volver a la hora natural', 'Prohibir la siesta', 'Cenar más tarde'], answer: 0 },
    ],
  },
];
