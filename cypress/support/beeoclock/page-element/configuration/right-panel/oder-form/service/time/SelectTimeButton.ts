export class SelectTimeButton {
    public getElement(): any {
        return cy.get('app-duration-chip-component')
            .find('button')
            .scrollIntoView().should('be.visible')
    }
}