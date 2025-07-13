import {BalanceApi} from "support/beeoclock/backend/panel/balance/BalanceApi";

describe('Balance queries API test', (): void => {
    it('get balance paged', (): void => {
        BalanceApi.getBalancePaged().then((body: any): void => {

            expect(body).to.have.property('items').that.is.an('array').with.length.greaterThan(0);
            expect(body).to.have.property('totalSize').that.is.a('number');

            body.items.forEach((item: any): void => {
                expect(item).to.have.all.keys(
                    'currency',
                    'amountBeforeAction',
                    'amountAfterAction',
                    'action',
                    '_id',
                    'createdAt',
                    'updatedAt',
                    'state',
                    'stateHistory'
                );

                expect(item.currency).to.equal('PLN');
                expect(item.amountBeforeAction).to.be.a('number');
                expect(item.amountAfterAction).to.be.a('number');
                expect(item._id).to.be.a('string');
                expect(item.createdAt).to.be.a('string');
                expect(item.updatedAt).to.be.a('string');
                expect(item.state).to.equal('active');

                // action
                expect(item.action).to.include.all.keys(
                    'amount',
                    'currency',
                    'type',
                    'systemComment',
                    'anchorType',
                    'anchorId'
                );
                expect(item.action.amount).to.be.a('number');
                expect(item.action.currency).to.equal('PLN');
                expect(item.action.type).to.equal('income');
                expect(item.action.systemComment).to.equal('Top-up via Stripe');
                expect(item.action.anchorType).to.equal('stripe');
                expect(item.action.anchorId).to.be.a('string');

                // stateHistory
                expect(item.stateHistory).to.be.an('array').with.length.greaterThan(0);
                item.stateHistory.forEach((state: any): void => {
                    expect(state).to.have.property('state', 'active');
                    expect(state).to.have.property('setAt').that.is.a('string');
                });
            });
        });
    });

    it('getLastBalance', (): void => {
        BalanceApi.getActualBalance().then((balance: number): void => {
            cy.log('Balance: ' + balance);
            expect(balance).to.be.a('number');
        });
    })
});
