import {BackendCommonEnum} from "../../backend/enum/BackendCommonEnum";
import {HttpMethodEnum} from "../enum/HttpMethodEnum";
import {HTTPStatusCodeType} from "../../backend/enum/HTTPStatusCodeType";
import {ApiHeaderFactory} from "../../backend/auth/ApiHeaderFactory";
import {DevEntryPointEnum} from "./DevEntryPointEnum";

export enum Environment {
    dev = '-dev.',
    pre_prod = '-pre-prod.',
    prod = '.'
}

export class ApiRequestHelper {

    protected static getBase(env: Environment): string {
        return `https://api${env}beeoclock.com`;
    }

    protected static getApiEntryPoint(env: Environment = Environment.dev): string {
        return `${this.getBase(env)}/panel/api/v1`
    }

    protected static getIdentityEntryPoint(env: Environment): string {
        return `${this.getBase(env)}/identity/api/v1`
    }

    protected static getTariffsEntryPoint(env: Environment): string {
        return `${this.getBase(env)}/tariff-plan/api/v1`
    }

    protected static getPublicPageEntryPoint(env: Environment): string {
        return `${this.getBase(env)}/client/api/v1/client/*/`
    }

    protected static getToken(): Cypress.Chainable<string> {
        return cy.token()
    }

    protected static getTenantId(env: Environment): BackendCommonEnum {
        const tenantMap: Record<Environment, BackendCommonEnum> = {
            [Environment.dev]: BackendCommonEnum.X_Business_Tenant_Id,
            [Environment.prod]: BackendCommonEnum.X_Business_Tenant_Id_Prod,
            [Environment.pre_prod]: BackendCommonEnum.X_Business_Tenant_Id_pre_Prod,
        };

        const tenantId = tenantMap[env];

        if (!tenantId) {
            throw new Error(`Unsupported environment: ${env}`);
        }

        return tenantId;
    }

    protected static handleApiRequest(method: HttpMethodEnum, url: string, response = HTTPStatusCodeType.OK_200, body?: any): Cypress.Chainable<any> {
        return ApiHeaderFactory.getHeaders().then((headers) => {
            return cy.request({
                method: method,
                url: DevEntryPointEnum.API_ENTRY_POINT + url,
                body: body ?? null,
                headers: headers,
            }).then(function (resp) {
                expect(resp.status).to.equal(response);
                return resp.body;
            });
        });
    }

    public static handleApiQueryRequest(path: string, qs: any): Cypress.Chainable<any> {
        return ApiHeaderFactory.getHeaders().then((headers) => {
            return cy.request({
                method: 'GET',
                url: DevEntryPointEnum.API_ENTRY_POINT + path,
                headers: headers,
                qs: qs
            }).then(response => {
                expect(response.status).to.equal(HTTPStatusCodeType.OK_200);
                return response.body;
            });
        })
    }
}
