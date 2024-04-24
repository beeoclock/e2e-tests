export class FirstNameInput {
    public getElement(): any {
        return cy.get('#utility-base-input').should('be.visible')
            .scrollIntoView()
    }
}