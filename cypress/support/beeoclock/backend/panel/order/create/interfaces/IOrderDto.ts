import { IMetaDto } from "../../../state/interface/IMetaDto";
import { IOrderProductDto } from "./IOrderProductDto";
import {StateEnum} from "../../enum/StateEnum";
import {OrderStatusEnum} from "../../enum/OrderStatusEnum";
import { IStateHistory } from "../../../state/interface/IStateHistory";

export interface IOrderDto {
    _version: string;
    _id: string;
    stateHistory: IStateHistory[];
    state: StateEnum;
    createdAt: string;
    updatedAt: string;
    object: string;
    status: OrderStatusEnum;
    meta: IMetaDto;
    products: IOrderProductDto[];
}