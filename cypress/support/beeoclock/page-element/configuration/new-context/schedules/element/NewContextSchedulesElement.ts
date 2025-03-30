export class NewContextSchedulesElement {

    public getSelectWeekDayComponent(): any {
        return cy.get('select-week-day-component')
    }

    public getGivenDayElement(index: number): any {
        return this.getSelectWeekDayComponent()
            .find('#service-form-workDays-' + index)
            .scrollIntoView().should('be.visible')
    }

    public getTimeStartElement(): any {
        return cy.get('time-input-component').first()
            .find('input')
            .should('be.visible')
    }

    public getTimeEndElement(): any {
        return cy.get('time-input-component').last()
            .find('input')
            .should('be.visible')
    }
}