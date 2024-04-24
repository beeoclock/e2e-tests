import { BeardedBrothersPageElement } from "./BeardedBrothersPageElement";

export class BeardedBrothersPage {

    public selectSpecificOrder(order: string): BeardedBrothersPage {
        this.verifyCorrectForm()
        BeardedBrothersPageElement.OptionElement.getElement(order)
            .click()
        cy.wait(1000)
        return this;
    }

    private verifyCorrectForm(): BeardedBrothersPage {
        const serviceTab = cy.get('.flex.justify-start').find('.me-2').contains('Services')
        serviceTab.should('have.class', 'active').and('not.have.class', 'hover:text-gray-600')

        const detailsTab = cy.get('.flex.justify-start').find('.me-2').contains('Details')
        serviceTab.should('not.have.class', 'active').and('have.class', 'hover:text-gray-600')
        return this;
    }
}