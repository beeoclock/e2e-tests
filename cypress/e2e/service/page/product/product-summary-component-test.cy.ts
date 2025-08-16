import {ServiceEnum} from "../../../../support/ServiceEnum";
import {NavigationPage} from "../../../../support/beeoclock/page-element/services/navigation/NavigationPage";
import {ServicesPages} from "../../../../support/beeoclock/page-element/services/ServicesPages";

describe('product summary component test', function () {

    beforeEach(() => {
        cy.loginOnPublicPage()
        ServicesPages.NavigationPage.clickOnProductTab()
    })

    it('snapshot assertions', function () {
        ServicesPages.ProductPage
            .verifyConditionerSnapShot()
    })

    it('test product summary component', function () {
        ServicesPages.ProductPage
            .clickAddGivenProduct("Odżywka")
            .verifyAmountOfSelectedProduct("Odżywka", '1')

            .clickAddGivenProduct("Maska do włosów")
            .verifyAmountOfSelectedProduct("Maska do włosów", '1')

            .verifySummary('2', '250,00 zł')
    })
})