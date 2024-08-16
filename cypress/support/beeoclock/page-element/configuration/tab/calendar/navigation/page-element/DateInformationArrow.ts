export class DateInformationLabel {
    public getElement(): any {
        return cy.get('event-date-control-calendar-with-specialists-component')
            .find('#open-modal')
            .scrollIntoView().should('be.visible')
    }
}