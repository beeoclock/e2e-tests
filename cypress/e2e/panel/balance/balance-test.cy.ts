import {LeftMenuPage} from "../../../support/beeoclock/page-element/configuration/left-menu/LeftMenuPage";
import {BalanceListPage} from "../../../support/beeoclock/page-element/configuration/tab/balance/list/BalanceListPage";

describe('balance test', (): void => {

    beforeEach('login', (): void => {
        cy.loginOnPanel()
        LeftMenuPage.clickOnBalancePage()
        cy.wait(1000)
    })

    it('should check balance page', (): void => {
        BalanceListPage.verifyActualBalance()
    })
})