describe('Environment Variables Test', () => {
    it('should log environment variables', () => {

        cy.log('LOGIN:', Cypress.env('LOGIN'));
        cy.log('PASSWORD:', Cypress.env('PASSWORD'));

        expect(Cypress.env('LOGIN')).to.exist;
        expect(Cypress.env('PASSWORD')).to.exist;
    });
});
