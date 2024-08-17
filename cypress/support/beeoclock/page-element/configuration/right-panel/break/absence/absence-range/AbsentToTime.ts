export class AbsentToTime {
    public getElement(): any {
        return cy.get('[datetime="absence-form-end-input"]')
            .find('#time-button')
            .should('exist')
    }
}