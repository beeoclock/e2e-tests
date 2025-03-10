import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";
import {AuthApi} from "../../auth/AuthApi";
import {EntryPointEnum} from "../../../common/Interception/EntryPointEnum";

export class TariffsApi {
    private static getToken(): Cypress.Chainable<string> {
        return AuthApi.getToken();
    }
    private static BASE_URL: string = EntryPointEnum.TARIFFS_ENTRY_POINT;

    static patchToBasic(): any {
        const token = Cypress.env('token');
        const url = `${this.BASE_URL}/tenantTariffPlan/change`;

        return cy.request({
            method: 'PATCH',
            url: url,
            auth: {
                bearer: token
            },
            body: {
                
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            return response.body
        });
    }
}