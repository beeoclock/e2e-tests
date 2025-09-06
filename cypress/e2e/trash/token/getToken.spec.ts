import {AuthApi} from "../../../support/beeoclock/backend/auth/AuthApi";
import {EnvEnum} from "../../../support/beeoclock/common/enum/EnvEnum";
import {Environment} from "../../../support/beeoclock/common/Interception/ApiRequestHelper";

describe('Environment Variables Test', (): void => {

    it('should log environment variables', (): void => {
        const url_PROD = Cypress.env(`${Environment.prod}_token`);

        cy.log('url_PROD', url_PROD)
        // AuthApi.getToken(EnvEnum.PROD_API_KEY).then(token => {
        //     cy.log('token', JSON.stringify(token))
        // })
    });
});
