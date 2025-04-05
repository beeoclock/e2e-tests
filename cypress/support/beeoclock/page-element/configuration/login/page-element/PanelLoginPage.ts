import {PanelLoginPageElement} from "../PanelLoginPageElement";
import {ApiInterceptionHelper} from "../../../../common/Interception/ApiInterceptionHelper";

export class PanelLoginPage {

    public static typeEmail(email: string): PanelLoginPage {
        PanelLoginPageElement.EmailInput.getElement()
            .type(email)
        return this;
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

    public static clickLoginButtonAndStoreToken(): PanelLoginPage {
        const getIdentityProfile = ApiInterceptionHelper.getIdentityProfile()
        PanelLoginPageElement.LoginButton.getElement()
            .click().then(() => {
            cy.wait('@' + getIdentityProfile).then((interception) => {
                const authorizationHeader = interception.request.headers['authorization'];
                const token = (authorizationHeader as string).split(' ')[1];
                cy.wrap(token).as('token');
            })
        });
        return this;
    }

    public static selectGivenBusinessAndStoreToken(business: string): PanelLoginPage {
        PanelLoginPageElement.SelectBusinessOption.getElement(business)
            .click()
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

    public static selectGivenBusiness(business: string): PanelLoginPage {
        PanelLoginPageElement.SelectBusinessOption.getElement(business)
            .click();
        return this;
    }
}