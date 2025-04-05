describe('biz-landing', () => {

    beforeEach('login', () => {
        login()
    })

    function login() {
        cy.visit("https://biz.beeoclock.com/pl")
    }
})