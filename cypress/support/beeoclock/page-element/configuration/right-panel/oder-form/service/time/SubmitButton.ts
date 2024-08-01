export class SubmitButton {
    public getElement(): any {
        return cy.get('ion-datetime')
            .find('#confirm-button').first().shadow()
            .find('button')
            // .contains('Done')
            // .scrollIntoView()
            // .should('be.visible')
    }
}