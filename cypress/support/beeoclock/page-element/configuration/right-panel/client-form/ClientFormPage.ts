import {CustomerInput} from "./page-element/CustomerInput";
import {CommonPropertiesEnum} from "../../../common/enum/CommonPropertiesEnum";

export class ClientFormPage {

    public typeGivenCustomerInput(label: CommonPropertiesEnum, value: string): ClientFormPage {
        CustomerInput.getElement(label).type(value).then(() => {
            CustomerInput.getElement(label).should('have.value', value)
        })
        return this
    }

}