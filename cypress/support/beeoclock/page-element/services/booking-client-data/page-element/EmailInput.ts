export class EmailInput {
    public getElement(): any {
        return cy.get('#client-app-event-attendant-email-input').find('input').should('be.visible')
            .scrollIntoView()
    }
}