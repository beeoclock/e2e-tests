import {EmailInput} from "./page-element/EmailInput";
import {LoginButton} from "./page-element/LoginButton";
import {PasswordInput} from "./page-element/PasswordInput";

export class PanelLoginPageElement {

    public static EmailInput: EmailInput = new EmailInput()
    public static LoginButton: LoginButton = new LoginButton()
    public static PasswordInput: PasswordInput = new PasswordInput()
}