export class PhoneInput {
    public getElement(): any {
        return cy.get('tel-form-input').find('.w-full.rounded-md').should('be.visible')
    }
}