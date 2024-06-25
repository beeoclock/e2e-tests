export class AddButton {
    public getElement(): any {
        return cy.get('utility-button-save-container-component')
            .contains('button', 'Dodaj')
            .scrollIntoView().should('be.visible')
    }
}