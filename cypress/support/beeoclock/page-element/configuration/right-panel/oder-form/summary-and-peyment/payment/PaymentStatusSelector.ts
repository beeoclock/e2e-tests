export class PaymentStatusSelector {
    public getElement(): any {
        return cy.contains('label', 'Status płatności')
            .next('ng-select')
            .find('.ng-arrow-wrapper')
            .should('be.visible')
    }
}