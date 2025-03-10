import {faker} from "@faker-js/faker";
import {LeftMenuPage} from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {TariffsPages} from "support/beeoclock/page-element/configuration/tab/tariffs/TariffsPages";
import {TariffsFormPages} from "support/beeoclock/page-element/configuration/tab/tariffs/form/TariffsFormPages";
import {TariffsNameEnum} from "../../../../support/beeoclock/page-element/configuration/tab/tariffs/enum/TariffsNameEnum";

describe("tariffs visibility test", () => {
    let expectedTariffs: any;
    const free: string = "Free"
    const basic: string = "Basic"
    const professional: string = "Professional"
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

    it.skip('should update slot to basic', () => {

        cy.intercept('POST', '**/6').as('stripeLoad');
        TariffsPages.TariffsListPage.clickUpdateGivenSlot(basic);

        cy.location('href', {timeout: 15000}).should('include', 'checkout.stripe.com');

        cy.origin('https://checkout.stripe.com', () => {
            cy.wait('@stripeLoad', {timeout: 20000});
        })

        TariffsFormPages.StripePage
            .assertInputElement()
            .assertOrderSummary(basic)
            .typeCardValue(cardValue)
            .typeCardExpiration("13/34")
            .typeCardCVV(faker.finance.creditCardCVV())
            .typeCardBillingName('Jarosław testowy')
    });

    it('should update slot to professional', () => {
        TariffsPages.TariffsListPage.clickUpdateToProfessional();
        TariffsPages.TariffsListPage.verifyGivenSlotIsOpenToUpgrade(TariffsNameEnum.BASIC);
    });
})