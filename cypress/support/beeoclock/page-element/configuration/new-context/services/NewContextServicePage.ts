import {NewContextServiceElement} from "./element/NewContextServiceElement";
import {Assertions} from "../../tab/common/assertions/Assertions";
import {QueryAssertion} from "../../../../common/assertion/QueryAssertion";
import {NewContextInterceptionHelper} from "../../../../common/Interception/new-context/NewContextInterceptionHelper";
import {
    NewContextInterceptionAssertion
} from "../../../../common/Interception/new-context/NewContextInterceptionAssertion";
import {
    BusinessProfileInterception
} from "../../../../common/Interception/business-profile/BusinessProfileInterception";
import {LeftMenuPage} from "../../left-menu/LeftMenuPage";

export class NewContextServicePage {
    private element: NewContextServiceElement = new NewContextServiceElement()

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

    public clickCreateButton(companyName: string, expect: any): NewContextServicePage {
        const createNewContext: string = NewContextInterceptionHelper.createNewContext()
        const updateBusinessProfile: string = NewContextInterceptionHelper.updateBusinessProfile()
        const getBusinessProfile: string = BusinessProfileInterception.getBusinessProfile()
        cy.contains('button', 'Utwórz').click()

        cy.log('business', JSON.stringify(expect))
        NewContextInterceptionAssertion.createNewContextAlias(createNewContext, companyName)
        NewContextInterceptionAssertion.updateContextAlias(updateBusinessProfile, expect)
        NewContextInterceptionAssertion.waitForGetBusiness(getBusinessProfile, expect)
        LeftMenuPage.assertIsSynchronized(true)
        return this
    }
}