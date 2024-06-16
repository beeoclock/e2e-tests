export class ServiceSpecialist {
    public getElement(specialist: string): any {
        return cy.get('.divide-y > .flex.justify-start > :nth-child(2)').contains(specialist)
            .should('be.visible')
            // .scrollIntoView()
    }
}