export enum Environment {
    dev = '-dev.',
    pre_prod = '-pre-prod.',
    prod = '.'
}

interface EntryPoints {
    API_ENTRY_POINT: string;
    IDENTITY_API_ENTRY_POINT: string;
    TARIFFS_ENTRY_POINT: string;
    PUBLIC_PAGE_API_ENTRY_POINT: string;
}

export class ApiRequestHelper {

    /**
     * Zwraca wszystkie endpointy dynamicznie, bazując na wybranym środowisku.
     */
    static getEntryPoints(env: Environment): EntryPoints {
        const base: string = `https://api${env}beeoclock.com`;

        return {
            API_ENTRY_POINT: `${base}/panel/api/v1`,
            IDENTITY_API_ENTRY_POINT: `${base}/identity/api/v1`,
            TARIFFS_ENTRY_POINT: `${base}/tariff-plan/api/v1`,
            PUBLIC_PAGE_API_ENTRY_POINT: `${base}/client/api/v1/client/*/`,
        };
    }

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
