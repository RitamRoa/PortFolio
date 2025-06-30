/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#5694ff',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
        },
        purple: {
          400: '#a78bfa',
          500: '#8b5cf6',
        },
        gray: {
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        display: ['Space Mono', 'monospace'],
      },
      animation: {
        bounce: 'bounce 1.5s infinite',
        'matrix-text': 'matrix 20s linear infinite',
      },
      keyframes: {
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};