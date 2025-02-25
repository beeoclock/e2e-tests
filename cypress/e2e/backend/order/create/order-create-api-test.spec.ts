import OrderBuilder from "support/beeoclock/backend/panel/order/create/builder/OrderBuilder";
import { OrderApi } from "../../../../support/beeoclock/backend/panel/order/OrderApi";
import { OrderCreationApi } from "../../../../support/beeoclock/backend/panel/order/create/OrderCreationApi";

describe('order creation page', () => {
    it('create order', () => {
        const now = new Date().toISOString(); // Bieżąca data i czas w formacie ISO
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1); // Dodaj miesiąc
        const nextMonthISO = nextMonth.toISOString();

        const order = new OrderBuilder()
            .setRequestedStartDate(now)
            .setRequestedCompletionDate(nextMonthISO)
            .setServiceId("66d30bac22b08ecfc894927e")
            .setMemberId("6667146c8f690c5f4c3c9596")
            .build();

        OrderCreationApi.createOrderWithBuilder(order, {});
        console.log(order);
    });
});
