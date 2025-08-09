import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";

describe('order deletion ut', (): void => {

    it('order deletion ut', (): void => {
        OrderApi.getOrderIds()
        // OrderApi.deleteAllCurrentOrdersWithAssertion()
    })

    // it('order deletion ut', (): void => {
    //     OrderApi.getOrderWithGivenId('6897719ddf91020487dc7528').then(resp => {
    //         cy.log('order: ', JSON.stringify(resp));
    //     })
    // })
})