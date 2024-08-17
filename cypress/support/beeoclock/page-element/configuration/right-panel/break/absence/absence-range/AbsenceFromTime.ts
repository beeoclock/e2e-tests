export class AbsenceFromTime {
    public getElement(): any {
        return cy.get('[datetime="absence-form-start-input"]')
            .find('#time-button')
            .should('exist')
    }
}