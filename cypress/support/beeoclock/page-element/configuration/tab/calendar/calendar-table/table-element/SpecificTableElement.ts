export class SpecificTableElement {
    public getElement(specialist: string, index: number): any {
        return cy.get('app-calendar-with-specialists-widget-component')
            .find('.flex.flex-col.flex-1.border-r').contains(specialist)
            .parents('.flex.flex-col.flex-1.border-r').first()
            .find('app-empty-slot-calendar-with-specialist-widget-component').eq(index)
            .scrollIntoView()
            .should('be.visible')
    }
}