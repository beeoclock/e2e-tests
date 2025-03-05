export class PaymentStatusElement {

    public getElement(count: number): any {
        return cy.get('whac-a-mole-wrapper')
            .contains('div', `Usługi: ${count}`)
            .next('span')
            .scrollIntoView().should('be.visible')
    }
}