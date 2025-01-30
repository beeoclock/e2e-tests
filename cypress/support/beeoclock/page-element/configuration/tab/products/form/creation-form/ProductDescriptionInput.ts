export class ProductDescriptionInput {

    public getElement(): any {
        return cy.get('#product-form-description')
            .scrollIntoView().should('be.visible')
    }
}