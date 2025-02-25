import {IStateHistory} from "../interface/IStateHistory";
import {StateEnum} from "../../order/enum/StateEnum";

export class StateHistoryBuilder {
    private stateHistory: IStateHistory;

    constructor() {
        this.stateHistory = {
            state: StateEnum.active,
            setAt: ''
        };
    }

    setState(state: StateEnum): StateHistoryBuilder {
        this.stateHistory.state = state;
        return this;
    }

    setSetAt(setAt: string): StateHistoryBuilder {
        this.stateHistory.setAt = setAt;
        return this;
    }

    build(): IStateHistory {
        return this.stateHistory;
    }
}