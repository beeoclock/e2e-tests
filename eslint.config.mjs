module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'cypress'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'prettier'
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
    'cypress/globals': true
  },
  ignorePatterns: ['node_modules/', 'dist/', 'coverage/', '*.json'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'cypress/no-unnecessary-waiting': 'warn'
  }
};
