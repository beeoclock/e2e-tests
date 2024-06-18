export class OpenRightPanelButton {
    public getElement(): any {
        return cy.get('.p-2.flex.justify-between').find('.bi.bi-plus-lg')
            .contains('i')
            .parent('button')
            .scrollIntoView()
    }
}