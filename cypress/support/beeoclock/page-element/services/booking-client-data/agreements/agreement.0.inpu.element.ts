export class Agreement0InputElement {
    public getElement() {
        return cy.get('agreements-component #agreement-0')
            .scrollIntoView()
            .should('be.visible')
    }
}
