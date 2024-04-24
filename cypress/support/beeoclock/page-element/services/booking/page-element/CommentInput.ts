export class CommentInput {
    public getElement(): any {
        return cy.get('[placeholder="If you want to inform a specialist about something important, leave this information in this field"]')
            .should('be.visible')
            .scrollIntoView()
    }
}