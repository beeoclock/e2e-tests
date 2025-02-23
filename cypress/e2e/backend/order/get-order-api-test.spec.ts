import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";

describe("get all order's by api", (): void => {

    it('should get all order by api', function () {

        cy.log('get orders with assertion that its status equal deleted')
        OrderApi.getOrderIds()
    });
});