import React, { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

const DEFAULTS = { difficulty: 'easy', elements: 6, speed: 2 };

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try {
      const raw = localStorage.getItem('hangman_settings');
      return raw ? JSON.parse(raw) : DEFAULTS;
    } catch (e) {
      return DEFAULTS;
    }
  });

  useEffect(() => {
    try { localStorage.setItem('hangman_settings', JSON.stringify(settings)); } catch(e){}
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}