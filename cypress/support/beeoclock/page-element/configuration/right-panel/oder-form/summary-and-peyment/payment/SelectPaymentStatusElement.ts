export class SelectPaymentStatusElement {
    public getElement(status: string): any {
        return cy.get('ng-dropdown-panel')
            .find('.ng-dropdown-panel-items')
            .find('.ng-option').contains(status)
            .should('be.visible')
    }
}