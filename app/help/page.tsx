'use client';

import type { ReactNode } from 'react';
import { useUiLang } from '@/lib/ui-lang';

// Rich text in both interface languages.
function Tx({ en, de }: { en: ReactNode; de: ReactNode }) {
  const [lang] = useUiLang();
  return <>{lang === 'de' ? de : en}</>;
}

function Section({ icon, title, children }: { icon: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
      <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
        <span>{icon}</span> {title}
      </h2>
      {children}
    </section>
  );
}

const P = ({ children }: { children: ReactNode }) => (
  <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
);

const PHASES = [
  { label: 'Phase 1', color: 'bg-red-100 text-red-700', en: 'New — review again tomorrow', de: 'Neu – morgen wiederholen' },
  { label: 'Phase 2', color: 'bg-orange-100 text-orange-700', en: 'Review in 3 days', de: 'Wiederholung in 3 Tagen' },
  { label: 'Phase 3', color: 'bg-amber-100 text-amber-700', en: 'Review in 7 days', de: 'Wiederholung in 7 Tagen' },
  { label: 'Phase 4', color: 'bg-blue-100 text-blue-700', en: 'Review in 14 days', de: 'Wiederholung in 14 Tagen' },
  { label: 'Phase 5', color: 'bg-indigo-100 text-indigo-700', en: 'Review in 30 days', de: 'Wiederholung in 30 Tagen' },
  { label: 'Phase 6', color: 'bg-violet-100 text-violet-700', en: 'Review in 60 days', de: 'Wiederholung in 60 Tagen' },
  { label: 'Phase 7', color: 'bg-purple-100 text-purple-700', en: 'Review in 90 days', de: 'Wiederholung in 90 Tagen' },
];

