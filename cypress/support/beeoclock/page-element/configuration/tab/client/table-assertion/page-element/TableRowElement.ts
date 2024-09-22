export class TableRowElement {
    public getElement(cell: string): any {
        return cy.get('customer-table-list-component')
            .find('[tablerowflex="body"]')
            .find(`[tablecolumnflex="${cell}"]`)
    }
}