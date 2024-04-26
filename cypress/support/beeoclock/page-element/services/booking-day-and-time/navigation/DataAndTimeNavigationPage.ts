import { DateUtils } from "../../../../backend/Utils/DateUtils";
import { DataAndTimeNavigationPageElement } from "./DataAndTimeNavigationPageElement";

export class DataAndTimeNavigationPage {

    public clickBookOrder(): DataAndTimeNavigationPage {
        const bookVisit = 'bookVisit' + DateUtils.getCurrentTime();
        const apiEntryPoint = Cypress.env('apiBackendEntryPoint');
        cy.intercept('POST', apiEntryPoint + 'client/e2e/event').as(bookVisit);
        DataAndTimeNavigationPageElement.BookButton.getElement()
            .click()
            cy.wait('@' + bookVisit)
        return this;
    }
}