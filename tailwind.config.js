/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'light-very-light-gray': 'hsl(0, 0%, 98%)',
      'light-very-light-grayish-blue': 'hsl(236, 33%, 92%)',
      'light-light-grayish-blue': 'hsl(233, 11%, 84%)',
      'light-dark-grayish-blue': 'hsl(236, 9%, 61%)',
      'light-very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
      'dark-very-dark-blue': 'hsl(235, 21%, 11%)',
      'dark-very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
      'dark-light-grayish-blue': 'hsl(234, 39%, 85%)',
      'dark-light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
      'dark-dark-grayish-blue': 'hsl(234, 11%, 52%)',
      'dark-very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
      'dark-very-very-dark-grayish-blue': 'hsl(237, 14%, 26%)',
      'bright-blue': 'hsl(220, 98%, 61%)',
      'check-background':
        'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
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
