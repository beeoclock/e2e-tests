import {ServicesPages} from "../../../support/beeoclock/page-element/services/ServicesPages"
import {CompanyEnum} from "../../../support/beeoclock/page-element/services/enum/CompanyEnum";
import {ServiceEnum} from "../../../support/ServiceEnum";
import {BusinessNameEnum} from "../../../support/beeoclock/page-element/common/enum/BusinessNameEnum";
import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";
import {AbsenceApi} from "../../../support/beeoclock/backend/panel/absence/AbsenceApi";

describe('order service', (): void => {
    const address: string = CompanyEnum.COMPANY_ADDRESS

    before('clear environment', (): void => {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        OrderApi.deleteAllCurrentOrdersWithAssertion()
        AbsenceApi.deleteAllAbsences()
    })

    beforeEach(function (): void {
        cy.fixture('order-service-test-data.json').as('orderServiceCreation');
    });

    it('order service form test', function (): void {
        cy.visit(ServiceEnum.PUBLIC_PANEL_DEV)

        cy.document().then((doc): void => {
            doc.documentElement.lang = 'pl';
        });

        this.orderServiceCreation.forEach(item => {
            cy.log('Case: ' + item.case);

            ServicesPages.BookingSelectServicePage
                .selectSpecificOrder(item.Service)
                .clickSelectSpecialistAndOrder()
            ServicesPages.SelectSpecialistPage
                .selectSpecificSpecialist(item.Specialist)
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

            ServicesPages.OrderDetailsPage
                .verifyDetailsHeader()
            ServicesPages.OrderSummaryNavigationPage
                .clickCancelOrderButton()
            ServicesPages.OrderCancellationPage
                .verifyCancelInformation()

            cy.log("assert summary od cancellation page")
            ServicesPages.OrderSummaryPage
                .verifyOrderSummaryValue("Nazwa firmy", BusinessNameEnum.HAIRCUT_AND_BARBER)
                .verifyOrderSummaryValue("Adres", address)
                .verifyOrderSummaryValue("Uwaga", item.comment)
            ServicesPages.ServiceSummaryPage
                .verifySelectedServiceOnSummary(item.Service)
                .verifySelectedServicePrice(item.price)
                .verifySelectedServiceTime(item.serviceTime)
                .verifyServiceSpecialist(item.Specialist)

            ServicesPages.OrderSummaryNavigationPage
                .clickBackArrow()
        })
    })
})
