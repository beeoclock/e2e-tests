export class PhoneInput {
    public getElement(): any {
        return cy.get('#attendee-phone')
            .find('input')
    }
}