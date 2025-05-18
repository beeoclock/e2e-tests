import {HTTPStatusCodeType} from "../enum/HTTPStatusCodeType";
import {BackendCommonEnum} from "../enum/BackendCommonEnum";
import {EnvEnum} from "../../common/enum/EnvEnum";

export class IdentityApi {

    public static getBusinessIdentity(expectedCode: HTTPStatusCodeType, tokenId: string, options: Partial<Cypress.RequestOptions>): any {

        const url = 'https://api-dev.beeoclock.com/identity/api/v1/member-context/related?orderBy=createdAt&orderDir=asc&page=1&pageSize=20';
        return cy.request({
            method: 'GET',
            url: url,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id,
                'Authorization': `Bearer ${tokenId}`,
                'x-github-action': EnvEnum.X_GITHUB_ACTION
            },
            auth: {
                bearer: tokenId
            },
            ...options
        }).then(response => {
            expect(response.status).to.equal(expectedCode);
            console.log("Request Headers:", response.requestHeaders);
            console.log("Request Authorization Header:", response.requestHeaders.Authorization);
            return response.body
        });
    }
}