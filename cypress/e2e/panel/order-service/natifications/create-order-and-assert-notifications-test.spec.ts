import {CalendarPages} from "../../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {RightPanelPages} from "../../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {TestCaseEnum} from "../../../../fixtures/enum/TestCaseEnum";
import {ModuleAssertionPage} from "../../../../support/beeoclock/common/assertion/ModuleAssertionPage";
import {PanelOrderCreationDataProvider} from "../../../../fixtures/panel/order/PanelOrderCreationDataProvider";
import {NotificationsPage} from "../../../../support/beeoclock/page-element/configuration/notiifcations/NotificationsPage";
import { CustomerTypeEnum } from "support/beeoclock/page-element/configuration/right-panel/oder-form/service/enum/CustomerTypeEnum";

describe('panel notifications test', () => {

    it('test panel new customer order service', function () {
        const testCases = [
            TestCaseEnum.CASE_1,
        ];

        cy.loginOnProductPanel()

        cy.log('verify calendar tab component');
        ModuleAssertionPage.verifyCalendarTabModule()

        testCases.forEach(testCase => {
            const testData = PanelOrderCreationDataProvider.getTestData(testCase);

            cy.log('CASE - 1')
            CalendarPages.CalendarTablePage
                .clickOnGivenAndHour(testData.specialist, testData.time)
            cy.log('add service')
            RightPanelPages.RightPanelServicesPage
                .selectSpecificService(testData.service)
                .verifySelectedService('1', testData.price, testData.duration)
                .clickNextButton()
            //     // .clickOpenCustomerPopover()
            //     // .selectSpecificCustomerType(CustomerTypeEnum.CLIENT);
            //
            // cy.log('selectGivenCustomer')
            // RightPanelPages.CustomerPage
            //     .searchExistingCustomer('tester')
            //     .selectGivenCustomer('tester' + ' ' + 'maila')
            //     .clickConfirmButton();
            RightPanelPages.SummaryAndPaymentServicePage
                .clickSaveButton()
            // NotificationsPage.clickEmailNotificationsToggle()

            cy.get('@orderId').then((orderId) => {
                cy.log('Order ID is: ' + orderId);
                let orderID: string = orderId.toString()

                CalendarPages.CalendarTablePage
                    .clickOnGivenOrderByItsId(orderID)

                RightPanelPages.RightPanelServicesPage
                    .clickOpenCustomerPopover()
                    .selectSpecificCustomerType(CustomerTypeEnum.CLIENT);

                cy.log('selectGivenCustomer')
                RightPanelPages.CustomerPage
                    .searchExistingCustomer('tester')
                    .selectGivenCustomer('tester' + ' ' + 'maila')
                    .clickConfirmButton();
                NotificationsPage.clickEmailNotificationsToggle()
                NotificationsPage.clickConfirmButton()
            })

        });
    })
})