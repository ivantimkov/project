import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Модальне вікно завершення гри, реалізоване через React Portal.
 * @component
 * @param {Object} props - Властивості компонента.
 * @param {boolean} props.isOpen - Статус відображення модального вікна.
 * @param {function} props.onClose - Коллбек для закриття вікна.
 * @param {function} props.onNext - Коллбек для переходу до наступного туру.
 * @param {Object} props.stats - Об'єкт зі статистикою гри.
 * @param {string} props.stats.message - Текстове повідомлення результату.
 * @returns {React.Portal|null} Рендериться в document.body.
 */
export default function GameOverPortal({ isOpen, onClose, onNext, stats }) {
  if (!isOpen) return null;

  const modal = (
    <div className="modal-backdrop">
      <div className="modal-card">
        <h2>Гра завершена</h2>
        <p>Результати: {stats?.message || '—'}</p>
        <div style={{display:'flex', gap:8, marginTop:12}}>
          <button onClick={() => { if(onNext) onNext(); if(onClose) onClose(); }}>Наступний тур</button>
          <button onClick={() => { if(onClose) onClose(); if(window && window.location) window.location.reload(); }}>Почати заново</button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
}