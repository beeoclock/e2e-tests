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
}