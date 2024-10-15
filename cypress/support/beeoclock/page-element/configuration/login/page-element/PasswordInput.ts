export class PasswordInput {
    public getElement(): any {
        return cy.get('form-input-password')
            .find('[type="password"]')
            .scrollIntoView().should('be.visible')
    }
}