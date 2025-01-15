import {DataAndTimeNavigationPageElement} from "./DataAndTimeNavigationPageElement";

export class DataAndTimeNavigationPage {

    public clickNextStepButton(): DataAndTimeNavigationPage {
        DataAndTimeNavigationPageElement.BookButton.getElement()
            .click();
        cy.url().should('include', '/order/cart')
        return this;
    }
}