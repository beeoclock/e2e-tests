import {IStateHistory} from "../../../state/interface/IStateHistory";

export interface ICustomerDto {
    _version: string;
    _id: string;
    stateHistory: IStateHistory[];
    state: string;
    createdAt: string;
    updatedAt: string;
    object: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    note: string;
    customerType: string;
}