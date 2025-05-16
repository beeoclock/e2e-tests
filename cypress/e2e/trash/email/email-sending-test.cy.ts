import {CalendarPages} from "../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";
import {PanelEmailTest} from "../../../fixtures/panel/order/PanelEmailTest";
import {TestCaseEnum} from "../../../fixtures/enum/TestCaseEnum";
import {CustomerTypeEnum} from "../../../support/beeoclock/page-element/configuration/right-panel/oder-form/service/enum/CustomerTypeEnum";
import {NotificationsPage} from "../../../support/beeoclock/page-element/configuration/notiifcations/NotificationsPage";

describe('email test', () => {

    it(`should create order`, function () {
        const testData = PanelEmailTest.getTestData(TestCaseEnum.CASE_1);

        cy.loginOnPanel()

        CalendarPages.CalendarTablePage
            .clickOnGivenAndHour(testData.specialist, testData.time);

        cy.log('Add service');
        RightPanelPages.RightPanelServicesPage
            .selectSpecificService(testData.service)
            .verifySelectedService('1', testData.price, testData.duration)
            .clickOpenCustomerPopover()
            .selectSpecificCustomerType(CustomerTypeEnum.CLIENT)
        RightPanelPages.CustomerPage
            .searchExistingCustomer('maila')
            .selectGivenCustomer('maila')
            .clickConfirmButton();
        RightPanelPages.RightPanelServicesPage
            .clickNextButton()

        RightPanelPages.SummaryAndPaymentServicePage
            .clickSaveNoAssert();
        NotificationsPage.clickEmailNotificationsToggle()
        NotificationsPage.clickConfirmButton(true);

        //
        // cy.get('@orderId').then((orderId) => {
        //     cy.log('Order ID is: ' + orderId);
        //     let orderID: string = orderId.toString();
        //
        //     cy.log('Verify order on table');
        //     CalendarPages.CalendarTablePage
        //         .verifyTimeOrderOnTable(orderID, testData.assertTime);
        //
        //     cy.log('Click, delete and verify deletion on table');
        //     CalendarPages.CalendarTablePage
        //         .clickOnGivenOrderByItsId(orderID);
        //
        //     RightPanelPages.SummaryAndPaymentServicePage
        //         .verifyOrderDate(testData.dataAssert)
        //         .verifyOrderPrice(testData.priceAssert)
        //         .verifyOrderTime(testData.summaryTime)
        //         .verifyPaymentStatus(1, testData.payment.PaymentStatus)
        //
        //     RightPanelPages.RightPanelNavigationPage
        //         .clickCloseRightPanel()
        //
        //     OrderApi.deleteOrderWithGivenId(orderID)

            //     .clickDeleteByDashIcon()
            //     .clickDeleteByIcon();
            // LeftMenuPage.assertIsSynchronized(true);
            // RightPanelPages.RightPanelNavigationPage
            //     .clickCloseRightPanel();
        });
    // });
})