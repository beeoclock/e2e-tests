import {BizLandingContactElement} from "./element/BizLandingContactElement";

export class LandingBizContactPage {
    private element = new BizLandingContactElement()

    public assertIsSectionVisible(): LandingBizContactPage {
        this.element.getElement().isInViewport()
        return this
    }

    public assertIsSectionNotVisible(): LandingBizContactPage {
        this.element.getElement().isNotInViewport()
        return this
    }
}