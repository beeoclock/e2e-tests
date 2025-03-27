require('dotenv').config();

export const ClientPropertiesEnum = {
    LOGIN: Cypress.env('LOGIN'),
    PASSWORD: Cypress.env('PASSWORD'),
    API_KEY: Cypress.env('API_KEY'),
    X_GITHUB_ACTION: Cypress.env('X_GITHUB_ACTION')
};
