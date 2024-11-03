export class CommentInput {
    public getElement(): any {
        return cy.get('[placeholder="Jeśli chcesz poinformować specjalistę o czymś ważnym, pozostaw tę informację w tym polu"]')
            .find('textarea')
            .should('be.visible')
            .scrollIntoView()
    }
}