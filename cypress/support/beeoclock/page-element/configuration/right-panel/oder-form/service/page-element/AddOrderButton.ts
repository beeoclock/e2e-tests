export class AddOrderButton {

    public getElement(): any {
        return cy.get('#open-order-form')
            .scrollIntoView().should('be.visible')

    }
}
