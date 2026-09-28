'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Profile, getProfile, levelFor, isBeginner, PROFILE_STORAGE_KEY } from './profiles';
import { Lang, LANG_STORAGE_KEY, isLang } from './lang';
import { getProfiles } from './storage';

const PROFILE_EVENT = 'italienisch-profile-changed';

// Once per page load, refresh the cached profile list in the background so a
// profile deleted (or a level changed) on another device is noticed here too.
let synced = false;

function storedLang(): Lang | null {
  const v = localStorage.getItem(LANG_STORAGE_KEY);
  return isLang(v) ? v : null;
}

// Active profile + language on this device (localStorage), synced across tabs and
// components. `lang` is null until a language has been picked.
export function useProfile() {
  const [profile, setProfileState] = useState<Profile | null>(null);
  const [lang, setLangState] = useState<Lang | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem(PROFILE_STORAGE_KEY);
    const l = storedLang();
    const cached = id ? getProfile(id) : null;
    setProfileState(cached);
    setLangState(l);
    if (id && (!cached || (l && !levelFor(cached, l)))) {
      // A profile (or a level) set up on another device that this one hasn't cached
      // yet — fetch before reporting ready, so pages don't bounce to a picker.
      getProfiles().then(() => {
        setProfileState(getProfile(id));
        setReady(true);
      });
    } else {
      setReady(true);
      if (!synced) {
        synced = true;
        getProfiles().then(() => window.dispatchEvent(new Event(PROFILE_EVENT)));
      }
    }

    function sync() {
      const newId = localStorage.getItem(PROFILE_STORAGE_KEY);
      setProfileState(newId ? getProfile(newId) : null);
      setLangState(storedLang());
    }

    window.addEventListener(PROFILE_EVENT, sync);
    return () => window.removeEventListener(PROFILE_EVENT, sync);
  }, []);

  function notify() {
    window.dispatchEvent(new Event(PROFILE_EVENT));
  }

  function setProfile(id: string) {
    localStorage.setItem(PROFILE_STORAGE_KEY, id);
    setProfileState(getProfile(id));
    notify();
  }

  function clearProfile() {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    setProfileState(null);
    notify();
  }

  function setLang(l: Lang) {
    localStorage.setItem(LANG_STORAGE_KEY, l);
    setLangState(l);
    notify();
  }

  // Re-read the profile from the local cache (e.g. after its level changed).
  function reloadProfile() {
    notify();
  }

  return { profile, lang, setProfile, clearProfile, setLang, reloadProfile, ready };
}

// For practice pages: the active profile, language and level. Sends the learner
// to the profile picker / language picker when either is missing. `ready` is true
// only once all of them are known.
export function useLearner() {
  const { profile, lang, ready } = useProfile();
  const router = useRouter();
  const complete = !!profile && !!lang && !!levelFor(profile, lang);

  useEffect(() => {
    if (!ready || complete) return;
    router.push(profile ? '/sprache' : '/profile');
  }, [ready, complete, profile, router]);

  const l: Lang = lang ?? 'it';
  return {
    profile: complete ? profile : null,
    lang: l,
    beginner: isBeginner(profile, l),
    ready: ready && complete,
  };
}
