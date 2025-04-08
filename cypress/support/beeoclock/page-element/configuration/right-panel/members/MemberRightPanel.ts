import {MemberRightPanelElement} from "./element/MemberRightPanelElement";

export class MemberRightPanel {
    private element = new MemberRightPanelElement()

    public typeEmail(email: string): MemberRightPanel {
        this.element.getEmailInput().type(email)
        return this;
    }

    public typeFirsName(name: string): MemberRightPanel {
        this.element.getFirstNameInput().type(name)
        return this;
    }

    public typeLastName(name: string): MemberRightPanel {
        this.element.getLastNameInput().type(name)
        return this;
    }

    public clickActiveStatus(): MemberRightPanel {
        this.element.getStatusToggle().click()
        return this;
    }
}