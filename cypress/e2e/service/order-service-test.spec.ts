import { ServicesPages } from "../../support/beeoclock/page-element/services/ServicesPages"

describe('order service', () => {


  it('order service form test', function () {
    cy.visit('')

    ServicesPages.BeardedBrothersPage
      .selectSpecificOrder("Underplanting")
    ServicesPages.SelectSpecialistPage
      .selectSpecificSpecialist('Ivan')
    ServicesPages.BookingClientDataPage
      .typeFirstName("test")
      .typeEmail('email@testy.pl')
      .typePhoneNumber('5408523333')
      .typeComment('comment comment comment comment comment comment')
    ServicesPages.BookingClientNavigationFormPage
      .clickChooseDateAndTime()
    ServicesPages.SelectDayPage
      .selectNextDay()
    ServicesPages.SelectTimePage
      .selectSpecificTime("12:15")
  })
})