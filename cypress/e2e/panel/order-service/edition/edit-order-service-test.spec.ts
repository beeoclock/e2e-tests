import {TestCaseEnum} from "fixtures/enum/TestCaseEnum";
import {PanelOrderVariousOptionDataProvider} from "fixtures/panel/various-option/PanelOrderVariousOptionDataProvider";
import {OrderApi} from "support/beeoclock/backend/panel/order/OrderApi";
import {ModuleAssertionPage} from "support/beeoclock/common/assertion/ModuleAssertionPage";
import {SpecialistNameEnum} from "support/beeoclock/page-element/common/enum/SpecialistNameEnum";
import {RightPanelPages} from "support/beeoclock/page-element/configuration/right-panel/RightPanelPages";
import {
    CustomerTypeEnum
} from "support/beeoclock/page-element/configuration/right-panel/oder-form/service/enum/CustomerTypeEnum";
import {CalendarPages} from "support/beeoclock/page-element/configuration/tab/calendar/CalendarPages";

describe("Panel new customer order service", (): void => {
    const testCases = [TestCaseEnum.CASE_1];
    let orderID: string;
    let email: string;

    it("Test edition of the service on the order module", function (): void {
        cy.loginOnPanel();

        cy.log("Get token");
        cy.get("@token").then((token): void => {
            cy.log("Token: " + token);

            cy.log("Delete orders before test");
            OrderApi.deleteAllCurrentOrders();

            cy.log("Verify calendar tab component");
            ModuleAssertionPage.verifyCalendarTabModule();

            testCases.forEach((testCase): void => {
                const testData = PanelOrderVariousOptionDataProvider.getTestData(testCase);

                cy.log("CASE - 1");
                CalendarPages.CalendarTablePage.clickOnGivenAndHour(testData.specialist, testData.time);

                RightPanelPages.RightPanelServicesPage
                    .selectSpecificService(testData.service)
                    .verifySelectedService("1", testData.price, testData.duration)
                    .clickOpenCustomerPopover()
                    .selectSpecificCustomerType(CustomerTypeEnum.NEW);

                RightPanelPages.CustomerPage
                    .typeCustomerName(testData.firstName)
                    .typeCustomerLastName(testData.lastName)
                    .typeCustomerEmail(email)
                    .typeCustomerPhone(testData.phone)
                    .clickConfirmButton();

                RightPanelPages.RightPanelServicesPage
                    .clickNextButton()
                    .selectPriceOfService(testData.updatedPrice)
                    .selectSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME);

                // RightPanelPages.SummaryAndPaymentServicePage
                //     .verifyOrderService(testData.summary)
                //     .verifyOrderSpecialist(testData.specialistFirstName)
                //     .verifyOrderCustomer(testData.firstName)
                //     .selectPaymentMethod(testData.paymentMethod)
                //     .selectPaymentStatus(testData.PaymentStatus)
                //     .typeBusinessNote(testData.businessNote)
                //     .clickSaveButton(true);


            })
        })
    })
});
