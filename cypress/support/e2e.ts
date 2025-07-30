import './commands';
import 'cypress-file-upload';
import {BackendCommonEnum} from "./beeoclock/backend/enum/BackendCommonEnum";
import 'cypress-wait-until';

/**
 * clear all storage and assign to global env valid token before any test
 */
before((): void => {
    Cypress.on('uncaught:exception', (err: Error): boolean => {
        console.error('!!!ignored exception!!!', err.message);
        return false;
    });

    if (!Cypress.env('skipClear')) {
        clearAllData()
    }
    getToken()
});

beforeEach('clear environment', (): void => {
    if (!Cypress.env('skipClear')) {
        clearAllData();
    }
});

function getToken(): Cypress.Chainable<string> {
    return cy.token()
}

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
