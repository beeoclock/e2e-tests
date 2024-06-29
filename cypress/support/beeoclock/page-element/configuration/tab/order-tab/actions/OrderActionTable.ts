import {OrderActionTableElement} from "./OrderActionTableElement";
import {OrderActionsEnum} from "./enum/OrderActionsEnum";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";

export class OrderActionTable {

    public clickActionButton(): OrderActionTable {
        OrderActionTableElement.OrderActionButton.getElement()
            .click();
        return this;
    }

    public clickSpecificAction(action: string): OrderActionTable {
        const deleteAction = ApiInterceptionHelper.deleteServices()
        OrderActionTableElement.OrderGivenActionButton.getElement(action)
            .click()
        if (action == OrderActionsEnum.DELETE) {
            ApiInterceptionHelper.waitForAlias(deleteAction)
        }
        return this;
    }
}