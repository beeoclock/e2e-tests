import {ServicesPages} from "../../support/beeoclock/page-element/services/ServicesPages"
import {CompanyEnum} from "../../support/beeoclock/page-element/services/enum/CompanyEnum";
import {ServiceEnum} from "../../support/beeoclock/common/enum/ServiceEnum";

describe('order next service', () => {

    const address: string = CompanyEnum.COMPANY_ADDRESS

    beforeEach(function () {
        cy.fixture('order-next-service-test-data.json').as('orderNextServiceCreation');
    });

    it('order next service form test', function () {
        cy.visit(ServiceEnum.PUBLIC_PANEL)

        this.orderNextServiceCreation.forEach(item => {
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

            cy.log('select next service');
            ServicesPages.BookingClientNavigationFormPage
                .clickAddNextService();
            ServicesPages.BookingSelectServicePage
                .selectNextSpecificOrder(item.nextService);
            ServicesPages.SelectSpecialistPage
                .selectSpecificSpecialist(item.nextSpecialist);
            ServicesPages.SelectDayPage
                .selectNextDay();
            ServicesPages.SelectTimePage
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
                .verifyOrderSummaryValue("Nazwa firmy", item.companyName)
                .verifyOrderSummaryValue("Adres", address)
                .verifyOrderSummaryValue("Komentarz", item.comment)
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

            cy.log('verify next service')
            ServicesPages.BookingClientDataPage
                .verifySelectServicesHeader()
                .verifySelectedService(item.nextService)
                .verifySelectedServicePrice(item.nextPrice)
                .verifySelectedServiceTime(item.nextServiceTime)

            ServicesPages.OrderSummaryNavigationPage
                .clickBackArrow()

        })
    })
})