export class OrderCustomerButton {
    public getElement(orderId: string): any {
        return cy.get('#' + orderId)
            .find('app-customer-chip-component')
            .scrollIntoView().should('be.visible')
    }
}