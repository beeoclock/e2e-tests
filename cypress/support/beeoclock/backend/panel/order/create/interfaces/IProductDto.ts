import {IStateHistory} from "../../../state/interface/IStateHistory";
import {ILanguageVersionDto} from "./ILanguageVersionDto";
import {IProductPriceDto} from "./IProductPriceDto";

export interface IProductDto {
    _version: string;
    _id: string;
    stateHistory: IStateHistory[];
    state: string;
    createdAt: string;
    updatedAt: string;
    object: string;
    sku: string;
    languageVersions: ILanguageVersionDto[];
    price: IProductPriceDto;
    tags: string[];
}