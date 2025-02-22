import {LeftMenuPageElement} from "./LeftMenuPageElement";
import {ApiInterceptionHelper} from "../../../common/Interception/ApiInterceptionHelper";
import {TabNameEnum} from "./enum/TabNameEnum";
import {ClientsApiInterceptionHelper} from "../../../common/Interception/clients/ClientsApiInterceptionHelper";
import {ServiceApiInterceptionHelper} from "../../../common/Interception/service/ServiceApiInterceptionHelper";

export class LeftMenuPage {

    public static clickOnGivenTab(tab: string): LeftMenuPage {
        LeftMenuPageElement.TabElement.getElement(tab)
            .click()
        if (tab == TabNameEnum.ORDER) {
            cy.get('app-list-order-page').should('be.visible')
        }
        if (tab == TabNameEnum.CALENDAR) {
        }
        if (tab == TabNameEnum.ABSENCE) {
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

    public static clickServiceTab(): LeftMenuPage {
        const getServices: string = ServiceApiInterceptionHelper.getServices()
        LeftMenuPageElement.TabElement.getElement(TabNameEnum.SERVICE)
            .click()
        cy.wait('@' + getServices).then((interception) => {
            const response = interception.response.body
            const totalSize = response.totalSize
            cy.get('utility-table-state-pagination-component')
                .contains('p', ' Razem: ' + totalSize).should('be.visible')
        })
        cy.get('service-desktop-layout-list-component').should('be.visible')
        cy.get('service-table-list-component').should('be.visible')
        return this;
    }
}