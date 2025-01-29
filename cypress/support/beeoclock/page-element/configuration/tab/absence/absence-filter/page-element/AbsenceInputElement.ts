export class AbsenceInputElement {

    public getSearchInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#search-input-component[type="text"]');
    }

    public getSearchButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get('#search-input-component').find('button').last();
    }
}
