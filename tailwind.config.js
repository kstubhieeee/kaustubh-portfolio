/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#000000',
          100: '#0A0A0A',
          200: '#121212',
          300: '#1A1A1A',
          400: '#242424',
          500: '#2D2D2D',
        },
        'accent-pink': '#FF1CF7',
        'accent-purple': '#7928CA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cabinet Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};