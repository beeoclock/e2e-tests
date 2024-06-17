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
        cy.get('utility-back-link-component > .text-white > .bi')
            .click()
        ServicesPages.BookingSelectServicePage.verifyHrefAddress()
        cy.url().should('include', 'dev.beeoclock.com/e2e')
        cy.window().its('document.readyState').should('equal', 'complete');
        cy.wait(1000)
        return this;
    }
}