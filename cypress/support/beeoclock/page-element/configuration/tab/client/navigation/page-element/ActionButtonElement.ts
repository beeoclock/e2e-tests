export class ActionButtonElement {
    public getElement(lastName: string): any {
        return cy.get('customer-table-list-component')
            .find('[tablerowflex="body"]')
            .find(`[tablecolumnflex="lastName"]`).contains(lastName)
            .parents('[tablerowflex="body"]').first()
            .find(`customer-row-action-button-component`)
            .scrollIntoView().should('be.visible')


    }
}