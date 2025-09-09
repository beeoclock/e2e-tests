import { IQueryParams } from "./IQueryParams";
import { QueryParamsBuilder } from "./QueryParamsBuilder";

export class QueryObjectFactory {

    public static getDefaultQueryStringParams(): IQueryParams {
        return new QueryParamsBuilder().build();
    }
}
