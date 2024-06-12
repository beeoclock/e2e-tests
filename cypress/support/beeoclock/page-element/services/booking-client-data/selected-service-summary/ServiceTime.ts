export class ServiceTime {
    public getElement(): any {
        return cy.get('.shrink > .flex > :nth-child(2)')
            .should('be.visible')
            .scrollIntoView()
    }
}