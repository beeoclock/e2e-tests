import { ICustomerDto } from "./ICustomerDto";

export interface IAttendeeDto {
    object: string;
    customer: ICustomerDto;
    firstTime: boolean;
}