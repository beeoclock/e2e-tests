import {BusinessProfileApi} from "../../../support/beeoclock/backend/panel/business-profile/BusinessProfileApi";
import {HTTPStatusCodeType} from "../../../support/beeoclock/backend/enum/HTTPStatusCodeType";
import {ServiceEnum} from "../../../support/beeoclock/common/enum/ServiceEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import {BackendCommonEnum} from "../../../support/beeoclock/backend/enum/BackendCommonEnum";

describe("Test name", () => {
    let token: string

    it('login and get valid token', () => {
        cy.log('visit');
        cy.visit(ServiceEnum.CLIENT_PANEL, {
            failOnStatusCode: false,
            onBeforeLoad: (win) => {
                win.sessionStorage.clear();
                win.localStorage.clear();
                win.sessionStorage.clear();
                win.localStorage.setItem('language', 'pl');
            }
        });

        cy.log('login');
        PanelLoginPageElement.EmailInput.getElement();
        PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN);
        PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD);
        PanelLoginPage.clickLoginButtonAndStoreToken();

        cy.get('@token').then(fetchedToken => {
            token = fetchedToken.toString();
            cy.log('Token:', token);
        });
    });

    it('assert unauthorized status', function () {
        BusinessProfileApi.getBusinessProfileDetails(HTTPStatusCodeType.Unauthorized, BackendCommonEnum.INVALID_TOKEN, {
            failOnStatusCode: false
        });
    });

    it('assert correct status', function () {
        BusinessProfileApi.getBusinessProfileDetails(HTTPStatusCodeType.OK, token, {}).then(response => {
         cy.log('response', JSON.stringify(response));
        });
    });
});
