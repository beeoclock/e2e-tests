export class SelectedDayAssert {

    public getElement(time: string): any {
        return cy.contains(time).parent().find('.border-2')
            .should('be.visible')
            .scrollIntoView()
    }
}