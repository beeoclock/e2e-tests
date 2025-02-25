import {EntryPointEnum} from "../../../common/Interception/EntryPointEnum";
import {BackendCommonEnum} from "../../enum/BackendCommonEnum";
import {AuthApi} from "../../auth/AuthApi";

export class AbsenceApi {

    private static getToken(): Cypress.Chainable<string> {
        return AuthApi.getToken();
    }

    public static getAllAbsenceIds(): any {
        this.getToken()

        const tokenId = Cypress.env('token');
        const url: string = EntryPointEnum.API_ENTRY_POINT + '/absence/paged?orderBy=createdAt&orderDir=desc&page=1&pageSize=2000';
        return cy.request({
            method: 'GET',
            url: url,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            qs: {state: "active"},
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            if (Array.isArray(response.body.items) && response.body.items.length > 0) {
                const absenceids = response.body.items.map((absence: any) => absence._id);
                cy.log('absence Ids:', absenceids.join(', '));
                return cy.wrap(absenceids);
            } else {
                cy.log('No absence found');
                return cy.wrap([]);
            }
        });
    }

    public static deleteAbsenceWithGivenId(id: string): any {
        // return cy.get<string>('@token').then(tokenId => {
        const tokenId = Cypress.env('token');
        return cy.request({
            method: 'DELETE',
            url: EntryPointEnum.API_ENTRY_POINT + '/absence/' + id,
            headers: {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id
            },
            auth: {
                bearer: tokenId
            }
        }).then(response => {
            expect(response.status).to.equal(200);
        })
        // });
    }

    public static deleteAllAbsences(): void {
        this.getAllAbsenceIds().then((absenceids: string[]) => {
            if (absenceids.length > 0) {
                cy.wrap(absenceids).each((id: string) => {
                    this.deleteAbsenceWithGivenId(id);
                }).then(() => {
                    cy.reload();
                });
            } else {
                cy.log('No absences found');
            }
        });
    }
}