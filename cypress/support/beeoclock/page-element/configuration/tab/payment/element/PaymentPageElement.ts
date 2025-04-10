export class PaymentPageElement {

    public getMainFilterInput(): any {
        return cy.get('#search-input-component')
            .find('input')
            .scrollIntoView().should('be.visible')
    }

    public getMainFilterSearchBtn(): any {
        return cy.get('#search-input-component')
            .find('button')
            .scrollIntoView().should('be.visible')
    }
}