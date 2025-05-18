import {EnvEnum} from "../../support/beeoclock/common/enum/EnvEnum";

//POC
describe('email test', (): void => {

    it('should send an email', (): void => {
        cy.visit('https://mail.mirohost.net')
        cy.get('#form_login').type(EnvEnum.MAIL_LOGIN)
        cy.get('#form_password').type(EnvEnum.MAIL_PASSWORD)
        cy.get('#form_submit').click()
    })
})