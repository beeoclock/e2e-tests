import {ServiceEnum} from "../../../support/beeoclock/common/enum/ServiceEnum";
import {QueryAssertion} from "../../../support/beeoclock/common/assertion/QueryAssertion";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "../../../support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {OrderTabPages} from "../../../support/beeoclock/page-element/configuration/tab/order-tab/OrderTabPages";
import {
    OrderActionsEnum
} from "../../../support/beeoclock/page-element/configuration/tab/order-tab/actions/enum/OrderActionsEnum";
import {ServiceNameEnum} from "../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";
import {SpecialistNameEnum} from "../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {CalendarPages} from "../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {
    CalendarTableTimeEnum
} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";



describe('panel - order service', () => {
    let nextDayData = DateUtils.getCurrentDatePlusDays(0)
    const timeString = DateUtils.getCurrentTimePlusOneHourFormatted()
    const datetimeInput = DateUtils.convertDateToDatetimeInput(nextDayData, timeString);
    const dateOrderSummary: string = DateUtils.convertDatetimeToCustomFormat(datetimeInput)

    it('test panel  order service', function () {
        cy.intercept('GET', '**/*').as('getAll');
        cy.visit(ServiceEnum.CLIENT_PANEL, {
            failOnStatusCode: false,
            onBeforeLoad: (win) => {
                win.localStorage.setItem('language', 'pl');
            }
        });
        cy.wait('@getAll', {timeout: 30000});


        PanelLoginPageElement.EmailInput.getElement()

        PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN)
        PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD)
        PanelLoginPage.clickLoginButton()

        QueryAssertion.verifyCorrectUrl('/event/calendar-with-specialists')

        CalendarPages.CalendarTablePage
            .clickOnGivenDayPlusOneHour(SpecialistNameEnum.ZALEWSKI, CalendarTableTimeEnum.Hour_18)
            // .clickOpenRightPanel()
        RightPanelPages.RightPanelServicesPage
            .clickAddOrderButton()
            .clickAddServiceButton()
            .clickSelectServiceButton()
            .selectSpecificService(ServiceNameEnum.BREAD_TRIM)
            .verifySelectedService(ServiceNameEnum.BREAD_TRIM, ServiceNameEnum.BREAD_TRIM_DESCRIPTION)
            .selectOrderTime('1 godz, 30 min')
            .selectPriceOfService('40')
            .selectSpecialist(SpecialistNameEnum.ZALEWSKI)
            .typeOrderDate(datetimeInput)
            .typePublicNoteInput('usuń mnie')
            .clickAddButton()
        RightPanelPages.SummaryAndPaymentServicePage
            // .verifyOrderPrice('zł40,00')TODO BUG
            .verifyOrderTime('1 godz, 30 min')
            .verifyOrderDate(dateOrderSummary)
            .verifyOrderService(ServiceNameEnum.BREAD_TRIM)
            .verifyOrderSpecialist(SpecialistNameEnum.ZALEWSKI)
            .verifyOrderCustomer('Anonimowy')
            .selectPaymentMethod('Karta')
            .selectPaymentStatus('W toku')
            .typeBusinessNote('USUŃ MNIE - wartość do wyszukania na ekranie usług')
            .clickSaveButton()


        //TODO this isn't work couse order are behind this table, need to get 'app-event-calendar-with-specialists-widget-component'
        //
        // CalendarPages.CalendarTablePage
        //     .verifyTableElement('Tomasz Zalewski', CalendarTableTimeEnum.Hour_22)
        LeftMenuPage.clickOnGivenTab(TabNameEnum.ORDER)
        OrderTabPages.OrderActionTable
            .clickActionButton()
            .clickSpecificAction(OrderActionsEnum.DELETE)

        // LeftMenuPage.clickOnGivenTab(TabNameEnum.ORDER)
        // OrderTabPages.OrderActionTable
        //     .clickActionButton()
        //     .clickSpecificAction(OrderActionsEnum.DELETE)
    })

    after('clear storage', () => {
        cy.clearAllLocalStorage()
        cy.clearAllCookies()
    })
})
