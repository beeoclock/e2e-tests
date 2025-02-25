import {OrderStatusEnum} from "../../../../support/beeoclock/backend/panel/order/enum/OrderStatusEnum";
import {DateUtils} from "../../../../support/beeoclock/backend/Utils/DateUtils";
import {MetaDtoBuilder} from "../../../../support/beeoclock/backend/panel/state/builder/MetaDtoBuilder";
import {StateHistoryBuilder} from "../../../../support/beeoclock/backend/panel/state/builder/StateHistoryBuilder";
import {StateEnum} from "support/beeoclock/backend/panel/order/enum/StateEnum";

describe('order creation page', () => {
    it('create order', () => {
        const now = new Date().toISOString();
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        const nextMonthISO = nextMonth.toISOString();

        const metaDto = new MetaDtoBuilder()
            .setObject("OrderMetaDto")
            .setHistory([])
            .build()

        const stateHistory = new StateHistoryBuilder()
            .setState(StateEnum.active)
            .setSetAt(now)
            .build()

        // const order = new OrderDtoBuilder()
        //     .setVersion('1.0')
        //     .setId('123')
        //     .setStateHistory([stateHistory])
        //     .setState(StateEnum.active)
        //     .setCreatedAt(DateUtils.getCurrentDateIso())
        //     .setUpdatedAt((DateUtils.getCurrentDateIso()))
        //     .setObject('order')
        //     .setStatus(OrderStatusEnum.confirmed)
        //     .setMeta(metaDto)
        //     .setProducts([])
        //     .build();

        // OrderCreationApi.createOrderWithBuilder(order, {});
        // console.log(order);
    });
});
