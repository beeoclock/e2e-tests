import {ServiceEnum} from "../../../support/beeoclock/common/enum/ServiceEnum";
import {QueryAssertion} from "../../../support/beeoclock/common/assertion/QueryAssertion";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {DateUtils} from "../../../support/beeoclock/backend/Utils/DateUtils";
import {SpecialistNameEnum} from "../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {CalendarPages} from "../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {
    CalendarTableTimeEnum
} from "../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";
import {BusinessNameEnum} from "../../../support/beeoclock/page-element/common/enum/BusinessNameEnum";
import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "../../../support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {OrderTabPages} from "../../../support/beeoclock/page-element/configuration/tab/order-tab/OrderTabPages";
import {
    OrderActionsEnum
} from "../../../support/beeoclock/page-element/configuration/tab/order-tab/actions/enum/OrderActionsEnum";
import {ServiceNameEnum} from "../../../support/beeoclock/page-element/common/enum/ServiceNameEnum";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {
    CustomerTypeEnum
} from "../../../support/beeoclock/page-element/configuration/right-panel/oder-form/service/enum/CustomerTypeEnum";


describe('panel - order service', () => {
    let nextDayData = DateUtils.getCurrentDateWithGivenFormat("YYYY-MM-DD")
    const timeString = DateUtils.getCurrentTimePlusOneHourFormatted()
    const datetimeInput = DateUtils.convertDateToDatetimeInput(nextDayData, timeString);
    const dateOrderSummary: string = DateUtils.convertDatetimeToCustomFormat(datetimeInput)
    let dataAssert = nextDayData + '18:00'
    let dataAssertValue = "18:00 - 19:30    Strzyżenie Brody   📓 usuń mnie"
    let orderId: string;

    it('test panel  order service', function () {
        cy.intercept('GET', '**/*').as('getAll');
        cy.visit(ServiceEnum.CLIENT_PANEL, {
            failOnStatusCode: false,
            onBeforeLoad: (win) => {
                win.localStorage.setItem('language', 'pl');
            }
        });
        cy.wait('@getAll', {timeout: 30000});

        cy.log('login')
        PanelLoginPageElement.EmailInput.getElement()
        PanelLoginPage.typeEmail(ClientPropertiesEnum.LOGIN)
        PanelLoginPage.typePassword(ClientPropertiesEnum.PASSWORD)
        PanelLoginPage.clickLoginButton()
        PanelLoginPage.selectGivenBusiness(BusinessNameEnum.HAIRCUT_AND_BARBER)
        // specify('delete orders', function () {
        //
        // })TODO add api loop to delete order
        cy.get('@token').then(token => {
            cy.log('token: ' + token)
        })

        cy.log('assert login url')
        QueryAssertion.verifyCorrectUrl('/event/calendar-with-specialists')

        cy.log('add order on calendar panel')
        cy.log('CASE - 1')
        CalendarPages.CalendarTablePage
            .clickOnGivenAndHour(SpecialistNameEnum.ZALEWSKI, CalendarTableTimeEnum.Hour_18)
        RightPanelPages.RightPanelServicesPage
            .clickAddOrderButton()
            .clickAddServiceButton()
            .selectSpecificService(ServiceNameEnum.E2E_HAIRCUT.toLowerCase())
            .verifySelectedService(ServiceNameEnum.E2E_HAIRCUT.toLowerCase())
            .clickOpenCustomerPopover()
            .selectSpecificCustomerType(CustomerTypeEnum.NEW)
        //     .selectOrderTime('1 godz, 30 min')
        //     .selectPriceOfService('40')
        //     .selectSpecialist(SpecialistNameEnum.ZALEWSKI_LAST_NAME)
        //     .typePublicNoteInput('usuń mnie')
        //     .clickAddButton()
        // RightPanelPages.SummaryAndPaymentServicePage
        //     // .verifyOrderPrice('zł40,00')TODO BUG
        //     .verifyOrderTime('1 godz, 30 min')
        //     .verifyOrderDate(dataAssert)
        //     .verifyOrderService(ServiceNameEnum.BREAD_TRIM)
        //     .verifyOrderSpecialist(SpecialistNameEnum.ZALEWSKI)
        //     .verifyOrderCustomer('Anonimowy')
        //     .selectPaymentMethod('Karta')
        //     .selectPaymentStatus('W toku')
        //     .typeBusinessNote('USUŃ MNIE - wartość do wyszukania na ekranie usług')
        //     .clickSaveButton()

        // cy.get('@orderId').then((orderId) => {
        //     cy.log('Order ID is: ' + orderId);
        //     let oderID: string = orderId.toString()
        //
        //     cy.log('verify its order on table');
        //     CalendarPages.CalendarTablePage
        //         .findAndVerifyOrderTableElement(SpecialistNameEnum.ZALEWSKI_FIRST_NAME, SpecialistNameEnum.ZALEWSKI_LAST_NAME)
        //         .verifyTimeOrderOnTable(SpecialistNameEnum.ZALEWSKI_FIRST_NAME, SpecialistNameEnum.ZALEWSKI_LAST_NAME, dataAssertValue);
        //
        //     cy.log('click, delete and verify deletion on table');
        //     CalendarPages.CalendarTablePage
        //         .clickOrderTableElement(SpecialistNameEnum.ZALEWSKI_FIRST_NAME, SpecialistNameEnum.ZALEWSKI_LAST_NAME);
        //     LeftMenuPage.clickOnGivenTab(TabNameEnum.ORDER);
        //     OrderTabPages.OrderActionTable
        //         .clickActionButton(oderID)
        //         .clickSpecificAction(OrderActionsEnum.DELETE)
        //         .verifyOrderWithGivenIdNotExist(oderID)

            // // Verify the order deletion
            // CalendarPages.CalendarTablePage
            //     .verifyOrderNotPresent(SpecialistNameEnum.ZALEWSKI_FIRST_NAME, SpecialistNameEnum.ZALEWSKI_LAST_NAME);

            cy.log('create next order');
        });


    });

    after('clear storage', () => {
        cy.clearAllLocalStorage();
        cy.clearAllCookies();
    });
