import { IMetaDto } from "./IMetaDto";

export interface IHistoryEntryDto {
    object: string;
    issuer: IMetaDto;
    reason: string;
    value: string;
    createdAt: string;
    _v: number;
}