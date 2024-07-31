export class SelectedServiceElement {
    public getElement(): any {
        return cy.get('app-item-list-v2-service-form-order-component')
            .scrollIntoView().should('be.visible')

    }
}