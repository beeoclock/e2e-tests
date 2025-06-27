import {DateUtils} from "../../../backend/Utils/DateUtils";
import {DevEntryPointEnum} from "../DevEntryPointEnum";

export class ServiceApiInterceptionHelper {

    public static getServices(): string {
        const getServices: string = 'getServices' + DateUtils.getCurrentTime();
        cy.intercept('GET', DevEntryPointEnum.API_ENTRY_POINT + '/service/paged?*').as(getServices);
        return getServices
    }
}