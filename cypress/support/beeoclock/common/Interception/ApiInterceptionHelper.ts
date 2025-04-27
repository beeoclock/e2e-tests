import {DateUtils} from "../../backend/Utils/DateUtils";
import {EntryPointEnum} from "./EntryPointEnum";
import {faker} from "@faker-js/faker";
import {NumericUtils} from "../../backend/Utils/NumericUtils";

export class ApiInterceptionHelper {

    public static waitForAlias(alias: string): void {
        cy.wait('@' + alias);
    }

    public static waitForAliases(aliases: string[]): void {
        const formattedAliases = aliases.map(alias => `@${alias}`);
        cy.wait(formattedAliases, {timeout: 20000});
    }

    public static waitFor201Alias(alias: string): void {
        cy.wait('@' + alias).its('response.statusCode').should('eq', 201);
    }

    public static waitForQueryAliasWithAssert(alias: string): void {
        cy.wait('@' + alias).then((interception) => {
            const requestUrl: URL = new URL(interception.request.url);
            expect(requestUrl.searchParams.get('orderBy')).to.equal('createdAt');
            expect(requestUrl.searchParams.get('orderDir')).to.equal('desc');
            expect(requestUrl.searchParams.get('pageSize')).to.equal('500');
        })
    }

    public static getBusinessProfile(): string {
        const getBusinessProfile = 'getBusinessProfile' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/business-profile').as(getBusinessProfile);
        return getBusinessProfile
    }

    public static getIdentityProfile(): string {
        const getIdentityProfile = 'getIdentityProfile' + DateUtils.getCurrentTime();
        cy.intercept('GET', 'https://api-dev.beeoclock.com' + '/identity/api/v1/member-context/related?*').as(getIdentityProfile);
        return getIdentityProfile
    }

    public static getService(): string {
        const alias = 'getService' + DateUtils.getCurrentTime();
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/service/paged?*').as(alias);
        return alias
    }

    public static getGivenClient(clientName: string): string {
        const getGivenClient = 'getGivenClient' + DateUtils.getCurrentTime() + faker.commerce.isbn(10);
        cy.intercept('GET', EntryPointEnum.API_ENTRY_POINT + '/client/' + clientName).as(getGivenClient);
        return getGivenClient
    }

    public static createServicePayment(): string {
        const createServicePayment = 'createServicePayment' + DateUtils.getCurrentTime();
        cy.intercept('POST', EntryPointEnum.API_ENTRY_POINT + '/payment').as(createServicePayment);
        return createServicePayment
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

    public static getSlot(): string {
        const getSlot: string = 'getSlot' + NumericUtils.generateObjectId();
        cy.intercept('GET', `${EntryPointEnum.PUBLIC_PAGE_API_ENTRY_POINT}/slot/busy?*`).as(getSlot);
        return getSlot;
    }

    public static createAbsence(): string {
        const createAbsence = 'createAbsence' + DateUtils.getCurrentTime();
        cy.intercept('POST', EntryPointEnum.API_ENTRY_POINT + '/absence').as(createAbsence);
        return createAbsence
    }

    public static deleteServices(): string {
        const deleteServices = 'deleteServices' + DateUtils.getCurrentTime();
        cy.intercept('PUT', EntryPointEnum.API_ENTRY_POINT + '/order/*').as(deleteServices);
        return deleteServices
    }
}