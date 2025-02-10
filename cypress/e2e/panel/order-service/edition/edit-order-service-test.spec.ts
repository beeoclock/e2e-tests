import {TestCaseEnum} from "fixtures/enum/TestCaseEnum"
import {PanelOrderVariousOptionDataProvider} from "fixtures/panel/various-option/PanelOrderVariousOptionDataProvider"
import {OrderApi} from "support/beeoclock/backend/panel/order/OrderApi"
import {ModuleAssertionPage} from "support/beeoclock/common/assertion/ModuleAssertionPage"
import {SpecialistNameEnum} from "support/beeoclock/page-element/common/enum/SpecialistNameEnum"
import {RightPanelPages} from "support/beeoclock/page-element/configuration/right-panel/RightPanelPages"
import {CustomerTypeEnum} from "support/beeoclock/page-element/configuration/right-panel/oder-form/service/enum/CustomerTypeEnum"
import {CalendarPages} from "support/beeoclock/page-element/configuration/tab/calendar/CalendarPages"
import {EmailService} from "../../../../support/beeoclock/notifications/EmailService";
import {IEmails} from "../../../../support/beeoclock/notifications/interface/IEmails";
import {IEmailContent} from "../../../../support/beeoclock/notifications/interface/IEmailContent";

describe('panel new customer order service', () => {
    const testCases = [
        TestCaseEnum.CASE_1,
    ];
    let orderID: string
    let email: string
    let emailPassword: string

    before('clear environment', () => {
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.clearAllCookies();

        cy.log('Creating temporary email account');
        cy.wrap(EmailService.createAccount()).then((response: { email: string, password: string }) => {
            // cy.wrap(response.email).as('tempEmail');
            // cy.wrap(response.password).as('tempPassword');
            email = response.email;
            emailPassword = response.password;

            cy.log(`Temporary email created: ${response.email}`);
        });
    });


    it('test edition of the service on the order module', function () {
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
                    .selectSpecificService(testData.service)
                    .verifySelectedService('1', testData.price, testData.duration)

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
                RightPanelPages.SummaryAndPaymentServicePage
                    .verifyOrderService(testData.summary)
                    .verifyOrderSpecialist(testData.specialistFirstName)
                    .verifyOrderCustomer(testData.firstName)
                    .selectPaymentMethod(testData.paymentMethod)
                    .selectPaymentStatus(testData.PaymentStatus)
                    .typeBusinessNote(testData.businessNote)
                    .clickSaveButton(true);
                cy.wait(5000)

                cy.wrap(EmailService.login(email, emailPassword)).then((response: string) => {
                    cy.log('token: ', response)
                    cy.wrap(EmailService.getEmails(response)).then((emails: IEmails[]) => {

                        emails.forEach((email: IEmails, index) => {
                            cy.log(`Email #${index + 1}:`);
                            cy.log(`Subject: ${email.subject}`);
                            cy.log(`intro: ${email.intro}`);
                            cy.log(`messageId: ${emails[0].id}`);

                            cy.wrap(EmailService.getEmailContent(response, email.id)).then((content: IEmailContent) => {
                                cy.log(`subject: ${JSON.stringify(content.subject)}`);
                                cy.log(`intro: ${JSON.stringify(content.intro)}`);
                                cy.log(`text: ${JSON.stringify(content.text)}`);
                            })
                        })
                    })
                })
                //
                // cy.get('@orderId').then((orderId) => {
                //     cy.log('Order ID is: ' + orderId);
                //     orderID = orderId.toString()
                //
                //     cy.log('verify its order on table');
                //     CalendarPages.CalendarTablePage
                //         .findAndVerifyOrderTableElement(testData.specialistFirstName, testData.specialistLastName)
                //         .verifyTimeOrderOnTable(testData.specialistFirstName, testData.specialistLastName, testData.assertTime);
                //
                //     cy.log('get order table module');
                //     LeftMenuPage.clickOnGivenTab(TabNameEnum.ORDER);
                //
                //     cy.log('edit customer')
                //     OrderTabPages.OrderEditionFormPage
                //         .clickCustomerButton(orderID)
                //     RightPanelPages.RightPanelServicesPage
                //         .selectSpecificCustomerType(CustomerTypeEnum.CLIENT)
                //
                //     cy.log('selectGivenCustomer')
                //     RightPanelPages.CustomerPage
                //         .searchExistingCustomer('tester')
                //         .selectGivenCustomer('tester' + ' ' + 'maila')
                //         .clickConfirmButton();
                //     NotificationsPage.clickConfirmButton()
                //
                //     cy.log('edit specialist')
                //     OrderTabPages.OrderEditionFormPage
                //         .verifyOrderSpecialist(orderID, SpecialistNameEnum.ZALEWSKI_FIRST_NAME)
                //         .clickSpecialistButton(orderID)
                //         .clickSelectSpecialist(SpecialistNameEnum.E2E_SINGLE_NAME)
                //     NotificationsPage.clickEmailNotificationsToggle()
                //     cy.wait(2000)
                //     cy.log("EMAIL CONFIRMATION")
                //     NotificationsPage.clickConfirmButton()

                // OrderTabPages.OrderEditionFormPage
                //     .verifyOrderSpecialist(orderID, SpecialistNameEnum.E2E_SINGLE_NAME)
                //
                // cy.log('order price edition')
                // OrderTabPages.OrderEditionFormPage
                //     .clickOrderPriceComponent(orderID)
                // RightPanelPages.RightPanelServicesPage
                //     .typePrice('500')
                // OrderTabPages.OrderEditionFormPage
                //     .assertPrice(orderID, '500,00 zł')
                // })
            })
        })
    })


    it.skip('test edition of the service on the calendar module', function () {
        cy.loginOnPanel()

        cy.log('get token')
        cy.get('@token').then(token => {
            cy.log('token: ' + token);

            cy.log('verify calendar tab component');
            ModuleAssertionPage.verifyCalendarTabModule()

            testCases.forEach(testCase => {
                const testData = PanelOrderVariousOptionDataProvider.getTestData(testCase);

                cy.log('verify its order on table');
                CalendarPages.CalendarTablePage
                    .findAndVerifyOrderTableElement(testData.nextSpecialistLastName, testData.nextSpecialistLastName)
                    .verifyTimeOrderOnTable(testData.nextSpecialistLastName, testData.nextSpecialistLastName, '18:00-18:30MarthaD\'Amore-Simonise2e-strzyżenie')
                    .clickOrderTableElement(testData.nextSpecialistLastName, testData.nextSpecialistLastName)
                // .clickOnGivenOrderByItsId(orderID)TODO JW
            })
        })
    })
})