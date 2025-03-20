export class TableRowElement {
    public getElement(keyValue: string, cell: number): any {
        return cy.get('datatable-body-row').contains(keyValue)
            .parents('datatable-body-row').first()
            .find('datatable-body-cell').eq(cell)
    }
}