export class OrderTableElement {
    public getElement(specialistFirstName: string, specialistLastName: string): any {
        return cy.get('app-calendar-with-specialists-widget-component')
            .find('app-event-calendar-with-specialists-widget-component')
            .filter(`[data-member-first-name="${specialistFirstName}"]`)
            .filter(`[data-member-last-name="${specialistLastName}"]`)
            .scrollIntoView().should('exist');
    }

    public getIdElement(id: string): any {
        return cy.get('app-calendar-with-specialists-widget-component')
            .find('app-event-calendar-with-specialists-widget-component')
            .filter(`[data-member-id="${id}"]`)
            .scrollIntoView().should('exist');
    }
}

