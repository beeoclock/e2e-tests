export class CancelledOrderMainDetailsElement {
    public getElement(tdValue: string): any {
        return cy.get('.py-4 > :nth-child(4)').find('tbody').contains('td', tdValue).find('.self-stretch').eq(1)
    }
}