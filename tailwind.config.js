/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 98%)',
      'very-light-gray': 'hsl(236, 33%, 92%)',
      'dark-blue': 'hsl(235, 24%, 19%)',
      'very-dark-blue': 'hsl(235, 21%, 11%)',
      'light-gray': 'hsl(236, 9%, 61%)',
      'bright-blue': 'hsl(220, 98%, 61%)',
      gradiant: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',

      // 'light-dark-grayish-blue': 'hsl(236, 9%, 61%)',
      // 'light-light-grayish-blue': 'hsl(233, 11%, 84%)',
      // 'light-very-dark-grayish-blue': 'hsl(235, 19%, 35%)',

      // 'dark-very-very-dark-grayish-blue': 'hsl(237, 14%, 26%)',
      // 'dark-very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
      // 'dark-dark-grayish-blue': 'hsl(234, 11%, 52%)',
    },
    fontWeight: {
      normal: 400,
      medium: 600,
      bold: 700,
    },
    fontFamily: {
      'josefin-sans': ['Josefin Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
