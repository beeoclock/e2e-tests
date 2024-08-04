export class AddButton {
    public getElement(): any {
        return cy.get('utility-button-save-container-component')
            .contains('button', 'Zapisz')
            .scrollIntoView().should('be.visible')
    }
}