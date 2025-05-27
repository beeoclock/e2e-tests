import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {BalanceListPage} from "../../../support/beeoclock/page-element/configuration/tab/balance/list/BalanceListPage";
import {CommonElementPage} from "../../../support/beeoclock/page-element/common/common-element/CommonElementPage";
import {InputHelper} from "../../../support/beeoclock/page-element/common/input/InputHelper";
import {TariffsFormPages} from "../../../support/beeoclock/page-element/configuration/tab/tariffs/form/TariffsFormPages";
import {BalanceApi} from "../../../support/beeoclock/backend/panel/balance/BalanceApi";

describe('balance test', (): void => {
    let balanceBefore: number
    let balanceAfter: number

    beforeEach('login', (): void => {
        cy.loginOnPanel()
        LeftMenuPage.handleSynchronization()

        LeftMenuPage.clickOnBalancePage()
        BalanceApi.getActualBalance().then(actualBalance => {
           balanceBefore = actualBalance
        })
    })

    it.only('should check actual presented balance', (): void => {
        BalanceListPage.verifyActualBalance()
        balanceAfter = balanceBefore + 10
    })

    it('should add balance with assert', (): void => {
        CommonElementPage.clickAddResourceButton()
        InputHelper.typeInputValue('#utility-base-input-input', '10')
        CommonElementPage.clickSaveButton()

        cy.log('assert redirect on stripe page')
        cy.url().should('include', 'https://checkout.stripe.com')

        TariffsFormPages.StripePage
            .typeCardValue('4242 4242 4242 4242')
            .typeCardExpiration('1040')
            .typeCardCVV("466")
            .typeCardBillingName("Tomasz wlazło")
            .assertAmount("10,00 zł")
            .clickSubmitButton()

        cy.log('assert redirect on balance page')
        cy.url({ timeout: 15000 }).should('include', '/balance/overview')

        cy.log('assert is synchronized')
        LeftMenuPage.handleSynchronization()
        cy.log('balance after: ' + balanceAfter)
        cy.reload()
        cy.wait(1000)
        BalanceListPage.verifyBalance(balanceAfter)
    })

    before('setup', (): void => {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    })
})