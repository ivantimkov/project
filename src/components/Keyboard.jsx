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
