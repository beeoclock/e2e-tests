import {DevEntryPointEnum} from "../../../common/Interception/DevEntryPointEnum";
import {ApiHeaderFactory} from "../../auth/ApiHeaderFactory";
import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";
import {ApiRequestHelper} from "../../../common/Interception/ApiRequestHelper";

export class BalanceApi extends ApiRequestHelper{

    public static getBalancePaged(): Cypress.Chainable<any> {
        return this.getHeaders().then(headers => {
            return cy.request({
                method: 'GET',
                url: DevEntryPointEnum.API_ENTRY_POINT + '/balance/paged',
                headers: headers,
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