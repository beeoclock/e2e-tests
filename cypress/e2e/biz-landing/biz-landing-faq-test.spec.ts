import {BizLandingPages} from "../../support/beeoclock/page-element/biz-landing/BizLandingPages";
import {FaqData} from "../../fixtures/biz-landing/faqData";

describe('biz landing test faq', () => {
    const faqPlItem = FaqData.getPlObject().faq[0]; // pobierasz pierwszy element FAQ

    beforeEach('login', () => {
        cy.visit('https://biz.dev.beeoclock.com/pl/#faq')
        BizLandingPages.LandingBizHeaderPage.clickOnFaqLink()
    })

    it('verify faq pl language', () => {
        BizLandingPages.LandingBizFaqPage
            .assertIsSectionVisible()
            .clickExpandButton(0)
            .assertBoldText(0, faqPlItem.boldAnswer)
            .asserFaqItemText(0, faqPlItem.answer)

    })
})