export class PhoneInput {
    public getElement(): any {
        return cy.get('#client-app-event-attendant-phone-input').find('input').should('be.visible')
            .scrollIntoView()
    }
}