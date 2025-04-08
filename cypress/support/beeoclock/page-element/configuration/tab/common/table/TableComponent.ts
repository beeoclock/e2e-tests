export class TableComponent {

    public getActionButton(keyValue: string): any {
        return cy.get('datatable-body-row').contains(keyValue)
            .parents('datatable-body-row').first()
            .find('button')
            .scrollIntoView().should('be.visible')
    }

    public getGivenAction(action: string): any {
        return cy.get('ion-content')
            .find('ion-item').contains(action)
            .scrollIntoView().should('be.visible')
    }

    public getTableLengthCount(): any {
        return cy.get('app-table-ngx-datatable-smart-component')
            .find('.page-count')
    }

    public getTableLength(): any {
        return cy.get('datatable-row-wrapper')
            .its('length')
    }

    public getTableGivenRowElement(keyValue: string, cell: number): any {
        return cy.get('datatable-body-row').contains(keyValue)
            .parents('datatable-body-row').first()
            .find('datatable-body-cell').eq(cell)
    }
}