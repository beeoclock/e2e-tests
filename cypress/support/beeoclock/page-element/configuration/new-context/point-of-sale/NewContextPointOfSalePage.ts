import {PointOfSaleElement} from "./element/PointOfSaleElement";
import {QueryAssertion} from "../../../../common/assertion/QueryAssertion";

export class NewContextPointOfSalePage {
    private element = new PointOfSaleElement()

    public selectCountry(country: string): NewContextPointOfSalePage {
        this.element.getCountryDropdown().click().then((): void => {
            this.element.getGivenOption(country).click()
        })
        return this
    }

    public typeCity(city: string): NewContextPointOfSalePage {
        this.element.getCityInput().type(city)
        return this;
    }

    public typeZipCode(zipCode: string): NewContextPointOfSalePage {
        this.element.getZipCodeInput().type(zipCode)
        return this;
    }

    public typeFirstAddress(address: string): NewContextPointOfSalePage {
        this.element.getFirstAddress().type(address)
        return this;
    }

    public typeSecondAddress(address: string): NewContextPointOfSalePage {
        this.element.getSecondAddress().type(address)
        return this;
    }

    public typeCustomLink(link: string): NewContextPointOfSalePage {
        this.element.getCustomLink().type(link)
        return this;
    }

    public assertState(): NewContextPointOfSalePage {
        cy.get('h1').contains('Gdzie klienci mogą do Ciebie dotrzeć?')
        QueryAssertion.verifyCorrectUrl('/identity/create-business/point-of-sale')
        return this
    }

    public clickNextButton(): NewContextPointOfSalePage {
        cy.contains('button', 'Dalej').click()
        return this;
    }
}