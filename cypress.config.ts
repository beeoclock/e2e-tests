import {defineConfig} from 'cypress';
import * as dotenv from 'dotenv';
import { getLastEmail } from 'support/getEmail';

dotenv.config();

export default defineConfig({
  projectId: 'cypress-beeclock-at',
  env: {
    apiBackendEntryPoint: 'https://api-dev.beeoclock.com/client/api/v1/',
    LOGIN: process.env.LOGIN,
    PASSWORD: process.env.PASSWORD,
    MAIN_LOGIN: process.env.MAIL_PASSWORD,
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        getLastEmail: async () => {
          return await getLastEmail();
        }
      });
      return config;
    },
    retries: {
      runMode: 2
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 20000,
    experimentalRunAllSpecs: true,
    numTestsKeptInMemory: 1,
    pageLoadTimeout: 20000,
    requestTimeout: 15000,
    chromeWebSecurity: false,
    includeShadowDom: true,
    watchForFileChanges: false,
  },
});
