import {ClientTabTableAssertionElement} from "./ClientTabTableAssertionElement";

export class ClientTabTableAssertionPage {

    public verifyTableRowElement(cell: string, expectedValue: string): ClientTabTableAssertionPage {
        ClientTabTableAssertionElement.TableRowElement.getElement(cell)
            .should('have.prop', 'innerText').and('include', expectedValue)
        return this;
    }
}