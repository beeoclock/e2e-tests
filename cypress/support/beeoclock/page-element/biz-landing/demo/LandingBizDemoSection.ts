import {BizLandingDemoSectionElement} from "./element/BizLandingDemoSectionElement";
import {BizLandingOuterHTML} from "../../../../../fixtures/biz-landing/BizLandingOuterHTML";
import {AssertionsHelper} from "../../../common/assertion/AssertionsHelper";

export class LandingBizDemoSection {
    private element: BizLandingDemoSectionElement = new BizLandingDemoSectionElement()
    private outerHTML = new BizLandingOuterHTML()

    public verifyOuterHtmlElement(): LandingBizDemoSection {
        this.element.getMainElement().invoke('prop', 'outerHTML').then((outerHtml: string): void => {
            expect(AssertionsHelper.normalizeText(outerHtml)).to.equal(AssertionsHelper.normalizeText(this.outerHTML.getDemoSectionOuterHtml()))
        })
        return this
    }
}