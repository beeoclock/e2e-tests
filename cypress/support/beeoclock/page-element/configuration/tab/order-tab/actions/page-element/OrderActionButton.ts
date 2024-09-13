//this - gets action button element
export class OrderActionButton {
    public getElement(orderId: string): any {
        return cy.get('#' + orderId)
            .find('app-order-row-action-button-component')
    }
//this get just main component cy.get('#table-row-66e042c8b6d8bf8a379d7bd2 > .text-beeColor-800 > .bi')
// export class OrderActionButton {
//     public getElement(orderId: string): any {
//         return cy.get('app-card-item-order-component').first()
//             .scrollIntoView().should('be.visible')
//     }
}
