export class TariffsComponent {

    public getPriceByName(name: string): any {
        return cy.contains('h2', name)
            .parents('.flex.justify-between.gap-5').first()
            .scrollIntoView().should('be.visible')
    }

    public getTariffsPrice(name: string): any {
        return this.getPriceByName(name)
            .find('.flex.items-center.gap-1')
    }

    public getTariffsMemberCount(name: string): any {
        return this.getPriceByName(name).find('.flex.gap-2.first:font-bold')//ANTY-PATTERN!
    }

    public getTariffFeatures(name: string): any {
        return this.getPriceByName(name).find('li')
    }
}