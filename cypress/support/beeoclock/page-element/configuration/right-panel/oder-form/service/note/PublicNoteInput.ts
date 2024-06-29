export class PublicNoteInput {
    public getElement(): any {
        return cy.get('form-textarea-component')
            .find('#event-form-public-note-input')
            .scrollIntoView().should('be.visible')
    }
}