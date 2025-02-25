import {StateEnum} from "../../order/enum/StateEnum";

export interface IStateHistory {
    state: StateEnum;
    setAt: string;
}