export class ConfirmButton {
    public getElement(): any {
        return cy.contains('button', 'Gotowe')
            .should('exist')

    }
}