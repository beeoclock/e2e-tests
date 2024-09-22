import {CustomerInput} from "./page-element/CustomerInput";
import {CommonPropertiesEnum} from "../../../common/enum/CommonPropertiesEnum";
import {ClientDescriptionInput} from "./page-element/ClientDescriptionInput";
import {SaveButton} from "../../../common/common-element/element/SaveButton";
import {ClientsApiInterceptionHelper} from "../../../../common/Interception/clients/ClientsApiInterceptionHelper";
import {ApiInterceptionHelper} from "../../../../common/Interception/ApiInterceptionHelper";

export class ClientFormPage {

    public typeGivenCustomerInput(label: CommonPropertiesEnum, value: string): ClientFormPage {
        CustomerInput.getElement(label).type(value).then(() => {
            this.verifyGivenCustomerInput(label, value)
        })
        return this
    }

    public typeClientDescription(description: string): ClientFormPage {
        ClientDescriptionInput.getElement().type(description).then(() => {
            this.verifyClientDescription(description)
        })
        return this;
    }

    public verifyGivenCustomerInput(label: CommonPropertiesEnum, value: string): ClientFormPage {
        CustomerInput.getElement(label).should('have.value', value)
        return this
    }

    public verifyClientDescription(description: string): ClientFormPage {
        ClientDescriptionInput.getElement().should('have.value', description)
        return this
    }

    public clickSaveButton(): ClientFormPage {
        const createCustomer = ClientsApiInterceptionHelper.createCustomer()
        SaveButton.getElement()
            .click().then(() => {
            ApiInterceptionHelper.waitFor201Alias(createCustomer)
            //TODO add snackbar assertions
            //     cy.get('.toast-message').should('have.value', 'Klient został utworzony.')
                cy.get('.toast-container').find('button').click()
            cy.wait(1000)
        })
        return this;
    }
}