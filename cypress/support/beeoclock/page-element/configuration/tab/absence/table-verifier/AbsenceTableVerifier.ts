import {AbsenceColumnRowEnum} from "./enum/AbsenceColumnRowEnum";
import {TableElementComponent} from "./page-element/TableElementComponent";

export class AbsenceTableVerifier {
    protected TableElementComponent: TableElementComponent = new TableElementComponent();

    public verifyGivenRow(keyValue: string, row: AbsenceColumnRowEnum, expectedValue: string): AbsenceTableVerifier {
        this.TableElementComponent.getGivenRow(keyValue, row)
            .should('have.prop', 'textContent').and('include', expectedValue)
        return this;
    }
}