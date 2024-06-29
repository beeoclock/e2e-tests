export class OrderActionButton {
    public getElement(): any {
        return cy.get('app-list-order-table')
            .find('[tablerowflex="body"]').eq(0)
            .find('app-order-row-action-button-component')
            .scrollIntoView().should('be.visible')
    }
}