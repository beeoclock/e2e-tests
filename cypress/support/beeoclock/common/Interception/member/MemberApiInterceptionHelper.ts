import {DateUtils} from "../../../backend/Utils/DateUtils";
import {DevEntryPointEnum} from "../DevEntryPointEnum";

export class MemberApiInterceptionHelper {

    public static getMember(phrase?: string): string {
        const getMember = 'getMember' + DateUtils.getCurrentTime();
        if (phrase) {
            cy.intercept('GET', DevEntryPointEnum.API_ENTRY_POINT + '/member/paged?phrase=' + phrase + '*').as(getMember)
        } else {
            cy.intercept('GET', DevEntryPointEnum.API_ENTRY_POINT + '/member/paged?*').as(getMember)
        }
        return getMember
    }

    public static getGivenMember(): string {
        const getMember = 'getMember' + DateUtils.getCurrentTime();
        cy.intercept('GET', DevEntryPointEnum.API_ENTRY_POINT + '/member/*').as(getMember)
        return getMember
    }

    public static updateMember(id?: string): string {
        const updateMember = 'updateMember' + DateUtils.getCurrentTime();
        if (id) {
            cy.intercept('PUT', DevEntryPointEnum.API_ENTRY_POINT + '/member/' + id).as(updateMember)
        }
        cy.intercept('PUT', DevEntryPointEnum.API_ENTRY_POINT + '/member/*').as(updateMember)
        return updateMember
    }
}