export class AddServiceButton {
    public getElement(): any {
        return cy.get('app-list-service-form-order-component')
            .find('button').first()
            .scrollIntoView().should('be.visible')
    }
}
