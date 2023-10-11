module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:vue/vue3-essential', '@nuxt/eslint-config', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    project: ['./tsconfig.json', './tsconfig.node.json'],
    parser: '@typescript-eslint/parser',
    strictNullChecks: true, // Added to fix the problem
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    'prettier/prettier': ['error'],
  },
}
