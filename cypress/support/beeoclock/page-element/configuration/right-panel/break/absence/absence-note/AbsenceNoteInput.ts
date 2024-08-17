export class AbsenceNoteInput {
    public getElement(): any {
        return cy.get('#absence-form-note-input')
            .find('textarea')
            .scrollIntoView().should('be.visible')
    }
}