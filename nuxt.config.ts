export default {
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/image'],
  css: ['@/assets/css/tailwind.css'],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  image: {
    dir: ['~/assets/images', '~/assets/icons', '~/assets/logos'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
  // Remove the unrecognized property
  // injectPosition: 'first',
  viewer: true,
  configPath: 'tailwind.config',
  exposeConfig: false,
  exposeLevel: 2,
  config: {},
  runtimeConfig: {
    public: {
      navLinks: [
        'Home',
        'Courses',
        'Code Playground',
        'Top Learners',
        'Blog',
        'FAQ',
        'Contact',
        'Terms of Use',
        'Privacy Policy',
      ],
    },
  },
}
