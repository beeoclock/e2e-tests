import {ElementHelper} from "../../../../../common/assertion/ElementHelper";

export class PointOfSaleElement {

    public getCountryComponent(): any {
        return cy.get('country-select-component')
    }

    public getCountryDropdown(): any {
        return this.getCountryComponent().find('.ng-arrow-wrapper')
    }

    public getGivenOption(option: string): any {
       return cy.get('.ng-option').contains(option)
    }

    public getCityInput(): any {
        return ElementHelper.getElementById('business-profile-form-address-city-input')
    }

    public getZipCodeInput(): any {
        return ElementHelper.getElementById('business-profile-form-address-zipCode-input')
    }

    public getFirstAddress(): any {
        return ElementHelper.getElementById('business-profile-form-address-streetAddressLineOne-input')
    }


    public getSecondAddress(): any {
        return ElementHelper.getElementById('business-profile-form-address-streetAddressLineTwo-input')
    }

    public getCustomLink(): any {
        return ElementHelper.getElementById('business-profile-form-address-customLink-input')
    }
}