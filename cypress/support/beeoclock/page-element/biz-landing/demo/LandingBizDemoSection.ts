import {BizLandingDemoSectionElement} from "./element/BizLandingDemoSectionElement";
import {BizLandingOuterHTML} from "../../../../../fixtures/biz-landing/BizLandingOuterHTML";
import {AssertionsHelper} from "../../../common/assertion/AssertionsHelper";
import {PanelLoginPageElement} from "../../configuration/login/PanelLoginPageElement";

export class LandingBizDemoSection {
    private element: BizLandingDemoSectionElement = new BizLandingDemoSectionElement()
    private outerHTML = new BizLandingOuterHTML()

    public verifyOuterHtmlElement(): LandingBizDemoSection {
        this.element.getMainElement().invoke('prop', 'outerHTML').then((outerHtml: string): void => {
            expect(AssertionsHelper.normalizeText(outerHtml)).to.equal(AssertionsHelper.normalizeText(this.outerHTML.getDemoSectionOuterHtml()))
        })
        return this
    }

    public clickDemoButton(): LandingBizDemoSection {
        this.element.getDemoButton()
            .invoke('removeAttr', 'target')
            .click()

        cy.url().should('eq', 'https://crm.dev.beeoclock.com/identity?login=demo@beeoclock.com&password=ItIckBeRSOLDENZYGosicirE')
        PanelLoginPageElement.EmailInput.getElement();
        return this
    }
}