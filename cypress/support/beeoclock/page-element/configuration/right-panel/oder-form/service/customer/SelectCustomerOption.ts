export class SelectCustomerOption {
    public getElement(): any {
        return cy.get('app-customer-chip-component')
            .find('button')
            .scrollIntoView().should('be.visible')

    }
}