import {DateUtils} from "../../backend/Utils/DateUtils";
import {EntryPointEnum} from "./EntryPointEnum";

export class ApiInterceptionHelper {

    public static waitForAlias(alias: string): void {
        cy.wait('@' + alias);
    }

    public static getService(): string {
        const alias = 'getAdditionalFields' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/service/paged?*').as(alias);
        return alias
    }

}