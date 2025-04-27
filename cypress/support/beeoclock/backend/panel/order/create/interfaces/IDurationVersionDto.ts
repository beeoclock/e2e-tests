import {IPriceDto} from "./IPriceDto";

export interface IDurationVersionDto {
    object: string;
    breakInSeconds: number;
    durationInSeconds: number;
    prices: IPriceDto[];
}