import { AuthApi } from "../../../support/beeoclock/backend/auth/AuthApi";

describe('token', () => {

    it('get token and log it', () => {
        //
        AuthApi.getToken().then((token) => {
            Cypress.env('token', token);

            cy.log('Token:', token);
        });
    });
});
