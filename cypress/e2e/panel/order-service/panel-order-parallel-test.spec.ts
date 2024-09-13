import {ServiceEnum} from "../../../support/beeoclock/common/enum/ServiceEnum";
import {QueryAssertion} from "../../../support/beeoclock/common/assertion/QueryAssertion";
import {PanelLoginPage} from "../../../support/beeoclock/page-element/configuration/login/page-element/PanelLoginPage";
import {ClientPropertiesEnum} from "../../../support/beeoclock/common/enum/ClientPropertiesEnum";
import {PanelLoginPageElement} from "../../../support/beeoclock/page-element/configuration/login/PanelLoginPageElement";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {CalendarPages} from "../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {BusinessNameEnum} from "../../../support/beeoclock/page-element/common/enum/BusinessNameEnum";
import {TestCaseEnum} from "../../../fixtures/enum/TestCaseEnum";
import {PanelOrderCreationDataProvider} from "../../../fixtures/panel/order/PanelOrderCreationDataProvider";
import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";
import {CommonElementPage} from "../../../support/beeoclock/page-element/common/common-element/CommonElementPage";

describe('panel - order service', () => {

    before('clear environment', () => {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
    })

    it('test panel order service', function () {
        const testCases = [
            TestCaseEnum.CASE_1,
            TestCaseEnum.CASE_2,
            TestCaseEnum.CASE_3,
            TestCaseEnum.CASE_4
        ];

        cy.loginOnPanel()

        cy.log('get token')
        cy.get('@token').then(token => {
            cy.log('token: ' + token);

            cy.log('delete orders before test')
            OrderApi.deleteAllCurrentOrders()
        })

        cy.log('assert login url')
        QueryAssertion.verifyCorrectUrl('/event/calendar-with-specialists')

        testCases.forEach(testCase => {
            const testData = PanelOrderCreationDataProvider.getTestData(testCase);

            cy.log(`add order on calendar panel for ${testCase}`)
            CalendarPages.CalendarTablePage
                .clickOnGivenAndHour(testData.specialist, testData.time)
            RightPanelPages.RightPanelServicesPage
                .clickAddOrderButton()
                .clickAddServiceButton()
                .selectSpecificService(testData.service)
                .verifySelectedService(testData.service)
                .openSelectTime()
                .selectHour(testData.hour)
                .selectMinute(testData.minute)
                .clickSubmitSelectedTime()
                .selectPriceOfService(testData.price)
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
                let oderID: string = orderId.toString()

                cy.log('verify its order on table');
                CalendarPages.CalendarTablePage
                    .findAndVerifyOrderTableElement(testData.specialistFirstName, testData.specialistLastName)
                    .verifyTimeOrderOnTable(testData.specialistFirstName, testData.specialistLastName, testData.assertTime);

                cy.log('TEMP - delete order by api')
                OrderApi.deleteOrderWithGivenId(oderID)
                CommonElementPage.reloadOnCalendar()

                //     TODO deletion on order tab
                // cy.log('click, delete and verify deletion on table');
                // LeftMenuPage.clickOnGivenTab(TabNameEnum.ORDER);
                // OrderTabPages.OrderActionTable
                //     .clickActionButton(oderID)
                //     .clickSpecificAction(OrderActionsEnum.DELETE)
                //     .verifyOrderWithGivenIdNotExist(oderID)
                //
                // cy.log('create next order');
                // LeftMenuPage.clickOnGivenTab(TabNameEnum.CALENDAR)
            });
        });
    });
});