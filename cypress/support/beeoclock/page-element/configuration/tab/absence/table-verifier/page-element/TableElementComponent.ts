import {AbsenceColumnRowEnum} from "../enum/AbsenceColumnRowEnum";

export class TableElementComponent {

    public getElement(keyValue: string): any {
        return cy.get('[tablerowflex="body"]').contains(keyValue)
            .parents('[tablerowflex="body"]').first()
    }

    public getGivenRow(keyValue: string, row: AbsenceColumnRowEnum): any {
        return this.getElement(keyValue).find(`[tablecolumnflex="${row}"]`).first()
    }
}