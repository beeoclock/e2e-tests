export class BizLandingServiceElement {

    public getElement(): any {
        return cy.get('#services')
    }

    public getPhoto(): any {
        return this.getElement().find('[alt="Bee O`clock service details"]')
    }
}