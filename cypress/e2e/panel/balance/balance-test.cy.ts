import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {BalanceListPage} from "../../../support/beeoclock/page-element/configuration/tab/balance/list/BalanceListPage";
import {CommonElementPage} from "../../../support/beeoclock/page-element/common/common-element/CommonElementPage";
import {InputHelper} from "../../../support/beeoclock/page-element/common/input/InputHelper";
import {StripePage} from "../../../support/beeoclock/page-element/configuration/tab/tariffs/form/stripe/StripePage";
import {TariffsFormPages} from "../../../support/beeoclock/page-element/configuration/tab/tariffs/form/TariffsFormPages";

describe('balance test', (): void => {

    beforeEach('login', (): void => {
        cy.loginOnPanel()
        LeftMenuPage.clickOnBalancePage()
        cy.wait(1000)
    })

    it('should check actual presented balance', (): void => {
        BalanceListPage.verifyActualBalance()
    })

    it.skip('should add saldo with assert', (): void => {
        CommonElementPage.clickAddResourceButton()
        InputHelper.typeInputValue('#utility-base-input-input', '100')
        CommonElementPage.clickSaveButton()
        cy.url().should('include', 'https://checkout.stripe.com')

        TariffsFormPages.StripePage
            // .typeCardValue()
    })
})