import {DateUtils} from "../../../backend/Utils/DateUtils";
import {EntryPointEnum} from "../EntryPointEnum";

export class ClientsApiInterceptionHelper {

    public static getCustomers(): string {
        const getCustomers = 'getCustomers' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/customer/paged?*').as(getCustomers);
        return getCustomers
    }

    public static createCustomer(): string {
        const createCustomer = 'createCustomer' + DateUtils.getCurrentTime();
        cy.intercept('POST', EntryPointEnum.API_ENTRY_POINT + '/customer').as(createCustomer);
        return createCustomer
    }

}