import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  // Налаштування контролів (Controls), щоб властивості конфігурувались
  argTypes: {
    onClick: { action: 'clicked' },
    children: { control: 'text' },
  },
};

// Варіація 1: Стандартна
export const Primary = {
  args: {
    children: 'Підтвердити',
  },
};

// Варіація 2: Попередження (зміна тексту)
export const Danger = {
  args: {
    children: 'Видалити все',
  },
};

// Варіація 3: Маленька з емодзі
export const IconButton = {
  args: {
    children: '🎮 Грати',
  },
};