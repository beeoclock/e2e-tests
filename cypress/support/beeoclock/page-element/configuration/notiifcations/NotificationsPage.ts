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
        return this;
    }


}