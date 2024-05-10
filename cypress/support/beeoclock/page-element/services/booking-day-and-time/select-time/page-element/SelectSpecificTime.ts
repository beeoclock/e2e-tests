export class SelectSpecificTime {

    public getElement(time: string): any {
        return cy.get('.border-2').contains(time)
            .should('be.visible')
            .scrollIntoView()
    }
}