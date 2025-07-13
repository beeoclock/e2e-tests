import {LeftMenuPage} from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {TariffsPages} from "support/beeoclock/page-element/configuration/tab/tariffs/TariffsPages";
import {
    TariffsNameEnum
} from "../../../../support/beeoclock/page-element/configuration/tab/tariffs/enum/TariffsNameEnum";

describe("tariffs visibility test", (): void => {

    before((): void => {
        Cypress.on('uncaught:exception', () => false);
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()

        Cypress.on('uncaught:exception', () => false);
    });

    beforeEach('login', (): void => {
        cy.loginOnPanel()
        LeftMenuPage.assertIsSynchronized(true)
        LeftMenuPage.clickOnGivenTab(TabNameEnum.TARIFFS)
    })

    it('should update slot to professional', (): void => {
        TariffsPages.TariffsListPage
            .clickUpdateToProfessional()
            .verifyGivenSlotIsSelected(TariffsNameEnum.PROFESSIONAL)

        cy.log('verify that tariffs pages updated after change tariff plan')
        TariffsPages.TariffsListPage.verifyGivenSlotIsOpenToDowngrade(TariffsNameEnum.BASIC);

        cy.log('assert that professional tariff is selected')
        TariffsPages.TariffsListPage.verifyGivenSlotIsSelected(TariffsNameEnum.PROFESSIONAL)

        cy.log('downgrade tariff to basic plan')
        TariffsPages.TariffsListPage.clickDowngradeToBasic(TariffsNameEnum.BASIC)

        cy.log('assert successfully downgrade to basic plan')
        TariffsPages.TariffsListPage.verifyGivenSlotIsSelected(TariffsNameEnum.BASIC)

        TariffsPages.TariffsListPage.verifyGivenSlotIsOpenToUpgrade(TariffsNameEnum.PROFESSIONAL)
    });
})