describe('Environment Variables Test', () => {
    it('should log environment variables', () => {
        // Logowanie do konsoli w celach debugowania
        cy.log('LOGIN:', Cypress.env('LOGIN'));
        cy.log('PASSWORD:', Cypress.env('PASSWORD'));

        // Testowanie obecności zmiennych
        expect(Cypress.env('LOGIN')).to.not.be.undefined;
        expect(Cypress.env('PASSWORD')).to.not.be.undefined;
    });
});
