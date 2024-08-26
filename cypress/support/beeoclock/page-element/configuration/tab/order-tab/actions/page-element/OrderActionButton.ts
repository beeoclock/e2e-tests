export class OrderActionButton {
    public getElement(orderId: string): any {
        return cy
            .get(`[id="${orderId}"]`)
            .find('app-order-row-action-button-component')
            .find('utility-table-column-action')
            .scrollIntoView().should('be.visible')
    }
}