export class SpecificTableElement {
    public getComponent(specialist: string): any {
        return cy.get('app-calendar-with-specialists-widget-component')
            .find('.flex.flex-col.flex-1.border-r').contains(specialist)
            .parents('.flex.flex-col.flex-1.border-r').first()
            .scrollIntoView()

    }

    public getElement(specialist: string, index: number): any {
        return this.getComponent(specialist).find('app-empty-slot-calendar-with-specialist-widget-component').eq(index)
            .scrollIntoView()
    }
}