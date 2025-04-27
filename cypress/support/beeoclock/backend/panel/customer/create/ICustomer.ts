import {StateEnum} from "../../order/enum/StateEnum";
import {IStateHistory} from "../../state/interface/IStateHistory";
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
