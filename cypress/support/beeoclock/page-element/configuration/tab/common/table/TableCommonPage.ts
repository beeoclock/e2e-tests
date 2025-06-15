import {ClientTabTableAssertionElement} from "../../client/table-assertion/ClientTabTableAssertionElement";
import {TableComponent} from "./TableComponent";

export class TableCommonPage {
    private static component = new TableComponent()

    public static clickActionButton(keyValue: string): typeof TableCommonPage {
        this.component.getActionButton(keyValue)
            .click()
        cy.wait(500)
        return this;
    }

    public static clickGivenActionButton(action: string): typeof TableCommonPage {
        this.component.getGivenAction(action)
            .click()
        return this;
    }

    public static verifyTableRowElement(key: string, cell: number, expectedValue: string): typeof TableCommonPage {
        if (expectedValue) {
            this.component.getTableGivenRowElement(key, cell)
                .should('have.prop', 'innerText').and('include', expectedValue)

            // handle null value
        } else if (expectedValue == null) {
            ClientTabTableAssertionElement.TableRowElement.getElement(key, cell)
                .should('have.prop', 'innerText').and('include', "")
        }
        return this;
    }

    public static assertTableCount(count: number): typeof TableCommonPage {
        this.component.getTableLengthCount().should('have.prop', 'innerText').and('include', 'Razem: ' + count) //assert the total count info
        this.component.getTableLength().should('eq', count) //assert table length
        return this;
    }
}