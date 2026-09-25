'use client';

import { useState, useEffect } from 'react';
import { Profile, getProfile, PROFILE_STORAGE_KEY } from './profiles';
import { getProfiles } from './storage';

const PROFILE_EVENT = 'italienisch-profile-changed';

export function useProfile() {
  const [profile, setProfileState] = useState<Profile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem(PROFILE_STORAGE_KEY);
    const cached = id ? getProfile(id) : null;
    setProfileState(cached);
    if (id && !cached) {
      // A profile created in the app that this device hasn't cached yet — fetch the
      // list before reporting ready, so pages don't bounce to the profile picker.
      getProfiles().then(() => {
        setProfileState(getProfile(id));
        setReady(true);
      });
    } else {
      setReady(true);
    }

    function sync() {
      const newId = localStorage.getItem(PROFILE_STORAGE_KEY);
      setProfileState(newId ? getProfile(newId) : null);
    }

    window.addEventListener(PROFILE_EVENT, sync);
    return () => window.removeEventListener(PROFILE_EVENT, sync);
  }, []);

  function setProfile(id: string) {
    localStorage.setItem(PROFILE_STORAGE_KEY, id);
    setProfileState(getProfile(id));
    window.dispatchEvent(new Event(PROFILE_EVENT));
  }

  function clearProfile() {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    setProfileState(null);
    window.dispatchEvent(new Event(PROFILE_EVENT));
  }

  return { profile, setProfile, clearProfile, ready };
}
