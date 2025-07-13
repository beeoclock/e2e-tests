describe('Environment Variables Test', (): void => {
    it('should log environment variables', (): void => {
        // Logowanie do konsoli w celach debugowania
        cy.log('LOGIN:', Cypress.env('LOGIN'));
        cy.log('PASSWORD:', Cypress.env('PASSWORD'));

        // Testowanie obecności zmiennych
        expect(Cypress.env('LOGIN')).to.not.be.undefined;
        expect(Cypress.env('PASSWORD')).to.not.be.undefined;
    });
});
