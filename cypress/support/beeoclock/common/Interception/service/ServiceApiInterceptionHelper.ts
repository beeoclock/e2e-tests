import {DateUtils} from "../../../backend/Utils/DateUtils";
import {EntryPointEnum} from "../EntryPointEnum";

export class ServiceApiInterceptionHelper {

    public static getServices(): string {
        const getServices: string = 'getServices' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/service/paged?*').as(getServices);
        return getServices
    }
}