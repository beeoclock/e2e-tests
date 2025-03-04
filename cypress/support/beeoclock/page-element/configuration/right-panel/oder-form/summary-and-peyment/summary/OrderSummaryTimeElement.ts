export class OrderSummaryTimeElement {
    public getElement(): any {
        return cy.get('app-duration-chip-component')
            .scrollIntoView()
            .should('be.visible')
    }
}