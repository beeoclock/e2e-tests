import {DateUtils} from "../../../backend/Utils/DateUtils";
import {DevEntryPointEnum} from "../DevEntryPointEnum";

export class PublicPageInterceptionHelper {

    public static getService(): string {
        const alias = 'getService' + DateUtils.getCurrentTime();
        cy.intercept('GET', DevEntryPointEnum.PUBLIC_PAGE_API_ENTRY_POINT + '/service/paged?*').as(alias);
        return alias
    }
}