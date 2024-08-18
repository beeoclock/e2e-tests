export class ExistingCustomerInput {
    public getElement(): any {
        return cy.get('.searchbar-input-container')
            .find('input')
    }
}