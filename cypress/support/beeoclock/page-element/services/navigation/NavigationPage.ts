export class NavigationPage {

    private getGivenElement(tabName: string) {
        return cy.get('tab-menu').find('li').contains(tabName);
    }

    public clickOnProductTab(): NavigationPage {
        this.getGivenElement("Produkty").click();
        this.verifyIsGivenTabSelected("Produkty")
        return this;
    }

    private verifyIsGivenTabSelected(tab: string): NavigationPage {
        cy.get('tab-menu').contains('li', tab).scrollIntoView().should('be.visible').and('have.class', 'active');
        return this;
    }
}