import { IStateHistory } from "support/beeoclock/backend/state-history/IStateHistory";
import { IProductDto } from "./IProductDto";
import { IMetaDto } from "../../../state/interface/IMetaDto";

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