import {RightPanelNavigationPageElement} from "./RightPanelNavigationPageElement";

export class RightPanelNavigationPage {

    public clickOpenRightPanel(): RightPanelNavigationPage {
        RightPanelNavigationPageElement.OpenRightPanelButton.getElement()
            .click()
        return this;
    }

    public clickCloseRightPanel(): RightPanelNavigationPage {
        cy.log('close panel')
        RightPanelNavigationPageElement.CloseRightPanelButton.getElement()
            .click().then(() => {
                cy.get('whac-a-mole').should('not.be.visible')
        })
        return this
    }
}