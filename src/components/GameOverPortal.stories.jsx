import GameOverPortal from './GameOverPortal';

export default {
  title: 'Components/GameOverPortal',
  component: GameOverPortal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClose: { action: 'onClose clicked' },
    onNext: { action: 'onNext clicked' },
    isOpen: { control: 'boolean' },
  },
};

// Варіація 1: Перемога
export const WinState = {
  args: {
    isOpen: true,
    stats: {
      message: 'Вітаємо! Ви вгадали слово "ПРОГРАМА"!',
    },
  },
};

// Варіація 2: Програш
export const LossState = {
  args: {
    isOpen: true,
    stats: {
      message: 'На жаль, спроби вичерпано. Це було слово "ЛАБА".',
    },
  },
};

// Варіація 3: Закрите вікно (тест логіки)
export const Closed = {
  args: {
    isOpen: false,
    stats: {
      message: 'Це повідомлення не повинно бути видно',
    },
  },
};