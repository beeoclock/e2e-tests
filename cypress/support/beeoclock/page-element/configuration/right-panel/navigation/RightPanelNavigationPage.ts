import {RightPanelNavigationPageElement} from "./RightPanelNavigationPageElement";

export class RightPanelNavigationPage {

    public clickCloseRightPanel(): RightPanelNavigationPage {
        cy.log('close panel')
        RightPanelNavigationPageElement.CloseRightPanelButton.getElement()
            .click().then((): void => {
            cy.get('body').type('{esc}')
        })
        return this
    }
}