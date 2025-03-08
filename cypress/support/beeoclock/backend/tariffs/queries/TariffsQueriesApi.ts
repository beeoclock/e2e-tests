import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";
import {DateUtils} from "../../Utils/DateUtils";
import {EntryPointEnum} from "../../../common/Interception/EntryPointEnum";

export class TariffsQueriesApi {
    private static BASE_URL: string = EntryPointEnum.TARIFFS_ENTRY_POINT;

    static getTariffsPaged(expectedCode: HTTPStatusCodeType, options: Partial<Cypress.RequestOptions>, givenToken?: string): any {
        const token = givenToken || Cypress.env('token');
        const url = `${this.BASE_URL}/paged`;

        return cy.request({
            method: 'GET',
            url: url,
            qs: {
                page: 1,
                pageSize: 20,
                orderDir: 'asc',
                orderBy: 'updatedAt',
            },
            auth: {
                bearer: token
            },
            ...options
        }).then(response => {
            expect(response.status).to.equal(expectedCode);
            return response.body
        });
    }

    static getTariffsByIds(id: string, expectedCode: HTTPStatusCodeType, options: Partial<Cypress.RequestOptions>, givenToken?: string): any {
        const token = givenToken || Cypress.env('token');
        const url = `${this.BASE_URL}/${id}`;

        return cy.request({
            method: 'GET',
            url: url,
            auth: {
                bearer: token
            },
            ...options
        }).then(response => {
            expect(response.status).to.equal(expectedCode);
            return response.body
        });
    }
}