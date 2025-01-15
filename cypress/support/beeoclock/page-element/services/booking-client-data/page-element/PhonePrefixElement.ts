export class PhonePrefixElement {
    public getElement(): any {
        return cy.get('tel-form-input').find('.iti__selected-country')
    }
}