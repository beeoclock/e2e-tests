export class CustomerInput {
    public static getElement(label: string): any {
        return cy.get('customer-form-page')
            .find('form-input')
            .contains('label', label)
            .parents('form-input').first()
            .find('input')
            .scrollIntoView().should('be.visible')
    }
}