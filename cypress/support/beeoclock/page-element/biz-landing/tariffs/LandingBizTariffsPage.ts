import {BizLandingTariffsElement} from "./element/BizLandingTariffsElement";

export class LandingBizTariffsPage {
    private element = new BizLandingTariffsElement()

    public assertTariffsIsVisible(): LandingBizTariffsPage {
        this.element.getElement().should('be.visible')
        return this
    }

    public assertTariffsIsNotVisible(): LandingBizTariffsPage {
        this.element.getElement().isNotInViewport()
        return this
    }
}