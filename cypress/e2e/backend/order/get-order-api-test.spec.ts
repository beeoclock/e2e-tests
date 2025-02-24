import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";

describe("get all order's by api", (): void => {

    it('should get all order by api', function () {

        cy.log('get orders with assertion that its status equal deleted')
        // OrderApi.getOrderIds()
        OrderApi.getOrderWithGivenId('67bcd586bb112a9fea59353b').then(response => {
           cy.log("ORDER: " + JSON.stringify(response))
        })
    });
});