export class OrderPriceInput {
    public getElement(): any {
        return cy.get('.ion-delegate-host.popover-viewport')
            .find('#utility-base-input')
            .scrollIntoView().should('be.visible')
    }
}