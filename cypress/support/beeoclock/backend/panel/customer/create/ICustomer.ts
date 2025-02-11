import {IStateHistory} from "../../../state-history/IStateHistory";
import { StateEnum } from "../../../state-history/StateEnum";
import {CustomerTypeEnum} from "../enum/CustomerTypeEnum";

export interface ICustomer {
    _version: string;
    _id: string;
    stateHistory: IStateHistory[];
    state: StateEnum;
    createdAt: string;
    updatedAt: string;
    object: "CustomerDto";
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    note?: string;
    customerType: CustomerTypeEnum;
}
