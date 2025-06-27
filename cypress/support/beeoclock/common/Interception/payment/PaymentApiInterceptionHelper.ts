import {DateUtils} from "../../../backend/Utils/DateUtils";
import {DevEntryPointEnum} from "../DevEntryPointEnum";

export class PaymentApiInterceptionHelper {

    public static getPayment(phrase?: string): string {
        const getPayment = 'getPayment' + DateUtils.getCurrentTime();
        if (phrase) {
            cy.intercept('GET', DevEntryPointEnum.API_ENTRY_POINT + '/payment/paged?phrase=' + phrase + '*').as(getPayment)
        } else {
            cy.intercept('GET', DevEntryPointEnum.API_ENTRY_POINT + '/payment/paged?*').as(getPayment)
        }
        return getPayment
    }

    public static createServicePayment(): string {
        const createPayment = 'createPayment' + DateUtils.getCurrentTime();
        cy.intercept('POST', DevEntryPointEnum.API_ENTRY_POINT + '/payment').as(createPayment);
        return createPayment
    }
}