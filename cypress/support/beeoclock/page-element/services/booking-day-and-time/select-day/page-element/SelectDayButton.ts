export class SelectDayButton {
    public getElement(day: number): any {
        return cy.get('.font-bold').contains(day)
            .should('be.visible')
            .scrollIntoView()
    }
}