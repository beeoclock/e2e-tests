import {EntryPointEnum} from "../../../common/Interception/EntryPointEnum";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";

export class BusinessProfileApi {
 private static token = Cypress.env('token');

    public static getBusinessProfileDetails(expectedCode: HTTPStatusCodeType, tokenId: string, options: Partial<Cypress.RequestOptions>): any {
        const url = EntryPointEnum.API_ENTRY_POINT + `/business-profile`;
        return cy.request({
            method: 'GET',
            url: EntryPointEnum.API_ENTRY_POINT + `/business-profile`,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id,
                'Authorization': `Bearer ${tokenId}`
            },
            auth: {
                bearer: tokenId
            },
            ...options
        }).then(response => {
            expect(response.status).to.equal(expectedCode);
            console.log("🔹 Request Headers:", response.requestHeaders);
            console.log("🔹 Request Authorization Header:", response.requestHeaders.Authorization);
            console.log("🔹 Response Status:", response.status);
            console.log("🔹 Response Body:", response.body);
            return response.body
        });
    }
}