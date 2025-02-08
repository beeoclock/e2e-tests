export class ServiceNameInput {

    private getElement(): any {
        return cy.get('service-service-form-component')
    }

    public getServiceNameInput(): any {
        return this.getElement().find('#service-form-title-input')
    }
}