export class PayNowButton {

    public getElement(): Cypress.Chainable {
        return cy.contains('button','Zapłać teraz')
            .scrollIntoView()
            .should('not.be.disabled')
    }
}