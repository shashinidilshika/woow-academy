// https://nuxt.com/docs/api/configuration/nuxt-config
interface NitroConfig {
  devtools?: { enabled: boolean }
  modules?: string[]
  css?: string[]
  autoImports?: Array<string | [string, string]>
  pinia?: boolean | { autoImports?: Array<string | [string, string]> }
}

const nitroConfig: NitroConfig = {
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['@/assets/css/tailwind.css'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
}

export default nitroConfig
