import {ClientTabActionPageElement} from "../../client/navigation/ClientTabActionPageElement";
import {ClientTabTableAssertionElement} from "../../client/table-assertion/ClientTabTableAssertionElement";

export class TableCommonPage {

    public static clickActionButton(keyValue: string): typeof TableCommonPage {
        ClientTabActionPageElement.ActionButtonElement.getElement(keyValue)
            .click()
        cy.wait(500)
        return this;
    }

    public static clickGivenActionButton(action: string): typeof TableCommonPage {
        ClientTabActionPageElement.GivenActionButton.getElement(action)
            .click()
        return this;
    }

    public static verifyTableRowElement(key: string, cell: number, expectedValue: string): typeof TableCommonPage {
        if (expectedValue) {
            ClientTabTableAssertionElement.TableRowElement.getElement(key, cell)
                .should('have.prop', 'innerText').and('include', expectedValue)
        }
        else if (expectedValue == null) {
            ClientTabTableAssertionElement.TableRowElement.getElement(key, cell)
                .should('have.prop', 'innerText').and('include', "")
        }
        return this;
    }
}