import {DateUtils} from "../../../backend/Utils/DateUtils";
import {DevEntryPointEnum} from "../DevEntryPointEnum";

export class CustomerApiInterceptionHelper {

    public static getCustomer(phrase?: string): string {
        const getCustomer = 'getCustomer' + DateUtils.getCurrentTime();
        if (phrase) {
            cy.intercept('GET', DevEntryPointEnum.API_ENTRY_POINT + '/customer/paged?phrase=' + phrase + '*').as(getCustomer)
        } else {
            cy.intercept('GET', DevEntryPointEnum.API_ENTRY_POINT + '/customer/paged?*').as(getCustomer)
        }
        return getCustomer
    }

    public static updateCustomer(): string {
        const updateCustomer = 'updateCustomer' + DateUtils.getCurrentTime();
        cy.intercept('PUT', DevEntryPointEnum.API_ENTRY_POINT + '/customer/*').as(updateCustomer)
        return updateCustomer
    }
}