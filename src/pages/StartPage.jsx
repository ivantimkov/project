import Button from "../components/Button";

export default function StartPage({ onStart, onOpenSettings }) {
  return (
    <div className="start-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginTop: 50 }}>
      <h1>Hangman</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 200 }}>
        <Button style={{ height: 50 }} onClick={onStart}>
          Почати гру
        </Button>

        <Button style={{ height: 50 }} onClick={onOpenSettings}>
          ⚙ Налаштування
        </Button>
      </div>
    </div>
  );
}
