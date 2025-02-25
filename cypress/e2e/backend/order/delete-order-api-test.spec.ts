import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";

describe("delete all order's by api", (): void => {

    it('should delete all order by api', function () {
        cy.log('delete orders with assertion that its status equal deleted')
        // OrderApi.deleteAllCurrentOrdersWithAssertion()
        OrderApi.deleteAllCurrentOrdersWithAssertion()
    });
});