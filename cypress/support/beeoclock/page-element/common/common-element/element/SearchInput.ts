export class SearchInput {
    public static getElement(): any {
        return cy.get('utility-search-input-component')
            .find('input')
            .scrollIntoView().should('be.visible')
    }
}