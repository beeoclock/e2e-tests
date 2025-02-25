import { IStateHistory } from "support/beeoclock/backend/state-history/IStateHistory";
import { IMetaDto } from "../../../state/interface/IMetaDto";
import { IOrderProductDto } from "./IOrderProductDto";

export interface IOrderDto {
    _version: string;
    _id: string;
    stateHistory: IStateHistory[];
    state: string;
    createdAt: string;
    updatedAt: string;
    object: string;
    status: string;
    meta: IMetaDto;
    products: IOrderProductDto[];
}