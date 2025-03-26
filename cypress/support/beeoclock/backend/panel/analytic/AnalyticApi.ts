import {DateUtils} from "../../Utils/DateUtils";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {HTTPStatusCodeType} from "../../enum/HTTPStatusCodeType";
import {AuthApi} from "../../auth/AuthApi";

export class AnalyticApi {
    private static BASE_URL = "https://api-dev.beeoclock.com/analytic/api/v1/report";

    private static token: string = Cypress.env('token');

    static getDateRangeReport(expectedCode: HTTPStatusCodeType, tokenId: string, options: Partial<Cypress.RequestOptions>): any {
        const startDateTime = DateUtils.getStartOfTodayUTC();
        const endDateTime = DateUtils.getEndOfTodayUTC();
        const url = `${this.BASE_URL}/date-range-report?startDateTime=${(startDateTime)}&endDateTime=${(endDateTime)}`;

        return cy.request({
            method: 'GET',
            url: url,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            },
            auth: {
                bearer: tokenId
            },
            ...options
        }).then(response => {
            expect(response.status).to.equal(expectedCode);
            return response.body
        });
    }
}
