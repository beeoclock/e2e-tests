import {TestCaseEnum} from "fixtures/enum/TestCaseEnum"
import {PanelOrderVariousOptionDataProvider} from "fixtures/panel/various-option/PanelOrderVariousOptionDataProvider"
import {OrderApi} from "support/beeoclock/backend/panel/order/OrderApi"
import {ModuleAssertionPage} from "support/beeoclock/common/assertion/ModuleAssertionPage"
import {SpecialistNameEnum} from "support/beeoclock/page-element/common/enum/SpecialistNameEnum"
import {LeftMenuPage} from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage"
import {TabNameEnum} from "support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum"
import {RightPanelPages} from "support/beeoclock/page-element/configuration/right-panel/RightPanelPages"
import {
    CustomerTypeEnum
} from "support/beeoclock/page-element/configuration/right-panel/oder-form/service/enum/CustomerTypeEnum"
import {CalendarPages} from "support/beeoclock/page-element/configuration/tab/calendar/CalendarPages"
import {OrderTabPages} from "support/beeoclock/page-element/configuration/tab/order-tab/OrderTabPages"

describe('panel new customer order service', () => {

    before('clear environment', () => {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
    })

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

                cy.log('CASE - 1')
                CalendarPages.CalendarTablePage
                    .clickOnGivenAndHour(testData.specialist, testData.time)
                RightPanelPages.RightPanelServicesPage
                    .clickAddOrderButton()
                    .clickAddServiceButton()

                    .selectSpecificService(testData.service)
                    .verifySelectedService(testData.service)

                    .clickOpenCustomerPopover()
                    .selectSpecificCustomerType(CustomerTypeEnum.NEW);
                RightPanelPages.CustomerPage
                    .typeCustomerName(testData.firstName)
                    .typeCustomerLastName(testData.lastName)
                    .typeCustomerEmail(testData.email)
                    .typeCustomerPhone(testData.phone)
                    .clickConfirmButton();
                RightPanelPages.RightPanelServicesPage
                    .selectPriceOfService(testData.price)
                    .selectSpecialist(SpecialistNameEnum.ZALEWSKI_FIRST_NAME);
                RightPanelPages.SummaryAndPaymentServicePage
                    .verifyOrderService(testData.summary)
                    .verifyOrderSpecialist(testData.specialistFirstName)
                    .verifyOrderCustomer(testData.firstName)
                    .selectPaymentMethod(testData.paymentMethod)
                    .selectPaymentStatus(testData.PaymentStatus)
                    .typeBusinessNote(testData.businessNote)
                    .clickSaveButton();

                cy.log('close panel');
                RightPanelPages.RightPanelNavigationPage
                    .clickCloseRightPanel()

                cy.get('@orderId').then((orderId) => {
                    cy.log('Order ID is: ' + orderId);
                    let orderID: string = orderId.toString()

                    cy.log('verify its order on table');
                    CalendarPages.CalendarTablePage
                        .findAndVerifyOrderTableElement(testData.specialistFirstName, testData.specialistLastName)
                        .verifyTimeOrderOnTable(testData.specialistFirstName, testData.specialistLastName, testData.assertTime);

                    cy.log('get order table module');
                    LeftMenuPage.clickOnGivenTab(TabNameEnum.ORDER);

                    cy.log('edit specialist')
                    OrderTabPages.OrderEditionFormPage
                        .verifyOrderSpecialist(orderID, SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
                        .clickSpecialistButton(orderID)
                        .clickSelectSpecialist(SpecialistNameEnum.E2E_SINGLE_NAME)
                        .verifyOrderSpecialist(orderID, SpecialistNameEnum.E2E_SINGLE_NAME)

                    cy.log('edit customer')
                    OrderTabPages.OrderEditionFormPage
                        .clickCustomerButton(orderID)
                    RightPanelPages.RightPanelServicesPage
                        .selectSpecificCustomerType(CustomerTypeEnum.CLIENT)
                    RightPanelPages.CustomerPage
                        .searchExistingCustomer('Braun-rowe')
                    RightPanelPages.CustomerPage
                        .selectGivenCustomer('Isabel' + ' ' + 'Braun-Rowe')
                        .clickConfirmButton();
                    OrderTabPages.OrderEditionFormPage
                        .verifySelectCustomer(orderID, '👤 Isabel 📇')

                    cy.log('order price edition')
                    OrderTabPages.OrderEditionFormPage
                        .clickOrderPriceComponent(orderID)
                    RightPanelPages.RightPanelServicesPage
                        .typePrice('500')
                })
            })
        })
    })
})