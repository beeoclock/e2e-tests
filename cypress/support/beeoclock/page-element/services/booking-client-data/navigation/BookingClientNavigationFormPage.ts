import { DateUtils } from "../../../../backend/Utils/DateUtils";
import { BookingNavigationFormPageElement } from "./BookingNavigationFormPageElement";
import {SaveButton} from "./page-element/SeveButton";
import {BookingSelectServicePageElement} from "../../booking-select-service/BookingSelectServicePageElement";
import {should} from "chai";

export class BookingClientNavigationFormPage {

    public saveButton(): BookingClientNavigationFormPage {
        const bookVisit = 'bookVisit' + DateUtils.getCurrentTime();
        const apiEntryPoint = Cypress.env('apiBackendEntryPoint');
        cy.intercept('POST', apiEntryPoint + 'client/e2e/order').as(bookVisit);
        /////////////////////https://api.dev.beeoclock.com/client/api/v1/client/e2e/event/busy-slots?
        /////////////////////https://api.dev.beeoclock.com/client/api/v1/client/e2e/event/busy-slots?
        /////////////////////https://api.dev.beeoclock.com/client
        BookingNavigationFormPageElement.SaveButton.getElement()
            .click()
        cy.wait('@' + bookVisit, {timeout:10000})
        return this;
    }

    public clickAddNextService(): BookingClientNavigationFormPage {
        BookingNavigationFormPageElement.NextServiceLink.getElement()
            .click();
        cy.contains('div', 'Rezerwacja').should('be.visible')
        return this;
    }
}