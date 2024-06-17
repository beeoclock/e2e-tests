import {ServicesPages} from "../../support/beeoclock/page-element/services/ServicesPages"
import {CompanyEnum} from "../../support/beeoclock/page-element/services/enum/CompanyEnum";

describe('order service', () => {

    const address: string = CompanyEnum.COMPANY_ADDRESS

    beforeEach(function () {
        cy.fixture('order-service-test-data.json').as('orderServiceCreation');
    });

    it('order service form test', function () {
        cy.visit('')

        this.orderServiceCreation.forEach(item => {
            cy.log('Case: ' + item.case);

            ServicesPages.BookingSelectServicePage
                .selectSpecificOrder(item.Service)
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
                .verifySummaryPriceValue(item.summaryPrice)

                .verifySelectedService(item.Service)
                .verifySelectedServicePrice(item.price)
                .verifySelectedServiceTime(item.serviceTime)
                .verifyServiceSpecialist(item.Specialist)

            ServicesPages.BookingClientNavigationFormPage
                .saveButton()

            ServicesPages.OrderSummaryPage
                .verifyOrderSummaryValue("Nazwa firmy", item.companyName)
                .verifyOrderSummaryValue("Adres", address)
             .verifyOrderSummaryValue("Komentarz", item.comment)
            ServicesPages.BookingClientDataPage
                .verifySelectedService(item.Service)
                .verifySelectedServicePrice(item.price)
                .verifySelectedServiceTime(item.serviceTime)
                .verifyServiceSpecialist(item.Specialist)

            ServicesPages.OrderDetailsPage
                .verifyDetailsHeader()
            ServicesPages.OrderSummaryNavigationPage
                .clickCancelOrderButton()
            ServicesPages.OrderCancellationPage
                .verifyCancelInformation()
            ServicesPages.OrderSummaryPage
                .verifyOrderSummaryValue("Nazwa firmy", item.companyName)
                .verifyOrderSummaryValue("Adres", address)
            .verifyOrderSummaryValue("Komentarz", item.comment)
            ServicesPages.BookingClientDataPage
                .verifySelectedService(item.Service)
                .verifySelectedServicePrice(item.price)
                .verifySelectedServiceTime(item.serviceTime)
                .verifyServiceSpecialist(item.Specialist)
            ServicesPages.OrderSummaryNavigationPage
                .clickBackArrow()

        })
    })
})