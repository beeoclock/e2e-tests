import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";

describe('order deletion ut', (): void => {

    it('order deletion ut', (): void => {
        OrderApi.deleteAllCurrentOrders()
    })

    // it('order deletion ut', (): void => {
    //     OrderApi.getOrderWithGivenId('686f4cf1d573692cdaf93989').then(resp => {
    //         cy.log('order: ', JSON.stringify(resp));
    //     })
    // })
})