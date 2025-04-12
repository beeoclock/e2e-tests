import {BizLandingPages} from "../../support/beeoclock/page-element/biz-landing/BizLandingPages";
import {FaqData} from "../../fixtures/biz-landing/faqData";

describe('biz landing test faq', () => {

    it('verify faq pl language', () => {
        cy.visit('https://biz.dev.beeoclock.com/pl/#faq')

        BizLandingPages.LandingBizFaqPage
            .assertIsSectionVisible()

        cy.log('SECTION: NO.1')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(0)
            .assertQuestionText(0, getFaqPlObject(0).question)
            .assertBoldText(0, getFaqPlObject(0).boldAnswer)
            .asserFaqItemText(0, getFaqPlObject(0).answer)

        cy.log('SECTION: NO.2')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(1)
            .assertQuestionText(1, getFaqPlObject(1).question)
            .assertBoldText(1, getFaqPlObject(1).boldAnswer)
            .asserFaqItemText(1, getFaqPlObject(1).answer)
            .assertFaqItemLiText(1, 0, getFaqPlObject(1).liValue1)
            .assertFaqItemLiText(1, 1, getFaqPlObject(1).liValue2)
            .assertFaqItemLiText(1, 2, getFaqPlObject(1).liValue3)
            .assertFaqItemLiText(1, 3, getFaqPlObject(1).liValue4)
            .assertFaqItemLiText(1, 4, getFaqPlObject(1).liValue5)
            .assertFaqItemLiText(1, 5, getFaqPlObject(1).liValue6)
            .assertFaqItemLiLength(1, 6)

        cy.log('SECTION: NO.3')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(2)
            .assertQuestionText(2, getFaqPlObject(2).question)
            .assertBoldText(2, getFaqPlObject(2).boldAnswer)
            .assertFaqItemLiText(2, 0, getFaqPlObject(2).liValue1)
            .assertFaqItemLiText(2, 1, getFaqPlObject(2).liValue2)
            .assertFaqItemLiText(2, 2, getFaqPlObject(2).liValue3)
            .assertFaqItemLiText(2, 3, getFaqPlObject(2).liValue4)
            .assertFaqItemLiText(2, 4, getFaqPlObject(2).liValue5)
            .assertFaqItemLiText(2, 5, getFaqPlObject(2).liValue6)
            .assertFaqItemLiLength(2, 6)

        cy.log('SECTION: NO.4')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(3)
            .assertQuestionText(3, getFaqPlObject(3).question)
            .asserFaqItemText(3, getFaqPlObject(3).answer)

        cy.log('SECTION: NO.5')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(4)
            .assertQuestionText(4, getFaqPlObject(4).question)
            .assertFaqItemPText(4, 0, getFaqPlObject(4).liValue1)
            .assertFaqItemPText(4, 1, getFaqPlObject(4).liValue2)
            .assertFaqItemPText(4, 2, getFaqPlObject(4).liValue3)
    })

    it('verify faq en language', () => {
        cy.visit('https://biz.dev.beeoclock.com/#faq')

        BizLandingPages.LandingBizFaqPage
            .assertIsSectionVisible()

        cy.log('SECTION: NO.1')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(0)
            .assertQuestionText(0, getFaqEnObject(0).question)
            .assertBoldText(0, getFaqEnObject(0).boldAnswer)
            .asserFaqItemText(0, getFaqEnObject(0).answer)

        cy.log('SECTION: NO.2')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(1)
            .assertQuestionText(1, getFaqEnObject(1).question)
            .assertBoldText(1, getFaqEnObject(1).boldAnswer)
            .asserFaqItemText(1, getFaqEnObject(1).answer)
            .assertFaqItemLiText(1, 0, getFaqEnObject(1).liValue1)
            .assertFaqItemLiText(1, 1, getFaqEnObject(1).liValue2)
            .assertFaqItemLiText(1, 2, getFaqEnObject(1).liValue3)
            .assertFaqItemLiText(1, 3, getFaqEnObject(1).liValue4)
            .assertFaqItemLiText(1, 4, getFaqEnObject(1).liValue5)
            .assertFaqItemLiText(1, 5, getFaqEnObject(1).liValue6)
            .assertFaqItemLiLength(1, 6)

        cy.log('SECTION: NO.3')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(2)
            .assertQuestionText(2, getFaqEnObject(2).question)
            .assertBoldText(2, getFaqEnObject(2).boldAnswer)
            .assertFaqItemLiText(2, 0, getFaqEnObject(2).liValue1)
            .assertFaqItemLiText(2, 1, getFaqEnObject(2).liValue2)
            .assertFaqItemLiText(2, 2, getFaqEnObject(2).liValue3)
            .assertFaqItemLiText(2, 3, getFaqEnObject(2).liValue4)
            .assertFaqItemLiText(2, 4, getFaqEnObject(2).liValue5)
            .assertFaqItemLiText(2, 5, getFaqEnObject(2).liValue6)
            .assertFaqItemLiLength(2, 6)

        cy.log('SECTION: NO.4')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(3)
            .assertQuestionText(3, getFaqEnObject(3).question)
            .asserFaqItemText(3, getFaqEnObject(3).answer)

        cy.log('SECTION: NO.5')
        BizLandingPages.LandingBizFaqPage
            .clickExpandButton(4)
            .assertQuestionText(4, getFaqEnObject(4).question)
            .assertFaqItemPText(4, 0, getFaqEnObject(4).liValue1)
            .assertFaqItemPText(4, 1, getFaqEnObject(4).liValue2)
            .assertFaqItemPText(4, 2, getFaqEnObject(4).liValue3)
    })

    function getFaqPlObject(num: number): any {
        return FaqData.getPlObject().faq[num];
    }

    function getFaqEnObject(num: number): any {
        return FaqData.getEnObject().faq[num];
    }
})