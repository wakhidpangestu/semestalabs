/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          dark: '#0a0f1c',
          light: '#f5f7fb',
        },
        primary: {
          500: '#1e90ff',
          600: '#0b6bff',
        },
        accent: {
          cyan: '#00eaff',
          purple: '#6d5cff',
        },
        glass: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
