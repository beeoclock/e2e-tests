export class BizLandingAppointmentElement {

    public getElement(): any {
        return cy.get('#appointment')
    }

    public getTryForFreeButton(): any {
        return this.getElement().find('#try-free-button')
    }
}