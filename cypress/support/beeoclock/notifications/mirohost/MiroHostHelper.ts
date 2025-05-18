import {EnvEnum} from "../../common/enum/EnvEnum";

export class MiroHostHelper {

    public static visitAndLoginOnMiroHost(): MiroHostHelper {
        cy.visit('https://mail.mirohost.net').then(() => {
            cy.get('#form_login').scrollIntoView().should('be.visible')
            cy.get('#form_login').type(EnvEnum.MAIL_LOGIN)
            cy.get('#form_password').type(EnvEnum.MAIL_PASSWORD)
            cy.get('#form_submit').click()
        });
        return this;
    }
}