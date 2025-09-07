import { Environment } from "support/beeoclock/common/Interception/ApiRequestHelper";
import { BackendCommonEnum } from "../enum/BackendCommonEnum";

export class ApiHeaderFactory {

    public static getHeaders(env: Environment = Environment.dev): Cypress.Chainable<Record<string, any>> {
        return cy.wrap(null).then((): any => {
            const token = Cypress.env(`${env}_token`);
            if (!token) {
                throw new Error(`No token found for ${env}, did you run cy.token(${env})?`);
            }

            return {
                'X-Business-Tenant-Id': this.getTenantId(env),
            };
        });
    }

    private static getTenantId(env: Environment): BackendCommonEnum {
        const tenantMap: Record<Environment, BackendCommonEnum> = {
            [Environment.dev]: BackendCommonEnum.X_Business_Tenant_Id,
            [Environment.pre_prod]: BackendCommonEnum.X_Business_Tenant_Id_pre_Prod,
            [Environment.prod]: BackendCommonEnum.X_Business_Tenant_Id_Prod,
        };

        return tenantMap[env] ?? (() => {
            throw new Error(`Unsupported environment: ${env}`);
        })();
    }

    public static getDefaultQueryParams(): Record<string, string | number> {
        return {
            orderBy: 'updatedAt',
            orderDir: 'desc',
            page: 1,
            pageSize: 20,
        };
    }
}