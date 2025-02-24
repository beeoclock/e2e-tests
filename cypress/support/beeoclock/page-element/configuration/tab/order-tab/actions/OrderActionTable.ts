import {OrderActionTableElement} from "./OrderActionTableElement";
import {OrderActionsEnum} from "./enum/OrderActionsEnum";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";

export class OrderActionTable {

    public clickActionButton(noteNumber: string): OrderActionTable {
        OrderActionTableElement.OrderActionButton.getElement(noteNumber)
            .click();
        return this;
    }

    public clickSpecificAction(action: string): OrderActionTable {
        cy.wait(200)
        const getOrder = ApiInterceptionHelper.getOrder()
        const deleteAction = ApiInterceptionHelper.deleteServices()
        OrderActionTableElement.OrderGivenActionButton.getElement(action).scrollIntoView()
            .click({force: true})
        if (action == OrderActionsEnum.DELETE) {
            cy.wait('@' + deleteAction, {timeout: 20000})
        }
        ApiInterceptionHelper.waitForAlias(getOrder)
        return this;
    }

    public verifyOrderWithGivenIdNotExist(orderId: string): OrderActionTable {
        cy.get('#table-row-' + orderId).should('not.exist')
        return this;
    }

    public clickOnSelectStatusElement(): OrderActionTable {
        OrderActionTableElement.StatusSelectorComponent.getComponent()
            .click()
        cy.wait(2000)
        return this;
    }

    public selectGivenStatusIfNotSelected(status: string): OrderActionTable {
        const checkbox = OrderActionTableElement.StatusSelectorComponent.getGivenStatusCheckbox(status);

        checkbox.invoke('attr', 'aria-checked').then((isChecked) => {
            if (isChecked !== 'true') {
                checkbox.click({force: true});
            }
        });
        return this;
    }

}