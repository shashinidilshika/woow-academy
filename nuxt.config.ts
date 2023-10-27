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
}

const nitroConfig: NitroConfig = {
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['@/assets/css/tailwind.css'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  injectPosition: 'first',
  viewer: true,
  configPath: 'tailwind.config',
  exposeConfig: false,
  exposeLevel: 2,
  config: {},
}

export default nitroConfig
