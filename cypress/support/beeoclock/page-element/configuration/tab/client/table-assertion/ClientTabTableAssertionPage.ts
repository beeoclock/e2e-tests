import {ClientTabTableAssertionElement} from "./ClientTabTableAssertionElement";

export class ClientTabTableAssertionPage {

    public verifyTableRowElement(key: string, cell: number, expectedValue: string): ClientTabTableAssertionPage {
        if (expectedValue) {
            ClientTabTableAssertionElement.TableRowElement.getElement(key, cell)
                .should('have.prop', 'innerText').and('include', expectedValue)
        } if (expectedValue == null) {
            ClientTabTableAssertionElement.TableRowElement.getElement(key, cell)
                .should('have.prop', 'innerText').and('include', "-")
        }
        return this;
    }

    public clickAddOnNotFoundComponent(): ClientTabTableAssertionPage {
      const element= cy.get('not-found-table-data-component')
            element.should('be.visible')
        element.find('button').contains('Dodaj klienta')
            .click()
        return this;
    }
}