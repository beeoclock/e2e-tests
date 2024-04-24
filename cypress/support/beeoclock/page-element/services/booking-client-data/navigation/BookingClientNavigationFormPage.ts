import { DateUtils } from "../../../../backend/Utils/DateUtils";
import { BookingNavigationFormPageElement } from "./BookingNavigationFormPageElement";

export class BookingClientNavigationFormPage {

    public clickChooseDateAndTime(): BookingClientNavigationFormPage {
        const alias = 'getTime' + DateUtils.getCurrentTime();
        cy.intercept('GET', 'https://api.dev.beeoclock.com/client/api/v1/client/beeoclock/event/busy-slots?*').as(alias);
        BookingNavigationFormPageElement.ChooseADateAndTimeBtn.getElement()
            .click()
        cy.wait('@' + alias)
        return this;
    }
}