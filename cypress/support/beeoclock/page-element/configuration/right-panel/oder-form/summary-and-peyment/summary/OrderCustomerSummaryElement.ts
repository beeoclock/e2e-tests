export class OrderCustomerSummaryElement {
    public getElement(): any {
        return cy.get('app-customer-chip-component')
            .scrollIntoView()
            .should('be.visible')
    }
}