import { DateUtils } from "../../../../backend/Utils/DateUtils";
import { BookingNavigationFormPageElement } from "./BookingNavigationFormPageElement";

export class BookingClientNavigationFormPage {

    public clickChooseDateAndTime(): BookingClientNavigationFormPage {
        const alias = 'getTime' + DateUtils.getCurrentTime();
        cy.intercept('GET', 'https://api.dev.beeoclock.com/client/api/v1/client/e2e/event/busy-slots?*').as(alias);
        /////////////////////https://api.dev.beeoclock.com/client/api/v1/client/e2e/event/busy-slots?
        /////////////////////https://api.dev.beeoclock.com/client/api/v1/client/e2e/event/busy-slots?
        /////////////////////https://api.dev.beeoclock.com/client
        BookingNavigationFormPageElement.ChooseADateAndTimeBtn.getElement()
            .click()
        cy.wait('@' + alias, {timeout:10000})
        return this;
    }
}