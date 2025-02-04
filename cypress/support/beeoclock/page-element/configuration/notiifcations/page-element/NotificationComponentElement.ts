export class NotificationComponentElement {

    public getComponent(): any {
        return cy.get('cpa-notification-setting')
            .should('be.visible')
    }

    public getEmailToggle(): any {
        return this.getComponent().find('.toggle-wrapper')
    }
}