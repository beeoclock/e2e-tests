export class CategoryInput {

    public getElement(): any {
        return cy.get('[placeholder="Wpisz kategorie"]')
            .scrollIntoView().should('be.visible')
    }

}