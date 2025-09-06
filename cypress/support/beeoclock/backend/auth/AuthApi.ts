import {EnvEnum} from "../../common/enum/EnvEnum";
import {HTTPStatusCodeType} from "../enum/HTTPStatusCodeType";
import {Environment} from "../../common/Interception/ApiRequestHelper";

export class AuthApi {

    public static getToken(env: string = EnvEnum.API_KEY): Cypress.Chainable<string> {
        const url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${env}`;
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
            expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
            return response.body
        });
    }

    public static getAuthWithRetry(env: Environment, attempt = 0): Cypress.Chainable<any> {
        let url: string;

        if (env === Environment.dev) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${EnvEnum.API_KEY}`;
        }
        if (env === Environment.prod) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${EnvEnum.PROD_API_KEY}`;
        }

        return cy.wrap(null).then(() => {
            cy.log(`Auth attempt #${attempt + 1}`);

            return cy.request({
                method: 'POST',
                url,
                body: {
                    email: Cypress.env("LOGIN"),
                    password: Cypress.env("PASSWORD"),
                    returnSecureToken: true,
                },
                failOnStatusCode: false,
                timeout: 30000,
            }).then(resp => {
                if (resp && resp.status === 200 && resp.body?.idToken) {
                    return resp.body;
                }
                if (attempt < 4) {
                    cy.wait(5000);
                    return AuthApi.getAuthWithRetry(env, attempt + 1);
                }
                throw new Error(`Auth API failed after ${attempt + 1} attempts, last status ${resp.status}`);
            });
        });
    }
}
