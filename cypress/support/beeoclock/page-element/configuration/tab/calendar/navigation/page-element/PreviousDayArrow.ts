export class PreviousDayArrow {

    public getElement(): any {
        return cy.get('event-date-control-calendar-with-specialists-component')
            .find('.bi.bi-chevron-left')
    }
}