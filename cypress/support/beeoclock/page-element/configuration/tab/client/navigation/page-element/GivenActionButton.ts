export class GivenActionButton {
    public getElement(action: string): any {
        return cy.get('[aria-labelledby="dropdownDefaultButton"]')
            .contains('button', action)
            .scrollIntoView().should('be.visible')

    }
}