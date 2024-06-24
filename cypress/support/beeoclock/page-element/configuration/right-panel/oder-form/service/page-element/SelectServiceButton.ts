export class SelectServiceButton {
    public getElement(): any {
        return cy.contains('Wybierz usługę')
            // .parents('button').first()
            .scrollIntoView().should('be.visible')

    }
}