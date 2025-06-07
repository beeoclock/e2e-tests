require('dotenv').config();

export const EnvEnum = {
    LOGIN: Cypress.env('LOGIN'),
    PASSWORD: Cypress.env('PASSWORD'),
    API_KEY: Cypress.env('API_KEY'),
    X_GITHUB_ACTION: Cypress.env('X_GITHUB_ACTION'),
    MAIL_PASSWORD: Cypress.env('MAIL_PASSWORD'),
    MAIL_LOGIN: Cypress.env('MAIL_LOGIN'),
    token: Cypress.env('token'),
};
