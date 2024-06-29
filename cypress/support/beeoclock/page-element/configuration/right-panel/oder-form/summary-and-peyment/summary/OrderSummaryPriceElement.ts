export class OrderSummaryPriceElement {
    public getElement(): any {
        return cy.get('app-order-form-container')
            .find('app-service-order-form-container')
            .find('app-order-service-details')
            .find('.flex.justify-between')
            .find('.flex.items-center')
            .find('.bg-neutral-100.text-neutral-800').first()
            .scrollIntoView()
            .should('be.visible')
    }
}