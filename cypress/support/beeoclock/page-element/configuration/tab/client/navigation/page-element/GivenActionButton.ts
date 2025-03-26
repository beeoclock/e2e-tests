export class GivenActionButton {
    public getElement(action: string): any {
        return cy.get('ion-content')
            .find('ion-item').contains(action)
            .scrollIntoView().should('be.visible')
    }
}