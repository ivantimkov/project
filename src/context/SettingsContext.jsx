import React, { createContext, useState, useEffect } from 'react';

/**
 * Контекст для керування налаштуваннями гри.
 * @type {React.Context}
 */
export const SettingsContext = createContext();

/**
 * Стандартні налаштування гри (Difficulty, Elements, Speed).
 * @constant
 * @type {Object}
 * @property {string} difficulty - Рівень складності (easy, medium, hard).
 * @property {number} elements - Кількість елементів для гри.
 * @property {number} speed - Швидкість ігрового процесу (1-5).
 */
const DEFAULTS = { difficulty: 'easy', elements: 6, speed: 2 };

/**
 * Провайдер контексту налаштувань.
 * Забезпечує збереження налаштувань у LocalStorage та їх синхронізацію.
 * * @component
 * @param {Object} props - Властивості провайдера.
 * @param {React.ReactNode} props.children - Дочірні компоненти, що матимуть доступ до контексту.
 * @returns {JSX.Element} Провайдер із об'єктом { settings, setSettings }.
 */
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
    try { 
      localStorage.setItem('hangman_settings', JSON.stringify(settings)); 
    } catch(e) {}
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}