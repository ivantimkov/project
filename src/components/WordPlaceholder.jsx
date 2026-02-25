/**
 * Відображення зашифрованого слова.
 * @component
 * @param {Object} props - Властивості компонента.
 * @param {string} props.word - Загадане слово.
 * @param {string[]} props.guessedLetters - Масив літер, які вже вгадав користувач.
 * @returns {JSX.Element} Рядок з літерами або символами підкреслення.
 */
export default function WordPlaceholder({ word, guessedLetters }) {
  return (
    <div className="word-placeholder">
      {word.split("").map((letter, index) => (
        <span key={index} className="char">
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
}
