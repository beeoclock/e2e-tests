export class EmailInput {
    public getElement(): any {
        return cy.get('#attendee-email')
            .find('input')
            .should('exist')
    }
}