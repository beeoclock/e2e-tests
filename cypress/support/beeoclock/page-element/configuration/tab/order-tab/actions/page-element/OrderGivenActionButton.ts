export class OrderGivenActionButton {
    public getElement(orderId: string, action: string): any {
        return cy.get(`#table-row-${orderId}`, {includeShadowDom: false})
            .find('li')
            .contains('button', action)
            .scrollIntoView()
            .should('exist')
    }
}