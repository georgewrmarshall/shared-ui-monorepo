import { Preview } from '@storybook/react';
import 'tailwindcss/tailwind.css';
// import '../node_modules/@metamask/design-tokens/dist/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
