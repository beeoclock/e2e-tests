import {BizLandingAppointmentElement} from "./element/BizLandingAppointmentElement";
import {BizLandingOuterHTML} from "../../../../../fixtures/biz-landing/BizLandingOuterHTML";

export class LandingBizAppointmentPage {
    private element = new BizLandingAppointmentElement()
    private outerHTML = new BizLandingOuterHTML()

    public assertHtml(): LandingBizAppointmentPage {
        this.element.getElement().invoke('prop', 'outerHTML').then(outerHtml => {
            expect(outerHtml).to.equal(this.outerHTML.getAppointmentOuterHTML())
        })
        return this
    }

}