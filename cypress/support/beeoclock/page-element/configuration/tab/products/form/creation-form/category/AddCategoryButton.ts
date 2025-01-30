export class AddCategoryButton {

    public getElement(): any {
        return cy.get('[title="Dodaj kategorie do listy"]')
            .scrollIntoView().should('be.visible')
    }
}