export class Agreement0InputElement {
    public getElement() {
        return cy.get('#agreement-0')
            .scrollIntoView()
            .should('be.visible')
    }
}
