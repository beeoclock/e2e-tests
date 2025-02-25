export class StatusSelectorComponent {

    public getComponent(): any {
        return cy.get('#order-filter-select-order-status')
            .scrollIntoView().should('be.visible')
    }

    public getGivenStatusCheckbox(status: string): any {
        return cy.get('.popover-viewport ')
            .find('.item.item-lines-default')
            .contains(status)
            .parents('ion-item').first()
    }
}