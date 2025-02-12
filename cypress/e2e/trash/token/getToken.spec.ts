import {AuthApi} from "../../../support/beeoclock/backend/auth/AuthApi";

describe('Environment Variables Test', () => {

    it('should log environment variables', () => {
        AuthApi.getToken().then(token => {
            cy.log('token', JSON.stringify(token))
        })
    });
});
