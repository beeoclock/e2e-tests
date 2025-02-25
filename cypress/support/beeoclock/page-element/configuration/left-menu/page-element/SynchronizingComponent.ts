export class SynchronizingComponent {

    public getElement(): any {
        return cy.get('sync-button-component').scrollIntoView().should('be.visible')
    }
}