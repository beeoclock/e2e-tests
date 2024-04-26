import { DateUtils } from "../../../../backend/Utils/DateUtils";
import { OrderSummaryNavigationPageElement } from "./OrderSummaryNavigationPageElement";

export class OrderSummaryNavigationPage {

    public clickCancelOrderButton(): OrderSummaryNavigationPage {
        OrderSummaryNavigationPageElement.CancelOrderService.getElement()
            .click()
        return this;
    }

    public verifyCancelInformation(): OrderSummaryNavigationPage {
        cy.get('.mb-4').find('div').should('contain', "Wydarzenie zostało odwołane")
        cy.get('.text-base.font-normal').should('contain', "Wydarzenie zostało pomyślnie anulowane na prośbę użytkownika")
        return this;
    }

    public clickBackArrow(): OrderSummaryNavigationPage {
        const getMainMenu = 'getMainMenu' + DateUtils.getCurrentTime();
        cy.intercept('GET', 'https://dev.beeoclock.com/asset/logo.png').as(getMainMenu);
        cy.get('utility-back-link-component > .text-white > .bi')
            .click()
        //cy.wait('@' + getMainMenu)TODO/ASK
        return this;
    }
}