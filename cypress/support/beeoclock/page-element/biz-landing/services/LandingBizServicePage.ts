import {BizLandingServiceElement} from "./element/BizLandingServiceElement";
import {Assertions} from "../../configuration/tab/common/assertions/Assertions";
import {BizLandingOuterHTML} from "../../../../../fixtures/biz-landing/BizLandingOuterHTML";

export class LandingBizServicePage {
    private element = new BizLandingServiceElement()
    private outerHTML = new BizLandingOuterHTML()


    public assertIsSectionVisible(): LandingBizServicePage {
        this.element.getElement().isInViewport()
        return this
    }

    public assertHtml(): LandingBizServicePage {
        this.element.getElement().invoke('prop', 'outerHTML').then(outerHtml => {
            expect(outerHtml).to.equal(this.outerHTML.getServiceOuterHTML())
        })
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