export class CloseRightPanelButton {
    public getElement(): any {
        return cy.get('[title="Close"]')
            .scrollIntoView().should('be.visible');
    }
}