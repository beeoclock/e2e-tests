export class OrderSummaryDateElement {
    public getElement(): any {
        return cy.get('app-item-list-v2-service-form-order-component')
            .find('app-start-chip-component')
            .scrollIntoView()
            .should('be.visible')
    }
}