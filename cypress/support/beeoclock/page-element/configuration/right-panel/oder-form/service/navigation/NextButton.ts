export class NextButton {
    public getElement(): any {
        return cy.get('app-additional-menu')
            .find('.bi.bi-chevron-right')
            .scrollIntoView().should('be.visible')
    }
}