export class SubmitButton {
    public getElement(): any {
        return cy.get('.ion-delegate-host > .ng-untouched')
            // get('ion-datetime')
            .find('#confirm-button')
            .scrollIntoView().should('be.visible')

        // .find('button')
        // .contains('Done')
        // .scrollIntoView()
        // .should('be.visible')
    }
}