import {OrderCreationApi} from "support/beeoclock/backend/panel/order/create/OrderCreationApi";
import {OrderBuilder} from "../../../../support/beeoclock/backend/panel/order/create/builder/OrderBuilder";

describe('order creation page', () => {
    it('create order', () => {
        const order = new OrderBuilder()
            .setId('67bdd2227688734607aed76a')
            .setBusinessNote('')
            .addService({
                object: 'OrderServiceDto',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                _id: '67bdd2227688734607aed76e',
                state: 'active',
                stateHistory: [],
                serviceSnapshot: {
                    _id: '66d30bac22b08ecfc894927e',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    state: 'active',
                    object: 'ServiceDto',
                },
            })
            .setStatus('confirmed')
            .build();

        console.log(order);


        OrderCreationApi.createOrderWithBuilder(order, {});
        // console.log(order);
    });
});
