
import {faker} from "@faker-js/faker";
import { LeftMenuPage } from "support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import { TabNameEnum } from "support/beeoclock/page-element/configuration/left-menu/enum/TabNameEnum";
import { TariffsPages } from "support/beeoclock/page-element/configuration/tab/tariffs/TariffsPages";
import { TariffsFeatureEnum } from "support/beeoclock/page-element/configuration/tab/tariffs/enum/TariffsFeatureEnum";
import { TariffsNameEnum } from "support/beeoclock/page-element/configuration/tab/tariffs/enum/TariffsNameEnum";
import { TariffsFormPages } from "support/beeoclock/page-element/configuration/tab/tariffs/form/TariffsFormPages";

describe("tariffs visibility test", () => {

    before(() => {
        Cypress.on('uncaught:exception', () => false);
    });

    beforeEach('login', () => {
        Cypress.on('uncaught:exception', () => false);
        cy.loginOnPanel()
        LeftMenuPage.clickOnGivenTab(TabNameEnum.TARIFFS, false)
    })

    it('should assert free slot tariff', () => {
        TariffsPages.TariffsListPage
            .verifyTariffsPrize(TariffsNameEnum.FREE, '0 zł')
            .verifyTariffFeature(TariffsNameEnum.FREE, TariffsFeatureEnum.EMAIL_NOTIFICATION)
            .verifyTariffFeature(TariffsNameEnum.FREE, TariffsFeatureEnum.JSON_LD)
            .verifyTariffFeature(TariffsNameEnum.FREE, TariffsFeatureEnum.SEO_PACKAGE)
            .verifyTariffFeature(TariffsNameEnum.FREE, TariffsFeatureEnum.ADMIN_PANEL)
            .verifyTariffFeature(TariffsNameEnum.FREE, TariffsFeatureEnum.PUBLIC_PAGE)
            .verifyGivenSlotIsOpenToDowngrade(TariffsNameEnum.FREE)
    })

    it('should assert Basic slot tariff', () => {
        TariffsPages.TariffsListPage
            .verifyTariffsPrize(TariffsNameEnum.BASIC, '59 zł')
            .verifyTariffFeature(TariffsNameEnum.BASIC, TariffsFeatureEnum.EMAIL_NOTIFICATION)
            .verifyTariffFeature(TariffsNameEnum.BASIC, TariffsFeatureEnum.SMS_NOTIFICATION)
            .verifyTariffFeature(TariffsNameEnum.BASIC, TariffsFeatureEnum.JSON_LD)
            .verifyTariffFeature(TariffsNameEnum.BASIC, TariffsFeatureEnum.SEO_PACKAGE)
            .verifyTariffFeature(TariffsNameEnum.BASIC, TariffsFeatureEnum.ADMIN_PANEL)
            .verifyTariffFeature(TariffsNameEnum.BASIC, TariffsFeatureEnum.PUBLIC_PAGE)
            .verifyTariffFeature(TariffsNameEnum.BASIC, TariffsFeatureEnum.UNLIMITED_PLUGINS)
            .verifyTariffFeature(TariffsNameEnum.BASIC, TariffsFeatureEnum.PAYMENT_CONFIRMATION)
            .verifyGivenSlotIsSelected(TariffsNameEnum.BASIC)
    })

    it('should assert Professional slot tariff', () => {
        TariffsPages.TariffsListPage
            .verifyTariffsPrize(TariffsNameEnum.PROFESSIONAL, '189 zł')
            .verifyTariffFeature(TariffsNameEnum.PROFESSIONAL, TariffsFeatureEnum.EMAIL_NOTIFICATION)
            .verifyTariffFeature(TariffsNameEnum.PROFESSIONAL, TariffsFeatureEnum.SMS_NOTIFICATION)
            .verifyTariffFeature(TariffsNameEnum.PROFESSIONAL, TariffsFeatureEnum.JSON_LD)
            .verifyTariffFeature(TariffsNameEnum.PROFESSIONAL, TariffsFeatureEnum.SEO_PACKAGE)
            .verifyTariffFeature(TariffsNameEnum.PROFESSIONAL, TariffsFeatureEnum.ADMIN_PANEL)
            .verifyTariffFeature(TariffsNameEnum.PROFESSIONAL, TariffsFeatureEnum.PUBLIC_PAGE)
            .verifyTariffFeature(TariffsNameEnum.PROFESSIONAL, TariffsFeatureEnum.UNLIMITED_PLUGINS)
            .verifyTariffFeature(TariffsNameEnum.PROFESSIONAL, TariffsFeatureEnum.PAYMENT_CONFIRMATION)
            .verifyTariffFeature(TariffsNameEnum.PROFESSIONAL, TariffsFeatureEnum.AI_ASSISTANT)
            .verifyTariffFeature(TariffsNameEnum.PROFESSIONAL, TariffsFeatureEnum.PUBLIC_REST_API)
            .verifyGivenSlotIsOpenToUpgrade(TariffsNameEnum.PROFESSIONAL)
    })
})