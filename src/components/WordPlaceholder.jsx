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
