export class OrderActionButton {

    public getElement(orderId: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#' + orderId, {includeShadowDom: false}).scrollIntoView().should('be.visible')
            .find(`#table-row-${orderId}`, {includeShadowDom: false})
            .scrollIntoView().should('be.visible')
    }
}
