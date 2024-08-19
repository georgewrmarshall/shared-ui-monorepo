import { Preview } from '@storybook/react';
import '../tailwind.css';
import '../../../node_modules/@metamask/design-tokens/dist/styles.css'; // Not working currently check node_modules

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
