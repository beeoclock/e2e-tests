import {EntryPointEnum} from "../../../common/Interception/EntryPointEnum";
import {ApiHeaderFactory} from "../../auth/ApiHeaderFactory";
import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";

export class BalanceApi {

    public static getBalancePaged(): Cypress.Chainable<any> {
        return ApiHeaderFactory.getHeaders().then(headers => {
            return cy.request({
                method: 'GET',
                url: EntryPointEnum.API_ENTRY_POINT + '/balance/paged',
                headers,
                qs: ApiHeaderFactory.getDefaultQueryParams()
            }).then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
                return response.body;
            });
        });
    }

    public static getActualBalance(): Cypress.Chainable<number> {
        return BalanceApi.getBalancePaged().then((body: any): any => {
            return body.items[0].amountAfterAction;
        });
    }
}