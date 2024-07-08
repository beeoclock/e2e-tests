export class LoginButton {
    public getElement(): any {
        return cy.get('#identity-sign-in-form-primary-button')
            .should('be.visible')
    }
}
