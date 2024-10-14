export class CloseRightPanelButton {
    public getElement(): any {
        return cy.get('whac-a-mole-wrapper')
            .find('[title="Close"]').first()
            .scrollIntoView().should('be.visible');
    }
}