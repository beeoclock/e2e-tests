export class ClientDescriptionInput {
    public static getElement(): any {
        return cy.get('form-textarea-component')
            .find('textarea')
            .scrollIntoView().should('be.visible')
    }
}