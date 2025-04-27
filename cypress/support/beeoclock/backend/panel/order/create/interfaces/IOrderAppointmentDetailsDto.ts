import {IAttachmentDto} from "./IAttachmentDto";
import {IAttendeeDto} from "./IAttendeeDto";
import {ILocationDto} from "./ILocationDto";
import {ISpecialistDto} from "./ISpecialistDto";

export interface IOrderAppointmentDetailsDto {
    object: string;
    start: string;
    end: string;
    type: string;
    languageCodes: string[];
    attachments: IAttachmentDto[];
    specialists: ISpecialistDto[];
    attendees: IAttendeeDto[];
    locations: ILocationDto[];
    timeZone: string;
    createdAt: string;
    updatedAt: string;
}