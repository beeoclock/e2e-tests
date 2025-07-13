import {AuthApi} from "../../../support/beeoclock/backend/auth/AuthApi";

describe('Environment Variables Test', (): void => {

    it('should log environment variables', (): void => {
        AuthApi.getToken().then(token => {
            cy.log('token', JSON.stringify(token))
        })
    });
});
