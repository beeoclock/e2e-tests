export class OptionElement {
    public getElement(order: string): any {
        return cy.get('.flex.gap-4').contains(order).should('be.visible')
            .scrollIntoView()
    }
}