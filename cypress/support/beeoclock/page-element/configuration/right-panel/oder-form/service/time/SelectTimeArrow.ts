export class SelectTimeArrow {
    public getElement(): any {
        return cy.get('bee-duration-select-component')
            .find('.ng-arrow-wrapper')
            .scrollIntoView().should('be.visible')
    }
}