import {BizLandingDemoSectionElement} from "./element/BizLandingDemoSectionElement";
import {BizLandingOuterHTML} from "../../../../../fixtures/biz-landing/BizLandingOuterHTML";

export class LandingBizDemoSection {
    private element: BizLandingDemoSectionElement = new BizLandingDemoSectionElement()
    private outerHTML = new BizLandingOuterHTML()


    public verifyOuterHtmlElement() {
        this.element.getMainElement().invoke('prop', 'outerHTML').then(outerHtml => {
            expect(outerHtml).to.equal(this.outerHTML.getDemoSectionOuterHtml())
        })
        return this
    }
}