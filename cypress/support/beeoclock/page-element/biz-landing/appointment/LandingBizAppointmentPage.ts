import {BizLandingAppointmentElement} from "./element/BizLandingAppointmentElement";
import {BizLandingOuterHTML} from "../../../../../fixtures/biz-landing/BizLandingOuterHTML";
import {BizLandingEnum} from "../common/BizLandingEnum";
import {Utils} from "../../../backend/Utils/Utils";

export class LandingBizAppointmentPage {
    private element = new BizLandingAppointmentElement()
    private outerHTML = new BizLandingOuterHTML()

    public assertIsSectionVisible(): LandingBizAppointmentPage {
        this.element.getElement().isInViewport()
        return this
    }

    public assertTryForFreeButton(): LandingBizAppointmentPage {
        this.element.getTryForFreeButton().isInViewport()
        this.element.getTryForFreeButton().parent('a')
            .should('have.attr', 'target', '_blank')
            .and('have.attr', 'href', BizLandingEnum.IDENTITY_URL + '/sign-up')
        return this
    }

    public assertHtml(): LandingBizAppointmentPage {
        this.element.getElement().invoke('prop', 'outerHTML').then((outerHtml: string) => {
            expect(Utils.normalizeString(outerHtml)).to.equal(Utils.normalizeString(this.outerHTML.getAppointmentOuterHTML()))
        })
        return this
    }

}