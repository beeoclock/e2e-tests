import {RightPanelPages} from "../../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {CalendarPages} from "../../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {TestCaseEnum} from "../../../../fixtures/enum/TestCaseEnum";
import {PanelOrderCreationDataProvider} from "../../../../fixtures/panel/order/PanelOrderCreationDataProvider";
import {LeftMenuPage} from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {OrderApi} from "../../../../support/beeoclock/backend/panel/order/OrderApi";
import {AbsenceApi} from "../../../../support/beeoclock/backend/panel/absence/AbsenceApi";

describe('panel - order service', () => {
    const testCases = [
        TestCaseEnum.CASE_1,
        // TestCaseEnum.CASE_2,
        // TestCaseEnum.CASE_3,
        // TestCaseEnum.CASE_4
    ];

    before('clear environment', () => {
        OrderApi.deleteAllCurrentOrdersWithAssertion()
        AbsenceApi.deleteAllAbsences()
    })

    beforeEach('login and wait till synchronization ended', () => {
        cy.loginOnPanel()
        LeftMenuPage.assertIsSynchronized(true);
    })

    testCases.forEach(testCase => {
        it(`should add and delete order for ${testCase}`, function () {
            const testData = PanelOrderCreationDataProvider.getTestData(testCase);

            cy.log(`Add order on calendar panel for ${testCase}`);
            CalendarPages.CalendarTablePage
                .clickOnGivenAndHour(testData.specialist, testData.time);

            cy.log('Add service');
            RightPanelPages.RightPanelServicesPage
                .selectSpecificService(testData.service)
                .verifySelectedService('1', testData.price, testData.duration)
                .clickNextButton()
                .openSelectTime()
                .selectHour(testData.hour)
                .selectMinute(testData.minute)
                .clickSubmitSelectedTime()
                .selectPriceOfService(testData.updatedPrice)
                .selectSpecialist(testData.specialistFirstName);

            RightPanelPages.SummaryAndPaymentServicePage
                .verifyOrderService(testData.summary)
                .verifyOrderSpecialist(testData.specialistFirstName)
                .verifyOrderCustomer('Anonimowy')
                .selectPaymentStatus(testData.payment.PaymentFlag)
                .typeBusinessNote(testData.businessNote)
                .clickSaveButton(testData.payment.requestedPayment);

            cy.get('@orderId').then((orderId) => {
                cy.log('Order ID is: ' + orderId);
                let orderID: string = orderId.toString();

                cy.log('Verify order on table');
                CalendarPages.CalendarTablePage
                    .verifyTimeOrderOnTable(orderID, testData.assertTime);

                cy.log('Click, delete and verify deletion on table');
                CalendarPages.CalendarTablePage
                    .clickOnGivenOrderByItsId(orderID);

                RightPanelPages.SummaryAndPaymentServicePage
                    .verifyOrderDate(testData.dataAssert)
                    .verifyOrderPrice(testData.priceAssert)
                    .verifyOrderTime(testData.summaryTime)
                    .verifyPaymentStatus(1, testData.payment.PaymentStatus)

                RightPanelPages.RightPanelNavigationPage
                    .clickCloseRightPanel()

                OrderApi.deleteOrderWithGivenId(orderID)

                //     .clickDeleteByDashIcon()
                //     .clickDeleteByIcon();
                // LeftMenuPage.assertIsSynchronized(true);
                // RightPanelPages.RightPanelNavigationPage
                //     .clickCloseRightPanel();
            });
        });
    });
});