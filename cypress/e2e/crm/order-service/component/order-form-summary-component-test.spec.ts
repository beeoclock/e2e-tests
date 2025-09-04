import {OrderApi} from "../../../../support/beeoclock/backend/panel/order/OrderApi";
import {ModuleAssertionPage} from "../../../../support/beeoclock/common/assertion/ModuleAssertionPage";
import {CalendarPages} from "../../../../support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";
import {RightPanelPages} from "../../../../support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {TestCaseEnum} from "../../../../fixtures/enum/TestCaseEnum";
import {OrderSummaryTestData} from "../../../../fixtures/panel/order/OrderSummaryTestData";
import {SpecialistNameEnum} from "../../../../support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {CalendarTableTimeEnum} from "../../../../support/beeoclock/page-element/configuration/tab/calendar/calendar-table/enum/CalendarTableTimeEnum";

describe('Order form summary component test', (): void => {

    it('form summary component test', function (): void {
        const testCases = [
            TestCaseEnum.CASE_1,
            TestCaseEnum.CASE_2,
            TestCaseEnum.CASE_3,
            TestCaseEnum.CASE_4,
        ];

        cy.loginOnPanel()

        cy.log('delete orders before test')
        OrderApi.deleteAllCurrentOrders()

        cy.log('verify calendar tab component');
        ModuleAssertionPage.verifyCalendarTabModule()

        CalendarPages.CalendarTablePage
            .clickOnGivenAndHour(SpecialistNameEnum.ZALEWSKI, CalendarTableTimeEnum.Hour_18)

        testCases.forEach(testCase => {
            const testData = OrderSummaryTestData.getPlusTestData(testCase);

            RightPanelPages.RightPanelServicesPage
                .selectSpecificService(testData.service)
                .verifySelectedService(testData.amount, testData.price, testData.duration)
        })

        testCases.forEach(testCase => {
            const testData = OrderSummaryTestData.getMinusTestData(testCase);

            RightPanelPages.RightPanelServicesPage
                .unSpecificService(testData.service)
                .verifySelectedService(testData.amount, testData.price, testData.duration)
        })
    });
})