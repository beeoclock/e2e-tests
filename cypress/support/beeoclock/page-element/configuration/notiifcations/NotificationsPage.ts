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