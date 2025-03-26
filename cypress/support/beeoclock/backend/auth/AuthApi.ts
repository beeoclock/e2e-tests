import { ClientPropertiesEnum } from "../../common/enum/ClientPropertiesEnum";

export class AuthApi {

    public static getToken(): Cypress.Chainable<string> {
        const url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${ClientPropertiesEnum.API_KEY}`;
        return cy.request({
            method: 'POST',
            url: url,
            body: {
                "clientType": "CLIENT_TYPE_WEB",
                "email": ClientPropertiesEnum.LOGIN,
                "password": ClientPropertiesEnum.PASSWORD,
                "returnSecureToken": true
            },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            return response.body.idToken as string;
        });
    }
}
