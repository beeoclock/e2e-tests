export class PaymentMethodSelector {
    public getElement(): any {
        return cy.contains('label', 'Metoda płatności')
            .next('ng-select')
            .find('.ng-arrow-wrapper')
            .should('be.visible')
    }
}