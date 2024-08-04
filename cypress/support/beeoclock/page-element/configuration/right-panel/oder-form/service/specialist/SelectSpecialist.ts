export class SelectSpecialist {
    public getElement(specialist: string): any {
        return cy.get('app-specialist-chip-component')
            .contains(specialist)
            .scrollIntoView().should('be.visible')
    }
}