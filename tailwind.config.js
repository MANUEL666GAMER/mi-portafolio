/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esto le dice a Tailwind que busque en todos tus archivos
  ],
  darkMode: 'class', // Verifica que esto esté aquí para el modo oscuro
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6366f1',
          secondary: '#a855f7',
          accent: '#2dd4bf',
        }
      },
    },
  },
  plugins: [],
}