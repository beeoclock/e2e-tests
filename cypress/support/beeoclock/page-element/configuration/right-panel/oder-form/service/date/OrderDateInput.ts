export class OrderDateInput {
    public getElement(): any {
        return cy.get('event-select-time-slot-form-component')
            .find('datetime-local-input-component')
            .find('input')
            .scrollIntoView().should('be.visible')
    }
}