import {ClientTabActionPageElement} from "./ClientTabActionPageElement";
import {AbsenceActionEnum} from "../../absence/absence-action/enum/AbsenceActionEnum";
import {ClientsApiInterceptionHelper} from "../../../../../common/Interception/clients/ClientsApiInterceptionHelper";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";

export class ClientTabActionPage {

    public clickActionButton(keyValue: string): ClientTabActionPage {
        ClientTabActionPageElement.ActionButtonElement.getElement(keyValue)
            .click()
        return this
    }

    public clickGivenActionButton(action: string): ClientTabActionPage {
        ClientTabActionPageElement.GivenActionButton.getElement(action)
            .click()
        return this;
    }

    public clickDeactivateClient(): ClientTabActionPage {
        const deactivate = ClientsApiInterceptionHelper.deactivateCustomer()
        ClientTabActionPageElement.GivenActionButton.getElement(AbsenceActionEnum.DEACTIVATE)
            .click()
        ApiInterceptionHelper.waitForAlias(deactivate)
        cy.wait(1000)
        return this
    }

    public clickDeleteClient(): ClientTabActionPage {
        const deletion = ClientsApiInterceptionHelper.deleteCustomer()
        ClientTabActionPageElement.GivenActionButton.getElement(AbsenceActionEnum.DELETE)
            .click().then(() => {
            cy.contains('button', 'Potwierdź')
                .click()
        }).then(() => {
            ApiInterceptionHelper.waitForAlias(deletion)
            cy.wait(1000)
        })
        return this
    }


}