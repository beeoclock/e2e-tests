import {DateUtils} from "../../backend/Utils/DateUtils";
import {EntryPointEnum} from "./EntryPointEnum";

export class ApiInterceptionHelper {

    public static waitForAlias(alias: string): void {
        cy.wait('@' + alias);
    }

    public static waitFor201Alias(alias: string): void {
        cy.wait('@' + alias).its('response.statusCode').should('eq', 201);
    }

    public static waitForQueryAliasWithAssert(alias: string): void {
        cy.wait('@' + alias).then((interception) => {
            const requestUrl: URL = new URL(interception.request.url);
            expect(requestUrl.searchParams.get('orderBy')).to.equal('createdAt');
            expect(requestUrl.searchParams.get('orderDir')).to.equal('desc');
            expect(requestUrl.searchParams.get('page')).to.equal('1');
            expect(requestUrl.searchParams.get('pageSize')).to.equal('20');
        })
    }

    public static getBusinessProfile(): string {
        const getBusinessProfile = 'getBusinessProfile' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/business-profile').as(getBusinessProfile);
        // cy.intercept('GET', 'https://api.beeoclock.com/panel/api/v1/business-profile').as(getBusinessProfile);
        return getBusinessProfile
    }

    public static getService(): string {
        const alias = 'getAdditionalFields' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/service/paged?*').as(alias);
        return alias
    }

    public static createServicePayment(): string {
        const createPayment = 'createPayment' + DateUtils.getCurrentTime();
        cy.intercept('POST', EntryPointEnum.API_ENTRY_POINT + '/payment').as(createPayment);
        return createPayment
    }

    public static createOrder(): string {
        const createOrder = 'createOrder' + DateUtils.getCurrentTime();
        cy.intercept('POST', EntryPointEnum.API_ENTRY_POINT + '/order').as(createOrder);
        return createOrder
    }

    public static getOrder(): string {
        const getOrder = 'getOrder' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/order/paged?*').as(getOrder);
        return getOrder
    }

    public static getAbsence(): string {
        const getAbsence = 'getAbsence' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/absence/paged?*').as(getAbsence);
        return getAbsence
    }

    public static createAbsence(): string {
        const createAbsence = 'createAbsence' + DateUtils.getCurrentTime();
        cy.intercept('POST', EntryPointEnum.API_ENTRY_POINT + '/absence').as(createAbsence);
        return createAbsence
    }

    public static deleteServices(): string {
        const deleteServices = 'deleteServices' + DateUtils.getCurrentTime();
        cy.intercept('DELETE', EntryPointEnum.API_ENTRY_POINT + '/order/*').as(deleteServices);
        return deleteServices
    }
}