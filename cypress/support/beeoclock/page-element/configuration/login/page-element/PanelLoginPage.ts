import {PanelLoginPageElement} from "../PanelLoginPageElement";
import {Assertions} from "../../tab/common/assertions/Assertions";
import {LoginOuterHtmlStorage} from "../html/LoginOuterHtmlStorage";

export class PanelLoginPage {

    public static typeEmail(email: string): PanelLoginPage {
        PanelLoginPageElement.EmailInput.getElement()
            .type(email)
        return this;
    }

    public static assertEmail(email: string): PanelLoginPage {
        Assertions.assertTrimmedProperties(PanelLoginPageElement.EmailInput.getElement(), 'value', email)
        return this
    }

    public static typePassword(password: string): PanelLoginPage {
        PanelLoginPageElement.PasswordInput.getElement()
            .type(password)
        return this;
    }

    public static clickLoginButton(): PanelLoginPage {
        PanelLoginPageElement.LoginButton.getElement()
            .click()
        return this;
    }

    public static assertOuterHtml(): PanelLoginPage {
        const selector = cy.get('app-sign-in-identity-page')
        cy.assertOuterHtmlProperties(selector, LoginOuterHtmlStorage.getLoginComponentOuterHtml())
        return this
    }

    public static selectGivenBusiness(business: string): PanelLoginPage {
        PanelLoginPageElement.SelectBusinessOption.getElement(business)
            .click().then((): void => {
            Assertions.assertNoErrors()
        })
        return this;
    }

    public static assertGivenBusiness(business: string): PanelLoginPage {
        PanelLoginPageElement.SelectBusinessOption.getElement(business)
        return this;
    }

    public static assertGivenBusinessLength(length: number): PanelLoginPage {
        PanelLoginPageElement.SelectBusinessOption.getElementLength()
            .should('eq', length)
        return this;
    }

    public static assertPasswordInput(): PanelLoginPage {
        PanelLoginPageElement.PasswordInput.getElement().should('have.attr', 'type', 'password')
        PanelLoginPageElement.PasswordInput.getElement().find('button').click();
        PanelLoginPageElement.PasswordInput.getElement().should('have.attr', 'type', 'text')
        PanelLoginPageElement.PasswordInput.getElement().find('button').click();
        PanelLoginPageElement.PasswordInput.getElement().should('have.attr', 'type', 'password')
        return this
    }
}