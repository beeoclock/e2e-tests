export class OrderPriceComponent {
    public getElement(orderId: string): any {
        return cy.get('#' + orderId)
            .find('app-price-chip-component')
            .scrollIntoView().should('be.visible')
    }
}