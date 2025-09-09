import './commands';
import 'cypress-file-upload';
import {BackendCommonEnum} from "./beeoclock/backend/enum/BackendCommonEnum";
import 'cypress-wait-until';
import {Environment} from "./beeoclock/common/Interception/ApiRequestHelper";

/**
 * clear all storage and assign to global env valid token before any test
 */
before((): void => {
    Cypress.on('uncaught:exception', (err: Error): boolean => {
        console.error('!!!ignored exception!!!', err.message);
        return false;
    });

    //skip biz - no need token's
    if (Cypress.spec.relative.includes('cypress/e2e/biz-landing')) {
        cy.log('Skipping token setup for biz-landing tests');
        return;
    }

    return cy.token(Environment.prod)
        .then(() => cy.token(Environment.dev));
});

beforeEach('clear environment', (): void => {
    if (!Cypress.env('skipClear')) {
        clearAllData();
    }
});

function deleteIndexDb(): void {
    indexedDB.deleteDatabase(BackendCommonEnum.X_Business_Tenant_Id + '-order');
    indexedDB.deleteDatabase(BackendCommonEnum.X_Business_Tenant_Id + '-absence');
}

function clearAllData(): void {
    deleteIndexDb()
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.clearAllSessionStorage();
}

after((): void => {
    Cypress.env('skipClear', false);
});
