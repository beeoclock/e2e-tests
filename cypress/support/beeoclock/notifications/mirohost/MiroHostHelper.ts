import {ClientPropertiesEnum} from "../../common/enum/ClientPropertiesEnum";

export class MiroHostHelper {

    public static visitAndLoginOnMiroHost(): MiroHostHelper {
        cy.visit('https://mail.mirohost.net').then(() => {
            cy.get('#form_login').scrollIntoView().should('be.visible')
            cy.get('#form_login').type(ClientPropertiesEnum.MAIL_LOGIN)
            cy.get('#form_password').type(ClientPropertiesEnum.MAIL_PASSWORD)
            cy.get('#form_submit').click()
        });
        return this;
    }
}