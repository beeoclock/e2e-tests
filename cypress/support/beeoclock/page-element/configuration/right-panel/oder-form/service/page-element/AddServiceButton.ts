export class AddServiceButton {
    public getElement(): any {
        return cy.contains('Dodaj usługę')
            // .nextAll('button').first()
            .scrollIntoView().should('be.visible')

    }
}