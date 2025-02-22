import {DateUtils} from "../../../backend/Utils/DateUtils";
import {EntryPointEnum} from "../EntryPointEnum";

export class AbsenceApiInterceptionHelper {

    public static createAbsence(): string {
        const createAbsence = 'createAbsence' + DateUtils.getCurrentTime();
        cy.intercept('POST', EntryPointEnum.API_ENTRY_POINT + '/absence').as(createAbsence);
        return createAbsence
    }

    public static deactivateAbsence(): string {
        const deactivateAbsence = 'deactivateAbsence' + DateUtils.getCurrentTime();
        cy.intercept('PUT', EntryPointEnum.API_ENTRY_POINT + '/absence/*').as(deactivateAbsence);
        return deactivateAbsence
    }

    public static deleteAbsence(): string {
        const deleteAbsence = 'deleteAbsence' + DateUtils.getCurrentTime();
        cy.intercept('PUT', EntryPointEnum.API_ENTRY_POINT + '/absence/*').as(deleteAbsence);
        return deleteAbsence
    }

    public static getAbsence(): string {
        const getAbsence = 'getAbsence' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/absence/paged?*').as(getAbsence);
        return getAbsence
    }
}