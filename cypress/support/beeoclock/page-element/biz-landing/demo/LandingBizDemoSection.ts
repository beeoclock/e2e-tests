import {BizLandingDemoSectionElement} from "./element/BizLandingDemoSectionElement";
import {BizLandingOuterHTML} from "../../../../../fixtures/biz-landing/BizLandingOuterHTML";
import {PanelLoginPageElement} from "../../configuration/login/PanelLoginPageElement";
import {Utils} from "../../../backend/Utils/Utils";

export class LandingBizDemoSection {
    private element: BizLandingDemoSectionElement = new BizLandingDemoSectionElement()
    private outerHTML = new BizLandingOuterHTML()

    public verifyOuterHtmlElement(): LandingBizDemoSection {
        this.element.getMainElement().invoke('prop', 'outerHTML').then((outerHtml: string): void => {
            expect(Utils.normalizeString(outerHtml)).to.equal(Utils.normalizeString(this.outerHTML.getDemoSectionOuterHtml()))
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