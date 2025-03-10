
import {faker} from "@faker-js/faker";
import { LeftMenuPage } from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import { TabNameEnum } from "support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import { TariffsPages } from "support/beeoclock/page-element/configuration/tab/tariffs/TariffsPages";
import { TariffsFeatureEnum } from "support/beeoclock/page-element/configuration/tab/tariffs/enum/TariffsFeatureEnum";
import { TariffsFormPages } from "support/beeoclock/page-element/configuration/tab/tariffs/form/TariffsFormPages";

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
        LeftMenuPage.clickOnGivenTab(TabNameEnum.TARIFFS, false)
    })

    it('should assert free slot tariff', () => {
        TariffsPages.TariffsListPage
            .verifyTariffsPrize(free, '0 zł')
            .verifyTariffFeature(free, TariffsFeatureEnum.EMAIL_NOTIFICATION)
            .verifyTariffFeature(free, TariffsFeatureEnum.JSON_LD)
            .verifyTariffFeature(free, TariffsFeatureEnum.SEO_PACKAGE)
            .verifyTariffFeature(free, TariffsFeatureEnum.ADMIN_PANEL)
            .verifyTariffFeature(free, TariffsFeatureEnum.PUBLIC_PAGE)
            .verifyGivenSlotIsOpenToDowngrade(free)
    })

    it('should assert Basic slot tariff', () => {
        TariffsPages.TariffsListPage
            .verifyTariffsPrize(basic, '59 zł')
            .verifyTariffFeature(basic, TariffsFeatureEnum.EMAIL_NOTIFICATION)
            .verifyTariffFeature(basic, TariffsFeatureEnum.SMS_NOTIFICATION)
            .verifyTariffFeature(basic, TariffsFeatureEnum.JSON_LD)
            .verifyTariffFeature(basic, TariffsFeatureEnum.SEO_PACKAGE)
            .verifyTariffFeature(basic, TariffsFeatureEnum.ADMIN_PANEL)
            .verifyTariffFeature(basic, TariffsFeatureEnum.PUBLIC_PAGE)
            .verifyTariffFeature(basic, TariffsFeatureEnum.UNLIMITED_PLUGINS)
            .verifyTariffFeature(basic, TariffsFeatureEnum.PAYMENT_CONFIRMATION)
            .verifyGivenSlotIsSelected(basic)
    })

    it('should assert Professional slot tariff', () => {
        TariffsPages.TariffsListPage
            .verifyTariffsPrize(professional, '189 zł')
            .verifyTariffFeature(professional, TariffsFeatureEnum.EMAIL_NOTIFICATION)
            .verifyTariffFeature(professional, TariffsFeatureEnum.SMS_NOTIFICATION)
            .verifyTariffFeature(professional, TariffsFeatureEnum.JSON_LD)
            .verifyTariffFeature(professional, TariffsFeatureEnum.SEO_PACKAGE)
            .verifyTariffFeature(professional, TariffsFeatureEnum.ADMIN_PANEL)
            .verifyTariffFeature(professional, TariffsFeatureEnum.PUBLIC_PAGE)
            .verifyTariffFeature(professional, TariffsFeatureEnum.UNLIMITED_PLUGINS)
            .verifyTariffFeature(professional, TariffsFeatureEnum.PAYMENT_CONFIRMATION)
            .verifyTariffFeature(professional, TariffsFeatureEnum.AI_ASSISTANT)
            .verifyTariffFeature(professional, TariffsFeatureEnum.PUBLIC_REST_API)
            .verifyGivenSlotIsOpenToUpgrade(professional)
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
})