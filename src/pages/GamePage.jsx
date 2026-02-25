import { useState, useEffect, useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { useWord } from "../hooks/useWord";
import { useGameLogic } from "../hooks/useGameLogic";
import { useKeyboard } from "../hooks/useKeyboard";
import HangmanFigure from "../components/HangmanFigure";
import WordPlaceholder from "../components/WordPlaceholder";
import Keyboard from "../components/Keyboard";
import Button from "../components/Button";

export default function GamePage({ onFinish }) {
  const { settings } = useContext(SettingsContext);
  const { word } = useWord({ elements: settings.elements });

  const {
    guessedLetters,
    wrongLetters,
    handleGuess,
    isWinner,
    isLoser,
    attemptsLeft,
  } = useGameLogic(word, { difficulty: settings.difficulty });

  const { onKeyPress } = useKeyboard(handleGuess);

  // ТАЙМЕР
  const totalTime = settings.speed * 10;  
  const [timeLeft, setTimeLeft] = useState(totalTime);

  // Зменшення таймера
  useEffect(() => {
    if (isWinner || isLoser) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isWinner, isLoser]);

  // Коли час вийшов → завершення гри
  useEffect(() => {
    if (timeLeft <= 0) finishGame("Час вичерпано!");
  }, [timeLeft]);

  // Передає статистику
  const finishGame = (message) => {
    const stats = {
      message,
      word,
      attemptsLeft,
      wrongCount: wrongLetters.length,
      timeLeft,
      timeUsed: totalTime - timeLeft,
      difficulty: settings.difficulty,
      elements: settings.elements,
    };

    onFinish?.(stats);
  };

  // Перемога / поразка
  useEffect(() => {
    if (isWinner) finishGame("Перемога!");
    if (isLoser) finishGame("Поразка!");
  }, [isWinner, isLoser]);

  // Клавіатура
  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
    return () => window.removeEventListener("keydown", onKeyPress);
  }, [onKeyPress]);

  if (!word) return <p>Завантаження...</p>;

  return (
    <div className="page game-page">
      <HangmanFigure errors={wrongLetters.length} />

      <WordPlaceholder word={word} guessedLetters={guessedLetters} />

      <Keyboard onGuess={handleGuess} guessed={guessedLetters} wrong={wrongLetters} />

      <p>Спроб залишилось: {attemptsLeft}</p>
      <p>⏱ Час: {timeLeft} сек</p>

      <Button onClick={() => finishGame("Гру завершено")}>
        Завершити гру
      </Button>
    </div>
  );
}
