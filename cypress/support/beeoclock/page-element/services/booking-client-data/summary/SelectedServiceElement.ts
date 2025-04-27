export class SelectedServiceElement {

    public getElement(service: string): any {
        return cy.get('item-on-list-v2').contains(service)
            .parents('item-on-list-v2') //<-- return the parent element
    }
    public getSelectedServiceName(service: string): any {
        return this.getElement(service)
            .find('.text-sm').first()
    }

    public getSelectedServiceTime(service: string): any {
        return this.getElement(service)
            .find('.inline-flex.items-center').eq(1)
    }

    public getSelectedServicePrice(service: string): any {
        return this.getElement(service)
            .find('.inline-flex.items-center').eq(2)// as next next
    }

    public getSpecialistElement(specialist: string): any {
        return cy.get('.inline-flex.items-center.gap-2.rounded-md').contains(specialist)
            .should('be.visible')
    }

    public getSummaryTotalPrice(): any {
        return cy.contains('Cena całkowita').next('div')
    }
}