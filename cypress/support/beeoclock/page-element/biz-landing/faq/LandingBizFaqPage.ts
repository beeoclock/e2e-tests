import {BizLandingElement} from "./element/BizLandingElement";
import {Assertions} from "../../configuration/tab/common/assertions/Assertions";

export class LandingBizFaqPage {
    private element = new BizLandingElement()

    public assertIsSectionVisible(): LandingBizFaqPage {
        this.element.getElement().isInViewport()
        return this;
    }

    public assertIsSectionNotVisible(): LandingBizFaqPage {
        this.element.getElement().isNotInViewport()
        return this;
    }

    public clickExpandButton(index: number): LandingBizFaqPage {
        this.element.getFaqItem(index).click().then(() => {
            this.element.getRollUpButton(index).should('be.visible');
        })
        return this;
    }

    public assertIsSectionRollDown(index: number): LandingBizFaqPage {
        this.element.getExpandButton(index).should('be.visible');
        return this;
    }

    public assertQuestionText(index: number, expectedValue: string): LandingBizFaqPage {
        Assertions.assertProperties(this.element.getFaqItem(index), 'innerText', expectedValue)
        return this
    }

    public assertBoldText(index: number, expectedValue: string): LandingBizFaqPage {
        Assertions.assertTrimmedProperties(this.element.getFaqItemBoldContent(index), 'innerText', expectedValue)
        return this
    }

    public asserFaqItemText(index: number, expectedValue: string): LandingBizFaqPage {
        Assertions.assertProperties(this.element.getFaqItemContent(index), 'innerText', expectedValue)
        return this;
    }


    //expected
    // 'register on the platform, add basic information about your business and services, and the system will be ready to go. You have the option to use the free plan (Free) with basic functionality, which will allow you to immediately test the key features of Bee o’clock without any costs.'
    // 'Register on the platform, add basic information about your business and services, and the system will be ready to go. You have the option to use the free plan (Free) with basic functionality, which will allow you to immediately test the key features of Bee o’clock without any costs.
    public assertFaqItemLiText(index: number, liIndex: number, expectedValue: string): LandingBizFaqPage {
        Assertions.assertProperties(this.element.getFaqItemLi(index, liIndex), 'innerText', expectedValue)
        return this;
    }

    public assertFaqItemPText(index: number, liIndex: number, expectedValue: string): LandingBizFaqPage {
        Assertions.assertProperties(this.element.getFaqItemP(index, liIndex), 'innerText', expectedValue)
        return this;
    }

    public assertFaqItemLiLength(index: number, expectedValue: number): LandingBizFaqPage {
        this.element.getFaqItemLiLength(index).should('eq', expectedValue)
        return this;
    }
}