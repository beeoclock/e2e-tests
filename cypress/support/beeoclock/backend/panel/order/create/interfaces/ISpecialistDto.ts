import { IMemberDto } from "./IMemberDto";

export interface ISpecialistDto {
    object: string;
    member: IMemberDto;
    wasSelectedAnybody: boolean;
}