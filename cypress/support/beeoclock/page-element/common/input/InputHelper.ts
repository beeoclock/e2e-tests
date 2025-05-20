export class InputHelper {

    public static getInputValue(inputSelector: string): Cypress.Chainable<string> {
        return cy.get(inputSelector).invoke('val')
    }

    public static typeInputValue(inputSelector: string, value: string): void {
        cy.get(inputSelector).clear().type(value)
    }

    public static assertInputValue(inputSelector: string, expectedValue: string): void {
        cy.get(inputSelector).should('have.value', expectedValue)
    }
}