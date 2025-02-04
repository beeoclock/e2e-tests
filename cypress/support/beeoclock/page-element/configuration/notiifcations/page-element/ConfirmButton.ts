export class ConfirmButton {

    public getElement(): any {
        return cy.contains('ion-button', 'Potwierdź')
            .scrollIntoView().should('be.visible')
    }
}