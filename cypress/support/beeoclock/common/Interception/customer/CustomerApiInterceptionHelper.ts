import {DateUtils} from "../../../backend/Utils/DateUtils";
import {EntryPointEnum} from "../EntryPointEnum";

export class CustomerApiInterceptionHelper {

    public static getCustomer(phrase?: string): string {
        const getCustomer = 'getCustomer' + DateUtils.getCurrentTime();
        if (phrase) {
            cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/customer/paged?phrase=' + phrase + '*').as(getCustomer)
        } else {
            cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/customer/paged?*').as(getCustomer)
        }
        return getCustomer
    }


}