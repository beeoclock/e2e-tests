import {DateUtils} from "../../../backend/Utils/DateUtils";
import {EntryPointEnum} from "../EntryPointEnum";

export class BusinessProfileInterception {

    public static getBusinessProfile(): string {
        const getBusinessProfile = 'getBusinessProfile' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/business-profile').as(getBusinessProfile);
        return getBusinessProfile
    }

    public static getDeleteBusinessProfile(businessProfile: string): string {
        const getDeleteBusinessProfile = 'getDeleteBusinessProfile' + DateUtils.getCurrentTime();
        cy.intercept('DELETE', EntryPointEnum.IDENTITY_API_ENTRY_POINT + '/member-context/business-client/*').as(getDeleteBusinessProfile);
        return getDeleteBusinessProfile
    }

    public static getIdentityProfile(): string {
        const getIdentityProfile = 'getIdentityProfile' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.IDENTITY_API_ENTRY_POINT + '/member-context/related?orderBy=createdAt&orderDir=asc&page=1&pageSize=20').as(getIdentityProfile);
        return getIdentityProfile
    }
}