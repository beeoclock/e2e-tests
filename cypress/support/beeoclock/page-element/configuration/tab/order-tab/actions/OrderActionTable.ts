import {OrderActionTableElement} from "./OrderActionTableElement";
import {OrderActionsEnum} from "./enum/OrderActionsEnum";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";
import {StateEnum} from "../../../../../backend/panel/order/enum/StateEnum";
import {OrderInterceptionHelper} from "../../../../../common/Interception/order/OrderInterceptionHelper";

export class OrderActionTable {

    public clickActionButton(orderId: string): OrderActionTable {
        OrderActionTableElement.OrderActionButton.getElement(orderId)
            .click();
        return this;
    }

    public clickSpecificAction(orderId: string, action: string): OrderActionTable {
        const getOrder: string = OrderInterceptionHelper.getOrderById(orderId)
        const deleteAction: string = ApiInterceptionHelper.deleteServices()

        OrderActionTableElement.OrderGivenActionButton.getElement(orderId, action).scrollIntoView()
            .click({force: true})
        if (action == OrderActionsEnum.DELETE) {
            cy.wait('@' + deleteAction).then((interception): void => {
                expect(interception.request.body.state).to.equal(StateEnum.deleted)
            })
        }
        ApiInterceptionHelper.waitForAlias(getOrder)
        return this;
    }

    public verifyOrderWithGivenIdNotExist(orderId: string): OrderActionTable {
        cy.get('#table-row-' + orderId, {includeShadowDom: false}).should('not.exist')
        return this;
    }

    public clickOnSelectStatusElement(): OrderActionTable {
        OrderActionTableElement.StatusSelectorComponent.getComponent()
            .click()
        return this;
    }

    public selectGivenStatusIfNotSelected(status: string): OrderActionTable {
        const checkbox = OrderActionTableElement.StatusSelectorComponent.getGivenStatusCheckbox(status);

        checkbox.invoke('attr', 'aria-checked').then((isChecked): void => {
            if (isChecked !== 'true') {
                checkbox.click({force: true});
            }
        });
        return this;
    }

}