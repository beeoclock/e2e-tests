import { ClientPropertiesEnum } from "../../common/enum/ClientPropertiesEnum";

export class AuthApi {

    public static getToken(): Cypress.Chainable<string> {
        const url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${ClientPropertiesEnum.API_KEY}`;
        return cy.request({
            method: 'POST',
            url: url,
            body: {
                clientType: "CLIENT_TYPE_WEB",
                email: ClientPropertiesEnum.LOGIN,
                password: ClientPropertiesEnum.PASSWORD,
                returnSecureToken: true
            },
        }).then(response => {
            expect(response.status).to.equal(200);
            const token = response.body.idToken as string;
            Cypress.env('token', token);
            return token;
        });
    }
}
