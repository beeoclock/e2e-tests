import {DateUtils} from "../../../backend/Utils/DateUtils";
import {EntryPointEnum} from "../EntryPointEnum";

export class PublicPageInterceptionHelper {

    public static getService(): string {
        const alias = 'getService' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.PUBLIC_PAGE_API_ENTRY_POINT + '/service/paged?*').as(alias);
        return alias
    }
}