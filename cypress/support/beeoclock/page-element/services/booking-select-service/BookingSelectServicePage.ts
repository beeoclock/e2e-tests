import { BookingSelectServicePageElement } from "./BookingSelectServicePageElement";

export class BookingSelectServicePage {

    public selectSpecificOrder(order: string): BookingSelectServicePage {
        this.verifyCorrectForm()
        BookingSelectServicePageElement.OptionElement.getElement(order)
            .click()
        cy.wait(1000)
        return this;
    }

    private verifyCorrectForm(): BookingSelectServicePage {
        const serviceTab = cy.get('.flex.justify-start').find('.me-2').contains('Usługi')
        serviceTab.should('have.class', 'active').and('not.have.class', 'hover:text-gray-600')

        const detailsTab = cy.get('.flex.justify-start').find('.me-2').contains('Szczegóły')
        detailsTab.should('not.have.class', 'active').and('have.class', 'hover:text-gray-600')
        return this;
    }
}