export class CustomerOption {
    public getElement(customerName: string): any {
        return cy.get('ion-list')
            .find('ion-item')
            .contains(customerName)
            .scrollIntoView().should('exist')
    }
}