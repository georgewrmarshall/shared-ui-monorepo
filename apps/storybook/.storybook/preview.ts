import { Preview, Renderer } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { withDefaultBackground } from './decorator';
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
  decorators: [
    withThemeByDataAttribute<Renderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    withDefaultBackground,
  ],
};

export default preview;
