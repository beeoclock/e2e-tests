export class OrderCustomerSummaryElement {
    public getElement(): any {
        return cy.get('app-customer-chip-component').first()
            .scrollIntoView()
            .should('be.visible')
    }
}