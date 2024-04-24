export class ChooseADateAndTimeBtn {
    public getElement(): any {
        return cy.get('.relative.pb-0.5').eq(1)
            .should('be.visible')
            .scrollIntoView()
    }
}