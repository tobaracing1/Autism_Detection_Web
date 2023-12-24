/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue': "#007EFF",
      'orange' : "#FF8100",
      'black' : "#1F1F1F",
      'white' : "#FFFFFF",
      'test': '#922828',
      'gray' : '#F3F3F3',
      'dark-gray' : "#AEAEAE",
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

