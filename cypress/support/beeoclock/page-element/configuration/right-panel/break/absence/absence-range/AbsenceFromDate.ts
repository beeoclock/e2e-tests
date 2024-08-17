export class AbsenceFromDate {
    public getElement(): any {
        return cy.get('[datetime="absence-form-start-input"]')
            .find('#date-button')
            .should('exist')
    }
}