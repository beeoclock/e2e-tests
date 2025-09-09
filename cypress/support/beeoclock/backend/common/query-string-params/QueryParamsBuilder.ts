import {IQueryParams} from "./IQueryParams";
import {StateEnum} from "../../enum/StateEnum";

export class QueryParamsBuilder {
    private params: IQueryParams;

    constructor() {
        this.params = {
            orderBy: 'id',
            orderDir: 'asc',
            page: 1,
            pageSize: 20,
        };
    }

    public setOrderBy(orderBy: string): QueryParamsBuilder {
        this.params.orderBy = orderBy;
        return this;
    }

    public setOrderDir(orderDir: string): QueryParamsBuilder {
        this.params.orderDir = orderDir;
        return this;
    }

    public setPage(page: number): QueryParamsBuilder {
        this.params.page = page;
        return this;
    }

    public setPageSize(pageSize: number): QueryParamsBuilder {
        this.params.pageSize = pageSize;
        return this;
    }

    public setState(state: StateEnum): QueryParamsBuilder {
        this.params.state = state;
        return this;
    }

    public build(): IQueryParams {
        return { ...this.params };
    }
}