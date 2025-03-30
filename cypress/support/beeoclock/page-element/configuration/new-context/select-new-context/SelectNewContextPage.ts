import {SelectNewContextElement} from "./element/SelectNewContextElement";

export class SelectNewContextPage {
    private element = new SelectNewContextElement()

    public clickSelectNewContextLink(): SelectNewContextPage {
        this.element.getCreateNewBusiness().click()
        return this;
    }
}