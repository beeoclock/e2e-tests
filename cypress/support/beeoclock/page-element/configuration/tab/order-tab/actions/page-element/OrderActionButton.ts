export class OrderActionButton {
    public getElement(orderId: string): any {
        return cy.get(`#table-row-${orderId}`)
    }
}