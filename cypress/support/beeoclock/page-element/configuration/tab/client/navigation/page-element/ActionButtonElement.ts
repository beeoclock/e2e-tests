export class ActionButtonElement {
    public getElement(email: string): any {
        return cy.get('customer-table-list-component')
            .find('[tablerowflex="body"]')
            .find(`[tablecolumnflex="email"]`).contains(email)
            .parents('[tablerowflex="body"]').first()
            .find(`customer-row-action-button-component`)
            .scrollIntoView().should('be.visible')


    }
}