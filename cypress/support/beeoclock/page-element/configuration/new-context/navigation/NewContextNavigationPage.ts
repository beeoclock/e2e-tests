import {NewContextElement} from "./element/NewContextElement";

export class NewContextNavigationPage {
    private element = new NewContextElement()

    public clickBackButton(): NewContextNavigationPage {
        this.element.getBackButton().click()
        return this;
    }
}