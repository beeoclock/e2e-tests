export class BusinessNoteInputElement {
    public getElement(): any {
        return cy.get('form-textarea-component > .flex > #order-business-note')
            .scrollIntoView()
            .should('be.visible')
    }
}