export class OrderCustomerSummaryElement {
    public getElement(): any {
        return cy.get('app-order-form-container')
            .find('app-service-order-form-container')
            .find('app-order-service-details')
            .find('event-attendee-card-component').first()
            .scrollIntoView()
            .should('be.visible')
    }
}