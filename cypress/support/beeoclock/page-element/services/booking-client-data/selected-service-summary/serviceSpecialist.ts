export class ServiceSpecialist {
    public getElement(): any {
        return cy.get('.divide-y > .flex.justify-start > :nth-child(2)')
            .should('be.visible')
            .scrollIntoView()
    }
}