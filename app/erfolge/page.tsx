'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  loadVocabStrict,
  getStats,
  getRace,
  getSentenceProgress,
  getConjugationRecords,
} from '@/lib/storage';
import { VocabEntry, ProgressStats, RaceResponse } from '@/lib/types';
import { computeBadges } from '@/lib/achievements';
import { useLearner } from '@/lib/use-profile';
import { dataUserId } from '@/lib/lang';
import Achievements from '@/components/Achievements';
import { useT } from '@/lib/ui-lang';
import Celebration from '@/components/Celebration';

import { effectiveVocabLevel, VOCAB_KNOWN_LEVEL } from '@/lib/srs';

function levelOf(v: VocabEntry): number {
  const raw = v.level !== undefined ? v.level : (v.status === 'bekannt' ? VOCAB_KNOWN_LEVEL : 1);
  return effectiveVocabLevel(raw, v.nextReview);
}

export default function ErfolgePage() {
  const { profile, lang, ready } = useLearner();
  const t = useT();

  const [vocab, setVocab] = useState<VocabEntry[]>([]);
  const [stats, setStats] = useState<ProgressStats | null>(null);
  const [race, setRace] = useState<RaceResponse | null>(null);
  const [sentencesDone, setSentencesDone] = useState(0);
  const [verbsDone, setVerbsDone] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [celebration, setCelebration] = useState<string | null>(null);
  const [newIds, setNewIds] = useState<Set<string>>(new Set());
  const seeded = useRef(false);

  const refresh = useCallback(async () => {
    const [v, s, r, sent, verbs] = await Promise.all([
      loadVocabStrict().catch(() => [] as VocabEntry[]),
      getStats().catch(() => null),
      getRace().catch(() => null),
      getSentenceProgress().catch(() => []),
      getConjugationRecords().catch(() => []),
    ]);
    setVocab(v);
    setStats(s);
    setRace(r);
    setSentencesDone(sent.length);
    setVerbsDone(verbs.length);
    setLoaded(true);
  }, []);
  useEffect(() => { refresh(); }, [refresh]);

  // Detect newly-unlocked badges once data is loaded (vs. acknowledged set).
  useEffect(() => {
    if (!loaded || seeded.current || !profile || typeof localStorage === 'undefined') return;
    seeded.current = true;
    const bestDay = stats?.daily ? Math.max(0, ...Object.values(stats.daily)) : 0;
    const daysActive = stats?.daily ? Object.values(stats.daily).filter(n => n > 0).length : 0;
    const ids = computeBadges({
      wordsKnown: vocab.filter(v => levelOf(v) >= VOCAB_KNOWN_LEVEL).length,
      wordsStarted: vocab.length,
      streak: stats?.streak ?? 0,
      stars: race?.stars?.[profile.id] ?? 0,
      sentencesDone,
      verbsDone,
      bestDay,
      lifetimeCards: stats?.totalAnswers ?? 0,
      correctAnswers: stats?.correctAnswers ?? 0,
      daysActive,
      inTop5: !!race?.highscores.some(h => h.name === profile.name),
    }).filter(b => b.unlocked).map(b => b.id);
    const k = `italienisch_badges_${dataUserId(profile.id, lang)}`;
    const raw = localStorage.getItem(k);
    if (raw === null) {
      localStorage.setItem(k, JSON.stringify(ids)); // first visit: seed silently
      return;
    }
    const acked = new Set(JSON.parse(raw) as string[]);
    const fresh = ids.filter(id => !acked.has(id));
    if (fresh.length > 0) {
      localStorage.setItem(k, JSON.stringify(ids));
      setNewIds(new Set(fresh));
      setCelebration(
        fresh.length === 1
          ? t('Achievement unlocked! 🏆', 'Erfolg freigeschaltet! 🏆')
          : t(`${fresh.length} achievements unlocked! 🏆`, `${fresh.length} Erfolge freigeschaltet! 🏆`),
      );
    }
  }, [loaded, profile, lang, vocab, stats, race, sentencesDone, verbsDone, t]);

  if (!ready || !profile) {
    return (
      <main className="md:ml-56 min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400 text-sm">{t('Loading…', 'Lädt …')}</p>
      </main>
    );
  }

  const bestDay = stats?.daily ? Math.max(0, ...Object.values(stats.daily)) : 0;
  const daysActive = stats?.daily ? Object.values(stats.daily).filter(n => n > 0).length : 0;
  const badges = computeBadges({
    wordsKnown: vocab.filter(v => levelOf(v) >= VOCAB_KNOWN_LEVEL).length,
    wordsStarted: vocab.length,
    streak: stats?.streak ?? 0,
    stars: race?.stars?.[profile.id] ?? 0,
    sentencesDone,
    verbsDone,
    bestDay,
    lifetimeCards: stats?.totalAnswers ?? 0,
    correctAnswers: stats?.correctAnswers ?? 0,
    daysActive,
    inTop5: !!race?.highscores.some(h => h.name === profile.name),
  });
  const unlocked = badges.filter(b => b.unlocked);

  return (
    <main className="md:ml-56 min-h-screen bg-gray-50 pb-24 md:pb-8">
      <div className="max-w-xl mx-auto p-5 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span>🏆</span> {t('Achievements', 'Erfolge')}
          </h1>
          <p className="text-gray-400 text-sm mt-0.5">
            {t(
              `${unlocked.length} of ${badges.length} unlocked. Keep learning to earn more!`,
              `${unlocked.length} von ${badges.length} freigeschaltet. Lern weiter, um mehr zu holen!`,
            )}
          </p>
        </div>

        {!loaded ? (
          <p className="text-gray-400 text-sm text-center py-6">{t('Loading…', 'Lädt …')}</p>
        ) : (
          <Achievements badges={badges} newIds={newIds} />
        )}
      </div>

      <Celebration message={celebration} onDone={() => setCelebration(null)} />
    </main>
  );
}
