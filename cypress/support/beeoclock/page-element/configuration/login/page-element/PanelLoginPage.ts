import {PanelLoginPageElement} from "../PanelLoginPageElement";

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
}