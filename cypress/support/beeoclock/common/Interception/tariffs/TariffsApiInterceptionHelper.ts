import {DateUtils} from "../../../backend/Utils/DateUtils";
import {DevEntryPointEnum} from "../DevEntryPointEnum";

export class TariffsApiInterceptionHelper {

    public static getTariffs(): string {
        const getTariffs = 'getTariffs' + DateUtils.getCurrentTime();
        cy.intercept('GET', DevEntryPointEnum.TARIFFS_ENTRY_POINT + '/paged?page=1&pageSize=500&orderDir=asc&orderBy=updatedAt&updatedSince=*').as(getTariffs);
        return getTariffs
    }

    public static getTenantTariffs(): string {
        const getTenantTariffs = 'getTenantTariffs' + DateUtils.getCurrentTime();
        cy.intercept('GET', DevEntryPointEnum.TARIFFS_ENTRY_POINT + '/tenantTariffPlan/paged?page=1&pageSize=500&orderDir=asc&orderBy=updatedAt&updatedSince=*').as(getTenantTariffs);
        return getTenantTariffs
    }

    public static updateTariffs(): string {
        const updateTariffs: string = 'updateTariffs' + DateUtils.getCurrentTime();
        cy.intercept('PATCH', DevEntryPointEnum.TARIFFS_ENTRY_POINT + '/tenantTariffPlan/change').as(updateTariffs);
        return updateTariffs
    }
}