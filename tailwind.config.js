import { tailwindConfig } from '@storefront-ui/vue/tailwind-config'

export default {
  presets: [tailwindConfig],
  content: [
    './**/*.vue',
    './index.html',
    './components/**/*/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@storefront-ui/vue/**/*.{js,mjs}',
  ],
  theme: {
    extend: {
      colors: {},
      height: {
        '35vh': '35vh',
        '84vh-32': 'calc(84vh - 32px)',
        '84vh': '84vh',
        '85vh-50': 'calc(85vh - 50px)',
        '85vh': '85vh',
        '95vh': '95vh',
        '15vw': '15vw',
        '20vw': '20vw',
      },
      width: {
        27: '27px',
        '15vw': '15vw',
        '20vw': '20vw',
      },
      minHeight: {
        '84vh': '84vh',
        '85vh': '85vh',
        '90vh': '90vh',
      },
      maxHeight: {
        '35vh': '35vh',
        '84vh-50': 'calc(84vh - 50px)',
        '95vh': '95vh',
        '65vh': '65vh',
      },
      screens: {
        mobile: { max: '639px' },
      },
      fontFamily: {
        body: ['Poppins'],
        sans: ['Open Sans'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}
