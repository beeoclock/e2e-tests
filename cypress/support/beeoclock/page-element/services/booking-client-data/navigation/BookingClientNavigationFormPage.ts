import { DateUtils } from "../../../../backend/Utils/DateUtils";
import { BookingNavigationFormPageElement } from "./BookingNavigationFormPageElement";
import {SaveButton} from "./page-element/SeveButton";
import {BookingSelectServicePageElement} from "../../booking-select-service/BookingSelectServicePageElement";
import {should} from "chai";

export class BookingClientNavigationFormPage {

    public saveButton(): BookingClientNavigationFormPage {
        const bookVisit = 'bookVisit' + DateUtils.getCurrentTime();
        const createPayment = 'createPayment' + DateUtils.getCurrentTime();
        const getOrderDetails = 'getOrderDetails' + DateUtils.getCurrentTime();
        const apiEntryPoint = Cypress.env('apiBackendEntryPoint');
        cy.intercept('POST', apiEntryPoint + 'client/e2e/order').as(bookVisit);
        cy.intercept('POST', apiEntryPoint + 'client/e2e/payment').as(createPayment);
        cy.intercept('GET', apiEntryPoint + 'client/e2e/order/*').as(getOrderDetails);
        BookingNavigationFormPageElement.SaveButton.getElement()
            .click()
        cy.wait('@' + bookVisit, {timeout:10000})
        cy.wait('@' + createPayment, {timeout:10000})
        cy.wait('@' + getOrderDetails, {timeout:10000})
        return this;
    }

    public clickAddNextService(): BookingClientNavigationFormPage {
        BookingNavigationFormPageElement.NextServiceLink.getElement()
            .click();
        cy.contains('div', 'Rezerwacja').should('be.visible')
        return this;
    }
}