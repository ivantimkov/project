export default function HangmanFigure({ errors }) {
  const parts = [
    "👤", // голова
    "🦴", // тулуб
    "💪", // ліва рука
    "💪", // права рука
    "🦵", // ліва нога
    "🦵", // права нога
    "💀"  // для приколу
  ];

  return (
    <div className="hangman-figure">
      {parts.map((p,i) => (
        <span key={i} style={{ opacity: i < errors ? 1 : 0.1, marginRight:2 }}>{p}</span>
      ))}
    </div>
  );
}
