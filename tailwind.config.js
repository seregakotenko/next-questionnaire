/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'white-smoke': '#fff0f0',
        'rainbow-indigo': '#202261',
        violet: '#643a9f',
        romance: '#eaeef7',
        'light-gray': '#e0e0e0',
      },
      boxShadow: {
        full: 'rgba(84, 60, 151, 0.25) 2px 2px 6px',
      },
    },
  },
  plugins: [],
};
