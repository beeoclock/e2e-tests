export class NameInput {
    public getElement(): any {
        return cy.get('#attendee-first-name')
            .find('input')
    }
}