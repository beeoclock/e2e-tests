export class ActionButtonElement {
    public getElement(keyValue: string): any {
        return cy.get('datatable-body-row').contains(keyValue)
            .parents('datatable-body-row').first()
            .find(`customer-row-action-button-component`)
            .scrollIntoView().should('be.visible')
    }
}