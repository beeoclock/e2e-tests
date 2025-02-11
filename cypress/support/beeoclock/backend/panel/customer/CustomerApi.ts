import {EntryPointEnum} from "../../../common/Interception/EntryPointEnum";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";
import {ICustomer} from "./create/ICustomer";

export class CustomerApi {

    public static createCustomerWithBuilder(customer: ICustomer): any {
        cy.get('@token').then(token => {
            return cy.request({
                method: 'POST',
                url: EntryPointEnum.API_ENTRY_POINT + '/customer',
                headers: {
                    'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
                },
                body: customer,
                auth: {
                    bearer: token
                }
            }).then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.Created);
                return response.body;
            })
        })
    }
}