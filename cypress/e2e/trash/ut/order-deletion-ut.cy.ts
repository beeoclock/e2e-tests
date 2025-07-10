import {OrderApi} from "../../../support/beeoclock/backend/panel/order/OrderApi";

describe('order deletion ut', () => {

    it('order deletion ut', () => {
        OrderApi.deleteAllCurrentOrdersWithAssertion()
    })

    it('order deletion ut', () => {
        OrderApi.getOrderWithGivenId('686f4cf1d573692cdaf93989').then(resp => {
            cy.log('order: ', JSON.stringify(resp));
        })
    })
})