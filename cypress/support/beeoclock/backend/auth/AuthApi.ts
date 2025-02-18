import { ClientPropertiesEnum } from "../../common/enum/ClientPropertiesEnum";

export class AuthApi {
    public static getToken(): Cypress.Chainable<string> {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${ClientPropertiesEnum.API_KEY}`;
        return cy.request({
            method: 'POST',
            url: url,
            body: {
                "clientType": "CLIENT_TYPE_WEB",
                "email": ClientPropertiesEnum.LOGIN,
                "password": ClientPropertiesEnum.PASSWORD,
                "returnSecureToken": true
            },
        }).then(response => {
            return response.body.idToken as string;
        });
    }
}
