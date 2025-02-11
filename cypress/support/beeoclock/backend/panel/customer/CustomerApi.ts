import {EntryPointEnum} from "../../../common/Interception/EntryPointEnum";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";
import {ICustomer} from "./create/ICustomer";
import {ICustomerSearchCriteria} from "./queries/ICustomerSearchCriteria";

export class CustomerApi {

    public static createCustomerWithBuilder(customer: ICustomer, givenToken?: string): any {
        const token = givenToken || Cypress.env('token');
        // cy.get('@token').then(token => {
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
                return response.body;
            })
        // })
    }

    public static getCustomerPaged(query: ICustomerSearchCriteria, givenToken?: string): any {
        const token = givenToken || Cypress.env('token');
        // cy.get('@token').then(token => {
            return cy.request({
                method: 'GET',
                url: EntryPointEnum.API_ENTRY_POINT + '/customer/paged',
                headers: {
                    'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
                },
                qs: query,
                auth: {
                    bearer: token
                }
            }).then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK);
                return response.body;
            })
        // })
    }
}