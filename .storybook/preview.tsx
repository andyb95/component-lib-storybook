import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    a11y: {
      test: 'todo',
    },
  },
  globalTypes: {
    theme: {
      description: 'Color theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as string
      return (
        <div
          className={theme === 'dark' ? 'dark' : ''}
          style={{
            minHeight: '100vh',
            padding: '2rem',
            backgroundColor: theme === 'dark' ? 'oklch(0.145 0 0)' : 'oklch(1 0 0)',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
}

export default preview
