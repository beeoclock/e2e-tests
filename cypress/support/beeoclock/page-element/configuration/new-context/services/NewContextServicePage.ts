import {NewContextServiceElement} from "./element/NewContextServiceElement";
import {Assertions} from "../../tab/common/assertions/Assertions";
import {QueryAssertion} from "../../../../common/assertion/QueryAssertion";

export class NewContextServicePage {
    private element = new NewContextServiceElement()

    public clickAddServiceButton(): NewContextServicePage {
        cy.get('bee-form-button-with-icon')
            .find('.bi.bi-plus-lg')
            .scrollIntoView().should('be.visible')
        cy.get('bee-form-button-with-icon').contains('Dodaj usługę').click()
        return this
    }
    public typeServiceTitle(value: string): NewContextServicePage {
        this.element.getServiceTitle()
            .type(value)
        return this
    }

    public typeServiceDescription(value: string): NewContextServicePage {
        this.element.getDescriptionTextarea()
            .type(value)
        return this
    }

    public typeServicePrice(price: string): NewContextServicePage {
        this.element.getPriceInput()
            .clear()
            .type(price)
        return this;
    }

    public clickSaveButton(): NewContextServicePage {
        cy.contains('button', 'Zapisz').click()
        return this
    }

    public assertCreatedService(title: string, price: string, duration: string): NewContextServicePage {
        Assertions.assertProperties(this.element.getCreatedServiceTitle(), 'innerText', title)
        Assertions.assertPropertiesByShould(this.element.getCreatedServicePrice(), price)
        Assertions.assertProperties(this.element.getCreatedServiceDuration(), 'innerText', duration)
        return this;
    }

    public assertState(): NewContextServicePage {
        QueryAssertion.verifyCorrectUrl('/identity/create-business/services')
        return this;
    }
}