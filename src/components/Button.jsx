/**
 * Універсальний компонент кнопки.
 * @component
 * @param {Object} props - Властивості компонента.
 * @param {function} props.onClick - Функція, що викликається при натисканні.
 * @param {React.ReactNode} props.children - Вміст кнопки (текст або іконка).
 * @param {string} [props.type] - Тип кнопки (button, submit, reset).
 * @returns {JSX.Element} Елемент кнопки з класом 'btn'.
 */
export default function Button({ onClick, children, type = "button" }) {
  return (
    <button type={type} className="btn" onClick={onClick}>
      {children}
    </button>
  );
}