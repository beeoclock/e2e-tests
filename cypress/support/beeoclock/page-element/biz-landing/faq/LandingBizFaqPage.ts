import {BizLandingElement} from "./element/BizLandingElement";
import {Assertions} from "../../configuration/tab/common/assertions/Assertions";

export class LandingBizFaqPage {
    private element = new BizLandingElement()

    public assertIsSectionVisible(): LandingBizFaqPage {
        this.element.getElement().should('be.visible')
        this.element.getElement().isInViewport()
        return this;
    }

    public assertIsSectionNotVisible(): LandingBizFaqPage {
        this.element.getElement().isNotInViewport()
        return this;
    }

    public clickExpandButton(index: number): LandingBizFaqPage {
        this.element.getFaqItem(index).click().then((): void => {
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