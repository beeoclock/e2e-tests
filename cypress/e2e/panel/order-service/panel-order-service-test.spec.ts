import {ServiceEnum} from "../../../support/beeoclock/common/enum/ServiceEnum";
import {QueryAssertion} from "../../../support/beeoclock/common/assertion/QueryAssertion";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";

describe('panel - order service', () => {

    it('test panel  order service',  function () {
        cy.intercept('GET', '**/*').as('getAll');
        cy.visit(ServiceEnum.CLIENT_PANEL, { failOnStatusCode: false });
        cy.wait('@getAll', { timeout: 30000 });


        PanelLoginPageElement.EmailInput.getElement()

        PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN)
        PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD)
        PanelLoginPage.clickLoginButton()

        QueryAssertion.verifyCorrectUrl('/event/calendar-with-specialists')

        RightPanelPages.RightPanelNavigationPage
            .clickOpenRightPanel()
        RightPanelPages.RightPanelServicesPage
            .clickAddServiceButton()
            .clickSelectServiceButton()
            .selectSpecificService('Strzyżenie Brody')
            .verifySelectedService('Strzyżenie Brody', 'Samo Strzyżenie Brody')
    })
})