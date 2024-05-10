export class CancelledOrderSummaryElement {
    public getElement(tdValue: string): any {
        return cy.get('.py-4 > :nth-child(3)').find('tbody').contains('td', tdValue).next('td')
    }
}