export class ChooseADateAndTimeBtn {
    public getElement(): any {
        return cy.contains('button', 'Wybierz datę i godzinę')
            .should('be.visible')
            .scrollIntoView()
    }
}