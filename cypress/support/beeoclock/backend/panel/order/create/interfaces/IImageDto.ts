import { IStateHistory } from "../../../state/interface/IStateHistory";
import { IImageMetadataDto } from "./IImageMetadataDto";

export interface IImageDto {
    _version: string;
    _id: string;
    stateHistory: IStateHistory[];
    state: string;
    createdAt: string;
    updatedAt: string;
    object: string;
    url: string;
    mediaType: string;
    metadata: IImageMetadataDto;
}