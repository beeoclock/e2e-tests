import {DateUtils} from "../../../backend/Utils/DateUtils";
import {EntryPointEnum} from "../EntryPointEnum";

export class MemberApiInterceptionHelper {

    public static getMember(phrase?: string): string {
        const getMember = 'getMember' + DateUtils.getCurrentTime();
        if (phrase) {
            cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/member/paged?phrase=' + phrase + '*').as(getMember)
        } else {
            cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/member/paged?*').as(getMember)
        }
        return getMember
    }
}