import { ServicesPages } from "../../support/beeoclock/page-element/services/ServicesPages"

describe('order service', () => {

  beforeEach(function () {
    cy.fixture('order-service-test-data.json').as('orderServiceCreation');
  });
  it('order service form test', function () {
    cy.visit('')

    this.orderServiceCreation.forEach(item => {
      cy.log('Case: ' + item.case);

      ServicesPages.BeardedBrothersPage
        .selectSpecificOrder(item.selectService)
      ServicesPages.SelectSpecialistPage
        .selectSpecificSpecialist(item.selectSpecialist)
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
    })
  })
})