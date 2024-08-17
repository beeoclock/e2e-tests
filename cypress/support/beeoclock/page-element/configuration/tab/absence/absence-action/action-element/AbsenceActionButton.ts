export class AbsenceActionButton {
    public getElement(): any {
        return cy.get('app-absence-row-action-button-component').eq(0)
            .find('utility-table-column-action')
            .scrollIntoView().should('be.visible')
    }
}