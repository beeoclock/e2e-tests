export class OpenRightPanelButton {
    public getElement(): any {
        // return cy.get('.p-2.flex.justify-between').find('.bi.bi-plus-lg')
        return cy.get('app-empty-slot-calendar-with-specialist-widget-component').first()
            // .parent('button')
            .scrollIntoView()
    }
}
