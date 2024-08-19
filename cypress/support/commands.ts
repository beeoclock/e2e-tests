/// <reference types="cypress" />

import {ServiceEnum} from "./beeoclock/common/enum/ServiceEnum";
import {PanelLoginPageElement} from "./beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "./beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "./beeoclock/common/enum/ClientPropertiesEnum";
import {BusinessNameEnum} from "./beeoclock/page-element/common/enum/BusinessNameEnum";

declare global {
    namespace Cypress {
        interface Chainable<Subject> {

            loginOnPanel(): void;

        }
    }
}

Cypress.Commands.add('loginOnPanel', () => {
    cy.intercept('GET', '**/*').as('getAll');
    cy.visit(ServiceEnum.CLIENT_PANEL, {
        failOnStatusCode: false,
        onBeforeLoad: (win) => {
            win.localStorage.setItem('language', 'pl');
        }
    });
    cy.wait('@getAll', {timeout: 30000});

    cy.log('login');
    PanelLoginPageElement.EmailInput.getElement();
    PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN);
    PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD);
    PanelLoginPage.clickLoginButton();
    PanelLoginPage.selectGivenBusiness(BusinessNameEnum.HAIRCUT_AND_BARBER);

});