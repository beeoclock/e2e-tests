import {EnvEnum} from "../../common/enum/EnvEnum";
import {ApiRequestHelper} from "../../common/Interception/ApiRequestHelper";

export class AuthApi extends ApiRequestHelper {

    public static getToken(): Cypress.Chainable<string> {
        const url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${EnvEnum.API_KEY}`;
        return cy.request({
            method: 'POST',
            url: url,
            body: {
                clientType: "CLIENT_TYPE_WEB",
                email: EnvEnum.LOGIN,
                password: EnvEnum.PASSWORD,
                returnSecureToken: true
            },
        }).then(response => {
            expect(response.status).to.equal(200);
            const token = response.body.idToken as string;
            Cypress.env('token', token);
            return token;
        });
    }

    public static getAuth(): Cypress.Chainable<any> {
        const url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${EnvEnum.API_KEY}`;
        return cy.request({
            method: 'POST',
            url: url,
            body: {
                clientType: "CLIENT_TYPE_WEB",
                email: EnvEnum.LOGIN,
                password: EnvEnum.PASSWORD,
                returnSecureToken: true
            },
        }).then(response => {
            expect(response.status).to.equal(200);
            return response.body
        });
    }
}
