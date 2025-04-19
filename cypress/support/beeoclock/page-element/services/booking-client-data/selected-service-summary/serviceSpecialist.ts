export class ServiceSpecialist {
    public getElement(specialist: string): any {
        return cy.get('.flex.items-center.gap-2').contains(specialist)
            .should('be.visible')
            // .scrollIntoView()
    }
}