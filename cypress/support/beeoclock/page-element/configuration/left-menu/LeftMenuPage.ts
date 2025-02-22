import {LeftMenuPageElement} from "./LeftMenuPageElement";
import {ApiInterceptionHelper} from "../../../common/Interception/ApiInterceptionHelper";
import {TabNameEnum} from "./enum/TabNameEnum";
import {ServiceApiInterceptionHelper} from "../../../common/Interception/service/ServiceApiInterceptionHelper";
import {CustomerApiInterceptionHelper} from "../../../common/Interception/customer/CustomerApiInterceptionHelper";
import {MemberApiInterceptionHelper} from "../../../common/Interception/member/MemberApiInterceptionHelper";
import {PaymentApiInterceptionHelper} from "../../../common/Interception/payment/PaymentApiInterceptionHelper";
import Chainable = Cypress.Chainable;
import HTML = Mocha.reporters.HTML;

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
        // const getCustomers = ClientsApiInterceptionHelper.getCustomers()
        LeftMenuPageElement.TabElement.getElement(TabNameEnum.CLIENTS)
            .click()
        // ApiInterceptionHelper.waitForQueryAliasWithAssert(getCustomers)
        cy.get('customer-desktop-layout-list-component').should('be.visible')
        cy.get('customer-table-list-component').should('be.visible')
        return this;
    }

    public static clickServiceTab(): LeftMenuPage {
        // const getServices: string = ServiceApiInterceptionHelper.getServices()
        LeftMenuPageElement.TabElement.getElement(TabNameEnum.SERVICE)
            .click()
        // cy.wait('@' + getServices).then((interception) => {
        //     const response = interception.response.body
        //     const totalSize = response.totalSize
        //     cy.get('utility-table-state-pagination-component')
        //         .contains('p', ' Razem: ' + totalSize).should('be.visible')
        // // })
        cy.get('service-desktop-layout-list-component').should('be.visible')
        cy.get('service-table-list-component').should('be.visible')
        return this;
    }

    public static synchronizeWithInterception(): LeftMenuPage {
        const getAbsence: string = ApiInterceptionHelper.getAbsence()
        const getCustomer: string = CustomerApiInterceptionHelper.getCustomer()
        const getMember: string= MemberApiInterceptionHelper.getMember()
        const getOrder: string = ApiInterceptionHelper.getOrder()
        const getServices: string = ServiceApiInterceptionHelper.getServices()
        const getPayment: string = PaymentApiInterceptionHelper.getPayment()
        const getBusinessProfile: string = ApiInterceptionHelper.getBusinessProfile()

        LeftMenuPageElement.SynchronizingComponent.getElement().click().then(() => {
            LeftMenuPageElement.SynchronizingComponent.getElement().dblclick()
            cy.log('Waiting for synchronization requests to complete...');
            ApiInterceptionHelper.waitForAliases([getMember, getOrder, getServices, getPayment, getBusinessProfile, getCustomer]);
        })

        LeftMenuPageElement.SynchronizingComponent.getElement().find('.text-xs').contains ('Zsynchronizowano', {timeout: 20000});
        return this;
    }
}