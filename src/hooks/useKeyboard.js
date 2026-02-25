import { useCallback } from "react";

/**
 * Рядок з усіма літерами українського алфавіту для валідації введення.
 * @constant
 * @type {string}
 */
const UA_LETTERS = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

/**
 * Кастомний хук для обробки подій клавіатури.
 * Слухає натискання клавіш і викликає функцію вгадування, якщо натиснута українська літера.
 * * @function useKeyboard
 * @param {Function} handleGuess - Коллбек-функція, яка приймає літеру та оновлює стан гри.
 * @returns {Object} Об'єкт, що містить:
 * @returns {Function} .onKeyPress - Обробник події натискання клавіші (KeyboardEvent).
 */
export function useKeyboard(handleGuess) {
  /**
   * Функція-обробник, яка валідує натиснуту клавішу.
   * @type {Function}
   */
  const onKeyPress = useCallback(
    (event) => {
      const letter = event.key.toUpperCase();
      if (UA_LETTERS.includes(letter)) {
        handleGuess(letter);
      }
    },
    [handleGuess]
  );

  return { onKeyPress };
}