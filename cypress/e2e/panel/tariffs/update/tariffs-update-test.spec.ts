import {faker} from "@faker-js/faker";
import {LeftMenuPage} from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {TariffsPages} from "support/beeoclock/page-element/configuration/tab/tariffs/TariffsPages";
import {TariffsFormPages} from "support/beeoclock/page-element/configuration/tab/tariffs/form/TariffsFormPages";
import {TariffsNameEnum} from "../../../../support/beeoclock/page-element/configuration/tab/tariffs/enum/TariffsNameEnum";

describe("tariffs visibility test", () => {
    let expectedTariffs: any;
    const cardValue: string = '4242 4242 4242 4242'

    before(() => {
        cy.fixture("backend/tariffs/existedTariffs.json").then((existedTariffs) => {
            expectedTariffs = existedTariffs;
        });
        Cypress.on('uncaught:exception', () => false);
    });

    beforeEach('login', () => {
        Cypress.on('uncaught:exception', () => false);
        cy.loginOnPanel()
        LeftMenuPage.assertIsSynchronized(true)
        LeftMenuPage.clickOnGivenTab(TabNameEnum.TARIFFS)
    })

    it('should update slot to professional', () => {
        TariffsPages.TariffsListPage.clickUpdateToProfessional();

        cy.log('verify that tariffs pages updated after change tariff plan')
        TariffsPages.TariffsListPage.verifyGivenSlotIsOpenToUpgrade(TariffsNameEnum.BASIC);
    });
})