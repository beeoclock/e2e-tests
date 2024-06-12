export class OrderSummaryElement {
    public getElement(tdValue: string): any {
        return cy.get('tbody').contains('td', tdValue).next('td')
    }
}