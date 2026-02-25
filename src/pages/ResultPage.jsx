import Button from "../components/Button";

export default function ResultPage({ result, onRestart }) {
  if (!result) return <p>Помилка: немає результату</p>;

  return (
    <div className="page result-page">
      <h2>{result.message}</h2>

      <p><b>Слово:</b> {result.word}</p>
      <p><b>Помилок:</b> {result.wrongCount}</p>
      <p><b>Витрачено часу:</b> {result.timeUsed} сек</p>
      <p><b>Спроб залишилось:</b> {result.attemptsLeft}</p>

      <Button onClick={onRestart}>Грати знову</Button>
    </div>
  );
}
