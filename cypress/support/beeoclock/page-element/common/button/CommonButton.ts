import JQueryWithSelector = Cypress.JQueryWithSelector;

export class CommonButton {

    private static getButton(phrase: string): Cypress.Chainable<JQueryWithSelector> {
        return cy.contains('button', phrase).scrollIntoView()
            .should('be.visible')
    }

    public static clickOnButtonByPhrase(phrase: string): void {
        this.getButton(phrase).click()
    }
}