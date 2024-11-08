/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      colors:{
        "brown-100": "#db995a",
        "brown-200": "#dc851f",
        "green-100": "#636940",
      },
    },
  },
  plugins: [],
};

