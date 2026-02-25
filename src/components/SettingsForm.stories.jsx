import SettingsForm from './SettingsForm';
import { SettingsContext } from '../context/SettingsContext';
import { useState } from 'react';

export default {
  title: 'Components/SettingsForm',
  component: SettingsForm,
  parameters: {
    layout: 'centered',
  },
  // Додаємо декоратор, щоб Storybook знав, як працювати з контекстом
  decorators: [
    (Story) => {
      const [settings, setSettings] = useState({
        difficulty: 'medium',
        elements: 6,
        speed: 3
      });
      return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
          <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
            <Story />
          </div>
        </SettingsContext.Provider>
      );
    },
  ],
  argTypes: {
    onClose: { action: 'Form closed' },
  },
};

// Варіація 1: Стандартний вигляд
export const Default = {
  args: {},
};

// Варіація 2: Форма всередині модального вікна (імітація)
export const InModal = {
  decorators: [
    (Story) => (
      <div style={{ 
        border: '2px solid #333', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        borderRadius: '12px' 
      }}>
        <Story />
      </div>
    )
  ],
  args: {},
};