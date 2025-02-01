import {BusinessProfileApi} from "../../../support/beeoclock/backend/panel/business-profile/BusinessProfileApi";
import {HTTPStatusCodeType} from "../../../support/beeoclock/backend/enum/HTTPStatusCodeType";
import {ServiceEnum} from "../../../support/beeoclock/common/enum/ServiceEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import {BackendCommonEnum} from "../../../support/beeoclock/backend/enum/BackendCommonEnum";
import {IdentityApi} from "../../../support/beeoclock/backend/identity/IdentityApi";
import {IdentityData} from "../../../support/beeoclock/backend/identity/enum/IdentityResponse";
import {AnalyticApi} from "../../../support/beeoclock/backend/panel/analytic/AnalyticApi";

describe("panel api healthcheck", () => {
    let token: string

    it('login and get valid token', () => {
        cy.log('visit');
        loginAndStoreToken()

        cy.get('@token').then(fetchedToken => {
            token = fetchedToken.toString();
            cy.log('Token:', token);
        });
    });

    it('get business profile and assert unauthorized response', function () {
        BusinessProfileApi.getBusinessProfileDetails(HTTPStatusCodeType.Unauthorized, BackendCommonEnum.INVALID_TOKEN, {
            failOnStatusCode: false
        });
    });

    it('get business profile and assert correct response', function () {
        BusinessProfileApi.getBusinessProfileDetails(HTTPStatusCodeType.OK, token, {}).then((response: Record<string, any>): void => {
            cy.log('response', JSON.stringify(response));
        });
    });

    it('get identity profile and assert expected response', function () {
        IdentityApi.getBusinessIdentity(HTTPStatusCodeType.OK, token, {}).then((response: Record<string, any>): void => {
            expect(JSON.stringify(response)).to.equal(JSON.stringify(IdentityData.DATA));
        })
    });

    it('get analytic Info and assert all response keys', function () {
        AnalyticApi.getDateRangeReport(HTTPStatusCodeType.OK, token, {}).then((response: Record<string, any>): void => {
            expect(response).to.have.all.keys(
                "startDateTime", "endDateTime", "totalOrderServices", "totalOrders", "totalRevenue", "specialistReports"
            );
        })
    });

    function loginAndStoreToken() {
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
    }
});
