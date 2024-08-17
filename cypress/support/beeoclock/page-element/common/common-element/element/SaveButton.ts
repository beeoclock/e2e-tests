export class SaveButton {
    public static getElement(): any {
        return cy.contains('button', 'Zapisz')
            .scrollIntoView().should('be.visible')
    }
}