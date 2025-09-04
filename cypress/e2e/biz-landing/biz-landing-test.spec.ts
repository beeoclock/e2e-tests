import {BizLandingPages} from "../../support/beeoclock/page-element/biz-landing/BizLandingPages";

describe('biz landing test presentation & header navigation tests', (): void => {

    beforeEach('login', (): void => {
        visit()
    })

    it('assert appointment section is visible after visit', (): void => {
        BizLandingPages.LandingBizAppointmentPage
            .assertIsSectionVisible()
            .assertTryForFreeButton()
        BizLandingPages.LandingBizFaqPage
            .assertIsSectionNotVisible()
        BizLandingPages.LandingBizTariffsPage
            .assertTariffsIsNotVisible()
    })

    it('assert client-app header link works properly', (): void => {
        BizLandingPages.LandingBizHeaderPage
            .assertHtml()
            .assertLogo()
            .clickOnServiceLink()
        BizLandingPages.LandingBizTariffsPage
            .assertTariffsIsNotVisible()
        BizLandingPages.LandingBizServicePage
            .assertIsSectionVisible()
            .assertHtml()
    })

    it('assert tariffs header link works properly', (): void => {
        BizLandingPages.LandingBizHeaderPage
            .clickOnTariffsLink()
        BizLandingPages.LandingBizTariffsPage
            .assertTariffsIsVisible()
        BizLandingPages.LandingBizServicePage
            .assertIsSectionNotVisible()
    })

    it('assert faq header link works properly', (): void => {
        BizLandingPages.LandingBizHeaderPage
            .clickOnFaqLink()
        BizLandingPages.LandingBizFaqPage
            .assertIsSectionVisible()
        BizLandingPages.LandingBizServicePage
            .assertIsSectionNotVisible()
    })

    it('assert contact header link works properly', (): void => {
        BizLandingPages.LandingBizHeaderPage
            .clickOnContactLink()
        BizLandingPages.LandingBizContactPage
            .assertIsSectionVisible()

        BizLandingPages.LandingBizServicePage
            .assertIsSectionNotVisible()
    })

    it('assert login header link works properly', (): void => {
        BizLandingPages.LandingBizHeaderPage
            .assertLoginLink()
    })

    it('body HTML should match the expected HTML', (): void => {
        BizLandingPages.BizLandingCommonPage
            .assertMainState()
    });

    it('appointment body HTML should match the expected HTML', (): void => {
        BizLandingPages.LandingBizAppointmentPage
            .assertHtml()
    });

    it('assert demo body HTML match the expected HTML', (): void => {
        BizLandingPages.LandingBizDemoSection
            .verifyOuterHtmlElement()
    })

    function visit() {
        cy.visit("https://biz.dev.beeoclock.com/pl/",
            {timeout: 30000, failOnStatusCode: false})
    }

    before((): void => {
        cy.clearAllLocalStorage()
        Cypress.env('skipClear', true);
    });
})