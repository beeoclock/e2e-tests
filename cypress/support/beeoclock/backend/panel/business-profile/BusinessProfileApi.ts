import {EntryPointEnum} from "../../../common/Interception/EntryPointEnum";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";
import {EnvEnum} from "../../../common/enum/EnvEnum";

export class BusinessProfileApi {

    public static getBusinessProfileDetails(expectedCode: HTTPStatusCodeType, tokenId: string, options: Partial<Cypress.RequestOptions>): any {
        const url: string = EntryPointEnum.API_ENTRY_POINT + `/business-profile`;

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
            return response.body
        });
    }

    public static getBusinessProfile(): Cypress.Chainable<object> {
        cy.token();

        const url: string = EntryPointEnum.API_ENTRY_POINT + `/business-profile`;

        return cy.then(() => {
            const token: string = Cypress.env('token');

            return cy.request({
                method: 'GET',
                url: url,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id,
                    'x-github-action': EnvEnum.X_GITHUB_ACTION
                }
            }).then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
                return response.body;
            });
        });
    }
}