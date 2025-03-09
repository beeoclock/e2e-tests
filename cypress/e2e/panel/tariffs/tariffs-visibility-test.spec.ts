import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {TabNameEnum} from "../../../support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import {TariffsPages} from "../../../support/beeoclock/page-element/configuration/tab/tariffs/TariffsPages";
import {TariffsFeatureEnum} from "../../../support/beeoclock/page-element/configuration/tab/tariffs/enum/TariffsFeatureEnum";

describe("tariffs visibility test", () => {
    let expectedTariffs: any;
    const free: string = "Free"
    const basic: string = "Basic"
    const professional: string = "Professional"

    before(() => {
        cy.fixture("backend/tariffs/existedTariffs.json").then((existedTariffs) => {
            expectedTariffs = existedTariffs;
        });
    });

    beforeEach('login', () => {
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
            .verifyGivenSlotIsSelected(free)
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
            .verifyGivenSlotIsOpenToSelect(basic)
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
            .verifyGivenSlotIsOpenToSelect(professional)
    })
    //
    // it.only('should update slot to basic', () => {
    //     // Interceptujemy request Stripe
    //     cy.intercept('POST', '**/6').as('stripeLoad');
    //
    //     // Klikamy przycisk, który prowadzi do checkouta Stripe
    //     TariffsPages.TariffsListPage.clickUpdateGivenSlot(basic);
    //
    //     cy.wait(15000)
    //
    //     // Czekamy na przekierowanie na stronę Stripe
    //     cy.location('href', { timeout: 15000 }).should('include', 'checkout.stripe.com');
    //
    //     // Wewnątrz cy.origin możemy operować na elementach strony Stripe
    //     cy.origin('https://checkout.stripe.com', () => {
    //         // Czekamy na request POST do Stripe
    //         cy.wait('@stripeLoad', {timeout: 15000});
    //
    //         cy.wait(20000)
    //     })
    // });

})