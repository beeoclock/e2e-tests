import {OrderSummaryNavigationPageElement} from "./OrderSummaryNavigationPageElement";
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
        // cy.url().should('include', 'dev.beeoclock.com/e2e') when swich into PR
        cy.window().its('document.readyState').should('equal', 'complete');
        cy.wait(1000)
        return this;
    }
}