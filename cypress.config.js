const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'cypress-beeclock-at',
  env: {
      apiBackendEntryPoint: 'https://api.dev.beeoclock.com/client/api/v1/',
  },

  e2e: {
    baseUrl: 'https://dev.beeoclock.com/pl/e2e',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 10000,
    experimentalRunAllSpecs: true,
    pageLoadTimeout: 20000
  },
})
