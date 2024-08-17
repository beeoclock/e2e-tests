export class AbsenceToDate {
    public getElement(): any {
        return cy.get('[datetime="absence-form-end-input"]')
            .find('#date-button')
            .should('exist')
    }
}