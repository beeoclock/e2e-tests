import {OrderSummaryNavigationPageElement} from "./OrderSummaryNavigationPageElement";
import {ServicesPages} from "../../ServicesPages";

export class OrderSummaryNavigationPage {

    public clickCancelOrderButton(): OrderSummaryNavigationPage {
        OrderSummaryNavigationPageElement.CancelOrderService.getElement()
            .click()
        return this;
    }

    public clickBackArrow(): OrderSummaryNavigationPage {
        cy.get('utility-back-link-component')
            .click()
        ServicesPages.BookingSelectServicePage.verifyHrefAddress()
        ServicesPages.BookingSelectServicePage.verifyGivenHrefAddress('Juliusza Słowackiego 80, Piotrków trybunalski, Polska, 97-300')
        cy.window().its('document.readyState').should('equal', 'complete');
        cy.wait(1000)
        return this;
    }
}