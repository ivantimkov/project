import { useState, useMemo } from "react";

/**
 * Кастомний хук для керування основною логікою гри "Шибениця".
 * * @function useGameLogic
 * @param {string} word - Слово, яке потрібно відгадати.
 * @param {Object} [options={}] - Додаткові параметри гри.
 * @param {string} [options.difficulty='medium'] - Рівень складності (easy, medium, hard).
 * * @returns {Object} Об'єкт зі станом та методами гри:
 * @returns {string[]} .guessedLetters - Масив правильно вгаданих літер.
 * @returns {string[]} .wrongLetters - Масив помилкових літер.
 * @returns {Function} .handleGuess - Функція для обробки вибору літери користувачем.
 * @returns {boolean} .isWinner - Прапорець, що вказує на перемогу.
 * @returns {boolean} .isLoser - Прапорець, що вказує на програш.
 * @returns {number} .attemptsLeft - Кількість спроб, що залишилися.
 */
export function useGameLogic(word, { difficulty } = {}) {
  const maxAttemptsMap = { easy: 8, medium: 6, hard: 4 };
  const maxAttempts = maxAttemptsMap[difficulty] || 6;

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  /**
   * Обробляє введення літери та оновлює стан гри.
   * @param {string} letter - Літера, яку вибрав гравець.
   */
  const handleGuess = (letter) => {
    if (!word) return;
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) return;

    if (word.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
    } else {
      setWrongLetters((prev) => [...prev, letter]);
    }
  };

  const isWinner = word && word.split("").every((l) => guessedLetters.includes(l));
  const isLoser = wrongLetters.length >= maxAttempts;

  return {
    guessedLetters,
    wrongLetters,
    handleGuess,
    isWinner,
    isLoser,
    attemptsLeft: maxAttempts - wrongLetters.length,
  };
}