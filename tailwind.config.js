/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    container: {
      center: true,
    },
    colors: {
      white: 'hsl(0, 0%, 98%)',
      'light-gray': 'hsl(236, 9%, 61%)',
      'very-light-gray': 'hsl(233, 11%, 84%)',
      'light-blue': 'hsl(235, 19%, 35%)',
      'dark-blue': 'hsl(235, 24%, 19%)',
      'very-dark-blue': 'hsl(235, 21%, 11%)',
      'bright-blue': 'hsl(220, 98%, 61%)',
      'blue-sky': 'hsl(192, 100%, 67%)',
      pink: 'hsl(280, 87%, 65%)',

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
