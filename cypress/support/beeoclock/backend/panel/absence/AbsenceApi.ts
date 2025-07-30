import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {DateUtils} from "../../Utils/DateUtils";
import {StateEnum} from "../order/enum/StateEnum";
import {ApiRequestHelper, Environment} from "../../../common/Interception/ApiRequestHelper";

export class AbsenceApi extends ApiRequestHelper {

    public static getAllAbsenceIds(env?: Environment): any {
        let environment: Environment = env ?? Environment.dev
        const tokenId = Cypress.env('token');
        const url: string = this.getApiEntryPoint(environment) + '/absence/paged?orderBy=createdAt&orderDir=desc&page=1&pageSize=2000';
        return cy.request({
            method: 'GET',
            url: url,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id,
                'Authorization': `Bearer ${tokenId}`
            },
            qs: {
                start: DateUtils.getStartOfPreviousDays(1),
                end: DateUtils.getEndOfGivenDayUTC(3)
            },
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            const absenceids = response.body.items
                .filter(({state}) => state !== StateEnum.deleted)
                .map((absence: any) => absence._id);

            if (Array.isArray(response.body.items) && response.body.items.length > 0) {
                absenceids.map((absence: any) => absence._id);
                cy.log('absence Ids:', absenceids.join(', '));
                return cy.wrap(absenceids);
            } else {
                cy.log('No absence found');
                return cy.wrap([]);
            }
        });
    }

    public static deleteAbsenceWithGivenId(id: string, env?: Environment): any {
        const tokenId = Cypress.env('token');
        let environment: Environment = env ?? Environment.dev
        return cy.request({
            method: 'DELETE',
            url: this.getApiEntryPoint(environment) + '/absence/' + id,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            },
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
        })
    }

    public static deleteAllAbsences(): void {
        this.getAllAbsenceIds().then((absenceids: string[]): void => {
            if (absenceids.length > 0) {
                cy.wrap(absenceids).each((id: string): void => {
                    this.deleteAbsenceWithGivenId(id);
                }).then((): void => {
                    cy.reload();
                });
            } else {
                cy.log('No absences found');
            }
        });
    }
}