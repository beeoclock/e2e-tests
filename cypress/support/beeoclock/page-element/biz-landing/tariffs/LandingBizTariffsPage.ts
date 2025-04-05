import { BizLandingTariffsElement } from "./element/BizLandingTariffsElement";

export class LandingBizTariffsPage {
    private element = new BizLandingTariffsElement()

    public assertTariffsIsVisible(): LandingBizTariffsPage {
        this.element.getElement().should('be.visible')
        return this
    }
}