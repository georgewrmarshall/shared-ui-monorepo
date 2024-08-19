/** @type {import('tailwindcss').Config} */

const tailwindPreset = require('@metamask/tailwind-preset').default;
console.log(tailwindPreset);
module.exports = {
  // Not sure why we have to import this preset as a const for it to work
  // This should also work but it does not
  // presets: [require('@metamask/tailwind-preset')],
  presets: [tailwindPreset],
  content: [
    './.storybook/decorator.tsx',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: ['[data-theme="dark"]'],
  // ...require('@metamask/tailwind-preset').theme,
};
