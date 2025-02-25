import { IHistoryEntryDto } from "../interface/IHistoryEntryDto";
import { IMetaDto } from "../interface/IMetaDto";

export class MetaDtoBuilder {
    private meta: IMetaDto;

    constructor() {
        this.meta = {
            object: '',
            history: []
        };
    }

    setObject(object: string): MetaDtoBuilder {
        this.meta.object = object;
        return this;
    }

    setHistory(history: IHistoryEntryDto[]): MetaDtoBuilder {
        this.meta.history = history;
        return this;
    }

    build(): IMetaDto {
        return this.meta;
    }
}
