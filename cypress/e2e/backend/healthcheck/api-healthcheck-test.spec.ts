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
import {ProductApi} from "../../../support/beeoclock/backend/panel/product/ProductApi";
import {ProductTagBuilder} from "../../../support/beeoclock/backend/panel/product/tag/ProductTagBuilder";
import {NumericUtils} from "../../../support/beeoclock/backend/Utils/NumericUtils";

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

    it('get business profile and assert unauthorized response', function (): void {
        BusinessProfileApi.getBusinessProfileDetails(HTTPStatusCodeType.Unauthorized, BackendCommonEnum.INVALID_TOKEN, {
            failOnStatusCode: false
        });
    });

    it('get business profile and assert correct response', function (): void {
        BusinessProfileApi.getBusinessProfileDetails(HTTPStatusCodeType.OK, token, {}).then((response: Record<string, any>): void => {
            cy.log('response', JSON.stringify(response));
        });
    });

    it('get identity profile and assert expected response', function (): void {
        IdentityApi.getBusinessIdentity(HTTPStatusCodeType.OK, token, {}).then((response: Record<string, any>): void => {
            cy.log('response', JSON.stringify(response));

            expect(response).to.have.property('items').that.is.an('array');
            expect(response.items).to.have.length(IdentityData.DATA.items.length);

            response.items.forEach((item, index) => {
                const expectedItem = IdentityData.DATA.items[index];

                expect(item.account).to.have.property('_id', expectedItem.account._id);
                expect(item.client).to.deep.equal(expectedItem.client);
                expect(item).to.have.property('stateHistory').that.is.an('array');

                item.stateHistory.forEach((history, historyIndex) => {
                    expect(history).to.have.property('state');
                    expect(history.state).to.equal(expectedItem.stateHistory[historyIndex].state);
                });
            });
        });
    });

    it('get analytic Info and assert all response keys', function (): void {
        AnalyticApi.getDateRangeReport(HTTPStatusCodeType.OK, token, {}).then((response: Record<string, any>): void => {
            expect(response).to.have.all.keys(
                "startDateTime", "endDateTime", "totalOrderServices", "totalOrders", "totalRevenue", "specialistReports"
            );
        })
    });

    it('create product tag and delete', function (): void {
        let id: string = NumericUtils.generateObjectId()
        const tag = new ProductTagBuilder().setId(id).build();
        ProductApi.createProductTag(tag, token).then(() => {
            ProductApi.deleteProductTag(id, token).then(() => {
                cy.log('product tag deleted');
            })
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
