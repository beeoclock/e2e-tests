import { DateUtils } from "../../../../backend/Utils/DateUtils";
import { OrderSummaryNavigationPageElement } from "./OrderSummaryNavigationPageElement";
import {BookingSelectServicePageElement} from "../../booking-select-service/BookingSelectServicePageElement";
import {BookingSelectServicePage} from "../../booking-select-service/BookingSelectServicePage";
import {ServicesPages} from "../../ServicesPages";

export class OrderSummaryNavigationPage {

    public clickCancelOrderButton(): OrderSummaryNavigationPage {
        OrderSummaryNavigationPageElement.CancelOrderService.getElement()
            .click()
        return this;
    }

    public clickBackArrow(): OrderSummaryNavigationPage {
        const getMainMenu = 'getMainMenu' + DateUtils.getCurrentTime();
        cy.intercept('GET', 'https://api.dev.beeoclock.com/client/api/v1/client/e2e').as(getMainMenu);
        cy.get('utility-back-link-component > .text-white > .bi')
            .click()
        //cy.wait('@' + getMainMenu, {timeout: 10000})//todo ask
        ServicesPages.BookingSelectServicePage.verifyHrefAddress()
        cy.wait(4000)
        cy.url().should('include', 'dev.beeoclock.com/e2e')
        return this;
    }
}