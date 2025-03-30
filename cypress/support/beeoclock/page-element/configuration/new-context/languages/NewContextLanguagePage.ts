import {NewContextLanguageElement} from "./element/NewContextLanguageElement";
import {ListHandler} from "../../../common/list/ListHandler";
import {Assertions} from "../../tab/common/assertions/Assertions";
import {QueryAssertion} from "../../../../common/assertion/QueryAssertion";

export class NewContextLanguagePage {
    private element = new NewContextLanguageElement

    public assertSelectedLanguage(language: string): NewContextLanguagePage {
        ListHandler.verifyNgValueLabel(this.element.getSelectLanguagesSelector(), language)
        return this;
    }

    public selectGivenLanguage(language: string): NewContextLanguagePage {
        ListHandler.clickOnDropdownArrow(this.element.getSelectLanguagesSelector())
        ListHandler.selectGivenOption(language)
        return this;
    }

    public assertMainLanguage(language: string): NewContextLanguagePage {
        Assertions.assertProperties(this.element.getMainLanguageElement().find('ng-select'), 'innerText', language)
        return this;
    }

    public assertMainEmailLanguage(language: string): NewContextLanguagePage {
        Assertions.assertProperties(this.element.getEmailElement(), 'innerText', language)
        return this;
    }

    public selectMainEmailLanguage(language: string): NewContextLanguagePage {
        ListHandler.openDropdownAndSelectGivenOption(this.element.getEmailSelector(), language)
        return this
    }

    public assertTimezone(timezone: string): NewContextLanguagePage {
        cy.get(this.element.getTimezoneSelector()).find('ng-select')
        Assertions.assertProperties(cy.get(this.element.getTimezoneSelector()).find('ng-select'), 'innerText', timezone)
        return this
    }

    public assertCurrency(currency: string): NewContextLanguagePage {
        cy.get(this.element.getCurrencySelector()).find('ng-select')
        Assertions.assertProperties(cy.get(this.element.getCurrencySelector()).find('ng-select'), 'innerText', currency)
        return this
    }

    public assertState(): NewContextLanguagePage {
        QueryAssertion.verifyCorrectUrl('https://crm.dev.beeoclock.com/identity/create-business/languages')
        return this;
    }

    public clickNextButton(): NewContextLanguagePage {
        cy.contains('button', 'Dalej').click();
        return this
    }
}