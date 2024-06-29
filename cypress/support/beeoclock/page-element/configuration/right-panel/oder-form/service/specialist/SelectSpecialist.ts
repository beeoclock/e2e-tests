export class SelectSpecialist {
    public getElement(specialist: string): any {
        return cy.get('event-service-specialist-component')
            // .find('button')
            .contains(specialist)
            .scrollIntoView().should('be.visible')
    }
}