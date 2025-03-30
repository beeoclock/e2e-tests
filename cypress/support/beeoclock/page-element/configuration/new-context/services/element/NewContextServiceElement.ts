export class NewContextServiceElement {

    public getServiceTitle(): any {
        return cy.get('#service-form-title')
            .find('input')
            .scrollIntoView().should('be.visible')
    }

    public getDescriptionTextarea(): any {
        return cy.get('form-textarea-component')
            .find('textarea')
            .scrollIntoView().should('be.visible')
    }

    public getPriceInput(): any {
        return cy.get('price-and-currency-component')
            .find('input').first()
            .scrollIntoView().should('be.visible')
    }

    public getCreatedServiceTitle(): any {
        return cy.get('service-item-component').find('.w-full.text-lg.font-semibold')
            .scrollIntoView().should('be.visible')
    }

    public getCreatedServicePrice(): any {
        return cy.get('.flex.flex-col.items-end')
            .find('.truncate').first()
    }

    public getCreatedServiceDuration(): any {
        return cy.get('.flex.flex-col.items-end')
            .find('.truncate').last()
    }
}