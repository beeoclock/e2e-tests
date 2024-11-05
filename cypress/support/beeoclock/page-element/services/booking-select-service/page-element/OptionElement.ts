export class OptionElement {

    public getElement(order: string): any {
        return cy.get('select-service-multiple').contains(order).parents('select-service-multiple').first()
            .find('.flex.gap-4.items-center')
    }

    public getAddButton(order: string): any {
        return this.getElement(order).find('.bi-plus-lg')
            .should('be.visible')
            .scrollIntoView()
    }

    public getMinusButton(order: string): any {
        return this.getElement(order).find('.bi-dash-lg')
            .should('be.visible')
            .scrollIntoView()
    }
}