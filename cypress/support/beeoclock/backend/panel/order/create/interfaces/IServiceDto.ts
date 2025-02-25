import { IStateHistory } from "../../../state/interface/IStateHistory";
import { IDurationVersionDto } from "./IDurationVersionDto";
import { ILanguageVersionDto } from "./ILanguageVersionDto";
import { IPrepaymentPolicyDto } from "./IPrepaymentPolicyDto";
import { IPresentationDto } from "./IPresentationDto";
import { IScheduleDto } from "./IScheduleDto";
import { IServiceConfigurationDto } from "./IServiceConfigurationDto";

export interface IServiceDto {
    _version: string;
    _id: string;
    stateHistory: IStateHistory[];
    state: string;
    createdAt: string;
    updatedAt: string;
    object: string;
    configuration: IServiceConfigurationDto;
    presentation: IPresentationDto;
    prepaymentPolicy: IPrepaymentPolicyDto;
    languageVersions: ILanguageVersionDto[];
    durationVersions: IDurationVersionDto[];
    schedules: IScheduleDto[];
    order: number;
}