export class LoginButton {
    public getElement(): any {
        return cy.contains('button', 'Zaloguj się')
            .should('be.visible')
    }
}