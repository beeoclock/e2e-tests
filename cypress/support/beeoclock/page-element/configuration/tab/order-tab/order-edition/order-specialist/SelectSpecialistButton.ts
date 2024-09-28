export class SelectSpecialistButton {
    public getElement(orderId: string): any {
        return cy.get('#' + orderId)
            .find('app-specialist-chip-component')
            .find('button')
            .scrollIntoView().should('be.visible')
    }
}