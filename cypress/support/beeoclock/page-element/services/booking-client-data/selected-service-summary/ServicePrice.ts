export class ServicePrice {
    public getElement(): any {
        return cy.get('.shrink > .flex > :nth-child(1)')
            .should('be.visible')
            .scrollIntoView()
    }
}