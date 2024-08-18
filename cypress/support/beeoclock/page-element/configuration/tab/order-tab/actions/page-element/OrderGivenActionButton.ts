export class OrderGivenActionButton {
    public getElement(action: string): any {
        return cy.get('.z-10.bg-white.divide-y')
            .find('li')
            .contains(action)
            .scrollIntoView()
            .should('exist')
    }
}