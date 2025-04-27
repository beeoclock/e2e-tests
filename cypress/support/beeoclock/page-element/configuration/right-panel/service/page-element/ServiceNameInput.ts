export class ServiceNameInput {

    public getServiceNameInput(): any {
        return this.getElement().find('#service-form-title-input')
    }

    private getElement(): any {
        return cy.get('service-service-form-component')
    }
}