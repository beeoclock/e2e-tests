import {BizLandingPages} from "../../support/beeoclock/page-element/biz-landing/BizLandingPages";
import {FaqData} from "../../fixtures/biz-landing/faqData";

describe('biz landing test faq', () => {

    beforeEach('login', () => {
        cy.visit('https://biz.dev.beeoclock.com/pl/#faq')
        BizLandingPages.LandingBizHeaderPage.clickOnFaqLink()
    })

    it('verify faq pl language', () => {
        BizLandingPages.LandingBizFaqPage
            .assertIsSectionVisible()

        cy.log('SECTION: NO.1')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(0)
            .assertQuestionText(0, getFaqObject(0).question)
            .assertBoldText(0, getFaqObject(0).boldAnswer)
            .asserFaqItemText(0, getFaqObject(0).answer)

        cy.log('SECTION: NO.2')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(1)
            .assertQuestionText(1, getFaqObject(1).question)
            .assertBoldText(1, getFaqObject(1).boldAnswer)
            .asserFaqItemText(1, getFaqObject(1).answer)
            .assertFaqItemLiText(1, 0, getFaqObject(1).liValue1)
            .assertFaqItemLiText(1, 1, getFaqObject(1).liValue2)
            .assertFaqItemLiText(1, 2, getFaqObject(1).liValue3)
            .assertFaqItemLiText(1, 3, getFaqObject(1).liValue4)
            .assertFaqItemLiText(1, 4, getFaqObject(1).liValue5)
            .assertFaqItemLiText(1, 5, getFaqObject(1).liValue6)
            .assertFaqItemLiLength(1, 6)

        cy.log('SECTION: NO.3')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(2)
            .assertQuestionText(2, getFaqObject(2).question)
            .assertBoldText(2, getFaqObject(2).boldAnswer)
            .assertFaqItemLiText(2, 0, getFaqObject(2).liValue1)
            .assertFaqItemLiText(2, 1, getFaqObject(2).liValue2)
            .assertFaqItemLiText(2, 2, getFaqObject(2).liValue3)
            .assertFaqItemLiText(2, 3, getFaqObject(2).liValue4)
            .assertFaqItemLiText(2, 4, getFaqObject(2).liValue5)
            .assertFaqItemLiText(2, 5, getFaqObject(2).liValue6)
            .assertFaqItemLiLength(2, 6)

        cy.log('SECTION: NO.4')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(3)
            .assertQuestionText(3, getFaqObject(3).question)
            .asserFaqItemText(3, getFaqObject(3).answer)

        cy.log('SECTION: NO.5')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(4)
            .assertQuestionText(4, getFaqObject(4).question)
            .assertFaqItemPText(4, 0, getFaqObject(4).liValue1)
            .assertFaqItemPText(4, 1, getFaqObject(4).liValue2)
            .assertFaqItemPText(4, 2, getFaqObject(4).liValue3)
    })

    function getFaqObject(num: number): any {
        return FaqData.getPlObject().faq[num];
    }
})