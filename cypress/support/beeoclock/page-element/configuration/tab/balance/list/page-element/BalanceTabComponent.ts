export class BalanceTabComponent {

    public getActualBalance(): any {
        return cy.get('balance-organizm')
            .scrollIntoView().should('be.visible')
    }
}