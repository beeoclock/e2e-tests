import { BackendCommonEnum } from "../../backend/enum/BackendCommonEnum";
import { HttpMethodEnum } from "../enum/HttpMethodEnum";
import { HTTPStatusCodeType } from "../../backend/enum/HTTPStatusCodeType";
import { ApiHeaderFactory } from "../../backend/auth/ApiHeaderFactory";

export enum Environment {
    dev = 'dev',
    pre_prod = 'pre_prod',
    prod = 'prod'
}

export class ApiRequestHelper {

    public static handleApiQueryRequest(env: Environment, path: string, qs: any): Cypress.Chainable<any> {
        return ApiHeaderFactory.getHeaders(env).then((headers) => {
            return cy.request({
                method: 'GET',
                url: this.getApiEntryPoint(env) + path,
                headers: headers,
                qs: qs
            }).then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
                return response.body;
            });
        });
    }

    protected static getBase(env: Environment): string {
        const hostMap: Record<Environment, string> = {
            [Environment.dev]: "https://api-dev.beeoclock.com",
            [Environment.pre_prod]: "https://api-pre-prod.beeoclock.com",
            [Environment.prod]: "https://api.beeoclock.com"
        };

        return hostMap[env];
    }

    protected static getApiEntryPoint(env: Environment = Environment.dev): string {
        return `${this.getBase(env)}/panel/api/v1`;
    }

    protected static getIdentityEntryPoint(env: Environment): string {
        return `${this.getBase(env)}/identity/api/v1`;
    }

    protected static getTariffsEntryPoint(env: Environment): string {
        return `${this.getBase(env)}/tariff-plan/api/v1`;
    }

    protected static getPublicPageEntryPoint(env: Environment): string {
        return `${this.getBase(env)}/client/api/v1/client/*/`;
    }

    protected static getToken(env: Environment = Environment.dev): string {
        return Cypress.env(`${env}_token`);
    }

    protected static getTenantId(env: Environment): BackendCommonEnum {
        const tenantMap: Record<Environment, BackendCommonEnum> = {
            [Environment.dev]: BackendCommonEnum.X_Business_Tenant_Id,
            [Environment.pre_prod]: BackendCommonEnum.X_Business_Tenant_Id_pre_Prod,
            [Environment.prod]: BackendCommonEnum.X_Business_Tenant_Id_Prod,
        };

        return tenantMap[env] ?? (() => {
            throw new Error(`Unsupported environment: ${env}`);
        })();
    }

    protected static handleApiRequest(env: Environment, method: HttpMethodEnum, url: string, body?: any): Cypress.Chainable<any> {
        return ApiHeaderFactory.getHeaders(env).then((headers) => {
            return cy.request({
                method: method,
                url: this.getApiEntryPoint(env) + url,
                body: body ?? null,
                headers: headers,
            }).then((resp) => {
                expect(resp.status).to.equal(HTTPStatusCodeType.OK_200);
                return resp.body;
            });
        });
    }

    protected static getHeaders(env: Environment = Environment.dev): Cypress.Chainable<Record<string, any>> {
        return cy.wrap(null).then(() => {
            const token = Cypress.env(`${env}_token`);
            if (!token) {
                throw new Error(`No token found for ${env}, did you run cy.token(${env})?`);
            }
            return {
                'X-Business-Tenant-Id': this.getTenantId(env),
                'Authorization': `Bearer ${token}`,
            };
        });
    }
}
