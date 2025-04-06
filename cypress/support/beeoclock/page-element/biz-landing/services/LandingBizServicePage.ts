import {BizLandingServiceElement} from "./element/BizLandingServiceElement";
import {Assertions} from "../../configuration/tab/common/assertions/Assertions";

export class LandingBizServicePage {
    private element = new BizLandingServiceElement()

    public assertIsSectionVisible(): LandingBizServicePage {
        this.element.getElement().should('be.visible')
        return this
    }

    public assertIsSectionNotVisible(): LandingBizServicePage {
        this.element.getElement().isNotInViewport()
        return this
    }

    public assertPhoto(): LandingBizServicePage {
        this.element.getPhoto().should('be.visible')
        Assertions.assertProperties(this.element.getPhoto(), 'src', "https://biz.dev.beeoclock.com/pl/assets/img/local_img/img_pl.webp")
        return this
    }

}