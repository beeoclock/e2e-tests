export class SelectPaymentMethodElement {
    public getElement(method: string): any {
        return cy.get('ng-dropdown-panel')
            .find('.ng-dropdown-panel-items')
            .find('.ng-option').contains(method)
            .should('be.visible')
    }
}