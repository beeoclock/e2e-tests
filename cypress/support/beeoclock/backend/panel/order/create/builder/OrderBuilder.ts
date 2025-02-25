import {IMetaDto} from "../../../state/interface/IMetaDto";
import {IOrderDto} from "../interfaces/IOrderDto";
import {IOrderProductDto} from "../interfaces/IOrderProductDto";
import {StateEnum} from "../../enum/StateEnum";
import {OrderStatusEnum} from "../../enum/OrderStatusEnum";
import { IStateHistory } from "../../../state/interface/IStateHistory";

export class OrderDtoBuilder {
    private order: IOrderDto;

    constructor() {
        this.order = {
            _version: '1',
            _id: '',
            stateHistory: [],
            state: StateEnum.active,
            createdAt: '',
            updatedAt: '',
            object: '',
            status: OrderStatusEnum.confirmed,
            meta: {} as IMetaDto,
            products: []
        };
    }

    setVersion(version: string): OrderDtoBuilder {
        this.order._version = version;
        return this;
    }

    setId(id: string): OrderDtoBuilder {
        this.order._id = id;
        return this;
    }

    setStateHistory(stateHistory: IStateHistory[]): OrderDtoBuilder {
        this.order.stateHistory = stateHistory;
        return this;
    }

    setState(state: StateEnum): OrderDtoBuilder {
        this.order.state = state;
        return this;
    }

    setCreatedAt(createdAt: string): OrderDtoBuilder {
        this.order.createdAt = createdAt;
        return this;
    }

    setUpdatedAt(updatedAt: string): OrderDtoBuilder {
        this.order.updatedAt = updatedAt;
        return this;
    }

    setObject(object: string): OrderDtoBuilder {
        this.order.object = object;
        return this;
    }

    setStatus(status: OrderStatusEnum): OrderDtoBuilder {
        this.order.status = status;
        return this;
    }

    setMeta(meta: IMetaDto): OrderDtoBuilder {
        this.order.meta = meta;
        return this;
    }

    setProducts(products: IOrderProductDto[]): OrderDtoBuilder {
        this.order.products = products;
        return this;
    }

    build(): IOrderDto {
        return this.order;
    }
}
