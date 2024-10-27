export class AddServiceButton {
    public getElement(): any {
        return cy.get('.h-12 > .w-8 > .bi')
            .scrollIntoView().should('be.visible')
    }
}
