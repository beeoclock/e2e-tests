import {RightPanelNavigationPageElement} from "./RightPanelNavigationPageElement";

export class RightPanelNavigationPage {

    public clickOpenRightPanel(): RightPanelNavigationPage {
        RightPanelNavigationPageElement.OpenRightPanelButton.getElement()
            .click()
        return this;
    }
}