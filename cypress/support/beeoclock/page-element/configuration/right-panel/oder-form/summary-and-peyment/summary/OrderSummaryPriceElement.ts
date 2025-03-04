export class OrderSummaryPriceElement {
    public getElement(): any {
        return cy.get('app-price-chip-component')
            .scrollIntoView()
            .should('be.visible')
    }
}