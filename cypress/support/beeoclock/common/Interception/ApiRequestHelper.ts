export enum Environment {
    dev = '-dev.',
    pre_prod = '-pre-prod.',
    prod = '.'
}

export class ApiRequestHelper {

    private static getBase(env: Environment): string {
        return `https://api${env}beeoclock.com`;
    }

    static getApiEntryPoint(env: Environment): string {
        return `${this.getBase(env)}/panel/api/v1`
    }

    static getIdentityEntryPoint(env: Environment): string {
        return `${this.getBase(env)}/identity/api/v1`
    }

    static getTariffsEntryPoint(env: Environment): string {
        return `${this.getBase(env)}/tariff-plan/api/v1`
    }

    static getPublicPageEntryPoint(env: Environment): string {
        return `${this.getBase(env)}/client/api/v1/client/*/`
    }
}
