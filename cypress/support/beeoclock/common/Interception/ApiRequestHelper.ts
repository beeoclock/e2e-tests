import {AuthApi} from "../../backend/auth/AuthApi";
import {BackendCommonEnum} from "../../backend/enum/BackendCommonEnum";

export enum Environment {
    dev = '-dev.',
    pre_prod = '-pre-prod.',
    prod = '.'
}

export class ApiRequestHelper {

    protected static getBase(env: Environment): string {
        return `https://api${env}beeoclock.com`;
    }

    protected static getApiEntryPoint(env: Environment): string {
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
}
