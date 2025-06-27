import {DateUtils} from "../../../backend/Utils/DateUtils";
import {DevEntryPointEnum} from "../DevEntryPointEnum";

export class BusinessProfileInterception {

    public static getBusinessProfile(): string {
        const getBusinessProfile = 'getBusinessProfile' + DateUtils.getCurrentTime();
        cy.intercept('GET', DevEntryPointEnum.API_ENTRY_POINT + '/business-profile').as(getBusinessProfile);
        return getBusinessProfile
    }

    public static getDeleteBusinessProfile(businessProfile: string): string {
        const getDeleteBusinessProfile = 'getDeleteBusinessProfile' + DateUtils.getCurrentTime();
        cy.intercept('DELETE', DevEntryPointEnum.IDENTITY_API_ENTRY_POINT + '/member-context/business-client/*').as(getDeleteBusinessProfile);
        return getDeleteBusinessProfile
    }

    public static getIdentityProfile(): string {
        const getIdentityProfile = 'getIdentityProfile' + DateUtils.getCurrentTime();
        cy.intercept('GET', DevEntryPointEnum.IDENTITY_API_ENTRY_POINT + '/member-context/related?orderBy=createdAt&orderDir=asc&page=1&pageSize=20').as(getIdentityProfile);
        return getIdentityProfile
    }
}