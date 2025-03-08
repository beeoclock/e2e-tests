import {DateUtils} from "../../../backend/Utils/DateUtils";
import {EntryPointEnum} from "../EntryPointEnum";

export class TariffsApiInterceptionHelper {

    public static getTariffs(): string {
        const getTariffs = 'getTariffs' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.TARIFFS_ENTRY_POINT + '/paged?page=1&pageSize=500&orderDir=asc&orderBy=updatedAt&updatedSince=*').as(getTariffs);
        return getTariffs
    }

    public static getTenantTariffs(): string {
        const getTenantTariffs = 'getTenantTariffs' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.TARIFFS_ENTRY_POINT + '/tenantTariffPlan/paged?page=1&pageSize=500&orderDir=asc&orderBy=updatedAt&updatedSince=*').as(getTenantTariffs);
        return getTenantTariffs
    }
}