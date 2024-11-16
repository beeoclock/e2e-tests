export class SelectSpecificServiceCheckbox {

    public getElement(service: string): any {
        return cy.get('select-service-multiple').contains(service)
            .parents('select-service-multiple').first()// <-- returns main component of given option
    }

    public getPlusButton(service: string): any {
        return this.getElement(service)
            .find('.bi.bi-plus-lg')
            .scrollIntoView().should('be.visible')
    }

    public getMinusButton(service: string): any {
        return this.getElement(service)
            .find('.bi.bi-dash-lg')
            .scrollIntoView().should('be.visible')
    }
}