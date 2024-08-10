export class LastNameInput {
    public getElement(): any {
        return cy.get('#attendee-last-name')
            .find('input')
    }
}