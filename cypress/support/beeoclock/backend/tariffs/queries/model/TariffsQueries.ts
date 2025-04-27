import {TariffsQueries} from "./TariffPlanBuilder";

export class TariffPlanBuilder {
    private readonly tariffPlan: TariffsQueries.TariffPlanDto;

    constructor() {
        this.tariffPlan = {
            _version: "1",
            _id: "",
            stateHistory: [],
            state: "active",
            createdAt: "",
            updatedAt: "",
            object: "TariffPlanDto",
            type: "Free",
            prices: [],
            isPerSpecialist: false,
            specialistLimit: 10,
            features: [],
            pluginAttachment: {
                includeAll: false,
                excludeAll: false,
                includeList: [],
                excludeList: []
            }
        };
    }

    setId(id: string): this {
        if (!id) throw new Error("ID cannot be empty.");
        this.tariffPlan._id = id;
        return this;
    }

    setCreatedAt(createdAt: string): this {
        if (!createdAt) throw new Error("CreatedAt cannot be empty.");
        this.tariffPlan.createdAt = createdAt;
        return this;
    }

    setUpdatedAt(updatedAt: string): this {
        if (!updatedAt) throw new Error("UpdatedAt cannot be empty.");
        this.tariffPlan.updatedAt = updatedAt;
        return this;
    }

    setType(type: string): this {
        this.tariffPlan.type = type;
        return this;
    }

    setFeatures(features: string[]): this {
        this.tariffPlan.features = [...features];
        return this;
    }

    addFeature(feature: string): this {
        if (!feature) throw new Error("Feature cannot be empty.");
        if (!this.tariffPlan.features.includes(feature)) {
            this.tariffPlan.features.push(feature);
        }
        return this;
    }

    setPrices(prices: TariffsQueries.Price[]): this {
        this.tariffPlan.prices = [...prices];
        return this;
    }

    setPluginAttachment(pluginAttachment: TariffsQueries.PluginAttachment): this {
        this.tariffPlan.pluginAttachment = {...pluginAttachment};
        return this;
    }

    addStateHistory(state: string, setAt: string): this {
        this.tariffPlan.stateHistory.push({state, setAt});
        return this;
    }

    build(): TariffsQueries.TariffPlanDto {
        return {...this.tariffPlan};
    }
}
