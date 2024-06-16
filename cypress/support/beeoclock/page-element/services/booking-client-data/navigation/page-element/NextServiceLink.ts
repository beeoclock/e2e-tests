export class NextServiceLink {
    public getElement(): any {
        return cy.contains( 'Dodaj kolejną usługę')
            .should('be.visible')
            .scrollIntoView()
    }
}