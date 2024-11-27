require('dotenv').config();

export const ClientPropertiesEnum = {
    LOGIN: Cypress.env('LOGIN'),
    PASSWORD: Cypress.env('PASSWORD')
};
