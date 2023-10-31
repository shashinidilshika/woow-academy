// https://nuxt.com/docs/api/configuration/nuxt-config
interface NitroConfig {
  devtools?: { enabled: boolean }
  modules?: string[]
  css?: string[]
  autoImports?: Array<string | [string, string]>
  pinia?: boolean | { autoImports?: Array<string | [string, string]> }
  injectPosition?: string
  viewer?: boolean
  configPath?: string
  exposeConfig?: boolean
  exposeLevel?: number
  config?: Record<string, any>
  image?: { dir: string[]; screens: Record<string, number> }
}

const nitroConfig: NitroConfig = {
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/image'],
  css: ['@/assets/css/tailwind.css'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  image: {
    dir: ['~/assets/images', '~/assets/icons', '~/assets/logos'],

    // The screen sizes predefined by `@nuxt/image`:
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
  injectPosition: 'first',
  viewer: true,
  configPath: 'tailwind.config',
  exposeConfig: false,
  exposeLevel: 2,
  config: {},
}

export default nitroConfig
