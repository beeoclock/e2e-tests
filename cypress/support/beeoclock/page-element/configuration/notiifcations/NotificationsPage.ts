import {NotificationsPageElement} from "./NotificationsPageElement";

export class NotificationsPage {

    public static clickEmailNotificationsToggle(): NotificationsPage {
        NotificationsPageElement.NotificationComponentElement.getEmailToggle()
            .click();
        return this;
    }

    public static clickConfirmButton(sendEmail: boolean = false): NotificationsPage {
        NotificationsPageElement.ConfirmButton.getElement()
            .click();

        if (sendEmail) {
            cy.wait(2000)
            cy.getEmail().then((email: { subject: string; body: string }) => {
                cy.log('email subject', email.subject);
                cy.log('email body', email.body);
            });
        }
        return this;
    }

    public static handleEmailNotificationsToggle(sendEmail: boolean = false): void {
        if (sendEmail) {
            this.clickEmailNotificationsToggle()
            this.clickConfirmButton(true)
        } else {
            this.clickConfirmButton()
        }
    }
}