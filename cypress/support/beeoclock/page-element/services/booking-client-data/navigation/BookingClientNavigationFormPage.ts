import {DateUtils} from "../../../../backend/Utils/DateUtils";
import {BookingNavigationFormPageElement} from "./BookingNavigationFormPageElement";
import {QueryAssertion} from "../../../../common/assertion/QueryAssertion";

export class BookingClientNavigationFormPage {

    public saveButton(): BookingClientNavigationFormPage {
        const bookVisit = 'bookVisit' + DateUtils.getCurrentTime();
        const createPayment = 'createPayment' + DateUtils.getCurrentTime();
        const getOrderDetails = 'getOrderDetails' + DateUtils.getCurrentTime();
        const apiEntryPoint = Cypress.env('apiBackendEntryPoint');
        cy.intercept('POST', apiEntryPoint + 'client/*/order').as(bookVisit);
        cy.intercept('POST', apiEntryPoint + 'client/*/payment').as(createPayment);
        cy.intercept('GET', apiEntryPoint + 'client/*/order/*').as(getOrderDetails);
        BookingNavigationFormPageElement.SaveButton.getElement()
            .click()
        cy.wait('@' + bookVisit, {timeout: 10000})
        cy.wait('@' + createPayment, {timeout: 10000})
        cy.wait('@' + getOrderDetails, {timeout: 10000})
        return this;
    }

    public clickAddNextService(): BookingClientNavigationFormPage {
        BookingNavigationFormPageElement.NextServiceLink.getElement()
            .click();
        QueryAssertion.verifyCorrectUrl(`/order/form`)
        cy.get('app-order-container-form').should('be.visible')
        return this;
    }
}