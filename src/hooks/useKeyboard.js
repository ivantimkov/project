import { useCallback } from "react";

const UA_LETTERS = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

export function useKeyboard(handleGuess) {
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
