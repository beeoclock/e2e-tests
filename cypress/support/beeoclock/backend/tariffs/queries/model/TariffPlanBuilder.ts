export namespace TariffsQueries {
    export interface StateHistory {
        state: string;
        setAt: string;
    }

    export interface PriceValue {
        beforeDiscount: number;
        afterDiscount: number;
        billingCycle: string;
    }

    export interface LanguageVersionDto {
        object: string;
        title: string;
        description: string;
        language: string;
    }

    export interface Price {
        country: string;
        region: string;
        values: PriceValue[];
        currency: string;
        languageVersions: LanguageVersionDto[];
    }

    export interface PluginAttachment {
        includeAll: boolean;
        excludeAll: boolean;
        includeList: string[];
        excludeList: string[];
    }

    export interface TariffPlanDto {
        _version: string;
        _id: string;
        stateHistory: StateHistory[];
        state: string;
        createdAt: string;
        updatedAt: string;
        object: string;
        type: string;
        prices: Price[];
        isPerSpecialist: boolean;
        specialistLimit: number;
        features: string[];
        pluginAttachment: PluginAttachment;
    }
}
