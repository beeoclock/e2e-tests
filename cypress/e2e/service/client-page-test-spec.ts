describe("Test name", () => {

    before('setup', () => {

    })

    it('additional setup', () => {

    })

    it('test body', function () {

        cy.visit('path/to/your/index.html');

        cy.document().then((doc) => {
            const langAttribute = doc.documentElement.getAttribute('lang');
            expect(langAttribute).to.equal('en-US');
        });
    });
});