export class SelectDayButton {
    public getElement(day: string): any {
        return cy.get('.font-bold').contains(day)
            .should('be.visible')
            .scrollIntoView()
    }
}