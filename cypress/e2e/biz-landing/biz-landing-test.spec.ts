import {BizLandingPages} from "../../support/beeoclock/page-element/biz-landing/BizLandingPages";

describe('biz-landing', () => {

    beforeEach('login', () => {
        login()
    })

    it('assert header', () => {
        BizLandingPages.LandingBizHeaderPage
            .assertLogo()
            .clickOnServiceLink()
        BizLandingPages.LandingBizServicePage
            .assertPhoto()
        BizLandingPages.LandingBizHeaderPage
            .clickOnTariffsLink()
        BizLandingPages.LandingBizTariffsPage
            .assertTariffsIsVisible()
        })

    function login() {
        cy.visit("https://biz.dev.beeoclock.com/pl")
    }
})