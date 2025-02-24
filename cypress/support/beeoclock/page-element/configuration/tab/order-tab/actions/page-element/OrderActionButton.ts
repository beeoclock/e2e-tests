export class OrderActionButton {

    private getPage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('order-list-of-card-collection-by-date-component').should('exist')
    }

    public getElement(orderId: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.getPage().then(() => {
            return cy.get(`#table-row-${orderId}`)
        });
    }
}
