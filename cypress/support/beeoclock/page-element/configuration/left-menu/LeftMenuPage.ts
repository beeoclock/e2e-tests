import {LeftMenuPageElement} from "./LeftMenuPageElement";
import {ApiInterceptionHelper} from "../../../common/Interception/ApiInterceptionHelper";
import {TabNameEnum} from "./enum/TabNameEnum";
import {ClientsApiInterceptionHelper} from "../../../common/Interception/clients/ClientsApiInterceptionHelper";

export class LeftMenuPage {

    public static clickOnGivenTab(tab: string): LeftMenuPage {
        const getOrder = ApiInterceptionHelper.getOrder()
        const getAbsence = ApiInterceptionHelper.getAbsence()
        LeftMenuPageElement.TabElement.getElement(tab)
            .click()
        if (tab == TabNameEnum.ORDER) {
            ApiInterceptionHelper.waitForAlias(getOrder)
            cy.get('app-list-order-page').should('be.visible')
        }
        if (tab == TabNameEnum.CALENDAR) {
            ApiInterceptionHelper.waitForAlias(getOrder)
            ApiInterceptionHelper.waitForAlias(getAbsence)
        }
        if (tab == TabNameEnum.ABSENCE) {
            ApiInterceptionHelper.waitForAlias(getAbsence)
        }
        if (tab == TabNameEnum.CLIENTS) {
            this.clickClientTab()
        }
        return this;
    }

    private static clickAbsenceTab(): LeftMenuPage {
        const getAbsence = ApiInterceptionHelper.getAbsence()
        LeftMenuPageElement.TabElement.getElement(TabNameEnum.ABSENCE)
            .click()
        ApiInterceptionHelper.waitForAlias(getAbsence)
        return this;
    }

    public static clickClientTab(): LeftMenuPage {
        const getCustomers = ClientsApiInterceptionHelper.getCustomers()
        LeftMenuPageElement.TabElement.getElement(TabNameEnum.CLIENTS)
            .click()
        ApiInterceptionHelper.waitForQueryAliasWithAssert(getCustomers)
        cy.get('customer-desktop-layout-list-component').should('be.visible')
        cy.get('customer-table-list-component').should('be.visible')
        return this;
    }
}