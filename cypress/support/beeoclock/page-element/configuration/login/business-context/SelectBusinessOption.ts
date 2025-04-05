export class SelectBusinessOption {

    public getElement(business: string): any {
        return cy.get('.flex.flex-col.mt-4')
            .find('li').contains(business)
            .scrollIntoView().should('be.visible')
    }

    public getElementLength(): any {
        return cy.get('.bi.bi-buildings')
            .its('length')
    }
}