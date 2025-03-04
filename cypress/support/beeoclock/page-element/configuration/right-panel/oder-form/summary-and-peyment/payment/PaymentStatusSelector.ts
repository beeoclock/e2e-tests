export class PaymentStatusSelector {
    public getElement(): any {
        return cy.get('#order-form-inputs-payment-status')
            .scrollIntoView().should('be.visible')
    }
}