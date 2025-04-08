import {BizLandingHowItWorksElement} from "./element/BizLandingHowItWorksElement";
import {BizLandingOuterHTML} from "../../../../../fixtures/biz-landing/BizLandingOuterHTML";

export class LandingBizHowItWorks {
    private element = new BizLandingHowItWorksElement()
    private outerHTML = new BizLandingOuterHTML()

    public assertHtml(): LandingBizHowItWorks {
        this.element.getElement().invoke('prop', 'outerHTML').then(outerHtml => {
            expect(outerHtml).to.equal(this.outerHTML.getAppointmentOuterHTML())
        })
        return this
    }

}