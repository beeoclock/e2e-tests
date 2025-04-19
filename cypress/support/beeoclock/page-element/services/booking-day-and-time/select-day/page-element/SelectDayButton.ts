export class SelectDayButton {
    public getElement(day: string): any {
        return cy.get('event-select-slot-date-form-component')
            .find('.relative').contains(day)
            .should('be.visible')
            .scrollIntoView()
    }
}