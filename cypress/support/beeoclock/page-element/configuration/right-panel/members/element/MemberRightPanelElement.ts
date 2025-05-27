export class MemberRightPanelElement {

    public getEmailElement(): any {
        return cy.get('#member-form-email')
    }

    public getEmailInput(): any {
        return this.getEmailElement().find('input')
    }

    public getFirstNameElement(): any {
        return cy.get('#member-form-firstName')
    }

    public getPhoneElement(): any {
        return cy.get('#member-form-phone')
    }

    public getPhoneInput(): any {
        return this.getPhoneElement().find('input')
            .last()
    }

    public getFirstNameInput(): any {
        return this.getFirstNameElement().find('input')
    }

    public getLastNameElement(): any {
        return cy.get('#member-form-lastName')
    }

    public getLastNameInput(): any {
        return this.getLastNameElement().find('input')
    }

    public getRoleSelectorEnum(): any {
        return cy.get('member-select-role')
    }

    public getStatusToggle(): any {
        return cy.get('member-form-status')
    }

    public getServiceToggle(): any {
        return cy.get('#member-form-assignments-service-full')
    }

    public getAvatarFrameElement(): any {
        return cy.get('member-form-avatar-component')
    }

    public getEyeSlashElement(): any {
        return cy.get('.bi.bi-eye-slash')
    }

    public getEyeElement(): any {
        return cy.get('.bi.bi-eye')
    }

    public getSelectService(): any {
        return cy.get('ion-select-service')
    }

    public getSelectedService(): any {
        return this.getSelectService().find('#select-label')
            .should('be.visible')
    }

    public getGivenServiceOption(service: string): any {
        return cy.get('ion-list')
            .find('ion-item').contains(service)
    }
}