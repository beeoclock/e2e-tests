export class NextServiceLink {

    public getElement(): any {
        return cy.get('.bi.bi-plus-lg')
            .should('be.visible')
            .scrollIntoView();
    }
}