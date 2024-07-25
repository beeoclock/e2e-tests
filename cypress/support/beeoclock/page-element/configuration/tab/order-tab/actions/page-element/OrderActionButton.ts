export class OrderActionButton {
    public getElement(orderId: string): any {
        return cy.get('order-list-of-card-collection-by-date-component')
            .find('app-card-item-order-component').contains(orderId)
            .parents('app-card-item-order-component').first()
            .find('app-order-row-action-button-component')
            .find('utility-table-column-action')
            .scrollIntoView().should('be.visible')
    }
}