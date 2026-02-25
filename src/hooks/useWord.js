import { useState, useEffect } from "react";

const WORDS = ["ПРОГРАМА","РЕАКТ","КОМПОНЕНТ","ШИБЕНИЦЯ","КІБЕРПАНК","ІНТЕРФЕЙС","ФУНКЦІЯ","ЗМІННА","ЛАБА"];

export function useWord({ elements } = {}) {
  const [word, setWord] = useState("");

  useEffect(() => {
    let pool = WORDS;
    if (elements) {
      // елементи можуть бути рядком, перетворимо на число
      const filtered = WORDS.filter(w => w.length === Number(elements));
      pool = filtered.length ? filtered : WORDS; // fallback, якщо немає слів потрібної довжини
    }

    const randomWord = pool[Math.floor(Math.random() * pool.length)];
    setWord(randomWord);
  }, [elements]);

  return { word };
}
