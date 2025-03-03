import {RightPanelPages} from "../../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {CalendarPages} from "../../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {TestCaseEnum} from "../../../../fixtures/enum/TestCaseEnum";
import {PanelOrderCreationDataProvider} from "../../../../fixtures/panel/order/PanelOrderCreationDataProvider";
import {ModuleAssertionPage} from "../../../../support/beeoclock/common/assertion/ModuleAssertionPage";
import {LeftMenuPage} from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {OrderActionsEnum} from "support/beeoclock/page-element/configuration/tab/order-tab/actions/enum/OrderActionsEnum";
import {OrderTabPages} from "support/beeoclock/page-element/configuration/tab/order-tab/OrderTabPages";
import {OrderApi} from "../../../../support/beeoclock/backend/panel/order/OrderApi";
import {AbsenceApi} from "../../../../support/beeoclock/backend/panel/absence/AbsenceApi";

describe('panel - order service', () => {
    const testCases = [
        TestCaseEnum.CASE_1,
        TestCaseEnum.CASE_2,
        TestCaseEnum.CASE_3,
        TestCaseEnum.CASE_4
    ];

    before('clear environment', () => {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
    })

    it('clear environment', () => {
        OrderApi.deleteAllCurrentOrdersWithAssertion()
        AbsenceApi.deleteAllAbsences()
        cy.window().its('localStorage').invoke('clear')
    })

    it('handle synchronization', function (): void {
        cy.loginOnPanel()
        cy.log('handle synchronization process')
        LeftMenuPage.synchronizeWithInterception()
    })

    it('test panel order service', function () {
        cy.loginOnPanel()

        cy.log('verify calendar tab component');
        ModuleAssertionPage.verifyCalendarTabModule()

        testCases.forEach(testCase => {
            const testData = PanelOrderCreationDataProvider.getTestData(testCase);

            cy.log(`add order on calendar panel for ${testCase}`)
            CalendarPages.CalendarTablePage
                .clickOnGivenAndHour(testData.specialist, testData.time)

            cy.log('add service')
            RightPanelPages.RightPanelServicesPage
                .selectSpecificService(testData.service)
                .verifySelectedService('1', testData.price, testData.duration)
                .clickNextButton()
                .openSelectTime()
                .selectHour(testData.hour)
                .selectMinute(testData.minute)
                .clickSubmitSelectedTime()
                .selectPriceOfService(testData.updatedPrice)
                .selectSpecialist(testData.specialistFirstName)
            RightPanelPages.SummaryAndPaymentServicePage
                .verifyOrderService(testData.summary)
                .verifyOrderSpecialist(testData.specialistFirstName)
                .verifyOrderCustomer('Anonimowy')
                .selectPaymentMethod(testData.paymentMethod)
                .selectPaymentStatus(testData.PaymentStatus)
                .typeBusinessNote(testData.businessNote)
                .clickSaveButton()

            cy.get('@orderId').then((orderId) => {
                cy.log('Order ID is: ' + orderId);
                let orderID: string = orderId.toString()

                cy.log('verify its order on table');
                CalendarPages.CalendarTablePage
                    .verifyTimeOrderOnTable(orderID, testData.assertTime);

                cy.log('click, delete and verify deletion on table');
                CalendarPages.CalendarTablePage
                    .clickOnGivenOrderByItsId(orderID)
                RightPanelPages.SummaryAndPaymentServicePage
                    .clickDeleteByDashIcon()
                RightPanelPages.RightPanelNavigationPage
                    .clickCloseRightPanel()
                // LeftMenuPage.clickOnGivenTab(TabNameEnum.ORDER);
                // OrderTabPages.OrderActionTable
                //     .clickActionButton(orderID)
                //     .clickSpecificAction(orderID, OrderActionsEnum.DELETE)
                //     .verifyOrderWithGivenIdNotExist(orderID)
                //
                // cy.log('create next order');
                // LeftMenuPage.clickOnGivenTab(TabNameEnum.CALENDAR)
            });
        })
    });
});
