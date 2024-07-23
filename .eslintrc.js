module.exports = {
  root: true,
  env: {
    'cypress/globals': true,
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  plugins: [
    'cypress'
  ],
  parserOptions: {
    parser: 'eslint'
  },
  rules: {
    'no-console': 'off'
  }
}
