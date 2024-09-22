export class BlueAddResource {
    public static getElement(): any {
        return cy.get('utility-default-panel-component')
            .find('.bi.bi-plus-lg')
            .scrollIntoView().should('be.visible')
    }
}