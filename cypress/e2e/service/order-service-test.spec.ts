
import { ServicesPages } from "../../support/beeoclock/page-element/services/ServicesPages"

describe('order service', () => {

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
      ServicesPages.BookingClientDataPage
        .typeFirstName(item.firstName)
        .typeEmail(item.email)
        .typePhoneNumber(item.phone)
        .typeComment(item.comment)
      ServicesPages.BookingClientNavigationFormPage
        .clickChooseDateAndTime()
      ServicesPages.SelectDayPage
        .selectNextDay()
      ServicesPages.SelectTimePage
        .selectSpecificTime(item.selectTime)
      ServicesPages.DataAndTimeNavigationPage
        .clickBookOrder()
      ServicesPages.OrderSummaryPage
        .verifyOrderSummaryValue("Nazwa firmy", item.Specialist)
        .verifyOrderSummaryValue("Adres", "Juliusza Słowackiego 80 , Piotrków trybunalski , country.PL, 97-300")
        .verifyPriceValue("Cena", item.price)
        .verifyOrderSummaryValue("Czas trwania", item.serviceTime)
        .verifyOrderSummaryValue("Komentarz", item.comment)
      ServicesPages.OrderDetailsPage
        .verifyDetailsHeader()
        .verifyOrderMainDetails(item.Service, item.price)
        .verifyOrderMainDetails(item.Service, item.serviceTime)
        .verifyOrderDetails("Opis", item.serviceDescription)
        .verifyOrderDetails("Specjalista", item.Specialist)
      ServicesPages.OrderSummaryNavigationPage
        .clickCancelOrderButton()
        ServicesPages.OrderCancellationPage
        .verifyCancelInformation()
        .verifyCancelledOrderSummaryValue("Nazwa firmy", item.Specialist)
        .verifyCancelledOrderSummaryValue("Adres", "Juliusza Słowackiego 80 , Piotrków trybunalski , country.PL, 97-300")
        .verifyCancelledPriceValue("Cena", item.price)
        .verifyCancelledOrderSummaryValue("Czas trwania", item.serviceTime)
        .verifyCancelledOrderSummaryValue("Komentarz", item.comment)
        .verifyCancelledOrderMainDetails(item.Service, item.price)
        .verifyCancelledOrderMainDetails(item.Service,  item.serviceTime)
        .verifyCancelledOrderDetails("Opis", item.serviceDescription)
        .verifyCancelledOrderDetails("Specjalista", item.Specialist)
      ServicesPages.OrderSummaryNavigationPage
        .clickBackArrow()

    })
  })
})