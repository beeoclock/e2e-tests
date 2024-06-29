export class OrderGivenActionButton {
    public getElement(action: string): any {
        return cy.get('[aria-labelledby="dropdownDefaultButton"]')
            .find('li')
            .contains('button', action)
            .scrollIntoView().should('be.visible')
    }
}