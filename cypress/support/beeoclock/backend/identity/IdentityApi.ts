import {HTTPStatusCodeType} from "../enum/HTTPStatusCodeType";
import {BackendCommonEnum} from "../enum/BackendCommonEnum";
import {EnvEnum} from "../../common/enum/EnvEnum";
import {ApiRequestHelper} from "../../common/Interception/ApiRequestHelper";

export class IdentityApi extends ApiRequestHelper {

    public static getBusinessIdentity(expectedCode: HTTPStatusCodeType, options: Partial<Cypress.RequestOptions>): any {
        const url = 'https://api-dev.beeoclock.com/identity/api/v1/member-context/related?orderBy=createdAt&orderDir=asc&page=1&pageSize=20';
        cy.token()
        return cy.request({
            method: 'GET',
            url: url,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id,
                'Authorization': `Bearer ${Cypress.env('token')}`,
                'x-github-action': EnvEnum.X_GITHUB_ACTION
            },
            auth: {
                bearer: Cypress.env('token')
            },
            ...options
        }).then(response => {
            expect(response.status).to.equal(expectedCode);
            return response.body
        });
    }
}