export default function HelpPage() {
  const [lang] = useUiLang();
  const de = lang === 'de';

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{de ? 'So funktioniert’s' : 'How it works'}</h1>
          <p className="text-gray-400 text-sm mt-0.5">{de ? 'Eine kurze Anleitung zur App' : 'A quick guide to the app'}</p>
        </div>

        <Section icon="📲" title={<Tx en="Install as an app" de="Als App installieren" />}>
          <P>
            <Tx
              en="Put the app on your home screen – it then opens full screen with its own icon, like a normal app. Updates arrive automatically."
              de="Leg die App auf deinen Startbildschirm – sie öffnet dann im Vollbild mit eigenem Symbol, wie eine normale App. Updates kommen automatisch."
            />
          </P>
          <div className="space-y-1.5 text-sm text-gray-600">
            <Tx
              en={<>
                <p><strong>iPhone (Safari):</strong> tap the Share button <span className="whitespace-nowrap">(□↑)</span> → <em>Add to Home Screen</em> → <em>Add</em>.</p>
                <p><strong>Android (Chrome):</strong> tap the menu <strong>⋮</strong> → <em>Install app</em> (or <em>Add to Home screen</em>).</p>
                <p><strong>Computer (Chrome/Edge):</strong> click the install icon at the right of the address bar.</p>
              </>}
              de={<>
                <p><strong>iPhone (Safari):</strong> Teilen-Knopf <span className="whitespace-nowrap">(□↑)</span> → <em>Zum Home-Bildschirm</em> → <em>Hinzufügen</em>.</p>
                <p><strong>Android (Chrome):</strong> Menü <strong>⋮</strong> → <em>App installieren</em> (oder <em>Zum Startbildschirm hinzufügen</em>).</p>
                <p><strong>Computer (Chrome/Edge):</strong> auf das Installieren-Symbol rechts in der Adressleiste klicken.</p>
              </>}
            />
          </div>
          <P>
            <Tx
              en={<><strong>Offline:</strong> once you&apos;ve opened the app online, it also works without internet – all pages, words, verbs, grammar and reading texts of your language. Your answers are saved on the device and sent automatically when you&apos;re back online (a small badge at the top shows how many are waiting). Switching profiles or creating new ones needs a connection.</>}
              de={<><strong>Offline:</strong> Hast du die App einmal online geöffnet, funktioniert sie auch ohne Internet – alle Seiten, Wörter, Verben, Grammatik und Lesetexte deiner Sprache. Deine Antworten werden auf dem Gerät gespeichert und automatisch übertragen, sobald du wieder online bist (oben zeigt ein kleiner Hinweis, wie viele noch warten). Profile wechseln oder anlegen geht nur mit Verbindung.</>}
            />
          </P>
        </Section>

        <Section icon="☀️" title={<Tx en="Today & My mistakes" de="Heute & Meine Fehler" />}>
          <P>
            <Tx
              en={<><strong>Today&apos;s round</strong> mixes everything in about 10 minutes: 10 words (due reviews first, then new ones), 5 verb forms, 5 grammar sentences, 2 sentences to translate and 1 dictation. It&apos;s the easiest way to practise every day without having to decide what to do.</>}
              de={<>Die <strong>Tagesrunde</strong> mischt alles in etwa 10 Minuten: 10 Wörter (zuerst die fälligen, dann neue), 5 Verbformen, 5 Grammatiksätze, 2 Sätze zum Übersetzen und 1 Diktat. So übst du jeden Tag, ohne überlegen zu müssen, was dran ist.</>}
            />
          </P>
          <P>
            <Tx
              en={<><strong>My mistakes</strong> collects everything you answered wrong – in every exercise. Practise them on their own (all or one kind); once you get a mistake right twice in a row, it disappears.</>}
              de={<><strong>Meine Fehler</strong> sammelt alles, was du falsch beantwortet hast – in jeder Übung. Du kannst sie gezielt üben (alle oder nur eine Art); hast du einen Fehler zweimal hintereinander richtig, verschwindet er.</>}
            />
          </P>
        </Section>

        <Section icon="🔊" title={<Tx en="Listening" de="Hören" />}>
          <P>
            <Tx
              en={<>Tap 🔊 next to a word, sentence, verb table or grammar example to hear it (🐢 = slowly). The voice comes from your device – if it sounds odd, install a better Italian/Spanish/French voice in your phone&apos;s or computer&apos;s speech settings. On the Vocabulary page you can switch on <strong>Read words aloud automatically</strong>.</>}
              de={<>Tippe auf 🔊 neben einem Wort, Satz, einer Verbtabelle oder einem Grammatikbeispiel, um es zu hören (🐢 = langsam). Die Stimme kommt von deinem Gerät – klingt sie seltsam, installiere in den Sprach-Einstellungen deines Handys oder Computers eine bessere italienische/spanische/französische Stimme. Auf der Vokabel-Seite kannst du <strong>Wörter automatisch vorlesen</strong> einschalten.</>}
            />
          </P>
          <P>
            <Tx
              en={<><strong>Dictation</strong> (Sentences → 🎧): listen to a sentence and write it down. You get feedback word by word; accents and punctuation don&apos;t count as mistakes.</>}
              de={<><strong>Diktat</strong> (Sätze → 🎧): Hör dir einen Satz an und schreib ihn auf. Du bekommst Rückmeldung Wort für Wort; Akzente und Satzzeichen zählen nicht als Fehler.</>}
            />
          </P>
        </Section>

        <Section icon="📰" title={<Tx en="Reading" de="Lesen" />}>
          <P>
            <Tx
              en="Short stories and dialogues from A1 to B1. Tap any word to see its meaning (verb forms show their infinitive) and add it to your words with one tap. Listen to the whole text, show the German translation per paragraph, then answer a few questions – each answered question counts 2 race points."
              de="Kurze Geschichten und Dialoge von A1 bis B1. Tippe auf ein Wort, um seine Bedeutung zu sehen (bei Verbformen mit Infinitiv), und übernimm es mit einem Tipp in deine Wörter. Hör dir den ganzen Text an, blende die deutsche Übersetzung pro Absatz ein und beantworte danach ein paar Fragen – jede Frage bringt 2 Punkte im Rennen."
            />
          </P>
        </Section>

        <Section icon="📖" title={<Tx en="Vocabulary" de="Vokabeln" />}>
          <P>
            <Tx
              en={<>The app teaches you words using <strong>spaced repetition</strong>: the more confidently you know a word, the longer before it appears again. Each word has a phase (1–7); after that it is known.</>}
              de={<>Die App bringt dir Wörter mit <strong>verteilter Wiederholung</strong> bei: Je sicherer du ein Wort kannst, desto später kommt es wieder. Jedes Wort hat eine Phase (1–7); danach gilt es als gekonnt.</>}
            />
          </P>
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{de ? 'Lernphasen' : 'Learning phases'}</h3>
            <div className="space-y-1.5">
              {[...PHASES, { label: de ? 'Gekonnt' : 'Known', color: 'bg-green-100 text-green-700', en: 'No more reviews needed', de: 'Keine Wiederholung mehr nötig' }].map(p => (
                <div key={p.label} className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-0.5 rounded-md font-semibold shrink-0 ${p.color}`}>{p.label}</span>
                  <span className="text-sm text-gray-500">{de ? p.de : p.en}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2 pt-1">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{de ? 'Nach dem Prüfen' : 'After checking answers'}</h3>
            <div className="space-y-1.5 text-sm text-gray-600">
              <Tx
                en={<>
                  <p><span className="font-semibold text-red-700">Again</span> — start the word over; it comes back today.</p>
                  <p><span className="font-semibold text-amber-700">Stay</span> — right, but unsure: keep the phase.</p>
                  <p><span className="font-semibold text-green-700">Good</span> — confident: move to the next phase.</p>
                  <p><span className="font-semibold text-green-800">Known</span> — you know it perfectly: mark it known.</p>
                  <p>Wrong answer? Type the word once correctly, then choose. A typo can keep its phase.</p>
                </>}
                de={<>
                  <p><span className="font-semibold text-red-700">Nochmal</span> – das Wort beginnt von vorn und kommt heute wieder.</p>
                  <p><span className="font-semibold text-amber-700">Bleiben</span> – richtig, aber unsicher: Die Phase bleibt.</p>
                  <p><span className="font-semibold text-green-700">Gut</span> – sicher: eine Phase weiter.</p>
                  <p><span className="font-semibold text-green-800">Gekonnt</span> – du kannst es perfekt: als gekonnt markieren.</p>
                  <p>Falsch? Schreib das Wort einmal richtig ab und wähle dann. Bei einem Tippfehler kannst du die Phase behalten.</p>
                </>}
              />
            </div>
          </div>
        </Section>

        <Section icon="🗂" title={<Tx en="Vocabulary tabs" de="Vokabel-Tabs" />}>
          <div className="space-y-2 text-sm text-gray-600">
            <Tx
              en={<>
                <div>
                  <p className="font-semibold text-gray-800">Learn</p>
                  <p>Introduces 20 new words you haven&apos;t seen yet. Use <strong>Topic</strong> to learn one area at a time (food, family, travel, verbs …) – each topic shows how much of it you&apos;ve seen.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Ask 🇩🇪 → 🇮🇹 / 🇮🇹 → 🇩🇪 / Mixed</p>
                  <p>Choose which side of the card you&apos;re asked. Target language → German trains recognition, German → target language trains actively using the word. Mixed (the default) picks at random per card.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Review</p>
                  <p>Words that are due for review today. Do this before learning new words.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Words</p>
                  <p>All words you&apos;ve ever seen, with their current phase and next review date.</p>
                </div>
              </>}
              de={<>
                <div>
                  <p className="font-semibold text-gray-800">Lernen</p>
                  <p>Bringt dir 20 neue Wörter bei, die du noch nicht gesehen hast. Mit <strong>Thema</strong> lernst du einen Bereich nach dem anderen (Essen, Familie, Reisen, Verben …) – bei jedem Thema siehst du, wie viel du schon kennst.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Abfrage 🇩🇪 → 🇮🇹 / 🇮🇹 → 🇩🇪 / Gemischt</p>
                  <p>Wähle, welche Seite der Karte abgefragt wird. Fremdsprache → Deutsch trainiert das Verstehen, Deutsch → Fremdsprache das aktive Benutzen. Gemischt (Standard) entscheidet pro Karte zufällig.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Wiederholen</p>
                  <p>Wörter, die heute fällig sind. Am besten vor neuen Wörtern erledigen.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Wörter</p>
                  <p>Alle Wörter, die du je gesehen hast, mit Phase und nächstem Wiederholungstermin.</p>
                </div>
              </>}
            />
          </div>
        </Section>

        <Section icon="🔤" title={<Tx en="Verbs" de="Verben" />}>
          <P>
            <Tx
              en={<>Practice conjugations. Each session shows a verb and asks you to fill in all forms for the chosen tenses. Your accuracy is tracked per verb and per tense; verbs with recent mistakes are in the <strong>Errors</strong> tab. Verbs come back for review on their own: the day after a mistake, then after 3, 7, 14, 30 and 60 days as long as you get them right – tap <strong>Review due verbs</strong>.</>}
              de={<>Übe das Konjugieren. Jede Runde zeigt ein Verb, und du füllst alle Formen der gewählten Zeitformen aus. Deine Genauigkeit wird pro Verb und Zeitform gespeichert; Verben mit Fehlern findest du im Tab <strong>Fehler</strong>. Verben kommen von selbst zur Wiederholung: am Tag nach einem Fehler, danach nach 3, 7, 14, 30 und 60 Tagen, solange du sie richtig hast – tippe auf <strong>Fällige Verben wiederholen</strong>.</>}
            />
          </P>
          <P>
            <Tx
              en={<>Choose which tenses to practise at the top of the page – all tenses up to B1 (each chip shows its level). Beginner profiles start with the present tense only. Accents don&apos;t matter when checking, and for verbs with <em>essere</em>/<em>être</em> both endings count (e.g. <em>sono andato/a</em>, <em>je suis allé(e)</em>).</>}
              de={<>Oben auf der Seite wählst du die Zeitformen – alle bis B1 (jede zeigt ihr Niveau). Anfänger-Profile starten nur mit dem Präsens. Akzente zählen beim Prüfen nicht, und bei Verben mit <em>essere</em>/<em>être</em> gelten beide Endungen (z. B. <em>sono andato/a</em>, <em>je suis allé(e)</em>).</>}
            />
          </P>
        </Section>

        <Section icon="📘" title={<Tx en="Grammar" de="Grammatik" />}>
          <P>
            <Tx
              en={<><strong>Exercises</strong>: 34 topics covering the grammar from A1 to B1, grouped by level – from articles and plural up to the subjunctive, pronouns and if-clauses. Each topic opens with a short rule and examples; then fill in the gaps – by choosing or typing. Grammar answers count for the race like verbs (half a point each).</>}
              de={<><strong>Übungen</strong>: 34 Themen für die Grammatik von A1 bis B1, nach Niveau gruppiert – von Artikeln und Mehrzahl bis zu Konjunktiv, Pronomen und Bedingungssätzen. Jedes Thema beginnt mit einer kurzen Regel und Beispielen; dann füllst du die Lücken – per Auswahl oder Tippen. Grammatik zählt im Rennen wie Verben (je ein halber Punkt).</>}
            />
          </P>
          <P>
            <Tx
              en={<><strong>Lessons</strong>: short explanations in German with examples to listen to. Italian has 29 lessons from A1 to B1; every exercise topic links to its lesson.</>}
              de={<><strong>Lektionen</strong>: kurze Erklärungen auf Deutsch mit Beispielen zum Anhören. Italienisch hat 29 Lektionen von A1 bis B1; jedes Übungsthema verlinkt auf seine Lektion.</>}
            />
          </P>
        </Section>

        <Section icon="👤" title={<Tx en="Profiles & app language" de="Profile & App-Sprache" />}>
          <P>
            <Tx
              en={<>Each profile has its own progress, saved in the cloud and synced across your devices. Tap <strong>Switch Profile</strong> in the sidebar (or under ☰ More on mobile) to change who is using the app.</>}
              de={<>Jedes Profil hat seinen eigenen Fortschritt, in der Cloud gespeichert und auf all deinen Geräten gleich. Mit <strong>Profil wechseln</strong> in der Seitenleiste (oder unter ☰ Mehr auf dem Handy) wechselst du, wer die App benutzt.</>}
            />
          </P>
          <P>
            <Tx
              en={<>The app&apos;s own texts can be shown in <strong>English or German</strong> – switch with 🇬🇧 / 🇩🇪 in the sidebar, under ☰ More or on the profile and language pages. The choice is saved per device.</>}
              de={<>Die Texte der App gibt es auf <strong>Englisch oder Deutsch</strong> – umschalten mit 🇬🇧 / 🇩🇪 in der Seitenleiste, unter ☰ Mehr oder auf der Profil- und Sprachauswahl. Die Wahl gilt pro Gerät.</>}
            />
          </P>
        </Section>

        <Section icon="🌍" title={<Tx en="Languages" de="Sprachen" />}>
          <P>
            <Tx
              en={<>After choosing your profile you pick a language: 🇮🇹 Italian, 🇪🇸 Spanish or 🇫🇷 French. Each language has its own level (Beginner A1 or Intermediate B1), its own progress and its own race. Tap <strong>Switch Language</strong> in the sidebar (or the flag under ☰ More on mobile) to change it or your level.</>}
              de={<>Nach dem Profil wählst du die Sprache: 🇮🇹 Italienisch, 🇪🇸 Spanisch oder 🇫🇷 Französisch. Jede Sprache hat ihr eigenes Niveau (Anfänger A1 oder Fortgeschritten B1), ihren eigenen Fortschritt und ihr eigenes Rennen. Mit <strong>Sprache wechseln</strong> in der Seitenleiste (oder der Flagge unter ☰ Mehr) änderst du Sprache oder Niveau.</>}
            />
          </P>
        </Section>
      </div>
    </main>
  );
}
