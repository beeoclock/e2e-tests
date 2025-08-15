export class CancelOrderService {
    public getElement(): any {
        return cy.contains('button', 'Anuluj zamówienie')
    }
}