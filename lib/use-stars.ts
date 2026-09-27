'use client';

import { useState, useEffect } from 'react';
import { getStars } from './storage';
import { useProfile } from './use-profile';

// App-wide ⭐ counts (months won) per user id in the active language's race.
// Fetched on mount and whenever the language changes; the race resets monthly so
// this rarely changes within a session.
export function useStars(): Record<string, number> {
  const { lang } = useProfile();
  const [stars, setStars] = useState<Record<string, number>>({});

  useEffect(() => {
    let alive = true;
    getStars().then(r => {
      if (alive) setStars(r.stars);
    });
    return () => {
      alive = false;
    };
  }, [lang]);

  return stars;
}
