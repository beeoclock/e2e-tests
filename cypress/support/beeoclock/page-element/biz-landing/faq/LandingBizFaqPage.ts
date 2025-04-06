import {BizLandingElement} from "./element/BizLandingElement";

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
}