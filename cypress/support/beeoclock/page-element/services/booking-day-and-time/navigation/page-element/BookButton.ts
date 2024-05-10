export class BookButton {
    public getElement(): any {
        return cy.get('.py-4').contains('Rezerwuj')
            .should('be.visible')
            .scrollIntoView()
    }
}