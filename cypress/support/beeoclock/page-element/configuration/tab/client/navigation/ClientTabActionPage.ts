import {ClientTabActionPageElement} from "./ClientTabActionPageElement";
import {AbsenceActionEnum} from "../../absence/absence-action/enum/AbsenceActionEnum";
import {ClientsApiInterceptionHelper} from "../../../../../common/Interception/clients/ClientsApiInterceptionHelper";
import {ApiInterceptionHelper} from "../../../../../common/Interception/ApiInterceptionHelper";

export class ClientTabActionPage {

    public clickActionButton(keyValue: string): ClientTabActionPage {
        ClientTabActionPageElement.ActionButtonElement.getElement(keyValue)
            .click()
        cy.wait(500)
        return this
    }

    public clickGivenActionButton(action: string): ClientTabActionPage {
        ClientTabActionPageElement.GivenActionButton.getElement(action)
            .click()
        return this;
    }

    public clickDeactivateClient(): ClientTabActionPage {
        // const update = CustomerApiInterceptionHelper.updateCustomer()
        ClientTabActionPageElement.GivenActionButton.getElement(AbsenceActionEnum.DEACTIVATE)
            .click()
        // ApiInterceptionHelper.waitForAlias(update)
        cy.get('.toast-container').find('button').click()
        return this
    }

    public clickDeleteClient(): ClientTabActionPage {
        const deletion = ClientsApiInterceptionHelper.deleteCustomer()
        cy.on('window:confirm', (text): boolean => {
            expect(text).to.contain('Czy na pewno chcesz usunąć klienta?');
            return true;
        });

        ClientTabActionPageElement.GivenActionButton.getElement(AbsenceActionEnum.DELETE)
            .click()
            .then((): void => {
                ApiInterceptionHelper.waitForAlias(deletion)

                //TEMP! BUG! - after deletion, the toast should not be visible
                cy.get('.toast-container').find('button')
                    .click()
            })
        return this
    }
}