import {RightPanelServicesPageElement} from "../RightPanelServicesPageElement";

export class CustomerPage {

    public typeCustomerName(name: string): CustomerPage {
        RightPanelServicesPageElement.NameInput.getElement()
            .type(name)
        return this;
    }

    public typeCustomerLastName(lastName: string): CustomerPage {
        RightPanelServicesPageElement.LastNameInput.getElement()
            .type(lastName)
        return this;
    }

    public typeCustomerEmail(email: string): CustomerPage {
        RightPanelServicesPageElement.EmailInput.getElement()
            .type(email)
        return this;
    }

    public typeCustomerPhone(phone: string): CustomerPage {
        RightPanelServicesPageElement.PhoneInput.getElement()
            .type(phone)
        return this;
    }

    public clickConfirmButton(): CustomerPage {
        RightPanelServicesPageElement.ConfirmButton.getElement()
            .click()
        return this;
    }
}