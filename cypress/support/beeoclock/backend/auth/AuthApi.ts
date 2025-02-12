import {ClientPropertiesEnum} from "../../common/enum/ClientPropertiesEnum";

export class AuthApi {

    public static getToken(): Cypress.Chainable<unknown> {
        const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDpqktdOQyijnyCaiaOl3_DxUQhTu3PjUg';
        return cy.request({
            method: 'POST',
            url: url,
            body: {
                "email": ClientPropertiesEnum.LOGIN,
                "password": ClientPropertiesEnum.PASSWORD,
                "returnSecureToken": true
            },
        }).then(response => {
            return response.body.idToken
        });
    }
}