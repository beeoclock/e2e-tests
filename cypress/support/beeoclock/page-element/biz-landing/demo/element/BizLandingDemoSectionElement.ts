export class BizLandingDemoSectionElement {

    public getMainElement(): Cypress.Chainable {
        return cy.get('#demo-video-tmp');
    }

    public getHeaderText(): Cypress.Chainable {
        return this.getMainElement().find('h2')
    }

    public getSubText(): Cypress.Chainable {
        return this.getMainElement().find('p')
    }

    public getDemoButton(): Cypress.Chainable {
        return this.getMainElement().find('#demo-button-tmp')
    }
}