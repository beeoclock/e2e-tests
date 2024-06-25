export class AddServiceButton {
    public getElement(): any {
        return cy.contains('Dodaj usługę')
            .scrollIntoView().should('be.visible')

    }
}