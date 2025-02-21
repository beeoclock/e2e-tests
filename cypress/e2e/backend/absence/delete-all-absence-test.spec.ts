import { AbsenceApi } from "support/beeoclock/backend/panel/absence/AbsenceApi";
import { ClientPropertiesEnum } from "support/beeoclock/common/enum/ClientPropertiesEnum";
import { ServiceEnum } from "support/beeoclock/common/enum/ServiceEnum";
import { BusinessNameEnum } from "support/beeoclock/page-element/common/enum/BusinessNameEnum";
import { PanelLoginPageElement } from "support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import { PanelLoginPage } from "support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";

describe("delete all absences by API", (): void => {

    before('clear environment', () => {
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.clearAllCookies();
    });

    beforeEach('login and get token', function () {
        cy.visit(ServiceEnum.CLIENT_PANEL, {
            failOnStatusCode: false,
            onBeforeLoad: (win) => {
                win.localStorage.setItem('language', 'pl');
            }
        });

        cy.log('login');
        PanelLoginPageElement.EmailInput.getElement();
        PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN);
        PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD);
        PanelLoginPage.clickLoginButton();
        PanelLoginPage.selectGivenBusinessAndStoreToken(BusinessNameEnum.HAIRCUT_AND_BARBER);

        cy.get('@token').then(bearer => {
            cy.wrap(bearer.toString()).as('token');
        });
    });

    it('delete absence', function () {
        cy.log('delete all current absences');

        cy.get('@token').then(token => {
            cy.log('Token in delete test: ' + token);
            AbsenceApi.deleteAllAbsences();
        });
    });
});
