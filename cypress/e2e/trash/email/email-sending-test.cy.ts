import {CalendarPages} from "../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {RightPanelPages} from "../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {PanelEmailTest} from "../../../fixtures/panel/order/PanelEmailTest";
import {TestCaseEnum} from "../../../fixtures/enum/TestCaseEnum";
import {CustomerTypeEnum} from "../../../support/beeoclock/page-element/configuration/right-panel/oder-form/service/enum/CustomerTypeEnum";
import {NotificationsPage} from "../../../support/beeoclock/page-element/configuration/notiifcations/NotificationsPage";
import {MiroHostHelper} from "../../../support/beeoclock/notifications/mirohost/MiroHostHelper";

describe('email test', (): void => {

    it(`should create order`, function (): void {
        const testData = PanelEmailTest.getTestData(TestCaseEnum.CASE_1);

        cy.loginOnPanel()

        CalendarPages.CalendarTablePage
            .clickOnGivenAndHour(testData.specialist, testData.time);

        cy.log('Add client-app');
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
    });

    it(`assert send email`, function (): void {
        MiroHostHelper.visitAndLoginOnMiroHost()
    });
})