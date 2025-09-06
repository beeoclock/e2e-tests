export class SaveButton {
    public getElement(): any {
        return cy.contains('button', 'Zapisz się')
            .should('be.visible')
            .scrollIntoView()
    }
}