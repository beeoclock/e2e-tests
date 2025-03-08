import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";
import {DateUtils} from "../../Utils/DateUtils";

export class TariffsQueriesApi {
    private static BASE_URL: string = "https://api-dev.beeoclock.com/tariff-plan/api/v1";

    static getDateRangeReport(expectedCode: HTTPStatusCodeType, options: Partial<Cypress.RequestOptions>, givenToken?: string ): any {
        const token = givenToken || Cypress.env('token');
        const updatedSince = DateUtils.getCurrentDateIso();
        const url = `${this.BASE_URL}/paged`;

        return cy.request({
            method: 'GET',
            url: url,
            qs:{
                page: 1,
                pageSize: 20,
                orderDir: 'asc',
                orderBy: 'updatedAt',
                updatedSince: updatedSince
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
}