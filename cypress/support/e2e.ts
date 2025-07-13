import {AuthApi} from "./beeoclock/backend/auth/AuthApi";
import './commands';
import 'cypress-file-upload';
import {BackendCommonEnum} from "./beeoclock/backend/enum/BackendCommonEnum";
import 'cypress-wait-until';

/**
 * clear all storage and assign to global env valid token before any test
 */
before(() => {
    Cypress.on('uncaught:exception', (err) => {
        console.error('!!!ignored exception!!!', err.message);
        return false;
    });

    if (!Cypress.env('skipClear')) {
        clearAllData()
        AuthApi.getToken().then(token => {
            Cypress.env('token', token);
        })
    }
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

after(() => {
    Cypress.env('skipClear', false);
});
