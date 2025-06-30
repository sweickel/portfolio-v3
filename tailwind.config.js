/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'bg-blue-100',
        secondary: 'bg-gray-700',
        accent: 'bg-orange-100',
        success: 'bg-green-100',
        background: 'bg-white',
      },
    },
  },
  plugins: [],
};
