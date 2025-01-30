export class ProductNameInputPage {

    public getElement(): any {
        return cy.get('#product-form-title-input')
            .scrollIntoView().should('be.visible')
    }
}