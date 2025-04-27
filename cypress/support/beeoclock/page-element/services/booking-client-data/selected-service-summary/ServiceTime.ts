export class ServiceTime {
    public getElement(time: string): any {
        return cy.get('.shrink > .flex > :nth-child(2)').contains(time)
            .should('be.visible')
        // .scrollIntoView()
    }
}