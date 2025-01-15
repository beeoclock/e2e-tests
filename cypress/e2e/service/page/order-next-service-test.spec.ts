import {ServicesPages} from "../../../support/beeoclock/page-element/services/ServicesPages"
import {CompanyEnum} from "../../../support/beeoclock/page-element/services/enum/CompanyEnum";
import {BusinessNameEnum} from "../../../support/beeoclock/page-element/common/enum/BusinessNameEnum";

describe('order next service', () => {

    const address: string = CompanyEnum.COMPANY_ADDRESS

    beforeEach(function () {
        cy.fixture('order-next-service-test-data.json').as('orderNextServiceCreation');
    });

    it('order next service form test', function () {
        cy.loginOnPublicPage()

        cy.document().then((doc) => {
            doc.documentElement.lang = 'pl';
        });

        this.orderNextServiceCreation.forEach(item => {
            cy.log('Case: ' + item.case);

            ServicesPages.BookingSelectServicePage
                .selectSpecificOrder(item.Service)
                .clickSelectSpecialistAndOrder()
            ServicesPages.SelectSpecialistPage
                .selectSpecificSpecialist(item.Specialist)
            ServicesPages.SelectDayPage
                .assertSelectedServiceSection(item.Service, item.serviceTime)
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
                .verifyGivenSlotNotExist(item.selectTime)
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
                .verifyOrderSummaryValue("Nazwa firmy", BusinessNameEnum.HAIRCUT_AND_BARBER)
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