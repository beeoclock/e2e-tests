import {NotificationsPageElement} from "./NotificationsPageElement";

export class NotificationsPage {

    public static clickEmailNotificationsToggle(): NotificationsPage {
        NotificationsPageElement.NotificationComponentElement.getEmailToggle()
            .click();
        return this;
    }

    public static clickConfirmButton(): NotificationsPage {
        NotificationsPageElement.ConfirmButton.getElement()
            .click();

        cy.getEmail().then((email: { subject: string; body: string }) => {
            cy.log('email subject', email.subject);
            cy.log('email body', email.body);
        });
        return this;
    }

    public static handleEmailNotificationsToggle(sendEmail: boolean = false): void {
        if (sendEmail) {
            this.clickEmailNotificationsToggle()
            this.clickConfirmButton()
        } else {
            this.clickConfirmButton()
        }
    }
}