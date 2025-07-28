export class BusinessProfilePageElement {

    public getComponent(): any {
        return cy.get('client-logo-business-profile-component')
            .scrollIntoView().should('be.visible')
    }

    public getAttachPhoto(): any {
        return this.getComponent().find('#logo-business-profile-dropzone-file')
    }

    public getAttachButton(): any {
        return this.getComponent().find('span').contains('Kliknij, aby przesłać')
    }

    public getAssignedPhoto(): any {
        return cy.get('img[alt="Uploaded Image"]')
    }
}