export class ProductPriceInput {

    public getElement(): any {
        return cy.get('#price')
            .scrollIntoView().should('be.visible')
    }
}