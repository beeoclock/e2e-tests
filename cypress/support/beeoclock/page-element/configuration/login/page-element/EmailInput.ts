export class EmailInput {
    public getElement(): any {
        return cy.get('identity-sign-in-component')
            .find('#email').find('input')
            .scrollIntoView().should('be.visible')
    }
}