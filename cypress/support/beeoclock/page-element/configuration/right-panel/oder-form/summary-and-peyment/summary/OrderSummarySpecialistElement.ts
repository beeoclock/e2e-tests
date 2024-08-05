export class OrderSummarySpecialistElement {
    public getElement(): any {
        return cy.get('app-specialist-chip-component')
            .scrollIntoView()
            .should('be.visible')
    }
}