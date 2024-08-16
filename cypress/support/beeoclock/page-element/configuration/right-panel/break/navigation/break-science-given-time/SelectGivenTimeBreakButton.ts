export class SelectGivenTimeBreakButton {
    public getElement(time: string): any {
        return cy.get('.flex.flex-col.gap-1')
            .find('.grid')
            .find('button').contains(time)
            .scrollIntoView().should('be.visible')
    }
}