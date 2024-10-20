export class ClientPhoneInput {
    public static getInput(): any {
        return cy.get('tel-form-input')
            .find('[type="tel"]')
            .scrollIntoView()
    }
}