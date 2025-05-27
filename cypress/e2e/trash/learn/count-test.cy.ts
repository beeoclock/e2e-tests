import {BalanceApi} from "../../../support/beeoclock/backend/panel/balance/BalanceApi";

describe('order time slot test', () => {
    let balanceBefore: number;
    let balanceAfter: number;

    it('count test', () => {
        BalanceApi.getActualBalance().then(actualBalance => {
            balanceBefore = actualBalance
            cy.log('actualBalance: ' + actualBalance)
        }).then(() => {
            cy.log('Balance before: ' + balanceBefore)
        })
    })

    it('add 10 to balance', () => {
        balanceAfter = balanceBefore + 10;
        cy.log(balanceAfter.toString())
    })
})