export class ConfirmButton {
    public getElement(): any {
        return cy.get('.gap-3').contains('button', 'Gotowe')
            .should('exist')

    }
}