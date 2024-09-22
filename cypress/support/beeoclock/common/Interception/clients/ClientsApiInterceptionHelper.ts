import {DateUtils} from "../../../backend/Utils/DateUtils";
import {EntryPointEnum} from "../EntryPointEnum";

export class ClientsApiInterceptionHelper {

    public static getCustomers(): string {
        const getCustomers = 'getCustomers' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/customer/paged?*').as(getCustomers);
        return getCustomers
    }
}