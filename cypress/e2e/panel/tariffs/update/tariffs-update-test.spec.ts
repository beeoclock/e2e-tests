import {LeftMenuPage} from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {TariffsPages} from "support/beeoclock/page-element/configuration/tab/tariffs/TariffsPages";
import {TariffsNameEnum} from "../../../../support/beeoclock/page-element/configuration/tab/tariffs/enum/TariffsNameEnum";

describe("tariffs visibility test", () => {

    before(() => {
        Cypress.on('uncaught:exception', () => false);
    });

    beforeEach('login', () => {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearAllCookies()

        Cypress.on('uncaught:exception', () => false);
        cy.loginOnPanel()
        LeftMenuPage.assertIsSynchronized(true)
        LeftMenuPage.clickOnGivenTab(TabNameEnum.TARIFFS)
    })

    it('should update slot to professional', () => {
        TariffsPages.TariffsListPage.clickUpdateToProfessional();
        TariffsPages.TariffsListPage.verifyGivenSlotIsSelected(TariffsNameEnum.PROFESSIONAL)

        cy.log('verify that tariffs pages updated after change tariff plan')
        TariffsPages.TariffsListPage.verifyGivenSlotIsOpenToDowngrade(TariffsNameEnum.BASIC);

        TariffsPages.TariffsListPage.clickDowngradeToBasic(TariffsNameEnum.BASIC)

    });
})