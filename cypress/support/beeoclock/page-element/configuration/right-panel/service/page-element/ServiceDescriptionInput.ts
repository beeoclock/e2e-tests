export class ServiceDescriptionInput {

    private getElement(): any {
        return cy.get('service-service-form-component')
    }

    public getServiceDescriptionInput(): any {
        return this.getElement().find('#service-form-description')
    }

}