import {NumericUtils} from "../../../../Utils/NumericUtils";
import {StateEnum} from "../../enum/StateEnum";
import {OrderStatusEnum} from "../../enum/OrderStatusEnum";
import {DateUtils} from "../../../../Utils/DateUtils";

class OrderBuilder {
    private order: any;

    constructor() {
        this.order = {
            businessNote: "API",
            version: "1",
            methodname: "Order.Create",
            args: {
                service_order: {
                    requested_start_date: "",
                    requested_completion_date: "",
                    service_id: "",
                    member_id: "",

                }
            },
            state: StateEnum.active,
            updatedAt: DateUtils.getCurrentDateIso(),
            status: OrderStatusEnum.confirmed,
            _id: NumericUtils.generateObjectId(),
            _version: "1"
        };
    }

    setRequestedStartDate(startDate: string) {
        this.order.args.service_order.requested_start_date = startDate;
        return this;
    }

    setRequestedCompletionDate(completionDate: string) {
        this.order.args.service_order.requested_completion_date = completionDate;
        return this;
    }

    setServiceId(serviceId: string) {
        this.order.args.service_order.service_id = serviceId;
        return this;
    }

    setMemberId(memberId: string) {
        this.order.args.service_order.member_id = memberId;
        return this;
    }

    build() {
        return this.order;
    }
}

export default OrderBuilder;
