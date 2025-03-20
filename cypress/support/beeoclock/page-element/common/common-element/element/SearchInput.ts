export class SearchInput {

    public static getElement(): any {
        return cy.get('utility-search-input-component')
            .find('input')
            .scrollIntoView().should('be.visible')
    }

    public static getSearchButton(): any {
        return cy.get('utility-search-input-component')
            .find('button').last()
            .scrollIntoView().should('be.visible')
    }

    public static getClearButton(): any {
        return cy.get('utility-search-input-component')
            .find('button').first()
            .scrollIntoView().should('be.visible')
    }
}