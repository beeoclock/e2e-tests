import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";
import {DevEntryPointEnum} from "../../../common/Interception/DevEntryPointEnum";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";

export class TariffsQueriesApi {
    private static BASE_URL: string = DevEntryPointEnum.TARIFFS_ENTRY_POINT;

    static getTariffsPaged(expectedCode: HTTPStatusCodeType, options: Partial<Cypress.RequestOptions>, givenToken?: string): any {
        const token = givenToken || Cypress.env('token');
        const url = `${this.BASE_URL}/paged`;

        return cy.request({
            method: 'GET',
            url: url,
            qs: {
                page: 1,
                pageSize: 20,
                orderDir: 'asc',
                orderBy: 'updatedAt',
            },
            auth: {
                bearer: token
            },
            ...options
        }).then(response => {
            expect(response.status).to.equal(expectedCode);
            return response.body
        });
    }

    static getTariffsByIds(id: string, expectedCode: HTTPStatusCodeType, options: Partial<Cypress.RequestOptions>, givenToken?: string): any {
        const token = givenToken || Cypress.env('token');
        const url: string = `${this.BASE_URL}/${id}`;

        return cy.request({
            method: 'GET',
            url: url,
            auth: {
                bearer: token
            },
            ...options
        }).then(response => {
            expect(response.status).to.equal(expectedCode);
            return response.body
        });
    }

    static getChangeStatusSession(): any {
        const token = Cypress.env('token');
        const url = `${this.BASE_URL}/tenantTariffPlan/change-payment-method-checkout-session`;

        return cy.request({
            method: 'POST',
            url: url,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            auth: {
                bearer: token
            },
        }).then(response => {
            expect(response.status).to.equal(201);
            return response.body
        });
    }
}