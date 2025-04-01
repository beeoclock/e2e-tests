export class PaymentStatusElement {

    public getElement(count: number): any {
        return cy.get('app-additional-menu')
            .contains('div', `Usługi: ${count}`)
            .next('span')
            .scrollIntoView().should('be.visible')
    }
}