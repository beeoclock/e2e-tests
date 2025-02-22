import {AbsenceColumnRowEnum} from "./enum/AbsenceColumnRowEnum";
import {TableElementComponent} from "./page-element/TableElementComponent";

export class AbsenceTableVerifier {
    protected TableElementComponent: TableElementComponent = new TableElementComponent();

    public verifyGivenRow(keyValue: string, row: AbsenceColumnRowEnum, expectedValue: string): AbsenceTableVerifier {
        this.TableElementComponent.getGivenRow(keyValue, row)
            .should('have.prop', 'textContent').and('include', expectedValue)
        return this;
    }

    public verifyGivenRowNotExist(keyValue: string): AbsenceTableVerifier {
        //TEMP
        cy.get('app-list-absence-page').contains(keyValue).should('not.exist')
        return this;
    }

    public verifyTableIsEmpty(): AbsenceTableVerifier {
        cy.get('not-found-table-data-component').should('be.visible')
        return this;
    }
}