import {DevEntryPointEnum} from "../../common/Interception/DevEntryPointEnum";
import {ApiHeaderFactory} from "../auth/ApiHeaderFactory";

export class ApiRequestFactory {

    public static getRequest(path: string): Cypress.Chainable<any> {
        return cy.request({
            method: 'GET',
            url: DevEntryPointEnum.API_ENTRY_POINT + path,
            headers: ApiHeaderFactory.getHeaders(),
        }).then(response => {
            expect(response.status).to.equal(200);
            return response.body;
        });
    }

    public static getRequestWithInvalidToken(method: string, url: string, headers: any, body: any): Cypress.Chainable<any> {
        return cy.request({
            method: method,
            url: url,
            headers: headers,
            body: body
        }).then(response => {
            expect(response.status).to.equal(401);
            return response.body;
        });
    }
}