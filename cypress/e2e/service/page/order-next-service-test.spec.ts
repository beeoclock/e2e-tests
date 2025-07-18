import {ServicesPages} from "../../../support/beeoclock/page-element/services/ServicesPages"
import {CompanyEnum} from "../../../support/beeoclock/page-element/services/enum/CompanyEnum";
import {BusinessNameEnum} from "../../../support/beeoclock/page-element/common/enum/BusinessNameEnum";
import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";
import {AbsenceApi} from "../../../support/beeoclock/backend/panel/absence/AbsenceApi";

describe('order next service', (): void => {

    const address: string = CompanyEnum.COMPANY_ADDRESS

    beforeEach(function (): void {
        cy.fixture('order-next-service-test-data.json').as('orderNextServiceCreation');
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()

    });

    before('clear environment', (): void => {
        OrderApi.deleteAllCurrentOrdersWithAssertion()
        AbsenceApi.deleteAllAbsences()
    })

    it('order next service form test', function (): void {
        cy.loginOnPublicPage()

        cy.document().then((doc): void => {
            doc.documentElement.lang = 'pl';
        });

        this.orderNextServiceCreation.forEach(item => {
            cy.log('Case: ' + item.case);

            ServicesPages.BookingSelectServicePage
                .selectSpecificOrder(item.Service)
                .clickSelectSpecialistAndOrder()
            ServicesPages.SelectSpecialistPage
                .selectSpecificSpecialist(item.Specialist)

            cy.log('select date and time')
            ServicesPages.SelectDayPage
                .selectNextDay()
            ServicesPages.SelectTimePage
                .selectSpecificTime(item.selectTime)
            ServicesPages.DataAndTimeNavigationPage
                .clickNextStepButton()
            ServicesPages.BookingClientDataPage
                .typeFirstName(item.firstName)
                .typeEmail(item.email)
                .typePhoneNumber(item.phone)
                .typeComment(item.comment)
                .checkAgreement()
                .verifySummaryPriceValue(item.summaryPrice)

                .verifySelectedService(item.Service)
                .verifySelectedServicePrice(item.price)
                .verifySelectedServiceTime(item.serviceTime)
                .verifyServiceSpecialist(item.Specialist)

            cy.log('select next service');
            ServicesPages.BookingClientNavigationFormPage
                .clickAddNextService();
            ServicesPages.BookingSelectServicePage
                .selectNextSpecificOrder(item.nextService)
                .clickSelectSpecialistAndOrder()
            ServicesPages.SelectSpecialistPage
                .selectSpecificSpecialist(item.nextSpecialist);
            ServicesPages.SelectDayPage
                .selectNextDay();
            ServicesPages.SelectTimePage
                .verifyGivenSlotNotExisting(item.selectTime)
                .selectSpecificTime(item.nextSelectTime);
            ServicesPages.DataAndTimeNavigationPage
                .clickNextStepButton();
            ServicesPages.BookingClientDataPage
                .verifySummaryPriceValue(item.nextSummaryPrice);

            cy.log('verify first service')
            ServicesPages.BookingClientDataPage
                .verifySelectedService(item.Service)
                .verifySelectedServicePrice(item.price)
                .verifySelectedServiceTime(item.serviceTime)
                .verifyServiceSpecialist(item.Specialist)

            cy.log('verify next service')
            ServicesPages.BookingClientDataPage
                .verifySelectServicesHeader()
                .verifySelectedService(item.nextService)
                .verifySelectedServicePrice(item.nextPrice)
                .verifySelectedServiceTime(item.nextServiceTime)
                .verifyServiceSpecialist(item.nextSpecialist)

            ServicesPages.BookingClientNavigationFormPage
                .saveButton()

            ServicesPages.OrderSummaryPage
                .verifyOrderSummaryValue("Nazwa firmy", BusinessNameEnum.HAIRCUT_AND_BARBER)
                .verifyOrderSummaryValue("Adres", address)
                .verifyOrderSummaryValue("Uwaga", item.comment)

            ServicesPages.ServiceSummaryPage
                .verifySelectedServiceOnSummary(item.Service)
                .verifySelectedServicePrice(item.price)
                .verifySelectedServiceTime(item.serviceTime)
                .verifyServiceSpecialist(item.Specialist)

            ServicesPages.ServiceSummaryPage
                .verifySelectedServiceOnSummary(item.nextService)
                .verifySelectedServicePrice(item.nextPrice)
                .verifySelectedServiceTime(item.nextServiceTime)

            ServicesPages.OrderDetailsPage
                .verifyDetailsHeader()
            ServicesPages.OrderSummaryNavigationPage
                .clickCancelOrderButton()
            ServicesPages.OrderCancellationPage
                .verifyCancelInformation()
            ServicesPages.OrderSummaryPage
                .verifyOrderSummaryValue("Nazwa firmy", BusinessNameEnum.HAIRCUT_AND_BARBER)
                .verifyOrderSummaryValue("Adres", address)
                .verifyOrderSummaryValue("Uwaga", item.comment)
            ServicesPages.ServiceSummaryPage
                .verifySelectedServiceOnSummary(item.Service)
                .verifySelectedServicePrice(item.price)
                .verifySelectedServiceTime(item.serviceTime)
                .verifyServiceSpecialist(item.Specialist)

            ServicesPages.ServiceSummaryPage
                .verifySelectedServiceOnSummary(item.nextService)
                .verifySelectedServicePrice(item.nextPrice)
                .verifySelectedServiceTime(item.nextServiceTime)
                .verifyServiceSpecialist(item.Specialist)
                .verifySummaryTotalPrice('70 zł')

            ServicesPages.OrderSummaryNavigationPage
                .clickBackArrow()
        })
    })
})