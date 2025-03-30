export class ListHandler {

    public static clickOnDropdownArrow(selector: string): ListHandler {
        cy.get(selector).find('.ng-arrow-wrapper').first()
            .click()
        return this;
    }

    public static selectGivenOption(option: string): ListHandler {
        cy.get('div.ng-option').contains(option)
            .click()
        return this;
    }

    public static openDropdownAndSelectGivenOption(selector: string, option: string): ListHandler {
        this.clickOnDropdownArrow(selector)
        cy.get('div.ng-option').contains(option)
            .click()
        return this;
    }

    public static getSelectorInput(selector: string): ListHandler {
        cy.get(selector).find('input').should('be.visible')
        return this;
    }

    public static verifyNgValueLabel(selector: string, expectedValue: string): ListHandler {
        cy.get(selector).find('span.ng-value-label').should('have.prop', 'innerText').and('include', expectedValue)
        return this;
    }
}