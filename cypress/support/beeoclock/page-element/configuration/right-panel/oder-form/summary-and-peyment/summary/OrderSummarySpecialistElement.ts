export class OrderSummarySpecialistElement {
    public getElement(): any {
        return cy.get('app-order-form-container')
            .find('app-service-order-form-container')
            .find('app-order-service-details')
            .find('.cursor-pointer.inline-flex').last()
            .scrollIntoView()
            .should('be.visible')
    }
}