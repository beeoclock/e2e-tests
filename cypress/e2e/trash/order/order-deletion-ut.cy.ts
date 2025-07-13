import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";

describe('test of deletion function', (): void => {

    it('deletion function', (): void => {
        OrderApi.deleteAllCurrentOrders()
    })
});