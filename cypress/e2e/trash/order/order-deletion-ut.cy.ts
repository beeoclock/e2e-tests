import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";

describe('test of deletion function', (): void => {

    it('deletion function', (): void => {
        OrderApi.getOrderIds()
    })

    it('get given order', (): void => {
        OrderApi.getOrderWithGivenId('689f5f430276d9c93d2b4585').then((resp: any) => {
            cy.log('order', JSON.stringify(resp));
        })
    })
});