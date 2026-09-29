'use client';

export default function HelpPage() {
  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">How it works</h1>
          <p className="text-gray-400 text-sm mt-0.5">A quick guide to the app</p>
        </div>

        {/* Install */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <span>📲</span> Install as an app
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Put the app on your home screen – it then opens full screen with its own icon, like a normal app.
            Updates arrive automatically.
          </p>
          <div className="space-y-1.5 text-sm text-gray-600">
            <p><strong>iPhone (Safari):</strong> tap the Share button <span className="whitespace-nowrap">(□↑)</span> → <em>Add to Home Screen</em> → <em>Add</em>.</p>
            <p><strong>Android (Chrome):</strong> tap the menu <strong>⋮</strong> → <em>Install app</em> (or <em>Add to Home screen</em>).</p>
            <p><strong>Computer (Chrome/Edge):</strong> click the install icon at the right of the address bar.</p>
          </div>
        </section>

        {/* Today */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <span>☀️</span> Today &amp; My mistakes
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Today&apos;s round</strong> mixes everything in about 10 minutes: 10 words (due reviews first, then
            new ones), 5 verb forms, 5 grammar sentences, 2 sentences to translate and 1 dictation. It&apos;s the easiest
            way to practise every day without having to decide what to do.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>My mistakes</strong> collects everything you answered wrong – in every exercise. Practise them on
            their own (all or one kind); once you get a mistake right twice in a row, it disappears.
          </p>
        </section>

        {/* Audio */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <span>🔊</span> Listening
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Tap 🔊 next to a word, sentence, verb table or grammar example to hear it (🐢 = slowly). The voice comes
            from your device – if it sounds odd, install a better Italian/Spanish/French voice in your phone&apos;s or
            computer&apos;s speech settings. On the Vocabulary page you can switch on <strong>Read words aloud
            automatically</strong>.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Dictation</strong> (Sentences → 🎧): listen to a sentence and write it down. You get feedback word
            by word; accents and punctuation don&apos;t count as mistakes.
          </p>
        </section>

        {/* Reading */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <span>📰</span> Reading
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Short stories and dialogues from A1 to B1. Tap any word to see its meaning (verb forms show their
            infinitive) and add it to your words with one tap. Listen to the whole text, show the German translation
            per paragraph, then answer a few questions – each answered question counts 2 race points.
          </p>
        </section>

        {/* Vocabulary */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <span>📖</span> Vocabulary
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            The app teaches you words using <strong>spaced repetition</strong>: the more confidently you know a word,
            the longer before it appears again. Each word has a phase (1–7). Level 8 means you know it.
          </p>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Learning phases</h3>
            <div className="space-y-1.5">
              {[
                { label: 'Phase 1', color: 'bg-red-100 text-red-700', desc: 'New — review again tomorrow' },
                { label: 'Phase 2', color: 'bg-orange-100 text-orange-700', desc: 'Review in 3 days' },
                { label: 'Phase 3', color: 'bg-amber-100 text-amber-700', desc: 'Review in 7 days' },
                { label: 'Phase 4', color: 'bg-blue-100 text-blue-700', desc: 'Review in 14 days' },
                { label: 'Phase 5', color: 'bg-indigo-100 text-indigo-700', desc: 'Review in 30 days' },
                { label: 'Phase 6', color: 'bg-violet-100 text-violet-700', desc: 'Review in 60 days' },
                { label: 'Phase 7', color: 'bg-purple-100 text-purple-700', desc: 'Review in 90 days' },
                { label: 'Known', color: 'bg-green-100 text-green-700', desc: 'No more reviews needed' },
              ].map(({ label, color, desc }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-0.5 rounded-md font-semibold shrink-0 ${color}`}>{label}</span>
                  <span className="text-sm text-gray-500">{desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">After checking answers</h3>
            <div className="space-y-1.5 text-sm text-gray-600">
              <p><span className="font-semibold text-amber-700">Unsure</span> — you got it right but weren&apos;t confident. Stay in the current phase and review again after its interval.</p>
              <p><span className="font-semibold text-green-700">Sure</span> — confident. Move to the next phase.</p>
              <p><span className="font-semibold text-green-800">Known ✓</span> — you know it perfectly. Skip directly to Known.</p>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <span>🗂</span> Vocabulary tabs
          </h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-800">Learn</p>
              <p>Introduces 20 new words you haven&apos;t seen yet. Start here every day. Use <strong>Topic</strong>
                to learn one area at a time (food, family, travel, verbs …) – each topic shows how much of it you&apos;ve seen.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Ask 🇩🇪 → 🇮🇹 / 🇮🇹 → 🇩🇪 / Mixed</p>
              <p>Choose which side of the card you&apos;re asked. Italian/Spanish → German trains recognition,
                German → Italian/Spanish trains actively using the word. Mixed (the default) picks at random per card.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Review</p>
              <p>Words that are due for review today. Do this before learning new words.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Words</p>
              <p>All words you&apos;ve ever seen, with their current phase and next review date. Use it to track your progress.</p>
            </div>
          </div>
        </section>

        {/* Verbs */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <span>🔤</span> Verbs
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Practice conjugations. Each session shows a verb and asks you to fill in all forms for the relevant tenses.
            Your accuracy is tracked per verb and per tense. Verbs with recent mistakes are shown in the <strong>Errors</strong> tab.
            Verbs come back for review on their own: the day after a mistake, then after 3, 7, 14, 30 and 60 days as long
            as you get them right – tap <strong>Review due verbs</strong>.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Choose which tenses to practise at the top of the page – all tenses up to B1 (each chip shows its level).
            Italian: presente, passato prossimo, imperfetto, futuro, imperativo, condizionale, congiuntivo. Spanish:
            presente, perfecto, indefinido, imperfecto, futuro, imperativo, condicional, subjuntivo. French: présent,
            passé composé, imparfait, futur, impératif, conditionnel, subjonctif. Beginner profiles
            start with the present tense only. Accents don&apos;t matter when checking, and for verbs with <em>essere</em>
            both endings count (e.g. <em>sono andato/a</em>, <em>je suis allé(e)</em>).
          </p>
        </section>

        {/* Grammar */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <span>📘</span> Grammar
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Exercises</strong>: 34 topics covering the grammar from A1 to B1, grouped by level – from articles
            and plural up to congiuntivo, pronouns and se-clauses. Each topic opens with a short rule and examples;
            then fill in the gaps – by choosing or typing. Each answer shows a short hint, and your last score and
            mistakes are saved per topic. Grammar answers count for the race like verbs (half a point each).
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Lessons</strong>: short explanations in German with examples to listen to. Italian has 29 lessons
            from A1 to B1 (from pronunciation and articles to congiuntivo and se-clauses); every exercise topic links
            to its lesson. Beginner profiles also get an ordered starter set of words first.
          </p>
        </section>

        {/* Profiles */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <span>👤</span> Profiles
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Each profile has its own progress stored separately. Tap <strong>Switch Profile</strong> in the sidebar (or the 👤 tab on mobile) to change who is using the app.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Progress is saved to the cloud, so it syncs across all your devices automatically.
          </p>
        </section>

        {/* Languages */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <span>🌍</span> Languages
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            After choosing your profile you pick a language: 🇮🇹 Italian, 🇪🇸 Spanish or 🇫🇷 French. Each language has
            its own level (Beginner A1 or Intermediate B1), its own progress and its own race. Tap{' '}
            <strong>Switch Language</strong> in the sidebar (or the flag under ☰ More on mobile) to change it
            or your level.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            All three languages have the full set: vocabulary with topics, sentences, verbs in every tense up to B1
            and grammar exercises plus lessons.
          </p>
        </section>
      </div>
    </main>
  );
}
