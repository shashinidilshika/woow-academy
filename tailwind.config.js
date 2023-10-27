/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './components/**/*/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
      screens: {
        mobile: { max: '639px' },
      },
      fontFamily: {
        body: ['Open Sans'],
        sans: ['Open Sans'],
      },
    },
  },
  plugins: [],
}
