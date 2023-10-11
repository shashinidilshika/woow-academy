// https://nuxt.com/docs/api/configuration/nuxt-config
interface NitroConfig {
  devtools?: { enabled: boolean }
  modules?: string[]
  css?: string[]
}

const nitroConfig: NitroConfig = {
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
}

export default nitroConfig
