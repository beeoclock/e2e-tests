import {defineConfig} from "cypress";
import dotenv from 'dotenv';
import {getTokenData, saveTokenData} from "./cypress/support/beeoclock/backend/auth/TokenManager";
import { Environment } from "support/beeoclock/common/Interception/ApiRequestHelper";

dotenv.config();

export default defineConfig({
    projectId: '8ne51s',
    env: {
        apiBackendEntryPoint: 'https://api-dev.beeoclock.com/client/api/v1/',
        LOGIN: process.env.LOGIN,
        PASSWORD: process.env.PASSWORD,
        MAIL_PASSWORD: process.env.MAIL_PASSWORD,
        MAIL_LOGIN: process.env.MAIL_LOGIN,
        API_KEY: process.env.API_KEY,
        PROD_API_KEY: process.env.PROD_API_KEY,
        X_GITHUB_ACTION: process.env.X_GITHUB_ACTION,
    },

    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                readToken(env: Environment) {
                    return getTokenData(env);
                },
                saveToken({env, token, tokenValidTo}) {
                    saveTokenData(env, token, tokenValidTo);
                    return null;
                },
            });
            return config;

        },
        retries: {
            runMode: 2
        },
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
        viewportHeight: 1080,
        viewportWidth: 1920,
        defaultCommandTimeout: 8000,
        experimentalRunAllSpecs: true,
        numTestsKeptInMemory: 10,
        pageLoadTimeout: 20000,
        requestTimeout: 15000,
        chromeWebSecurity: false,
        includeShadowDom: true,
        watchForFileChanges: false,
        experimentalModifyObstructiveThirdPartyCode: true,
        experimentalMemoryManagement: true,
        experimentalWebKitSupport: true,
        scrollBehavior: 'center'
    },
});
