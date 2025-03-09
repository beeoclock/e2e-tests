export class SubmitButton {

    public getElement(): any {
        return cy.get('.SubmitButton-IconContainer')
            .scrollIntoView().should('be.visible')

    }
}