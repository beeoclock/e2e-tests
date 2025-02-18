import {TestCaseEnum} from "../../../../fixtures/enum/TestCaseEnum";
import {OrderApi} from "../../../../support/beeoclock/backend/panel/order/OrderApi";
import {ModuleAssertionPage} from "../../../../support/beeoclock/common/assertion/ModuleAssertionPage";
import {
    PanelOrderVariousOptionDataProvider
} from "../../../../fixtures/panel/various-option/PanelOrderVariousOptionDataProvider";
import {CalendarPages} from "../../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {RightPanelPages} from "../../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {
    CustomerTypeEnum
} from "../../../../support/beeoclock/page-element/configuration/right-panel/oder-form/service/enum/CustomerTypeEnum";
import {SpecialistNameEnum} from "../../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {ThrottleEnum} from "../../../../support/beeoclock/common/enum/ThrottleEnum";
import { TabNameEnum } from "support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import { LeftMenuPage } from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";

describe('order offline test', () => {
    it('test panel new customer order service', function () {
        const testCases = [
            TestCaseEnum.CASE_1,
        ];

        cy.loginOnPanel()

        cy.log('get token')
        cy.get('@token').then(token => {
            cy.log('token: ' + token);

            cy.log('delete orders before test')
            OrderApi.deleteAllCurrentOrders()

            cy.log('verify calendar tab component');
            ModuleAssertionPage.verifyCalendarTabModule()

            testCases.forEach(testCase => {
                const testData = PanelOrderVariousOptionDataProvider.getTestData(testCase);

                cy.setNetworkThrottle(ThrottleEnum.OFFLINE)

                cy.log('CASE - 1')
                CalendarPages.CalendarTablePage
                    .clickOnGivenAndHour(testData.specialist, testData.time)

                RightPanelPages.RightPanelServicesPage
                    .selectSpecificService(testData.service)
                    .verifySelectedService('1', testData.price, testData.duration)

                    .clickOpenCustomerPopover()
                    .selectSpecificCustomerType(CustomerTypeEnum.NEW);
                RightPanelPages.CustomerPage
                    .typeCustomerName(testData.firstName)
                    .typeCustomerLastName(testData.lastName)
                    .typeCustomerEmail(testData.email)
                    .typeCustomerPhone(testData.phone)
                    .clickConfirmButton();
                RightPanelPages.RightPanelServicesPage
                    .clickNextButton()
                    .selectPriceOfService(testData.updatedPrice)
                    .selectSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME);
                RightPanelPages.SummaryAndPaymentServicePage
                    .verifyOrderService(testData.summary)
                    .verifyOrderSpecialist(testData.specialistFirstName)
                    .verifyOrderCustomer(testData.firstName)
                    .selectPaymentMethod(testData.paymentMethod)
                    .selectPaymentStatus(testData.PaymentStatus)
                    .typeBusinessNote(testData.businessNote)
                    .clickSaveButton();

                cy.setNetworkThrottle(ThrottleEnum.NO_THROTTLING)

                LeftMenuPage.clickOnGivenTab(TabNameEnum.ORDER);

                // cy.get('@orderId').then((orderId) => {
                //     cy.log('Order ID is: ' + orderId);
                //     let oderID: string = orderId.toString()
                //
                //     cy.log('verify its order on table');
                //     CalendarPages.CalendarTablePage
                //         .findAndVerifyOrderTableElement(testData.specialistFirstName, testData.specialistLastName)
                //         .verifyTimeOrderOnTable(testData.specialistFirstName, testData.specialistLastName, testData.assertTime);
                //
                //     cy.log('click, delete and verify deletion on table');
                //     LeftMenuPage.clickOnGivenTab(TabNameEnum.ORDER);
                //     OrderTabPages.OrderActionTable
                //         .clickActionButton(oderID)
                //         .clickSpecificAction(OrderActionsEnum.DELETE)
                //         .verifyOrderWithGivenIdNotExist(oderID)
                // })
                //
                // cy.log('CASE - 2')
                // cy.log('create next order');
                // LeftMenuPage.clickOnGivenTab(TabNameEnum.CALENDAR)
                //
                // cy.log('create new order for previously created customer')
                // CalendarPages.CalendarNavigationPage
                //     .verifyCurrenDate()
                //     .clickNextDayArrow()
                //     .verifyNextDayDate();
                //
                // CalendarPages.CalendarTablePage
                //     .clickOnGivenAndHour(testData.nextSpecialist, testData.time)
                //
                // cy.log('aassertions');
                // RightPanelPages.RightPanelServicesPage
                //     .selectSpecificService(testData.nextService)
                //     .verifySelectedService('1', testData.nextPrice, testData.nextDuration)
                //
                //     .clickOpenCustomerPopover()
                //     .selectSpecificCustomerType(CustomerTypeEnum.CLIENT);
                //
                // RightPanelPages.CustomerPage
                //     .searchExistingCustomer(testData.firstName)
                //
                // cy.log('selectGivenCustomer')
                // RightPanelPages.CustomerPage
                //     .selectGivenCustomer(testData.firstName + ' ' + testData.lastName)
                //     .clickConfirmButton();
                //
                // RightPanelPages.RightPanelServicesPage
                //     .clickNextButton()
                //     .selectPriceOfService(testData.nextPriceUpdated)
                // RightPanelPages.SummaryAndPaymentServicePage
                //     .verifyOrderService(testData.nextSummary)
                //     .verifyOrderSpecialist(testData.nextSpecialistLastName)
                //     .verifyOrderCustomer(testData.firstName)
                //     .selectPaymentMethod(testData.nextPaymentMethod)
                //     .selectPaymentStatus(testData.nextPaymentStatus)
                //     .typeBusinessNote(testData.businessNote)
                //     .clickSaveButton();
                //
                // cy.get('@orderId').then((orderId) => {
                //     cy.log('Order ID is: ' + orderId);
                //     let orderID: string = orderId.toString()
                //
                //     cy.log('verify its order on table');
                //     CalendarPages.CalendarTablePage
                //         .findAndVerifyOrderTableElement(testData.nextSpecialistLastName, testData.nextSpecialistLastName)
                //         .verifyTimeOrderOnTable(testData.nextSpecialistLastName, testData.nextSpecialistLastName, testData.nextAssertTime);
                //
                //     cy.log('click, delete and verify deletion on table');
                //     LeftMenuPage.clickOnGivenTab(TabNameEnum.ORDER);
                //     OrderTabPages.OrderActionTable
                //         .clickActionButton(orderID)
                //         .clickSpecificAction(OrderActionsEnum.DELETE)
                //         .verifyOrderWithGivenIdNotExist(orderID)
                //
                //     cy.log('create next order');
                //     LeftMenuPage.clickOnGivenTab(TabNameEnum.CALENDAR)
                // });
            });
        })
    })
})