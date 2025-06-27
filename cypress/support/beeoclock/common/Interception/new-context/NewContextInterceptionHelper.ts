import {DateUtils} from "../../../backend/Utils/DateUtils";
import {DevEntryPointEnum} from "../DevEntryPointEnum";

export class NewContextInterceptionHelper {

    public static createNewContext(): string {
        const createNewContext = 'createNewContext' + DateUtils.getCurrentTime();
        cy.intercept('POST', DevEntryPointEnum.IDENTITY_API_ENTRY_POINT + '/provider/create-business-client').as(createNewContext);
        return createNewContext
    }

    public static updateBusinessProfile(): string {
        const updateBusinessProfile = 'updateBusinessProfile' + DateUtils.getCurrentTime();
        cy.intercept('PUT', DevEntryPointEnum.API_ENTRY_POINT + '/business-profile').as(updateBusinessProfile);
        return updateBusinessProfile
    }
}