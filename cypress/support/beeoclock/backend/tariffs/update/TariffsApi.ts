import {AuthApi} from "../../auth/AuthApi";
import {DevEntryPointEnum} from "../../../common/Interception/DevEntryPointEnum";

export class TariffsApi {
    private static BASE_URL: string = DevEntryPointEnum.TARIFFS_ENTRY_POINT;

    static patchToBasic(): any {
        const token = Cypress.env('token');
        const url = `${this.BASE_URL}/tenantTariffPlan/change`;

        return cy.request({
            method: 'PATCH',
            url: url,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            auth: {
                bearer: token
            },
            body: {}
        }).then(response => {
            expect(response.status).to.equal(200);
            return response.body
        });
    }

    private static getToken(): Cypress.Chainable<string> {
        return AuthApi.getToken();
    }
}