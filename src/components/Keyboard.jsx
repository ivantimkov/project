/**
 * Віртуальна клавіатура для гри.
 * @component
 * @param {Object} props - Властивості компонента.
 * @param {function} props.onGuess - Функція обробки натискання літери.
 * @param {string[]} props.guessed - Масив вгаданих літер.
 * @param {string[]} props.wrong - Масив невірних літер.
 * @returns {JSX.Element} Сітка кнопок з літерами українського алфавіту.
 */
export default function Keyboard({ onGuess, guessed, wrong }) {
  const letters =
    "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ".split("");

  return (
    <div className="keyboard">
      {letters.map((l) => {
        const disabled = guessed.includes(l) || wrong.includes(l);

        return (
          <button
            key={l}
            className={`key ${disabled ? "disabled" : ""}`}
            onClick={() => onGuess(l)}
            disabled={disabled}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
