/// <reference types="cypress" />

import {ServiceEnum} from "./beeoclock/common/enum/ServiceEnum";
import {PanelLoginPageElement} from "./beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "./beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "./beeoclock/common/enum/ClientPropertiesEnum";
import {BusinessNameEnum} from "./beeoclock/page-element/common/enum/BusinessNameEnum";
import {ApiInterceptionHelper} from "./beeoclock/common/Interception/ApiInterceptionHelper";

declare global {
    namespace Cypress {
        interface Chainable<Subject> {

            loginOnPanel(): void;

            loginOnPublicPage(): void;
        }
    }
}

Cypress.Commands.add('loginOnPanel', () => {
    cy.log('visit')
    cy.visit(ServiceEnum.CLIENT_PANEL, {
        failOnStatusCode: false,
        onBeforeLoad: (win) => {
            win.sessionStorage.clear();
            win.localStorage.clear();
            win.localStorage.setItem('language', 'pl');
        }
    });
    cy.document().its('readyState').should('eq', 'complete');

    cy.log('login');
    PanelLoginPageElement.EmailInput.getElement();
    PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN);
    PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD);
    PanelLoginPage.clickLoginButton();
    PanelLoginPage.selectGivenBusinessAndStoreToken(BusinessNameEnum.HAIRCUT_AND_BARBER);
});

Cypress.Commands.add('loginOnPublicPage', () => {
    cy.log('visit')
    const getService = ApiInterceptionHelper.getService()
    cy.visit(ServiceEnum.PUBLIC_PANEL).then(() => {
        // cy.wait('@' + getService).then((interception) => {
        //     const authorizationHeader = interception.request.headers['authorization'];
        //     const token = (authorizationHeader as string).split(' ')[1];
        //     cy.wrap(token).as('token');
        // })
    })

});


