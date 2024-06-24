export class OrderPriceInput {
    public getElement(): any {
        return cy.get('price-and-currency-component')
            .find('#price')
            .scrollIntoView().should('be.visible')
    }
}