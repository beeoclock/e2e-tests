export class OrderDetailsElement {
    public getElement(tdValue: string): any {
        return cy.get('.py-4 > :nth-child(5)').find('tbody').contains('td', tdValue).next('td')
    }
}