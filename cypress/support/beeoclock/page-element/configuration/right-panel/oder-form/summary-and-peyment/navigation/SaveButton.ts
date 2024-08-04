export class SaveButton {
    public getElement(): any {
        return cy.contains('button', 'Zapisz')
            .scrollIntoView().should('be.visible')
            ;
        // ElementHelper.scrollToAndVerifyVisibility(element);

    }
}