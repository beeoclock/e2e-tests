export class CloseRightPanelButton {
    public getElement(): any {
        return cy.get('app-additional-menu')
            .find('[title="Close"]').first()
            .scrollIntoView().should('be.visible');
    }
}