import {BackendCommonEnum} from "../enum/BackendCommonEnum";

export class ApiHeaderFactory {

    public static getHeaders(): Cypress.Chainable<Record<string, any>> {
        return cy.token().then((): any => {
            return {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id,
                Authorization: `Bearer ${Cypress.env('token')}`,
            };
        });
    }

    public static getDefaultQueryParams(): Record<string, string | number> {
        return {
            orderBy: 'updatedAt',
            orderDir: 'desc',
            page: 1,
            pageSize: 20,
        };
    }

    public static getHeaderWithInvalidToken(): Cypress.Chainable<any> {
        return cy.token().then((): any => {
            return {
                'X-Business-Tenant-Id': BackendCommonEnum.X_Business_Tenant_Id,
                'Authorization': `Bearer ${Cypress.env('INVALID_TOKEN')}`
            };
        });
    }
}