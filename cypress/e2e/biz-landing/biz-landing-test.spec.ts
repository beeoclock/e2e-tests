import {BizLandingPages} from "../../support/beeoclock/page-element/biz-landing/BizLandingPages";

describe('biz-landing', () => {

    beforeEach('login', () => {
        login()
    })

    it('assert service header link works properly', () => {
        BizLandingPages.LandingBizHeaderPage
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
        BizLandingPages.LandingBizFaqPage
            .assertIsSectionNotVisible()
    })

    it('assert login header link works properly', () => {
        BizLandingPages.LandingBizHeaderPage
            .assertLoginLink()
    })

    // it('body HTML should match the expected HTML', () => {
    //     cy.fixture('biz-landing/body.html').then((expectedHtml) => {
    //         cy.get('body').then((body) => {
    //             const actualHtml = body[0].outerHTML;
    //             expect(actualHtml.trim()).to.equal(expectedHtml.trim());
    //         });
    //     });
    // });

    function login() {
        cy.visit("https://biz.dev.beeoclock.com/pl/")
    }

    before(() => {
        Cypress.env('skipClear', true);
    });
})