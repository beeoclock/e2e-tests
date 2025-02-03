import {EntryPointEnum} from "../../../common/Interception/EntryPointEnum";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";

export class ProductApi {

    public static createProductTag(tag: any, token: string): any {
        return cy.request({
            method: 'POST',
            url: EntryPointEnum.API_ENTRY_POINT + '/product-tag',
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            body: tag,
            auth: {
                bearer: token
            }
        }).then(response => {
            expect(response.status).to.equal(HTTPStatusCodeType.Created);
            return response.body;
        })
    }

    public static deleteProductTag(id: string, token: string): any {
        return cy.request({
            method: 'DELETE',
            url: EntryPointEnum.API_ENTRY_POINT + '/product-tag/' + id,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            auth: {
                bearer: token
            }
        }).then(response => {
            expect(response.status).to.equal(HTTPStatusCodeType.OK);
            return response.body;
        })
    }
}