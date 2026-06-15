/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background:      '#ffffff',
        surface:         '#fafafa',
        'surface-light': '#f5f0ee',
        border:          '#e7e0db',
        foreground:      '#1c1917',
        muted:           '#78716c',
        primary: {
          DEFAULT: '#92400e',   /* warm-stone / amber-800 */
          light:   '#b45309',
          dark:    '#78350f',
        },
        accent: '#ea580c',
      },
    },
  },
  plugins: [],
};
