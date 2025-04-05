export class BusinessDeletionComponent {

    public getElement(): any {
        return cy.get('client-danger-zone-component')
            .scrollIntoView().should('be.visible')
    }

    public getDeleteButton(): any {
        return this.getElement().contains('button', 'Usuń profil biznesowy')
    }

    public getDeleteButtonOnModal(): any {
        return cy.get('ion-alert').contains('button', 'Tak')
    }
}