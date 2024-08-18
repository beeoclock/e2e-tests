export class SelectCustomerOption {
    public getElement(): any {
        return cy.get('app-customer-chip-component')
            .find('button').first()
            .scrollIntoView().should('be.visible')
    }
}