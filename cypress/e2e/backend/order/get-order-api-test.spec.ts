import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";

describe("get all order's by api", (): void => {

    it('should get all order by api', function () {

        cy.log('get orders with assertion that its status equal deleted')
        OrderApi.getOrderWithGivenId('67bdd2227688734607aed76a').then(response => {
           cy.log("ORDER: " + JSON.stringify(response))
        })
    });
});


// 67bcd586bb112a9fea59353b
// stateHistory":[
// {
// "state":"active",
// "setAt":"2025-02-25T05:14:59.376Z"
// },
// {
// "state":"deleted",
// "setAt":"2025-02-25T05:14:59.376Z"
// }
// ],
//
