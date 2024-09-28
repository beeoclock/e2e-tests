//this - gets action button element
export class OrderActionButton {
    public getElement(orderId: string): any {
        return cy.get('.max-w-full')
            .find('#table-row-' + orderId)
    }

    //cy.get('#table-row-66f7d1cf8b7a83badfda4ba4 > .text-beeColor-800')
  //          #table-row-66f7d1cf8b7a83badfda4ba4 > .text-beeColor-800
//this get just main component cy.get('#table-row-66e042c8b6d8bf8a379d7bd2 > .text-beeColor-800 > .bi')
// export class OrderActionButton {
//     public getElement(orderId: string): any {
//         return cy.get('app-card-item-order-component').first()
//             .scrollIntoView().should('be.visible')
//     }
}
