export class QueryAssertion {

    public static verifyCorrectUrl(url: string): QueryAssertion {
        cy.url().should('contain', url)
        return this;
    }
}