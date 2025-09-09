import {StateEnum} from "../../enum/StateEnum";

export interface IQueryParams {
    orderBy: string;
    orderDir: string;
    page: number;
    pageSize: number;
    state?: StateEnum;
}
