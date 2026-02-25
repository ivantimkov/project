import { useState, useEffect } from "react";

/**
 * Пул слів для гри.
 * @constant
 * @type {string[]}
 */
const WORDS = ["ПРОГРАМА","РЕАКТ","КОМПОНЕНТ","ШИБЕНИЦЯ","КІБЕРПАНК","ІНТЕРФЕЙС","ФУНКЦІЯ","ЗМІННА","ЛАБА"];

/**
 * Хук для вибору випадкового слова з можливістю фільтрації за довжиною.
 * @function useWord
 * @param {Object} [options={}] - Налаштування вибору слова.
 * @param {number|string} [options.elements] - Бажана довжина слова.
 * @returns {Object} Об'єкт, що містить:
 * @returns {string} .word - Вибране випадкове слово.
 */
export function useWord({ elements } = {}) {
  const [word, setWord] = useState("");

  useEffect(() => {
    let pool = WORDS;
    if (elements) {
      /**
       * Фільтруємо слова за кількістю символів, якщо вказано параметр elements.
       */
      const filtered = WORDS.filter(w => w.length === Number(elements));
      pool = filtered.length ? filtered : WORDS; // fallback
    }

    const randomWord = pool[Math.floor(Math.random() * pool.length)];
    setWord(randomWord);
  }, [elements]);

  return { word };
}