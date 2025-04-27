export class ServiceDescriptionInput {

    public getServiceDescriptionInput(): any {
        return this.getElement().find('#service-form-description')
    }

    private getElement(): any {
        return cy.get('service-service-form-component')
    }

}