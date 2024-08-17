export class GivenActionButton {
    public getElement(option: string): any {
        return cy.get('[aria-labelledby="dropdownDefaultButton"]')
            .find('li').contains(option)
            .scrollIntoView().should('be.visible')
    }
}