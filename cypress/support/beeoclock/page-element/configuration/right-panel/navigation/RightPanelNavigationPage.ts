import {RightPanelNavigationPageElement} from "./RightPanelNavigationPageElement";

export class RightPanelNavigationPage {

    public clickOpenRightPanel(): RightPanelNavigationPage {
        RightPanelNavigationPageElement.OpenRightPanelButton.getElement()
            .click()
        return this;
    }

    public clickCloseRightPanel(): RightPanelNavigationPage {
        RightPanelNavigationPageElement.CloseRightPanelButton.getElement()
            .click()
        return this
    }
}