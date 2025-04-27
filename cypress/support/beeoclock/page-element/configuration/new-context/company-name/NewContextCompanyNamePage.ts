import {NewContextCompanyNameElement} from "./element/NewContextCompanyNameElement";
import {QueryAssertion} from "../../../../common/assertion/QueryAssertion";
import {Assertions} from "../../tab/common/assertions/Assertions";

export class NewContextCompanyNamePage {
    private element = new NewContextCompanyNameElement()

    public assertState(): NewContextCompanyNamePage {
        QueryAssertion.verifyCorrectUrl('/identity/create-business/names')
        Assertions.assertProperties(this.element.getTitle(), 'innerText', "Wpisz nazwę firmy")
        return this;
    }

    public typeCompanyName(companyName: string): NewContextCompanyNamePage {
        this.element.getCompanyNameInput().click().then(() => {
            this.element.getCompanyNameInput().type(companyName)
        })
        return this;
    }

    public verifyTypedCompanyName(companyName: string): NewContextCompanyNamePage {
        this.element.getCompanyNameInput().should('have.value', companyName)
        return this;
    }

    public clickNextButton(): NewContextCompanyNamePage {
        cy.contains('button', 'Dalej').click()
        return this;
    }
}