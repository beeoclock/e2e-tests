import { IMetaDto } from "../../../state/interface/IMetaDto";
import { IOrderProductDto } from "./IOrderProductDto";
import {StateEnum} from "../../enum/StateEnum";
import {OrderStatusEnum} from "../../enum/OrderStatusEnum";
import { IStateHistory } from "../../../state/interface/IStateHistory";
import { IOrderServiceDto } from "./IOrderServiceDto";
import { IOrderNotificationSettingsDto } from "./IOrderNotificationSettingsDto";

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
    services: IOrderServiceDto[];
    paymentStatus: string;
    businessNote: string;
    notificationSettings: IOrderNotificationSettingsDto;
}