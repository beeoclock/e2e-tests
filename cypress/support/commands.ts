/// <reference types="cypress" />

import {ServiceEnum} from "./ServiceEnum";
import {PanelLoginPageElement} from "./beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "./beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "./beeoclock/common/enum/ClientPropertiesEnum";
import {BusinessNameEnum} from "./beeoclock/page-element/common/enum/BusinessNameEnum";
import {ApiInterceptionHelper} from "./beeoclock/common/Interception/ApiInterceptionHelper";
import {ThrottleEnum} from "./beeoclock/common/enum/ThrottleEnum";

declare global {
    namespace Cypress {
        interface Chainable<Subject> {

            loginOnPanel(): void;

            loginOnPublicPage(): void;

            loginOnProductPanel(): void;

            setNetworkThrottle(speed: ThrottleEnum): void;

            assertProperties(properties: string, expectedProperties: string): Chainable<JQuery>;
            assertTrimmedProperties(properties: string, expectedProperties: string): Chainable<JQuery>;

            isNotInViewport(): Chainable<JQuery>;
            isInViewport(): Chainable<JQuery>;
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
            win.sessionStorage.clear();
            win.localStorage.setItem('language', 'pl');
        }
    });

    cy.log('login');
    cy.get('.text-start', {timeout: 30000}).scrollIntoView().should('be.visible')
    PanelLoginPageElement.EmailInput.getElement();
    PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN);
    PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD);
    PanelLoginPage.clickLoginButton();
    PanelLoginPage.selectGivenBusinessAndStoreToken(BusinessNameEnum.HAIRCUT_AND_BARBER);
    cy.document().its('readyState').should('eq', 'complete');
});

Cypress.Commands.add('loginOnProductPanel', () => {
    cy.log('visit')
    cy.visit(ServiceEnum.PRODUCT_CLIENT_PANEL, {
        failOnStatusCode: false,
        onBeforeLoad: (win) => {
            win.sessionStorage.clear();
            win.localStorage.clear();
            win.sessionStorage.clear();
            win.localStorage.setItem('language', 'pl');
        }
    });

    cy.log('login');
    PanelLoginPageElement.EmailInput.getElement();
    PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN);
    PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD);
    PanelLoginPage.clickLoginButton();
    PanelLoginPage.selectGivenBusiness(BusinessNameEnum.HAIRCUT_AND_BARBER);
    cy.document().its('readyState').should('eq', 'complete');
});

Cypress.Commands.add('loginOnPublicPage', () => {
    cy.log('visit')
    cy.visit(ServiceEnum.PUBLIC_PANEL).then(() => {
        cy.get('h1').contains('Haircut&Barber').should('be.visible')
        cy.contains('a', 'Juliusza Słowackiego 80, Piotrków trybunalski, Polska, 97-300')
        cy.document().its('readyState').should('eq', 'complete');
    })
});

Cypress.Commands.add('setNetworkThrottle', (speed: ThrottleEnum) => {
    const methods: string[] = ['GET', 'POST', 'PUT', 'DELETE'];

    if (speed === ThrottleEnum.NO_THROTTLING) {
        methods.forEach((method: string) => {
            cy.intercept({
                method: method,
                url: '**/api/**',
            }, {
                statusCode: 500,
                body: { error: 'No network connection' },
            }).as(`offline-${method}`);
        });
        return;
    }

    methods.forEach((method: string) => {
        switch (speed) {
            case ThrottleEnum['2G']:
                cy.intercept({
                    method: method,
                    url: '**/api/**',
                }, {
                    delay: 5000,
                }).as(`${method}-2G`);
                break;
            case ThrottleEnum['3G']:
                cy.intercept({
                    method: method,
                    url: '**/api/**',
                }, {
                    delay: 2000,
                }).as(`${method}-3G`);
                break;
            case ThrottleEnum['4G']:
                cy.intercept({
                    method: method,
                    url: '**/api/**',
                }, {
                    delay: 500,
                }).as(`${method}-4G`);
                break;
            default:
                cy.intercept({
                    method: method,
                    url: '**/api/**',
                }, {
                    delay: 0,
                }).as(`${method}-NoThrottle`);
        }
    });
});

Cypress.Commands.add('assertProperties', { prevSubject: true }, (subject, properties, expectedProperties) => {
    cy.wrap(subject).should('have.prop', properties).and('include', expectedProperties);
});

Cypress.Commands.add('assertTrimmedProperties', { prevSubject: true }, function (subject, properties, expectedProperties) {
    cy.wrap(subject)
        .should('have.prop', properties)
        .then((actualProp: any) => {
            expect(actualProp.trim()).to.include(expectedProperties.trim());
        });
});


Cypress.Commands.add('isNotInViewport', { prevSubject: true }, (subject) => {
    const bounding = subject[0].getBoundingClientRect();
    const windowHeight = Cypress.config('viewportHeight');
    const windowWidth = Cypress.config('viewportWidth');

    const isAbove = bounding.bottom < 0;
    const isBelow = bounding.top > windowHeight;
    const isLeft = bounding.right < 0;
    const isRight = bounding.left > windowWidth;

    const notVisible = isAbove || isBelow || isLeft || isRight;

    expect(notVisible).to.be.true;
});

Cypress.Commands.add('isInViewport', { prevSubject: true }, (subject) => {
    const bounding = subject[0].getBoundingClientRect();
    const windowHeight = Cypress.config('viewportHeight');
    const windowWidth = Cypress.config('viewportWidth');

    const isAbove = bounding.bottom < 0;
    const isBelow = bounding.top > windowHeight;
    const isLeft = bounding.right < 0;
    const isRight = bounding.left > windowWidth;

    const notVisible = isAbove || isBelow || isLeft || isRight;

    expect(notVisible).to.be.false;
});
