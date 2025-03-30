export class NewContextSchedulesElement {

    public getSelectWeekDayComponent(): any {
        return cy.get('select-week-day-component')
    }

    public getGivenDayElement(index: number): any {
        return this.getSelectWeekDayComponent()
            .find('#service-form-workDays-' + index)
            .scrollIntoView().should('be.visible')
    }
}