export class PasswordInput {

    public getElement(): any {
        return cy.get('form-input-password')
            .find('input')
            .scrollIntoView().should('be.visible')
    }
}