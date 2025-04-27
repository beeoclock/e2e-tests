import {IAssignedServiceDto} from "./IAssignedServiceDto";

interface IAssignmentServiceDto {
    object: string;
    full: boolean;
    include: IAssignedServiceDto[];
}