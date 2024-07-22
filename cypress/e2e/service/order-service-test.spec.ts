import {ServicesPages} from "../../support/beeoclock/page-element/services/ServicesPages"
import {CompanyEnum} from "../../support/beeoclock/page-element/services/enum/CompanyEnum";
import {ServiceEnum} from "../../support/beeoclock/common/enum/ServiceEnum";
import {BusinessNameEnum} from "../../support/beeoclock/page-element/common/enum/BusinessNameEnum";

describe('order service', () => {

    const address: string = CompanyEnum.COMPANY_ADDRESS

    beforeEach(function () {
        cy.fixture('order-service-test-data.json').as('orderServiceCreation');
    });

    it('order service form test', function () {
        cy.visit(ServiceEnum.PUBLIC_PANEL)

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
                .verifyOrderSummaryValue("Nazwa firmy", BusinessNameEnum.HAIRCUT_AND_BARBER)
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
