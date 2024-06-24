export class SelectedServiceElement {
    public getElement(): any {
        return cy.get('.flex-1.flex.flex-col.gap-2')
            .scrollIntoView().should('be.visible')

    }
}