export class PaymentStatusElement {

    public getElement(count: number): any {
        return cy.contains('div', `Usługi: ${count}`)
            .next('span')
            .scrollIntoView().should('be.visible')
    }
}