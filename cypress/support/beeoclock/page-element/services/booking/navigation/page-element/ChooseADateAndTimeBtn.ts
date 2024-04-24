export class ChooseADateAndTimeBtn {
    public getElement(): any {
        return cy.contains('button', 'Choose a date and time')
            .should('be.visible')
            .scrollIntoView()
    }
}