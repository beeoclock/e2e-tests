import {BalanceApi} from "../../../support/beeoclock/backend/panel/balance/BalanceApi";

describe('order time slot test', (): void => {
    let balanceBefore: number;
    let balanceAfter: number;

    it('count test', (): void => {
        BalanceApi.getActualBalance().then(actualBalance => {
            balanceBefore = actualBalance
            cy.log('actualBalance: ' + actualBalance)
        }).then((): void => {
            cy.log('Balance before: ' + balanceBefore)
        })
    })

    it('add 10 to balance', (): void => {
        balanceAfter = balanceBefore + 10;
        cy.log(balanceAfter.toString())
    })
})