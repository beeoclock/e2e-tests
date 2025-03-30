export class SelectNewContextElement {

    public getCreateNewBusiness(): any {
        return cy.contains('Utwórz nowy biznes')
        .scrollIntoView().should('be.visible')
    }

    private getPlusIcon(): any {
        return cy.get('.bi.bi-plus-lg')
        .scrollIntoView().should('be.visible')
    }
}