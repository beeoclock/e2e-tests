export class SelectSpecificTime {
    public getElement(time: string): any {
        return cy.get('bee-duration-select-component')
            .find('.ng-dropdown-panel-items')
            .find('.ng-option')
            .contains(time)
            .scrollIntoView().should('be.visible')
    }
}