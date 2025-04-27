import {IStateHistory} from "../../../state/interface/IStateHistory";
import {IAssignmentsDto} from "./IAssignmentsDto";
import {IImageDto} from "./IImageDto";

export interface IMemberDto {
    _version: string;
    _id: string;
    stateHistory: IStateHistory[];
    state: string;
    createdAt: string;
    updatedAt: string;
    object: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: IImageDto;
    role: string;
    profileStatus: string;
    assignments: IAssignmentsDto;
}