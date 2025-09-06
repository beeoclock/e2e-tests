/// <reference types="cypress" />

import {ServiceEnum} from "./ServiceEnum";
import {PanelLoginPageElement} from "./beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {PanelLoginPage} from "./beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {EnvEnum} from "./beeoclock/common/enum/EnvEnum";
import {BusinessNameEnum} from "./beeoclock/page-element/common/enum/BusinessNameEnum";
import {ThrottleEnum} from "./beeoclock/common/enum/ThrottleEnum";
import 'cypress-wait-until';
import {AuthApi} from "./beeoclock/backend/auth/AuthApi";

declare global {
    namespace Cypress {
        interface Chainable<Subject> {

            loginOnPanel(): void;

            loginOnPublicPage(): void;

            loginOnProductPanel(): void;

            setNetworkThrottle(speed: ThrottleEnum): void;

            assertProperties(properties: string, expectedProperties: string): Chainable<JQuery>;

            assertElementTextNormalized(expectedProperties: string): Chainable<JQuery>;

            assertElementText(expectedProperties: string): Chainable<JQuery>;

            assertTrimmedProperties(properties: string, expectedProperties: string): Chainable<JQuery>;

            isNotInViewport(): Chainable<JQuery>;

            isInViewport(): Chainable<JQuery>;

            token();

            assertOuterHtmlProperties(subject: any, expectedHtml: string);
        }
    }
}

Cypress.Commands.add('loginOnPanel', (): void => {
    cy.log('visit')
    cy.visit(ServiceEnum.CLIENT_PANEL, {
        failOnStatusCode: false,
        onBeforeLoad: (win): void => {
            win.sessionStorage.clear();
            win.localStorage.clear();
            win.sessionStorage.clear();
            win.localStorage.setItem('language', 'pl');
        }
    });

    cy.log('login');
    cy.get('.text-start', {timeout: 30000}).scrollIntoView().should('be.visible')
    PanelLoginPageElement.EmailInput.getElement();
    PanelLoginPage.typeEmail(EnvEnum.LOGIN);
    PanelLoginPage.typePassword(EnvEnum.PASSWORD);
    PanelLoginPage.clickLoginButton();
    PanelLoginPage.selectGivenBusiness(BusinessNameEnum.HAIRCUT_AND_BARBER);
    cy.document().its('readyState').should('eq', 'complete');
});

Cypress.Commands.add('loginOnProductPanel', (): void => {
    cy.log('visit')
    cy.visit(ServiceEnum.PRODUCT_CLIENT_PANEL, {
        failOnStatusCode: false,
        onBeforeLoad: (win): void => {
            win.sessionStorage.clear();
            win.localStorage.clear();
            win.sessionStorage.clear();
            win.localStorage.setItem('language', 'pl');
        }
    });

    cy.log('login');
    PanelLoginPageElement.EmailInput.getElement();
    PanelLoginPage.typeEmail(EnvEnum.LOGIN);
    PanelLoginPage.typePassword(EnvEnum.PASSWORD);
    PanelLoginPage.clickLoginButton();
    PanelLoginPage.selectGivenBusiness(BusinessNameEnum.HAIRCUT_AND_BARBER);
    cy.document().its('readyState').should('eq', 'complete');
});

Cypress.Commands.add('loginOnPublicPage', (): void => {
    cy.log('visit')
    cy.visit(ServiceEnum.PUBLIC_PANEL_DEV).then((): void => {
        cy.get('h1').contains('Haircut&Barber').should('be.visible')
        cy.contains('a', 'Juliusza Słowackiego 80, Piotrków trybunalski, Polska, 97-300')
        cy.document().its('readyState').should('eq', 'complete');
    })
});

Cypress.Commands.add('setNetworkThrottle', (speed: ThrottleEnum): void => {
    const methods: string[] = ['GET', 'POST', 'PUT', 'DELETE'];

    if (speed === ThrottleEnum.NO_THROTTLING) {
        methods.forEach((method: string): void => {
            cy.intercept({
                method: method,
                url: '**/api/**',
            }, {
                statusCode: 500,
                body: {error: 'No network connection'},
            }).as(`offline-${method}`);
        });
        return;
    }

    methods.forEach((method: string): void => {
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

Cypress.Commands.add('assertProperties', {prevSubject: true}, (subject, properties, expectedProperties): void => {
    cy.wrap(subject).should('have.prop', properties).and('include', expectedProperties);
});

Cypress.Commands.add('assertOuterHtmlProperties', {prevSubject: true}, (subject: any, expectedHtml: string): void => {
    cy.wrap(subject).should('have.prop', 'outerHTML').and('include', expectedHtml);
});

Cypress.Commands.add(
    'assertElementTextNormalized',
    {prevSubject: true},
    (subject: any, expectedValue: string): void => {
        cy.wrap(subject)
            .invoke('text')
            .then((text: string): void => {
                const normalized = text.replace(/\s+/g, ' ').trim();
                expect(normalized).to.eq(expectedValue);
            });
    }
);

Cypress.Commands.add(
    'assertElementText',
    {prevSubject: true},
    (subject: any, expectedValue: string): void => {
        cy.wrap(subject)
            .invoke('text')
            .then((text: string): void => {
                expect(text).to.eq(expectedValue);
            });
    }
);

Cypress.Commands.add('assertTrimmedProperties', {prevSubject: true}, function (subject, properties, expectedProperties) {
    cy.wrap(subject)
        .should('have.prop', properties)
        .then((actualProp: any): void => {
            const clean = (s: string) => s.replace(/\u00A0/g, ' ').trim();
            expect(clean(actualProp)).to.include(clean(expectedProperties));
        });
});

Cypress.Commands.add('isNotInViewport', {prevSubject: true}, (subject): void => {
    const bounding = subject[0].getBoundingClientRect();
    const windowHeight = Cypress.config('viewportHeight');
    const windowWidth = Cypress.config('viewportWidth');

    const completelyOutOfView =
        bounding.bottom < 0 ||
        bounding.top > windowHeight ||
        bounding.right < 0 ||
        bounding.left > windowWidth;

    expect(completelyOutOfView).to.be.true;
});

Cypress.Commands.add('isInViewport', {prevSubject: true}, (subject): void => {
    const bounding = subject[0].getBoundingClientRect();
    const windowHeight = Cypress.config('viewportHeight');
    const windowWidth = Cypress.config('viewportWidth');

    const inView =
        bounding.bottom > 0 &&
        bounding.top < windowHeight &&
        bounding.right > 0 &&
        bounding.left < windowWidth;

    expect(inView).to.be.true;
});

Cypress.Commands.add('token', () => {
    const bufferTime = 60000;
    const now = Date.now();

    return cy.task('readToken').then((data: any) => {
        const isValid: boolean =
            data?.token &&
            data?.tokenValidTo &&
            now < new Date(data?.tokenValidTo).getTime() - bufferTime;

        if (isValid) {
            Cypress.env('token', data.token);
            return cy.log("token in file 'token.json' is valid");
        }

        return AuthApi.getAuthWithRetry().then((resp) => {
            const token = resp.idToken;
            const expiresInMs: number = Number(resp.expiresIn) * 1000;
            const tokenValidTo: string = new Date(now + expiresInMs).toISOString();

            Cypress.env('token', token);
            return cy.task('saveToken', {token, tokenValidTo});
        });
    });
});