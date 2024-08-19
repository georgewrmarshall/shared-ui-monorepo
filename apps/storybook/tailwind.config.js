/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require('@metamask/tailwind-preset')],
  content: [
    './.storybook/decorator.tsx',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: ['[data-theme="dark"]'],
};
