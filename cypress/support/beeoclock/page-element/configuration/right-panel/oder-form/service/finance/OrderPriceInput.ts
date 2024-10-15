export class OrderPriceInput {
    public getElement(): any {
        return cy.get('[id$="-price-input"]')
            .scrollIntoView().should('be.visible')
    }
}