export class CloseRightPanelButton {
    public getElement(): any {
        return cy.get('whac-a-mole-wrapper')
            .find('[title="Close"]')
            .scrollIntoView().should('be.visible');
    }
}