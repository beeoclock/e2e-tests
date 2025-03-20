import {SearchInput} from "support/beeoclock/page-element/common/common-element/element/SearchInput";
import {Assertions} from "../../../tab/common/assertions/Assertions";

export class ClientFilterPage {

    public typeSearchValue(value: string): ClientFilterPage {
        const element = SearchInput

        //click clear button if input has value
        element.getElement()
            .then(($input) => {
                if ($input.val()?.toString().trim().length) {
                    SearchInput.getClearButton().click();
                }
            });

        element.getElement()
            .type(value)
            .type('{enter}')
            .then(() => {
                Assertions.assertProperties(SearchInput.getElement(), 'value', value);

                this.clickSearchButton()
            })
        return this
    }

    public clickSearchButton(): ClientFilterPage {
        SearchInput.getSearchButton()
            .should('exist')
            .should('not.be.disabled')
            .click();

        cy.wait(500)//TODO offline first
        return this
    }

    public clickClearButton(): ClientFilterPage {
        SearchInput.getClearButton()
            .should('exist')
            .should('not.be.disabled')
            .click();

        cy.wait(500)//TODO offline first
        return this
    }

}