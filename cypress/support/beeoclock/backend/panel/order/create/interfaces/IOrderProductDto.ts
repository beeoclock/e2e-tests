import { IProductDto } from "./IProductDto";
import { IMetaDto } from "../../../state/interface/IMetaDto";
import { IStateHistory } from "../../../state/interface/IStateHistory";

export interface IOrderProductDto {
    _version: string;
    _id: string;
    stateHistory: IStateHistory[];
    state: string;
    createdAt: string;
    updatedAt: string;
    object: string;
    quantity: number;
    orderServiceId: string;
    productSnapshot: IProductDto;
    meta: IMetaDto;
    paymentStatus: string;
}