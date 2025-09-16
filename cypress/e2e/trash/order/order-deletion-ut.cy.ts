import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";

describe('test of deletion function', (): void => {

    it.only('deletion function', (): void => {
        OrderApi.deleteAllCurrentOrders()
    })

    it('get given order', (): void => {
        OrderApi.getOrderWithGivenId('68c9c00ae32d92a3bc7c0e5e').then((resp: any) => {
            cy.log('order', JSON.stringify(resp));
        })
    })
});