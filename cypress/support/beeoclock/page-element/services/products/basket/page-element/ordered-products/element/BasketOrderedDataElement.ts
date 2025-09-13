export class BasketOrderedDataElement {

    public getComponent(): Cypress.Chainable<JQuery> {
        return cy.contains('p', 'Zamówione produkty')
            .parents('.flex.w-full.mb-3.flex-col').first()
    }

    public getDetailsElement(): Cypress.Chainable<JQuery> {
        return this.getComponent().find('details')
    }

    public getGivenDetailElement(name: string): Cypress.Chainable<JQuery> {
        return this.getComponent().find('details')

            .contains(name)
            .parents('details').first()
    }

    public getExpandArrow(name: string): Cypress.Chainable<JQuery> {
        return this.getGivenDetailElement(name).find('.bi-chevron-down')
    }

    public getTag(orderName: string): Cypress.Chainable<JQuery> {
        return this.getGivenDetailElement(orderName).find('span.rounded-full.bg-neutral-200')
    }

    public getTotalPrizeElement(): Cypress.Chainable<JQuery> {
        return cy.contains('Całkowita kwota').parents('.flex').first()
    }
}