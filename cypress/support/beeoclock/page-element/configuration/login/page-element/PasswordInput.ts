export class PasswordInput {
    public getElement(): any {
        return cy.get('form-input-password')
            .find('#password')
            .scrollIntoView().should('be.visible')
    }
}