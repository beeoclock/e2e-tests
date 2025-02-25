import { IMetaDto } from "../../../state/interface/IMetaDto";
import { IStateHistory } from "../../../state/interface/IStateHistory";
import { IOrderAppointmentDetailsDto } from "./IOrderAppointmentDetailsDto";
import { IServiceDto } from "./IServiceDto";

export interface IOrderServiceDto {
    _version: string;
    _id: string;
    stateHistory: IStateHistory[];
    state: string;
    createdAt: string;
    updatedAt: string;
    object: string;
    orderId: string;
    serviceSnapshot: IServiceDto;
    orderAppointmentDetails: IOrderAppointmentDetailsDto;
    status: string;
    customerNote: string;
    meta: IMetaDto;
    paymentStatus: string;
}