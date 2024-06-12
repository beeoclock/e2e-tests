export class CancelOrderService {
    public getElement(): any {
        return cy.contains('button', 'Anulowanie zamówienia')
    }
}