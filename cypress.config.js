const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev.beeoclock.com/en/beeoclock',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
})