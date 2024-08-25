export class CalendarReloadButton {
    public static getElement(): any {
        return cy.get('#event-calendar-with-specialist-filter-auto-refresh')
            .find('.bi.bi-arrow-clockwise')
            .scrollIntoView().should('be.visible')
    }
}