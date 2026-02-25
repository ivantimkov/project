import { useState, useMemo } from "react";

export function useGameLogic(word, { difficulty } = {}) {
  const maxAttemptsMap = { easy: 8, medium: 6, hard: 4 };
  const maxAttempts = maxAttemptsMap[difficulty] || 6;

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

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
