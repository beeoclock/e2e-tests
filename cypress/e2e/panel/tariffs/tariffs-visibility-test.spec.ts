import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "../../../support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {TariffsPages} from "../../../support/beeoclock/page-element/configuration/tab/tariffs/TariffsPages";

describe("tariffs visibility test", () => {
    let expectedTariffs: any;

    before(() => {
        cy.fixture("backend/tariffs/existedTariffs.json").then((existedTariffs) => {
            expectedTariffs = existedTariffs;
        });
    });

    beforeEach('login', () => {
        cy.loginOnPanel()
        // LeftMenuPage.assertIsSynchronized(true)
        LeftMenuPage.clickOnGivenTab(TabNameEnum.TARIFFS, false)
    })

    it('should assert free slot tariff', () => {
        TariffsPages.TariffsListPage
            .verifyTariffsPrize('Free', '0 zł')
            .verifyTariffFeature('Free', 'Powiadomienie e-mail')
    })
})