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

    public assertBoldText(index: number, expectedValue: string): LandingBizFaqPage {
        Assertions.assertProperties(this.element.getFaqItemBoldContent(index), 'text', expectedValue)
        return
    }

    public asserFaqItemText(index: number, expectedValue: string): LandingBizFaqPage {
        Assertions.assertProperties(this.element.getFaqItemContent(index), 'text', expectedValue)
        return this;
    }
}