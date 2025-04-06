import {BizLandingPages} from "../../support/beeoclock/page-element/biz-landing/BizLandingPages";

describe('biz-landing test', () => {

    beforeEach('login', () => {
        login()
    })

    it('assert appointment section is visible after visit', () => {
        BizLandingPages.LandingBizAppointmentPage
            .assertIsSectionVisible()
            .assertTryForFreeButton()
        BizLandingPages.LandingBizFaqPage
            .assertIsSectionNotVisible()
        BizLandingPages.LandingBizTariffsPage
            .assertTariffsIsNotVisible()
    })

    it('assert service header link works properly', () => {
        BizLandingPages.LandingBizHeaderPage
            .assertHtml()
            .assertLogo()
            .clickOnServiceLink()
        BizLandingPages.LandingBizTariffsPage
            .assertTariffsIsNotVisible()
    })

    it('assert tariffs header link works properly', () => {
        BizLandingPages.LandingBizHeaderPage
            .clickOnTariffsLink()
        BizLandingPages.LandingBizTariffsPage
            .assertTariffsIsVisible()
        BizLandingPages.LandingBizServicePage
            .assertIsSectionNotVisible()
    })

    it('assert faq header link works properly', () => {
        BizLandingPages.LandingBizHeaderPage
            .clickOnFaqLink()
        BizLandingPages.LandingBizFaqPage
            .assertIsSectionVisible()
        BizLandingPages.LandingBizServicePage
            .assertIsSectionNotVisible()
    })

    it('assert contact header link works properly', () => {
        BizLandingPages.LandingBizHeaderPage
            .clickOnContactLink()
        BizLandingPages.LandingBizContactPage
            .assertIsSectionVisible()

        BizLandingPages.LandingBizServicePage
            .assertIsSectionNotVisible()
    })

    it('assert login header link works properly', () => {
        BizLandingPages.LandingBizHeaderPage
            .assertLoginLink()
    })

    it('body HTML should match the expected HTML', () => {
        BizLandingPages.BizLandingCommonPage
            .assertMainState()
    });

    it('appointment body HTML should match the expected HTML', () => {
        BizLandingPages.LandingBizAppointmentPage
            .assertHtml()
    });

    function login() {
        cy.visit("https://biz.dev.beeoclock.com/pl/",
            {timeout: 30000, failOnStatusCode: false})
    }

    before(() => {
        Cypress.env('skipClear', true);
    });
})