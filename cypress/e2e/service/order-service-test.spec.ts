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
        ///.verifyOrderSummaryValue("Cena", "40 zł")
        .verifyOrderSummaryValue("Czas trwania", item.serviceTime)
        .verifyOrderSummaryValue("Komentarz", item.comment)
      ServicesPages.OrderDetailsPage
        .verifyDetailsHeader()
        // .verifyOrderDetails(item.Service, item.price)
        .verifyOrderDetails("Opis", item.serviceDescription)
        .verifyOrderDetails("Specjalista", item.Specialist)
      ServicesPages.OrderSummaryNavigationPage
        .clickCancelOrderButton()
        .verifyCancelInformation()
        .clickBackArrow()

    })
  })
})