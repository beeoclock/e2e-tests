import {ClientPropertiesEnum} from "../../support/beeoclock/common/enum/ClientPropertiesEnum";

//POC
describe('email test', (): void => {

    it('should send an email', (): void => {
        cy.visit('https://mail.mirohost.net')
        cy.get('#form_login').type(ClientPropertiesEnum.MAIL_LOGIN)
        cy.get('#form_password').type(ClientPropertiesEnum.MAIL_PASSWORD)
        cy.get('#form_submit').click()
    })
})