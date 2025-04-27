import {EntryPointEnum} from "../../../../common/Interception/EntryPointEnum";
import {BackendCommonEnum} from "../../../enum/BackendCommonEnum";

export class OrderCreationApi {

    public static createOrderWithBuilder(order: Object, options: Partial<Cypress.RequestOptions>, givenToken?: string): any {
        const token = givenToken || Cypress.env('token');
        return cy.request({
            method: 'POST',
            url: EntryPointEnum.API_ENTRY_POINT + '/order',
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            body: order,
            auth: {
                bearer: token
            },
            ...options
        }).then(response => {
            return response;
        })
    }
}