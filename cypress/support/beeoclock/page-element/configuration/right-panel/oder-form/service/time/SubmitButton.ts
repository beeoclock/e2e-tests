export class SubmitButton {
    public getElement(): any {
        return cy.get('ion-datetime')
            .find('#confirm-button')
            .scrollIntoView().should('be.visible')
    }
}