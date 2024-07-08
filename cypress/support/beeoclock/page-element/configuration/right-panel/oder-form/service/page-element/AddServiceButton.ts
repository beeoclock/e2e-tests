export class AddServiceButton {
    public getElement(): any {
        return cy.get('app-service-order-form-container button')
            .scrollIntoView().should('be.visible')

    }
}
